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

    // animate the like car  button to count up and down likes
    const likeContent = [...document.querySelectorAll(".content")];
    likeContent.forEach((l) => {
        // console.log(index)
        l.addEventListener("click", () => {
            const likeBtn = l.querySelector(".like");
            const heartBtn = l.querySelector(".heart");
            const numberBtn = l.querySelector(".number");

            likeBtn.classList.toggle("heart_active");
            l.classList.toggle("heart_active");
            heartBtn.classList.toggle("heart_active");
            numberBtn.classList.toggle("heart_active");
        })

        });
    // })

    // hsow and  hide menu according to the view port width
    const navBar = document.getElementById("nav");
    const hideIcon = document.getElementsByClassName("fa-xmark")[0];
    const showIcon = document.getElementsByClassName("fa-bars")[0];

    document.querySelector(".fa-bars").addEventListener("click", showMenu);
    document.querySelector(".fa-xmark").addEventListener("click", hideMenu);



    // forms script
    
    
}

    // funtion ready ends
    // building the call back function for different parts of the script 
    // function likeFunc() {
    //     // let target = this.target;
    //     // console.log(target);
    //     const content = [...document.querySelectorAll(".content")];
    //     const likeBtn = [...document.querySelectorAll(".like")];
    //     const heartBtn = [...document.querySelectorAll(".heart")];
    //     const nimberBtn = [...document.querySelectorAll(".number")];

    //     // console.log(content)
    //     // switching (toggling) between the different status of like button to show and hide aniamtion
    //     likeBtn.forEach(Element => {
    //         Element.classList.toggle("heart_active");
    //     })

    //     content.forEach(Element => {
    //         Element.classList.toggle("heart_active");
    //     })

    //     heartBtn.forEach(Element => {
    //         Element.classList.toggle("heart_active");
    //     })

    //     nimberBtn.forEach(Element => {
    //         Element.classList.toggle("heart_active");
    //     })
        
    //     // content.classList.toggle("heart_active");
    //     // heartBtn.classList.toggle("heart_active");
    //     // nimberBtn.classList.toggle("heart_active");

    // }



    // show menu according to the view port width
       function showMenu() {

        const navBar = document.getElementById("nav");
        const hideIcon = document.getElementsByClassName("fa-xmark")[0];
        const showIcon = document.getElementsByClassName("fa-bars")[0];

        navBar.style.left = "0";
        navBar.style.display = "block";
        hideIcon.style.opacity = "1";
    }
    
    // hide menu according to the view port width
    function hideMenu(event) {

        let button = event.target;
        button = button.parentElement.parentElement;
        let showIcon = button.nextElementSibling;

        button.style.left = "-70%";
        button.style.display = "none";
        showIcon.style.opacity = "1";
    }


    // first get the product  container and the and the next , preview buttons by the DOM  
    const productContainers = [...document.querySelectorAll('.cars_conatainer')];
    const nxtBtn = [...document.querySelectorAll('.nxt_btn')];
    const preBtn = [...document.querySelectorAll('.pre_btn')];

    productContainers.forEach((item, i) => {
        let cardContanier = [...item.querySelectorAll(".car_card")] ; // get the card conainer to later get it's width as a reference to sroll left and right
        let containerDimensions = cardContanier[i].getBoundingClientRect();// get DOMRect info which contain the width
        // console.log(containerDimensions);
        let containerWidth = containerDimensions.width;

        // when ever scroll left or right add or subtract the card width fom the all container width
        nxtBtn[i].addEventListener('click', () => {
            item.scrollLeft += containerWidth;
        })

        preBtn[i].addEventListener('click', () => {
            item.scrollLeft -= containerWidth;
        })
        })








        const container = document.querySelector(".container"),
      pwShowHide = document.querySelectorAll(".fa-eye-slash"),
      pwFields = document.querySelectorAll(".password");
      signUp = document.querySelector(".signup_link");
      signIn = document.querySelector(".login_link");

// console.log(signIn)

//    js code to show/hide password and change icon
pwShowHide.forEach(eyeIcon =>{
    eyeIcon.addEventListener("click", ()=>{
        pwFields.forEach(pwField => {
            if(pwField.type === "password"){
                pwField.type = "text"

                pwShowHide.forEach(icon => {
                    icon.classList.replace("fa-eye-slash" ,"fa-eye");
                })
            }else {
                pwField.type = "password"

                pwShowHide.forEach(icon => {
                    icon.classList.replace("fa-eye" ,"fa-eye-slash");
                })
            }
        })
    })
}
)


//  js code to appear sign up and login form


signUp.addEventListener("click", ()=> {
    container.classList.add("active");
})

signIn.addEventListener("click", ()=> {
    container.classList.remove("active");
})