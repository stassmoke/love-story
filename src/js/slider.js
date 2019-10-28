//Get slider item >>>

//Get image  | Array.from
var sliderImage = Array.from(document.querySelectorAll(".slider-container .item"));

//Get Image length
var slideCount = sliderImage.length;

//Star Image Slider
var currentSlider = 1;

//Slider Number Element
// var sliderNumberElement = document.getElementById("slider-number");

//Previous And Next Button
var next = document.getElementById("next"),
    prev = document.getElementById("prev");

//Handel click prev and next button
next.onclick = nextSlide;
prev.onclick = prevSlide;

// //create ul
// var paginationElement= document.createElement("ul");

// // create attribute id to ul
// paginationElement.setAttribute("id","pagination-ul");

// // for count image -  ste li count
// for (let i  = 1 ; i <= slideCount ; i++) {

//     //create li
//   var paginationItm =  document.createElement('li');

//     // create attribute data-index to li
//     paginationItm.setAttribute("data-index",i);

//     //create number item
//    var itemNumber = document.createTextNode(i);

//     //add itmNumber to paginationItm
//     paginationItm.appendChild(itemNumber);

//     //add all li to ul

//     paginationElement.appendChild(paginationItm)
// }

// //add ul to the Page
// document.getElementById("indicators").appendChild(paginationElement);

// //Get UL
// var paginationUL  = document.getElementById("pagination-ul");
// var paginationLiArray =Array.from(document.querySelectorAll("#pagination-ul li"));
// for (let i =0; i<paginationLiArray.length ; i++ ){

//     paginationLiArray[i].onclick = function() {
//         currentSlider = parseInt(this.getAttribute("data-index"));
//         theChecker();
//     }
// }
// theChecker();

//next function
function nextSlide() {

    if (next.classList.contains("disabled")) {

        return false
    }else {
        currentSlider++;
        theChecker();

    }

}


//prev function
function prevSlide() {

    if (prev.classList.contains("disabled")) {

        return false
    }else {
        currentSlider--;
        theChecker();

    }

}

//function add class active to (image) and (li)
function theChecker() {

    // sliderNumberElement.textContent = "slider# "+(currentSlider)+" of " + (slideCount);

    // remove all class active
    removeAllActive();
    //add Class Active to image
    sliderImage[currentSlider - 1].classList.add("active");

    // //add Class Active to li
    // paginationUL.children[currentSlider - 1 ].classList.add("active");

    //check if current slider is the last Element
   if ( slideCount === currentSlider ){

       //add class disabled to button Next
       next.classList.add('disabled')
   }else {

       //Remove class disabled from button Next
       next.classList.remove('disabled')
   }
    //check if current slider is the first Element
   if (currentSlider ===1){

       //add class disabled to button Next
       prev.classList.add('disabled')
   }else {

       //Remove class disabled from button Next
       prev.classList.remove('disabled')
   }
}

//function remove class active to (image) and (li)
function removeAllActive() {

    sliderImage.forEach(function (img) {

        img.classList.remove("active")
    });

    // paginationLiArray.forEach(function (li) {

    //     li.classList.remove("active")
    // })
} 

// export default slider;
