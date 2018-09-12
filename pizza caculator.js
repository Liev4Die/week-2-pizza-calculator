//ali sasani
//pizza caculator

var small = 7.50;// 7.50€ small pizza
var medium = 9.50;// 9.50€ medium pizza
var large = 12.00;// 12.00€ large pizza
var smallprice = totalsmall * small;// 7.50€ x total small pizza
var mediumprice = totalmedium * medium;// 9.50€ x total medium pizza
var largeprice = totallarge * large;// 12.00€ x total large pizza
var total = smallprice + mediumprice + largeprice;//total price


var totalsmall = prompt("how many small pizz'a do you want?");//total small pizza
document.write("Small pizza's =" + totalsmall);//total small pizza


var totalmedium = prompt("how many medium pizza's do you want?");//total medium pizza
document.write("<br><br> Medium pizza's =" + totalmedium);//total medium pizza


var totallarge = prompt("how many large pizza's do you want?");//total large pizza
document.write("<br><br> Large pizza's = " + totallarge);// total large pizza


document.write('<br><br>Total price : ' + total);//total price