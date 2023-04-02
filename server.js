const express = require(`express`);
const app = express();
const bodyParser = require(`body-parser`);
const _ = require(`lodash`);
app.use(bodyParser.urlencoded({ extended: true }));
app.set(`view engine`, `ejs`);
app.use(express.static(`public`));

app.listen(3000, function (req, res) {
  console.log(`server running on port 3000`);
});

app.get(`/`, function (req, res) {
  res.render(`home`);
});
