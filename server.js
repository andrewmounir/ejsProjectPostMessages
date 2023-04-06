const express = require(`express`);
const app = express();
const bodyParser = require(`body-parser`);
const _ = require(`lodash`);
app.use(bodyParser.urlencoded({ extended: true }));
app.set(`view engine`, `ejs`);
app.use(express.static(`public`));
const messagesarray = [];
app.listen(3000, function (req, res) {
  console.log(`server running on port 3000`);
});

app.get(`/`, function (req, res) {
  res.render(`home`, { arr: messagesarray });
});
app.get(`/contactus`, function (req, res) {
  res.render(`contactus`);
});
app.get(`/about`, function (req, res) {
  res.render(`about`);
});
app.get(`/post`, function (req, res) {
  res.render(`post`);
});

// post route for post web page
app.post(`/poster`, function (req, res) {
  const messages = {
    title: req.body.title,
    postMessage: req.body.postMessage
  };
  console.log(req.body.title);
  console.log(req.body.postMessage);

  messagesarray.push(messages);

  res.redirect(`/`);
});

app.get(`/:a`, function (req, res) {
  let designatedRoute = _.lowerCase(req.params.a);

  for (var i = 0; i < messagesarray.length; i++) {
    let storedTitle = _.lowerCase(messagesarray[i].title);
    if (storedTitle === designatedRoute)
      res.render(`postmessage`, {
        title: messagesarray[i].title,
        postMessage: messagesarray[i].postMessage
      });
  }
});
