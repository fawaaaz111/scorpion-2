/*
    script for scorpion cars website
    auther : fawaz alhafiz
    version : 1.0
    language : pure javascript
*/


if(document.readyState == "loading") { // check if the page is still loading
    document.addEventListener("DOMContentLoaded", ready) // listen for the event to start function ready
}
else {
    ready(); // if the page already loaded .. then start the script
}

function ready() {

   
    // toggling the acive class when press the filter .. display it
    const filterType = document.getElementsByClassName("filter_type"); // get all the div's with class name "filter type"
    for(let i = 0; i < filterType.length; i++) {// get into each indivisual one's
        filterType[i].addEventListener("click", () => {
            const filterMenu = filterType[i].nextElementSibling; // get the filter menu that next to filter item
            filterMenu.classList.toggle("active");


            // show the list text inside the "filter type" div's
            const filterListItem = filterMenu.getElementsByClassName("filter_field");
                for(let j = 0; j < filterListItem.length; j++) {
                    // console.log(filterListItem.length);
                    filterListItem[j].addEventListener("click", () => {
                    let listText= filterListItem[j].textContent; // get the text from the list item to append it later to the filter type label
                        // console.log(listText);
                        filterType[i].innerText = listText ;
                        filterMenu.classList.remove("active") // when finishing all hide the filter menu
                    })
                };
        });
    };

    // hideMenu(navBar , showIcon);
    // showMenu(navBar , hideIcon);
}

    // show and hide menu according to the view port width
    const navBar = document.getElementById("nav");
    const hideIcon = document.getElementsByClassName("fa-xmark")[0];
    const showIcon = document.getElementsByClassName("fa-bars")[0];
        
       function showMenu() {

        navBar.style.left = "0";
        navBar.style.display = "block";
        hideIcon.style.opacity = "1";
    }
    
    function hideMenu () {

        navBar.style.left = "-70%";
        navBar.style.display = "none";
        showIcon.style.opacity = "1";
    }


    // first get the product  container and the and the next , preview buttons by the DOM  
    const carsContainers = [...document.querySelectorAll('.cars_conatainer')];
    const nxtBtn = [...document.querySelectorAll('.nxt_btn')];
    const preBtn = [...document.querySelectorAll('.pre_btn')];


    carsContainers.forEach((item, i) => {
        let cardContanier = [...item.querySelectorAll(".car_card")] ; // get the card conainer to later get it's width as a reference to sroll left and right
        let containerDimensions = cardContanier[i].getBoundingClientRect();// get DOMRect info which contain the width
        // console.log(containerDimensions);
        let oldPoint = containerDimensions.width ;
        console.log(oldPoint);
        let containerWidth = containerDimensions.width;

        // when ever scroll left or right add or subtract the card width fom the all container width
        nxtBtn[i].addEventListener('click', () => {
            item.scrollLeft += containerWidth;
        })

        preBtn[i].addEventListener('click', () => {
            item.scrollLeft -= containerWidth;
            nxtBtn[i].style.display = "block";
            let newPoint = containerDimensions.x;
            console.log(newPoint);
        })
        })

