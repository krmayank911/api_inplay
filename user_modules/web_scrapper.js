var cheerio = require('cheerio');
var request = require('request');

module.exports = function (search_string,callback){
  var href;
  base_url = "https://en.wikipedia.org/wiki/";
  url = base_url + search_string;

  request(url,function(error,response,html){
    var $ = cheerio.load(html);



    $('.infobox').filter(function(){
      var data = $(this);
      var temp = data.children().children().eq(1);
      var text = temp.text();
      href = temp.children().children().children().attr('srcset');

      // console.log(text);
      // console.log(href + "  :called first");
      callback(href);
    });
  });
};
