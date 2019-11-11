function century(){
   let year = prompt("what year is it");
    alert("the century is "+ year)
}

function tenfour(){
    for(let i = 0; i < 101; i++){
        if(i % 10 == 0 && i % 4 ==0){
            console.log("tenfour");
        }
        else if(i % 4 == 0){
            console.log("Four");
        }
        else if(i % 10 == 0){
            console.log("Ten");
        }
        else {
            console.log(i);
        }
    }
}