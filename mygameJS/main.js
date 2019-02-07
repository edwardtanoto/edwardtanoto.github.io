var King = 
{ 
    classes : "King",
    char: "K",
    points : 5,
}
var Queen = 
{
    classes : "Queen",
    char: "Q",
    points : 5,
}

var Cavalry =
{
    classes : "Cavalry",
    char: "C",
    points : 5,
}
var Assassin =
{
    classes : "Assassin",
    char: "A",
    points : 5,
}
var Sniper =
{
    classes : "Sniper",
    char: "S",
    points : 5,
}
var Pawn =
{
    classes : "Pawn",
    char: "P",
    points : 1,
}
var Rebel =
{
    classes : "Rebel",
    char: "R",
    points : 1,
}
var Bomber =
{
    classes : "Bomber",
    char: "B",
    points : -5,
}

var playerOneScore = 0;
var playerTwoScore = 0;




function countScore(tes)
{
    var nameInput = document.getElementById('name');
    var nameInput2 = document.getElementById('name2');
    var countPawn = 0
    var countPawn2 = 0
    //if king or queen is together
    for(var i=0; i< nameInput.value.length;i++)
    {
        if(nameInput.value[i] == "K" && nameInput.value[i] == "Q")
        {
         King.points = 15
         Queen.points = 15
         var royaltyPoints = King.points + Queen.points
         console.log(royaltyPoints)
        }
        else if(nameInput.value == "PPPP")
        {
         Pawn.points = 40
         console.log(Pawn.points)
        }
        else if(nameInput.value[i] !== "K" &&nameInput.value[i] !==  "Q" && nameInput.value[i] !=="C" && nameInput.value[i] !=="B" && nameInput.value[i] !=="R" && nameInput.value[i] !=="P" && nameInput.value[i] !=="S")
        {
         Assassin.points = 1000
         console.log(Assassin.points)
        }
        if(nameInput2.value[i] == "K" && nameInput2.value[i] =="Q")
        {
         King.points = 15
         Queen.points = 15
         var royaltyPoints = King.points + Queen.points
         console.log(royaltyPoints)
        }
        else if(nameInput2.value == "PPPP")
        {
         Pawn.points = 40
         console.log(Pawn.points)
        }
        else if(nameInput2.value[i] !== "K" &&nameInput2.value[i] !==  "Q" && nameInput2.value[i] !=="C" && nameInput2.value[i] !=="B" && nameInput2.value[i] !=="R" && nameInput2.value[i] !=="P" && nameInput2.value[i] !=="S")
        {
         Assassin.points = 1000
         console.log(Assassin.points)
        }
        for(var i =0; i<nameInput.value.length;i++){
            if(nameInput.value[i] == "P")
            {
                countPawn++;
            }
            if(nameInput2.value[i] == "P")
            {
                countPawn2++;
            }
            if(nameInput.value[i] == "C"){
                Cavalry.points = 10 * countPawn2
                console.log(Cavalry.points)
            }
            if(nameInput2.value[i] == "C"){
                Cavalry.points = 10 * countPawn
                console.log(Cavalry.points)
            }
            
        }

        }
        for(var i=0; i< nameInput2.value.length;i++)
        {
            if(nameInput.value[i] == "K" && nameInput.value[i] == "Q")
            {
             King.points = 15
             Queen.points = 15
             var royaltyPoints = King.points + Queen.points
             console.log(royaltyPoints)
            }
            else if(nameInput.value == "PPPP")
            {
             Pawn.points = 40
             console.log(Pawn.points)
            }
            else if(nameInput.value[i] !== "K" &&nameInput.value[i] !==  "Q" && nameInput.value[i] !=="C" && nameInput.value[i] !=="B" && nameInput.value[i] !=="R" && nameInput.value[i] !=="P" && nameInput.value[i] !=="S")
            {
             Assassin.points = 1000
             console.log(Assassin.points)
            }
            if(nameInput2.value[i] == "K" && nameInput2.value[i] =="Q")
            {
             King.points = 15
             Queen.points = 15
             var royaltyPoints = King.points + Queen.points
             console.log(royaltyPoints)
            }
            else if(nameInput2.value == "PPPP")
            {
             Pawn.points = 40
             console.log(Pawn.points)
            }
            else if(nameInput2.value[i] !== "K" &&nameInput2.value[i] !==  "Q" && nameInput2.value[i] !=="C" && nameInput2.value[i] !=="B" && nameInput2.value[i] !=="R" && nameInput2.value[i] !=="P" && nameInput2.value[i] !=="S")
            {
             Assassin.points = 1000
             console.log(Assassin.points)
            }
            for(var i =0; i<nameInput.value.length;i++){
                if(nameInput.value[i] == "P")
                {
                    countPawn++;
                }
                if(nameInput2.value[i] == "P")
                {
                    countPawn2++;
                }
                if(nameInput.value[i] == "C"){
                    Cavalry.points = 10 * countPawn2
                    console.log(Cavalry.points)
                }
                if(nameInput2.value[i] == "C"){
                    Cavalry.points = 10 * countPawn
                    console.log(Cavalry.points)
                }
                
            }
    
            }
        console.log(nameInput.value[i])
        console.log(nameInput2.value[i])
    }





   





function areaPoints(){
    //sum all the points within each area
}
