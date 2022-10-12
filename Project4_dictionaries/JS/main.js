function my_Dictionary() {
    var Animal = {
    Species:"Cow",
    Sound:"Moo",
    Color:"White",
    Size:"Medium",

};
delete Animal.Species;
document.getElementById("Dictionary").innerHTML=Animal.Species;
}
