var catData = [ {
              catname : "Crazy Cat",
              src: "https://news.nationalgeographic.com/content/dam/news/photos/000/755/75552.adapt.945.1.jpg",
              clickcount: 0,
              nicknames: [{name: "mad"}, {name: "serious"}]
            },  
            {
              catname : "Shy Cat",
              src: "https://www.our-happy-cat.com/images/xshy-hiding-cat.jpg.pagespeed.ic.aGWMLHO7sn.jpg",
              clickcount: 0,
              nicknames: [{name: "young"}, {name: "naive"}, {name: "inexperience"}]
            },
            {
              catname : "Mamami Cat",
              src: "https://funcatpictures.com/wp-content/uploads/2013/11/funny-cat-pics-iq-result-came-back-277x300.jpg",
              clickcount: 0,
              nicknames: [{name: "funny"}]
            },
            {
              catname : "Trump Cat",
              src: "https://www.catster.com/wp-content/uploads/2016/05/cats-politics-TN.jpg",
              clickcount: 0,
              nicknames: [{name: "swag"}, {name: "attention"}]
            },
            {
              catname : "Obama Cat",
              src: "http://media.breitbart.com/media/2016/02/obama-cat-scratch-post-kickstarter-640x480.jpg",
              clickcount: 0,
              nicknames: [{name: "cool"}]
            } 
   ];
var Cat = function(val){
    this.catName = ko.observable(val.catname);
    this.imgSrc = ko.observable(val.src);
    this.clickCount = ko.observable(val.clickcount);     
  
  this.catLevel = ko.computed(function() {        
       var catcurLevel;  
        if(this.clickCount() < 10){
            catcurLevel = "Infant";            
        }else if(this.clickCount() < 20){                 
            catcurLevel = "Curious Infant";     
        }else if(this.clickCount() < 30){                 
            catcurLevel = "Matured Infant";     
        }else if(this.clickCount() < 50){                 
            catcurLevel = "Teen";  
        }else if(this.clickCount() < 1000){                 
            catcurLevel = "Adult";             
        }else{}
          return catcurLevel;      
    }, this);     
  
  this.nickNames = ko.observableArray(val.nicknames);  
  
};

var viewModel = function(){
  var self = this;
  this.catBunch = ko.observableArray([]);  
  catData.forEach(function(item){
     self.catBunch.push( new Cat(item) );    
  });
  
  this.currentCat = ko.observable(this.catBunch()[0]);
  
  this.incrementCounter = function(){
        this.clickCount( this.clickCount()+1);           
    };
  this.displayCat = function(place){   
     self.currentCat(place)
  };
  
};

ko.applyBindings(new viewModel())

