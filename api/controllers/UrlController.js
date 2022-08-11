const Url = require('../models/Url');
const shortid = require('shortid');

const webhost = process.env.PORT ? `http://localhost:${process.env.PORT}` : 'http://localhost:3000';

function shorten(req, res) {
  if (req.body.url) {
    const longUrl = req.body.url;
    const shortId = shortid.generate();
    // Check if url already exists in the database
    Url.findOne({ where: { longUrl } }).then(async (url) => {
      if (!url) {
        // Since it doesn't exist, let's go ahead and create it
        url = await Url.create({ longUrl, shortId });
      }
      res.status(201).json({ shortUrl: `${webhost}/${shortId}` });
    });
  }
}

function decode(req, res) {
  const shortId = req.params.shortId;
  Url.findOne({ where: { shortId } }).then((url) => {
    if (url) {
      res.redirect(url.longUrl);
    } else {
      res.redirect(webhost);
    }
  });
}

module.exports = {
  shorten, decode,
};
