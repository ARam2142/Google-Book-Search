const express = require("express");
const routes = require("./routes");
const mongoose = require("mongoose");
const app = express();
const PORT = process.env.PORT || 3001;
//const axios = require('axios');

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

//Add routes, both API and view
app.use(routes);

// app.get("/googlebooks", function(req, res) {
//   xios.get("https://www.googleapis.com/books/v1/volumes", { params: { q: 'knitting' } })
//   .then(response => {
//     res.json(response.data)
//   })
//   .catch(function (err) {
//     console.log(err)
//   });

// });

//connect to Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/googlebooks", {
  useUnifiedTopology: true,
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false
});

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
