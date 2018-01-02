var webScrapper = require('./web_scrapper.js');

module.exports = function(app){

  // =============================Get Method=============================
  app.get('/',function(req,res){
    // res.send("its working");
    res.send("Api Connection done");
  });
  // --------------------------------------------------------------------

  app.get('/search',function(req,res){
    console.log(req.query.search_string);

    function callback(str){
      if(str == null){
        res.json({"search_string":str});
      } else {

        if(str.search(".jpg ") != -1){
          var end = str.indexOf('.jpg ');
          var url = str.slice(2,end+4);
          console.log(url);
        }else if(str.search(".png ") != -1){
          var end = str.indexOf('.png ');
          var url = str.slice(2,end+4);
          console.log(url);
        }
        // res.redirect("http://" + url);
        res.json({"search_string":url});
      }
    }

    webScrapper(req.query.search_string,callback);

    // res.send(req.query.search_string);

  });
};
