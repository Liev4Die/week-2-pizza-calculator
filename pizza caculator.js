//ali sasani
//pizza caculator

var small = 7.50;
var medium = 9.50;
var large = 12.00;
var totalsmall = prompt("how many small pizz'a do you want?");
var smallprice = totalsmall * small;
var totalmedium = prompt("how many medium pizza's do you want?");
var mediumprice = totalmedium * medium;
var totallarge = prompt("how many large pizza's do you want?");
var largeprice = totallarge * large;
var total = smallprice + mediumprice + largeprice;


document.write(" Small pizza's =" + totalsmall);
document.write("<br> total small pizza: " + smallprice);


document.write("<br><br> Medium pizza's =" + totalmedium);
document.write("<br> total medium pizza: " + mediumprice);



document.write("<br><br> Large pizza's = " + totallarge);
document.write("<br> total large price: " + largeprice)


document.write('<br><br>Total price : ' + total);