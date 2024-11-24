// A K M Shabab Ibrahim

const card = document.querySelector(".debit-card");
const frontPart = document.querySelector(".front");
const backPart = document.querySelector(".back");


const userName = document.querySelector(".info .user-name input");
const userCardNumber = document.querySelector(".info .user-card-number input");
const userExpiryDateMonth = document.querySelector(".info .expiration-date div #date-part1");
const userExpiryDateYear = document.querySelector(".info .expiration-date div #date-part2");
const userCVV = document.querySelector(".info .cvv-code input");

const displayName = document.querySelector(".debit-card .front .full-name");
const displayNumber1 = document.querySelector(".debit-card .front .card-number #part1");
const displayNumber2 = document.querySelector(".debit-card .front .card-number #part2");
const displayNumber3 = document.querySelector(".debit-card .front .card-number #part3");
const displayNumber4 = document.querySelector(".debit-card .front .card-number #part4");
const displayNumber = document.querySelectorAll(".debit-card .front .card-number .letter");
const displayExpiryDate1 = document.querySelector(".debit-card .front .expiry-date .part1");
const displayExpiryDate2 = document.querySelector(".debit-card .front .expiry-date .part2");
const displayCVV = document.querySelector(".debit-card .back .cvv");

function indexChange(x){
    if (x === 1){
        if (frontPart.style.zIndex !== 2){
            card.style.transform = "rotateY(0deg)";
            frontPart.style.zIndex = "2";
            backPart.style.zIndex = "1";
        }
    }
    else if (x === 0){
        if (backPart.style.zIndex !== 2){
            card.style.transform = "rotateY(180deg)";
            frontPart.style.zIndex = "1";
            backPart.style.zIndex = "2";
        }
    }

}


userName.addEventListener("click", function(){
    indexChange(1);
});

userName.addEventListener("input", function(){
    if (userName.value === ""){
        displayName.style.textTransform = "none";
        displayName.style.wordSpacing= "3px";
        displayName.innerText = "full name".toUpperCase();
    }
    else{
        displayName.style.textTransform = "uppercase";
        displayName.style.wordSpacing= "4px";
        displayName.textContent = userName.value;

    }
    
});

userCVV.addEventListener("click", function(){
    indexChange(0);
});

userCVV.addEventListener("input", function(){
    if (userCVV.value === ""){
        displayCVV.textContent = "xxx".toUpperCase();
    }
    else{
        
        if (userCVV.value > 0 && userCVV.value.length <= 3){
            displayCVV.textContent = userCVV.value;
        }
        
    }
    
});

userCardNumber.addEventListener("click", function(){
    indexChange(1);
});

userCardNumber.addEventListener("input", function(){
    if (userCardNumber.value === ""){
        displayNumber.forEach((item)=>{
            item.style.letterSpacing = "0px";
            item.textContent = "xxxx".toUpperCase();
        });
    }
    else{
        displayNumber.forEach((item)=>{
            item.style.letterSpacing = "4px";
        });
        
        if (userCardNumber.value.length > 0 && userCardNumber.value.length <= 4 ){
            displayNumber1.textContent = userCardNumber.value;
        }
        else if (userCardNumber.value.length > 4 && userCardNumber.value.length <= 8){
            displayNumber2.textContent = userCardNumber.value.slice(4, 8);
        }
        else if (userCardNumber.value.length > 8 && userCardNumber.value.length <= 12){
            displayNumber3.textContent = userCardNumber.value.slice(8, 12);
        }
        else{
            displayNumber4.textContent = userCardNumber.value.slice(12, 16);
        }

    }
});

userExpiryDateMonth.addEventListener("click", function(){
    indexChange(1);
});

userExpiryDateYear.addEventListener("click", function(){
    indexChange(1);
});

userExpiryDateMonth.addEventListener("input", function(){
    if (userExpiryDateMonth.value === ""){
        displayExpiryDate1.textContent = "mm".toUpperCase();
    }
    else{
        displayExpiryDate1.textContent = userExpiryDateMonth.value;
    }
    
});

userExpiryDateYear.addEventListener("input", function(){
    if (userExpiryDateYear.value === ""){
        displayExpiryDate2.textContent = "yyyy".toUpperCase();
    }
    else{
        displayExpiryDate2.textContent = userExpiryDateYear.value;
    }
    
});