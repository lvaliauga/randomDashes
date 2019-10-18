//DOCUMENTATION
//https://illustrator-scripting-guide.readthedocs.io/jsobjref/PathItem/

var docRef = app.activeDocument;

var selectedObjects = app.activeDocument.selection;


var dashes = 6 //this seems to be the maximum number of different dashes and gaps illustrator can use.
var dasharray = [1,2,3]; //an array used to give lines their dashes and gaps.
var values = {
	maxdash: 30, //maxumum dash length
	mindash: 10, //minimum dash length
	maxgap: 30, //maxumum gap length
	mingap: 1,  //minimum gap length
	minStroke: 0.8, // minstroke and maxstroke define the range for the randomized stroke
	maxStroke: 2
};




if (!selectedObjects.length){
    alert("Select object");
}else{
//    dasharray = selectedObjects[0].strokeDashes;
//    alert(dasharray);
    for (var x = 0;x < selectedObjects.length; x++ ){
    selectedObjects[x].strokeDashes = randomarray();
    selectedObjects[x].strokeWidth = values.minStroke + Math.random() * (values.maxStroke - values.minStroke); // sets the random stroke
    }
    
    
}

function randomarray(){ //function for making an array of random numbers
    
    for (var i = 0; i < dashes; i+=2){
		dasharray[i] = (Math.random() * (values.maxdash - values.mindash) + values.mindash); //random value for the dash, between the numbers mindash and maxdash
		dasharray[i+1] = (Math.random() * (values.maxgap - values.mingap) + values.mingap); //random value for the dash, between the numbers mingap and maxgap
	}
//    alert("What are we returning " + dasharray)
	return dasharray;
}