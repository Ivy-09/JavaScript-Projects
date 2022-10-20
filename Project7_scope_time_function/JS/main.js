var x=10;
function Add_number_1(){
    document.write(20+x+"<br>");
}
function Add_number_2(){
    document.write(x+100);
}
Add_number_1();
Add_number_2();
//define the global variable//

function Add_number_1(){
    var x=10;
    document.write(20+x+"<br>");
}
function Add_number_2(){
    document.write(x+100);
}
Add_number_1();
Add_number_2();
//define the local variable//

function get_Date(){
    if (new Date().getHours()<18){
        document.getElementById("Greeting").innerHTML="How are you today?"
    }
}
//If statements//

function Time_function(){
    var Time=new Date().getHours();
    var Reply;
    if (Time<12==Time<18){
        Reply="It is the afternoon.";
    }
    else if (Time<12 ==Time>0){
        Reply="It is the afternoon.";
    }
    else{
        Reply="It is eveing.";
    }
    document.getElementById("Time_of_day").innerHTML=Reply;
    
}