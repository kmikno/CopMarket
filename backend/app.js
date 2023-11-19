const express = require('express');
const FeedRoute = require('./routes/feed');
const VendorRoute = require('./routes/vendor');

const PORT = process.env.PORT ?? '1234';
const app = express();
app.disable('x-powered-by');

app.use(express.json());

// Register the route
app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

// app.use(ScrapRoute); To Scrap products based on the queryParams send.
app.use('/vendor', VendorRoute);

app.use('/feed', FeedRoute);

app.use('/', (req, res, next) => {
  // console.log({ path: req.params, url: req.url, query: req.query });
  if (req.url?.split('/')?.pop()) next();
  res.send({ message: 'hello World' });
});

app.use((req, res) => {
  res.status(404).json({ message: 'Not valid path' });
});

app.listen(PORT, () => {
  console.log(`Listening on webServer: http://localhost:${PORT}`);
});
