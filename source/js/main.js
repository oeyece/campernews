$(document).ready(function() {
  var newsItemsAPI = "http://www.freecodecamp.com/news/hot";
  var html = "";
  
  // Call the newsArticle function with the API as an argument
  newsArticles(newsItemsAPI);
  function newsArticles(newsItemsAPI) {
    $.ajax({
      url: newsItemsAPI,
      data: {
        format: 'json'
      },
      dataType: 'json',
      success: function(newsItem){
        newsItem.forEach(function(newsStory) {

          // Put all the needed values into variables for use
          var newsImage = newsStory.image;
          var newsLink = newsStory.link;
          var newsTitle = newsStory.headline.substring(0, 50)+"...";
          var newsPoster = newsStory.author.username;
          var newsPostedDate = newsStory.timePosted;
          var newsUpvotes = newsStory.rank;
          var newsAuthorPic = newsStory.author.picture;

          // If the article doesn't have an image, use the authors image instead
          if (newsImage === "" || newsImage === "/web/imgs/logo.png") {
            newsImage = newsAuthorPic;
          }

          // Format the date to "Mon Feb 08 2016"
          newsPostedDate = new Date(newsPostedDate);
          newsPostedDate = newsPostedDate.toDateString();

          // Create the newsarticle 
          html += '<article class="item">';
          html += '<a href="' + newsLink + '" target="_blank" class="item-link">';
          html += '<img src ="' + newsImage + '" class="item-img" alt="';
          html += + newsTitle + '">';
          html += '<h2 class="item-title">' + newsTitle + '</h2></a>';
          html += '<p class="post-date">Posted on: ' + newsPostedDate + '</p>';
          html += '<a href="http://www.freecodecamp.com/';
          html += + newsPoster + '" class="author-link" target="_blank" alt="';
          html += + newsPoster + '">';
          html += '<p class="author">By ' + newsPoster + '</p></a>';
          html += '<div class="upvote">';
          html += '<img src="https://dl.dropboxusercontent.com/'; 
          html += 's/z8rn5ckfr5suuas/heart.svg?raw=1"';
          html += ' class="upvote-icon" alt="Upvotes">';
          html += '<p class="upvotes">' + newsUpvotes + '</p></div></article>'

        });
      
      // Add html to .wrapper class for each newsarticle
      $(".wrapper").html(html);
      }
    });
  }
});