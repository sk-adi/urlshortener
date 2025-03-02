import shortUrl from "../models/urlCode.model.js";
import { nanoid } from "nanoid";

const shortTheUrl = async (req, res) => {
  const { originalUrl } = req.body;
  const getUrl = originalUrl;
  const id = nanoid(5);
  try {
    const saveCode = new shortUrl({ urlCode: id, originalUrl: getUrl });
    await saveCode.save();
    res.json({ theCode: id });
  } catch (error) {
    return error;
  }
};

export { shortTheUrl };

//redirect the user

const urlRedirect = async (req, res) => {
  try {
    const urlCode = req.params.id;
    const url = await shortUrl.findOne({ urlCode });
   // res.json({ redirectUrl: `${url.originalUrl}` });
   res.redirect(url.originalUrl)
  } catch (error) {
    res.json({ message: `Link not working ! Error: ${error}` });
  }
};

export { urlRedirect };