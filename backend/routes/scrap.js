const express = require('express');

const router = express.Router();

// NOTE: This feature needs a separate server to handle the task, like Redis or AWS to separate services.
router.post('/scrap', async (req, res, next) => {
  const Scrap = await import('../services/scrapStore.mjs');
  req.setTimeout(600000, await Scrap.ScrapStore());

  console.log(`http://localhost:1234${req.url}`);

  res.setHeader('Content-Type', 'application/json');

  // Handle termination of the child process (optional)
  // child.on('exit', (code) => {
  //   console.log(`Child process exited with code ${code}`);
  //   // res.status(200);
  //   // res.redirect('/');
  // });
  res.json({ message: 'Products Extracted!' });
  res.redirect('/');
});

module.exports = router;
