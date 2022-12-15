
/*------- Home Page Slider ---------------- */
/* Slider based off the youtube tutorial Automatic Image Slider Using Javascript by Ranjan-Beginners Guide. This will provide slider functionality for the area directly beneath the header element on db.html. It was challenging to understand how to grab each div service-point and apply the styling required for the slider to work without changing other parts of the sites unintentionally. Also I had to be extra careful with my css and making sure it did not conflict 

*/
// Set first index to 0
var firstIndex = 0;


// slider function
function automaticSlide() {

    // Change slide every 4 seconds 
    setTimeout(automaticSlide, 4000);
    var divs;

    // Get the service-point divs and store them in the const img
    const img = document.getElementsByClassName('service-point');

    // create a divs index of each service-point div
    for (divs = 0; divs < img.length; divs++) {

        // Give each service-point div the display:none style attribute
        img[divs].style.display = "none";
    }

    // Incremented firstIndex each time the for loop runs,
    firstIndex++;

    // Reset firstIndex to 1 if it's bigger than img.length
    if (firstIndex > img.length) {
        firstIndex = 1;
    }

    // Change the style to display:flex for each div at  firstIdex - 1
    img[firstIndex - 1].style.display = "flex";
}

// Call that slide
automaticSlide();
