// function fibo(n) {
//     var num = [0,1];
//     if(n<1){num=[];}
//     if(n==1){ num=[0];}else{
//         while(n>2){
//             var n1 ,n2 ,len;
//             len=num.length;
//             num.push(num[len-1]+num[len-2]);
//             n--;
//         }
//         }
//     return num;
// }
// var n = prompt("enter numbers");
// document.write(fibo(n));

function changeDice(n,d){
    var dice ;
    if(d===1){
        dice = document.getElementById("player-1");
    }
    if(d===2){
        dice = document.getElementById("player-2");
    }
    if(n===1){dice.src="one.png"}
    if(n===2){dice.src="two.png"}
    if(n===3){dice.src="three.png"}
    if(n===4){dice.src="four.png"}
    if(n===5){dice.src="five.png"}
    if(n===6){dice.src="six.png"}
    console.log("value of random is " + n +" for dice"+ d );
}
function runGame(){
    var d1 , d2 ;
    d1=Math.floor((Math.random() * 6) + 1);
    d2=Math.floor((Math.random() * 6) + 1);
    console.log("d1 is " +d1);console.log("d2 is " +d2);
    setTimeout(changeDice(d1,1));
    setTimeout(changeDice(d2,2));
    console.log("d1 is " + d1);
    console.log("d2 is " + d2);
    if(d1>d2){document.querySelector(".game h4").innerHTML="Player 1 has won!!";}
    else if(d1<d2){document.querySelector(".game h4").innerHTML="Player 2 has won!!";}
    else if(d1===d2){document.querySelector(".game h4").innerHTML="it was tie! play again";}
    d1=0;d2=0;

}
function myFunction(){
    console.log("clicked");
    var x = document.getElementById("dice-button");
    x.addEventListener("click", runGame);
}