const bodyParser = require("body-parser");
const ejs = require("ejs");
const express = require("express");
const mongoose = require("mongoose");

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

mongoose.connect("mongodb://localhost:27017/wikiDB");

const articleSchema = {
  title: String,
  content: String
}

const Article = mongoose.model("Article", articleSchema);

app.route("/articles")
  .get(function(req, res){
    Article.find({}, function(err, foundArticles){
      if (!err) {
        res.send(foundArticles);
      } else {
        res.send(err);
      }
    });
  })
  .post(function(req, res){
    const newArticle = new Article({
      title: req.body.title,
      content: req.body.content
    });
    newArticle.save(function(err){
      if (err) {
        res.send(err);
      } else {
        res.send("Successfully added a new article.");
      }
    });
  })
  .delete(function(req, res){
    Article.deleteMany(function(err){
      if (!err) {
        res.send("Successfully deleted all articles");
      } else {
        res.send(err);
      }
    });
  });

app.route("/articles/:articleName")
.get(function(req, res){
  const articleName = req.params.articleName;
  Article.findOne({title: articleName}, function(err, result){
    if (!err) {
      res.send(result);
    } else {
      res.send(err);
    }
  });
})
.put(function(req, res){
  const articleName = req.params.articleName;
  Article.replaceOne(
    {title: articleName},
    {title: req.body.title, content: req.body.content},
    function(err){
      if(!err){
        res.send("Successfully raplaced article");
      } else{
        res.send(err);
      }
  });
})
.patch(function(req, res){
  const articleName = req.params.articleName;
  Article.updateOne(
    {title: articleName},
    {title: req.body.title, content: req.body.content},
    function(err){
      if(!err){
        res.send("Successfully updated article");
      } else{
        res.send(err);
      }
  });
})
.delete(function(req, res){
  const articleName = req.params.articleName;
  Article.deleteOne(
    {title: articleName},
    function(err){
      if(!err){
        res.send("Successfully deleted article");
      } else{
        res.send(err);
      }
  });
});

app.listen(3000, function(){
  console.log("Server started on port 3000");
});
