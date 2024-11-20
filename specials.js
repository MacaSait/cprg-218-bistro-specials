const currentDate = new Date();
console.log(currentDate);
let currentDay = 3; 
/*currentDate.getDay()*/
console.log(currentDay); /* counts from 0 to 6 sunday is 0, saturday is 6*/

if(currentDay==0) {
        //sunday
    document.getElementById("special_name").innerHTML = "$9 Deluxe Burger & Fries";
    //* or special_name.innerHTML= "$9 Deluxe Burger & Fries";//
    special_image.src = 'images/sunday.jpg';
    special_description.innerHTML ='50% off our deluxwe burger';

}

if(currentDay==1) {
    //monday
document.getElementById("special_name").innerHTML = "$9 Deluxe Burger & Fries";
//* or special_name.innerHTML= "$9 Deluxe Burger & Fries";//
special_image.src = 'images/sunday.jpg';
special_description.innerHTML ='50% off our deluxwe burger';

}

if(currentDay==2) {
    //tuesday
document.getElementById("special_name").innerHTML = "$9 Deluxe Burger & Fries";
//* or special_name.innerHTML= "$9 Deluxe Burger & Fries";//
special_image.src = 'images/sunday.jpg';
special_description.innerHTML ='50% off our deluxwe burger';

}

if(currentDay==3) {
    //wednesday
document.getElementById("special_name").innerHTML = "$9 Deluxe Burger & Fries";
//* or special_name.innerHTML= "$9 Deluxe Burger & Fries";//
special_image.src = 'images/sunday.jpg';
special_description.innerHTML ='50% off our deluxwe burger';

}

if(currentDay==4) {
    //thursday
document.getElementById("special_name").innerHTML = "$9 Deluxe Burger & Fries";
//* or special_name.innerHTML= "$9 Deluxe Burger & Fries";//
special_image.src = 'images/sunday.jpg';
special_description.innerHTML ='50% off our deluxwe burger';

}

if(currentDay==5) {
    //friday
document.getElementById("special_name").innerHTML = "$9 Deluxe Burger & Fries";
//* or special_name.innerHTML= "$9 Deluxe Burger & Fries";//
special_image.src = 'images/sunday.jpg';
special_description.innerHTML ='50% off our deluxwe burger';

}

if(currentDay==6) {
    //saturday
document.getElementById("special_name").innerHTML = "$9 Deluxe Burger & Fries";
//* or special_name.innerHTML= "$9 Deluxe Burger & Fries";//
special_image.src = 'images/sunday.jpg';
special_description.innerHTML ='50% off our deluxwe burger';

}