function getShape()  {
    var numSides =1;
    //console.log(numSides);
     numSides = prompt("Please enter the number of sides on the polgon");
     //console.log(numSides);
    if(!numSides.match(/^\d+/)||(numSides>10))
        {
        alert("Please enter a number 1 to 10")
        
while((numSides=isNaN(numSides)||Math.abs(numSides)>10)||(numSides!=Math.floor(numSides))){
            numSides = prompt("Please enter the number of sides on the polgon");
           
        }
      //  console.log(numSides);
       numSides= Math.abs(numSides);
       
            numSides=Math.round(numSides);
     //   document.getElementById("replace").innerHTML ="monogon"
    }
    numSides= Math.abs(numSides);
       
    numSides=Math.round(numSides);





if(numSides==1){document.getElementById("replace").innerHTML ="monogon"}
if(numSides==2){document.getElementById("replace").innerHTML ="digon"}
if(numSides==3){document.getElementById("replace").innerHTML ="trigon"}
if(numSides==4){document.getElementById("replace").innerHTML ="tetragon"}
if(numSides==5){document.getElementById("replace").innerHTML ="pentagon"}
if(numSides==6){document.getElementById("replace").innerHTML ="hexagon"}
if(numSides==7){document.getElementById("replace").innerHTML ="heptagon"}
if(numSides==8){document.getElementById("replace").innerHTML ="octagon"}
if(numSides==9){document.getElementById("replace").innerHTML ="enneagon"}
if(numSides==10){document.getElementById("replace").innerHTML ="decagon"}
/*switch (true) {
    case 1: document.getElementById("replace").innerHTML ="monogon";
    break;
 
    case 2: alert("digon");
    break;
 
    case 3: alert("trigon");
    break;
 
    case 4: alert(" tetragon");
    break;
 
    case 5: alert("pentagon");
    break;
 
    case 6: alert("hexagon");
    break;

    case 7: alert("heptagon");
    break;

    case 8: alert("octagon");
    break;

    case 9: alert("enneagon");
    break;

    case 10: alert("decagon");
    break;
 } */

}