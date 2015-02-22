/**
 * imageShow
 *
 * Function sets up values for the HTML elements
 * inside imageHost div for displaying simple navigation elements and the image itself.
 * Very simple, not parametrized :)
 * 
 * @param Integer Image nuber which you would like to display
 * @author Jacek Barcikowski <delorian@delsites.net>
 */ 
function imageShow(imageNo)
{
	// Simple input parameter control
	imageNo = parseInt(imageNo);
	
	if(isNaN(imageNo))
	{
		imageNo = 0;
	}
	
	
	// Previous Link
	var imagePrevNo;
	if(imageNo <= 0)
	{
		imagePrevNo = imagesJSON.images.length-1;
	} else {
		imagePrevNo = imageNo-1;
	}
		
	
	var el = document.getElementById('imagePrev');
	el.setAttribute('onClick', 'javascript:imageShow(' + imagePrevNo + '); return false;'); 
	
	// Next Link
	var imageNextNo;
	if(imageNo >= imagesJSON.images.length-1)
	{
		imageNextNo = 0;
	} else {
		imageNextNo = imageNo+1;
	}
	
	el = document.getElementById('imageNext');
	el.setAttribute('onClick', 'javascript:imageShow(' + imageNextNo + '); return false;');
	
	
	// Image Counter
	el = document.getElementById('imageCounter');
	var tmp = imageNo+1;
	el.innerHTML = '(' + tmp + ' of ' + imagesJSON.images.length + ')';
	
	// Image Content
	el = document.getElementById('imageObject');
	el.src = imagesJSON.images[imageNo].image;
	
	// Image Description
	el = document.getElementById('imageDesc');
	el.innerHTML = imagesJSON.images[imageNo].desc; 
	
	// Image Preloader
	images = new Array();
	images[0] = imagesJSON.images[imagePrevNo].image;
	images[1] = imagesJSON.images[imageNextNo].image;
	
	imagePreloader(images);
}


function imagePreloader(images) 
{
     // counter
     var i = 0;


     // create object
     imageObj = new Image();

     // start preloading
     for(var i=0; i < images.length; i++) 
     {
          imageObj.src= images[i];
     }

} 


/**
 * addLoadEvent 
 
 * Allows you to use multiple window onLoad functions
 * therefore my onLoad function (see above) doesn't 
 * interact with other onLoad functions for this page.
 * 
 * @author Simon Willison http://simonwillison.net/ 
 */
function addLoadEvent(func) {
  var oldonload = window.onload;
  if (typeof window.onload != 'function') {
    window.onload = func;
  } else {
    window.onload = function() {
      if (oldonload) {
        oldonload();
      }
      func();
    }
  }
}

addLoadEvent(imageShow);
