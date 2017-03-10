//custom function
function tipcalculator() {
    var billamo = document.getElementById("billamount").value, quality = document.getElementById("servicequality").value, people = document.getElementById("totalpeople").value;
    // validation
    
    if (billamo === "" || quality === 0 ) {
       window.alert("Please enter Required values");
        return;
    }
    if ( people === "" || people <= 1) {
        people = 1;
        document.getElementById("each").style.display = "none";
    } else {
        document.getElementById("each").style.display = "block";
    }
    var total = (billamo * quality)/people;
    total = Math.round(total * 100)/100;
    total = total.toFixed(2);
    document.getElementById("totaltip").style.display = "block";
    document.getElementById("tip").innerHTML=total;
}

//hide tip amount
document.getElementById("totaltip").style.display = "none";
 document.getElementById("each").style.display = "none";
//calulator
document.getElementById("cal").onclick=  function () {tipcalculator(); };