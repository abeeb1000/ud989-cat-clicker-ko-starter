var viewModel = function(){
    this.catName = ko.observable("Shy Cat");
    this.imgSrc = ko.observable("https://www.our-happy-cat.com/images/xshy-hiding-cat.jpg.pagespeed.ic.aGWMLHO7sn.jpg");
    this.clickCount = ko.observable(0);    
    this.catLevel = ko.observable("New Born");
    this.incrementCounter =  function(){
              this.clickCount( this.clickCount()+1) 
          if(this.clickCount() == 10){
              this.catLevel("Infant")            
         }esle if(this.clickCount == 20){                 
               this.catLevel("Curious Infant")     
         }esle if(this.clickCount == 50){                 
               this.catLevel("Matured Infant")     
         }esle if(this.clickCount == 100){                 
               this.catLevel("Teen")  
         }esle (this.clickCount == 1000){                 
               this.catLevel("Adult")             
         }    
    };
     this.catClicked =  function(){
         
    };
    
};

ko.applyBindings(new viewModel());
