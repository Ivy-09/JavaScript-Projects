function Age_Function() {
 var Ages, Can_vote;
Ages=document,getElementById("Ages").value;
Can_Vote=(Age>18)?"You can vote":"You can't vote";
document.getElementById("Age").innerHTML=Can_vote+"!";
}
//ternary operation//

function food (Price,Calorie,Popularity){
    this.food_Price=Price;
    this.food_Calorie=Calorie;
    this.food_Popularity=Popularity;
}
var eggSalad=new food("5","150","popular")
function myFunction(){
    document.getElementById("keywords_and_constructors").innerHTML=eggSalad.food_Price;
}
//this and new keywords//

   
 function count_Function (){
    document.getElementById("Counting").innerHTML=Count();
    function Count(){
        var starting_Point=9;
        function Plus_one (){starting_Point +=1;}
        Plus_one();
        return starting_Point;
    }
  }
  //this is  a nested function//
