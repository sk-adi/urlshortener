import shortUrl from "../models/urlCode.model.js";
import { nanoid } from "nanoid";

const shortTheUrl = async (req, res) => {
  try {
    const { originalUrl } = req.body;
    const getUrl = originalUrl;
    const urlExist = await shortUrl.findOne({ originalUrl: originalUrl });
    if (urlExist) {
      res.cookie("existingCode",urlExist.urlCode,{
        httpOnly:true,
        maxAge:60*60*1000,
        secure:true,
        sameSite:"Lax"
  
      })
      return res.json({ theCode: urlExist.urlCode });

    }
    const id = nanoid(5);
    const saveCode = new shortUrl({ urlCode: id, originalUrl: getUrl });
    await saveCode.save();
    res.cookie("shortCode",id,{
      httpOnly:true,
      maxAge:60*60*1000,
      //secure:true,
      sameSite:"Lax"

    })
    res.json({ theCode: id });
  } catch (error) {
    return res.status(500).json({message:`Internal Server Error`});
  }
};

export { shortTheUrl };

//redirect the user

const urlRedirect = async (req, res) => {
  try {
    const urlCode = req.params.id;
    const url = await shortUrl.findOne({ urlCode });
    if(!url){
      return res.status(404).json({message:`Link not found`})
    }
    res.redirect(url.originalUrl);
  } catch (error) {
    res.status(500).json({ message: `Link not working ! Error: ${error}` });
  }
};

export { urlRedirect };
