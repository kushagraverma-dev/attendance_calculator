function calculate(){

let total = parseInt(document.getElementById("totalClasses").value);
let na = parseInt(document.getElementById("naClasses").value);
let present = parseInt(document.getElementById("presentClasses").value);
let percent = parseFloat(document.getElementById("requiredPercent").value);

let effectiveTotal = total - na;

let needed = 0;

while(((present + needed) / (effectiveTotal + needed)) * 100 < percent){
    needed++;
}

document.getElementById("result").value = needed + " classes attend karni padegi";

}