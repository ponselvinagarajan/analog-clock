let hourHand=document.querySelector("[data-hour-hand]");
let minHand=document.querySelector("[data-min-hand]");
let secHand=document.querySelector("[data-sec-hand]");



function analogClock(w){
	let clock=new Date();
	let sec=clock.getSeconds()/60;
	let min=(sec + clock.getMinutes()) / 60;
	let hour=(min + clock.getHours()) /12;
	
	rotateClockHand(secHand,sec);
	rotateClockHand(minHand,min);
	rotateClockHand(hourHand,hour);
	// console.log(sec)
}


function rotateClockHand(element1,rotate){
	element1.style.setProperty("--rotation",rotate * 360);
}
setInterval(analogClock,1000);