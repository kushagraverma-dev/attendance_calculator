function calculate(){

let total = parseInt(document.getElementById("totalClasses").value);
let na = parseInt(document.getElementById("naClasses").value);
let present = parseInt(document.getElementById("presentClasses").value);
let percent = parseFloat(document.getElementById("requiredPercent").value);

if(isNaN(total) || isNaN(na) || isNaN(present) || isNaN(percent)){
    alert("Please fill all fields");
    return;
}

let effectiveTotal = total - na;

let needed = 0;

while(((present + needed) / (effectiveTotal + needed)) * 100 < percent){
    needed++;
}

document.getElementById("result").value = needed + " classes attend karni padegi";

}
