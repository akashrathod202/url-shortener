const { nanoid } = require("nanoid");
const URL = require("../models/urls");

async function handleshorturlgenrater(req, res) {
  const body = req.body;
  if (!body.url) return res.status(400).json({ error: "url is required" });

  const shortId = nanoid(8);
  console.log(req.user);
  await URL.create({
    shortId,
    redirectURL: body.url,
    visitHistory: [],
    createdby:req.user._id,
  });

  return res.render("home",{ id: shortId} );
}

async function handlegetmethod(req, res) {
  const { shortId } = req.params;

  const entry = await URL.findOneAndUpdate(
    { shortId },
    { $push: { visitHistory: { timestamp: Date.now() } } },
    { new: true }
  );

  if (!entry) return res.status(404).send("Short URL not found");

  return res.redirect(entry.redirectURL);
} // ✅ IMPORTANT: close function

module.exports = { handleshorturlgenrater, handlegetmethod }; // ✅ outside
