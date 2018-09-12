//ali sasani
//pizza caculator

var small = 7.50;// 7.50€
var medium = 9.50;// 9.50€
var large = 12.00;// 12.00€
var smallprice = totalsmall * small;// 7.50€ x total small pizza
var mediumprice = totalmedium * medium;// 9.50€ x total medium pizza
var largeprice = totallarge * large;// 12.00€ x total large pizza
var total = smallprice + mediumprice + largeprice;//total price


var totalsmall = prompt("how many small pizz'a do you want?");
document.write("Small pizza's =" + totalsmall);


var totalmedium = prompt("how many medium pizza's do you want?");
document.write("<br><br> Medium pizza's =" + totalmedium);


var totallarge = prompt("how many large pizza's do you want?");
document.write("<br><br> Large pizza's = " + totallarge);


document.write('<br><br>Total price : ' + total);