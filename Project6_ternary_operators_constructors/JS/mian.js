function Age_Function() {
    Age=document.getElementById("Age").value;
    if (Age>=18){
        Vote="You can vote!"
    }
    else{
        vote="You can't vote";
    }
    document.getElementById("How_old_are_you?").innerHTML=vote;
}
   
  