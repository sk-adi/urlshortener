import User from "../models/user.model.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

const saltRound = parseInt(process.env.SALT_ROUND);

//New user registration

const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.json({ message: `Email id already exist ! Please login` });
    }

    const hashedPassword = await bcrypt.hash(password, saltRound);
    console.log(`hashedPassword ${hashedPassword}`);

    const newUser = new User({ name, email, password: hashedPassword });

    await newUser.save();
    console.log(`User Registered`);

    res.json({
      message: `Registered Successfully Welcome ${name}! Please Login`,
    });
  } catch (error) {
    res.json({ message: `Registration failed ! Error: ${error}` });
    console.log(`Registration failed ${error}`);
  }
};

export { registerUser };

//user login verification

const secretKey = process.env.SECRET_KEY;

const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    const isUserExist = await User.findOne({ email });

    if (!isUserExist) {
      return res.json({
        message: `Email id not exist !Please check your email id`,
      });
    }

    const validatePassword = await bcrypt.compare(
      password,
      isUserExist.password
    );

    if (!validatePassword) {
      return res.json({
        message: `Email or Password not correct ! Please verify`,
      });
    }

    const token = jwt.sign(
      { name: isUserExist.name, email: isUserExist.email },
      secretKey,
      { expiresIn: "1h" }
    );

    res.cookie("token", token, {
      httpOnly: true,
      maxAge: 60 * 60 * 1000,
      secure:true,
      sameSite: "None",
    });

    res.json({ message: `Login Successful`, redirectUrl: "/dashboard" });
  } catch (error) {
    res.status(500).json({ message: `Login failed ! Error :${error}` });
    console.log(`Login error Error: ${error}`);
  }
};

export { loginUser };

//logOut user

const logOut = async (req, res) => {
  try {
    res.clearCookie("token");
    res.json({ message: "Logout Successfull" });
  } catch (error) {
    res.json({ message: `LogOut failed ! Error: ${error}` });
  }
};

export { logOut };

{
  /*token authentication*/
}

const verifyToken = async (req, res) => {
  try {
    const { token } = req.headers.authorization?.split(" "[1]);
  if (!token) {
    return res.status(500).json({success:false, message: "Unauthorized" });
  }

  jwt.verify(token, secretKey, (err, user) => {
    if (err) return res.status(403).json({succes:false, message: "Invalid Token" });
    res.status(200).json({succes:true , message: "Authorised" });
  });
    
  } catch (error) {
    res.status(500).json({succes:false,message:"Internal server error"})
    
  }
};


export { verifyToken }