
/*---------------- Contact Page: Accordian FAQs Section -----------------

 I had so much trouble getting this one to work. I finally figured it out that I had placed the pertinent HTML below the script tag so it wasn't being loaded at the right time. */

// grab the divs with the class .faq and store them in a const faqs
const faqs = document.querySelectorAll(".faq");


faqs.forEach((faq) => {
    // listen for clicks and toggle the class active whenever each faq is clicked 
    faq.addEventListener("click", () => {
        faq.classList.toggle("active");
    });
});


/*--------------- Contact Page: Contact Form --------------*/
// Grab the different elements by their id's and store the in const values
const nameEl = document.querySelector('#name');
const emailEl = document.querySelector('#email');

const phoneEl = document.querySelector('#phone');
const zipcodeEl = document.querySelector('#zipcode');
const stateEl = document.querySelector('#state');
const form = document.querySelector('#contact');

form.addEventListener('submit', function (e) {
    // prevent the form from submitting
    e.preventDefault();
})

const isRequired = value => value === '' ? false : true;

const isBetween = (length, min, max) => length < min || length > max ? false : true;

// Validate the email has the correct form
const isEmailValid = (email) => {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
};

// Validate the phome number is 10 numbers
const isPhoneValid = (phone) => {
    const re = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    return re.test(phone);
}

// validate the zip code is 5 numbers
const isZipcodeValid = (zipcode) => {
    const re = /^(?! )[0-9]{5}$/;
    return re.test(zipcode);
}

// Validate the state is 2 letters
const isStateValid = (state) => {
    const re = /^(?! )[a-z]{2}$/;
    return re.test(state);
}

// Create the error message for when things don't go right
const showError = (input, message) => {
    // get the form-field element
    const formField = input.parentElement;

    //add the error class
    formField.classList.remove('success');
    formField.classList.add('error');

    // show the error message
    const error = formField.querySelector('small');
    error.textContent = message;
};


// Create the success message for when things go well
const showSuccess = (input) => {
    //get the form-field element
    const formField = input.parentElement;

    // remove the error class
    formField.classList.remove('error');
    formField.classList.add('success');

    // hide the error message
    const error = formField.querySelector('small');
    error.textContent = '';
}

// Validate the username is filled out and fits the requirements
const checkName = () => {

    let valid = false;
    const min = 3,
        max = 25;

    const name = nameEl.value.trim();

    if (!isRequired(name)) {
        showError(nameEl, 'Username cannot be blank.');
    } else if (!isBetween(name.length, min, max)) {
        showError(nameEl, `Name must be between ${min} and ${max} characters.`);
    } else {
        showSuccess(nameEl);
        valid = true;
    }
    return valid;
}

// Validate the email is filled out and fits the requirements

const checkEmail = () => {
    let valid = false;
    const email = emailEl.value.trim();
    if (!isRequired(email)) {
        showError(emailEl, 'Email cannot be blank.');
    } else if (!isEmailValid(email)) {
        showError(emailEl, 'Email is not valid.');
    } else {
        showSuccess(emailEl);
        valid = true;
    }

    return valid;
}


// Validate the phone is filled out and fits the requirements

const checkPhone = () => {
    let valid = false;
    const phone = phoneEl.value.trim();
    if (!isRequired(phone)) {
        showError(phoneEl, 'Phone number cannot be blank.');
    } else if (!isPhoneValid(phone)) {
        showError(phoneEl, 'Phone is not valid. Must be a 10 digit number separated by spaces or dashes');
    } else {
        showSuccess(phoneEl);
        valid = true;
    }
    return valid;
}

// Validate the zipcode is filled out and fits the requirements

const checkZipCode = () => {
    let valid = false;
    const zipcode = zipcodeEl.value.trim();
    if (!isRequired(zipcode)) {
        showError(zipcodeEl, 'Zipcode cannot be blank.');
    } else if (!isZipcodeValid(zipcode)) {
        showError(zipcodeEl, 'Zipcode is not valid. Must be 5 digits.');
    } else {
        showSuccess(zipcode);
        valid = true;
    }
    return valid;
}

// Validate the state is filled out and fits the requirements

const checkState = () => {
    let valid = false;
    const state = stateEl.value.trim();
    if (!isRequired(state)) {
        showError(stateEl, 'Zipcode cannot be blank.');
    } else if (!isStateValid(state)) {
        showError(stateEl, 'State is not valid. Must be 2 letters.')
    }
}





form.addEventListener('submit', function (e) {
    // Prevent the form from submitting
    e.preventDefault();


    // validate forms

    let isNameValid = checkName(),
        isEmailValid = checkEmail(),
        isPhoneValid = checkPhone(),
        isZipcodeValid = checkZipCode(),
        isStateValid = checkState();


    let isFormValid = isNameValid && isEmailValid && isPhoneValid && isZipcodeValid && isStateValid;

    // submit to server if the form is valid

    if (isFormValid) {

    }
});

// Instant feedback
const debounce = (fn, delay = 500) => {
    let timeoutId;
    return (...args) => {
        // cancel the previous timer
        if (timeoutId) {
            clearTimeout(timeoutId);
        }
        // setup a new timer
        timeoutId = setTimeout(() => {
            fn.apply(null, args)
        }, delay);
    };
};


form.addEventListener('input', debounce(function (e) {
    switch (e.target.id) {
        case 'name':
            checkName();
            break;
        case 'email':
            checkEmail();
            break;
        case 'phone':
            checkPhone();
            break;
        case 'zipcode':
            checkZipCode();
            break;
        case 'state':
            checkState();
            break;
    }
}));



/* -------- Services Free Estimate Form ---------- */


let estIt = function () {
    let p = document.getElementById('sqft').value;
    let estBtnn = document.getElementById('estBtn');
    let result = document.getElementById('test');
    let r = Number(3);
    if (p != '') {
        console.log('Average cost of painting a Home your size: $' + p * r);
        result.insertAdjacentHTML(
            'beforeend',
            '</br> Average cost of painting a Home your size: $' + p * r
        );

    }

}


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

