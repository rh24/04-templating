'use strict';

let articles = [];

function Article (rawDataObj) {
  this.author = rawDataObj.author;
  this.authorUrl = rawDataObj.authorUrl;
  this.title = rawDataObj.title;
  this.category = rawDataObj.category;
  this.body = rawDataObj.body;
  this.publishedOn = rawDataObj.publishedOn;
}

Article.prototype.toHtml = function() {
  // DONE** TODO: Use Handlebars to render your articles. Get your template from the DOM and "compile" your template with Handlebars.
  const source = document.getElementById('article-handlebars-template').innerHTML;
  const template = Handlebars.compile(source);
  const context = { articleList: articles }; // Article object
  const html = template(context); // generate HTML string

  // REVIEW: If your template will use properties that aren't on the object yet, add them.
  // Since your template can't hold any JS logic, we need to execute the logic here.
  // The result is added to the object as a new property, which can then be referenced by key in the template.
  // For example, you might want to display how old a post is, or say "(draft)" if it has no publication date:
  this.daysAgo = parseInt((new Date() - new Date(this.publishedOn))/60/60/24/1000);


  this.publishStatus = this.publishedOn ? `published ${this.daysAgo} days ago` : '(draft)';

  // REVIEW: The ternary operator above accomplishes this same logic.
  // if(this.publishedOn) {
  //   this.publishStatus = `published ${this.daysAgo} days ago`;
  // } else {
  //   this.publishStatus = '(draft)';
  // }

  // DONE** TODO: Use the method that Handlebars gave you to return your filled-in html template for THIS article.
  return html;
};

// Helper to pass in array of articles to handlebars template

// DONE** COMMENT: Why are there parentheses around "(a,b)" in the .sort() method, but not around the "articleObject" or "article" arguments in the .forEach() methods?
// In arrow functions, if we only have one parameter like in the forEach loops, we can omit parenthesis. However, if we are passing in more than one, we do need it.
rawData.sort((a,b) => {
  return (new Date(b.publishedOn)) - (new Date(a.publishedOn));
});

rawData.forEach(articleObject => {
  articles.push(new Article(articleObject));
});

// articles.forEach(article => {
$('#articles').append(articles[0].toHtml());
// });

