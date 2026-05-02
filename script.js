function calculate(){

let total = parseInt(document.getElementById("totalClasses").value);
let naInput = document.getElementById("naClasses").value;
let present = parseInt(document.getElementById("presentClasses").value);
let percent = parseFloat(document.getElementById("requiredPercent").value);

let na = naInput === "" ? 0 : parseInt(naInput);

if(isNaN(total) || isNaN(present) || isNaN(percent)){
    alert("Please fill all required fields");
    return;
}

let effectiveTotal = total - na;

if(effectiveTotal <= 0){
    alert("Invalid NA or Total Classes");
    return;
}

let needed = 0;

while(((present + needed) / (effectiveTotal + needed)) * 100 < percent){
    needed++;
}

document.getElementById("result").value = needed + " classes attend karni padegi";

}
