const express = require('express');
const FeedRoutes = require('./routes/feed');

const PORT = process.env.PORT ?? '1234';
const app = express();
app.use(express.json());

// Register the route
app.use('/feed', FeedRoutes);

app.use('/', (req, res, next) => {
  console.log(req.body);
  res.send({ message: 'hello World' });
  //   next();
});

app.listen(PORT, () => {
  console.log(`Listening on webServer: http://localhost:${PORT}`);
});
