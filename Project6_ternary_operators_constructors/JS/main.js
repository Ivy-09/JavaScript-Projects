function Age_Function() {
    Age=document.getElementById("Age").value;
    if (Age>= 18) {
        vote="You can vote!";
    }
    else{
        vote="You can't vote";
    }
    document.getElementById("How_old_are_you?").innerHTML=vote;
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
        var Strating_Point=9;
        function Plus_one (){Starting_point +=1;}
        Plus_one();
        return Starting_Point;
    }
  }
  //this is  a nested function//
