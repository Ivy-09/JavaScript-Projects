function count_To_Ten() {
    var Digit="";
    var x=1;
    while (x < 11) {
        Digit+= "<br>"+x;
        x++;
    }
    document.getElementById("Counting_to_Ten").innerHTML=Digit;
}
//while function//
function textLength(){
let text = "Hello!";
let length = text.length;

document.getElementById("demo").innerHTML = length;}
//textlength function//

var Fruits=["Apple","Guava","Pineapple","Kiwi"]
var Content="";
var Y;
function for_Loop(){
    for (Y=0;Y<Fruits.length;Y++){
        Content+=Fruits[Y]+"<br>";
    }
    document.getElementById("List_of_Fruits").innerHTML=Content;
}
//for loop function//