function full_sentence(){
    var part_1="I have ";
    var part_2="made this";
    var part_3="myself";
    var whole_sentence=part_1.concat(part_2,part_3);
    document.getElementById("Concatenate").innerHTML=whole_sentence;       
}
//concat() function//
function slice_Method(){
var Sentence="Beauty is only skin deep.;"
    var section=Sentence.slice(9,14);
    document.getElementById("Slice").innerHTML=section;
}
//slice() function//
function string_Method(){
    var x=190;
    document.getElementById("Number_to_string").innerHTML=x.toString();
}
//toString()function//

function precision_Method(){
    var x=1230.4567;
    document.getElementById("Precision").innerHTML=x.toPrecision(100);
}
//toPrecision()function//