//ali sasani
//pizza caculator

var small = 7.50;
var medium = 9.50;
var large = 12.00;


var totalsmall = prompt("how many small pizz'a do you want?");
document.write("Small pizza's =" + totalsmall);
document.write("<br> Price = " + totalsmall * small);


var totalmedium = prompt("how many medium pizza's do you want?");
document.write("<br><br> Medium pizza's =" + totalmedium);
document.write("<br> Price = " + totalmedium * medium);


var totallarge = prompt("how many large pizza's do you want?");
document.write("<br><br> Large pizza's = " + totallarge);
document.write("<br> Price = " + totallarge * large);


document.write('<br><br>Total price : ' + small * totalsmall + medium * totalmedium + large * totallarge);