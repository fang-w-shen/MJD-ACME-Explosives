
$(document).ready(function(){
////////////////////////FLICKR/////////////////////////////
	
var firstAJAX = function() {
  return new Promise((resolve, reject) => {
    $.ajax({
      url: "categories.json"
    }).done(function(data) {
      resolve(data);
    }).fail(function(xhr, status, error) {
      reject(error);
    });
  })
};

// This function does one thing, and returns a promise
var secondAJAX = function(result_of_firstXHR) {
  return new Promise((resolve, reject) => {
    $.ajax({
      url: "types.json",
      // data: result_of_firstXHR
      
    }).done(function(data) {
    		
      resolve(data);
    }).fail(function(xhr, status, error) {
      reject(error);
    });
  })
};

// This function does one thing, and returns a promise
var thirdAJAX = function(result_of_secondXHR) {
  return new Promise((resolve, reject) => {
    $.ajax({
      url: "products.json",
      // data: result_of_secondXHR
    }).done(function(data) {
      resolve(data);
    }).fail(function(xhr, status, error) {
      reject(error);
    });
  })
};

/*
  Now we use those Promises to describe the order of execution, 
  and how data flows between each one.

  Note how the resolve callback function, itself, returns another
  promise. This is how you can chain promises, and dictate the
  order of execution of multiple aynschronous operations.
 */

firstAJAX()
  .then(function(data1) {
     printcategories(data1.categories)
  	 return secondAJAX(data1);
  })
  .then(function(data2) {
      gettype(data2);
      return thirdAJAX(data2);
  }).then(function(data3){
      getproduct(data3)
  });

  
})