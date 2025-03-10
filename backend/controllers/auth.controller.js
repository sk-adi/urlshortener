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
      maxAge: 60 * 60 * 1000, // 1 hour
      secure: true, // Required for cross-site cookies
      sameSite: "None", // Allows cross-origin requests
      path: "/",
    });
    
    res.json({ message: `Login Successful`, redirectUrl: "/dashboard"  ,token:token});
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
    const authHeader=req.headers.authorization
    const token = authHeader && authHeader.split(" ")[1]
  if (!token) {
    return res.status(401).json({success:false, message: "Unauthorized" });
  }

   const user=jwt.verify(token,secretKey)
   req.user=user
   return res.status(200).json({success:true,message:"Authorized"})
    
  } catch (error) {
    res.status(500).json({success:false,message:"Internal server error",error:error.message})
    
  }
};


export { verifyToken }