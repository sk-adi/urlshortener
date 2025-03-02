import shortUrl from "../models/urlCode.model.js";

const urlRedirect = async (req, res) => {
  try {
    const urlCode = req.params.id;
    const url = await shortUrl.findOne({ urlCode });
    res.json({ redirectUrl: `${url.originalUrl}` });
  } catch (error) {
    res.json({ message: `Link not working ! Error: ${error}` });
    console.log(`urlRedirect Error: ${error}`)
  }
};



export { urlRedirect }