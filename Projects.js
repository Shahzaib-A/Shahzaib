// function angle3(){
//    alert("give me the two angles and i will give you the third angle");
//    let angle1=prompt("60");
//    let angle2=prompt("90");
//    let angle3-180-("angel angle2");
//    alert("the 3rd angle is+angle3");
   
// }

// centuryfromyear(95) return (1)
// centuryfromyear(150) return (2)
// centuryfromyear(295) return (3)
// centuryfromyear(305) return (4)

// function tenfour(){
//     for(let i = 0; i < 101; i++){
//         if(i % 10 == 0 && i % 4 ==0){
//             console.log("tenfour");
//         }
//         else if(i % 4 == 0){
//             console.log("Four");
//         }
//         else if(i % 10 == 0){
//             console.log("Ten");
//         }
//         else {
//             console.log(i);
//         }
//     }
// }

function encrypt(){
    let plaintext = prompt('Type plaintext here');
    let ciphertext = '';
    ciphertext = plaintext.replace(/b/g,'D1').replace(/a/g,'D5').replace (/c/g,'D2').replace(/d/g,'D9').replace(/e/g,'D26').replace(/f/g,'D14').replace(/g/g,'D8').replace(/h/g,'D7').replace(/i/g,'D4').replace(/j/g,'D17').replace(/k/g,'D10').replace(/l/g,'D3').replace(/m/g,'D15').replace(/n/g,'D12').replace(/o/g,'D13').replace(/p/g,'D25').replace(/q/g,'D16').replace(/r/g,'D19').replace(/s/g,'D23').replace(/t/g,'D21').replace(/u/g,'D24').replace(/v/g,'D18').replace(/w/g,'D20').replace(/x/g,'D11').replace(/y/g,'D22').replace(/z/g,'D6')
    console.log(ciphertext);
    document.getElementById("ciphertext").innerHTML = ciphertext;
  }
  
   function decrypt();
  
  function decrypt(){
    let plaintext = prompt('Type encrypted text here');
    let ciphertext = '';
    ciphertext = plaintext.replace(/D1/g,'b').replace(/D5/g,'a').replace(/D2/g,'c').replace(/D9/g,'d').replace(/D26/g,'e').replace(/f/g,'D14').replace(/D9/g,'g').replace(/D7/g,'h').replace(/D4/g,'i').replace(/D17/g,'j').replace(/k/g,'D10').replace(/l/g,'D3').replace(/D15/g,'m').replace(/D12/g,'n').replace(/D13/g,'o').replace(/D25/g,'p').replace(/D16/g,'q').replace(/D19/g,'r').replace(/D23/g,'s').replace(/D21/g,'t').replace(/D24/g,'u').replace(/D18/g,'v').replace(/D20/g,'w').replace(/D11/g,'x').replace(/D22/g,'y').replace(/D6/g,'z')
    document.getElementById("ciphertext").innerHTML = ciphertext;
  }