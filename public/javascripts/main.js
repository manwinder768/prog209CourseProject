let bmi = {
    weight : 0,
    height : 0,
    isValid : function() {
        if (isNaN(this.weight) || isNaN(this.height)){
            return false;
        } else if (this.weight <= 0 || this.height <= 0){
            return false;
        } else {
            return true;
        }
    },
    calculate : function() {
        return (703 * this.weight / (this.height * this.height));
    }
};

let bmiArray = [];
let bRecord = function(pName, pWeight, pHeight, pBmi){
    this.Name = pName;
    this.Weight = pWeight;
    this.Height = pHeight;
    this.Bmi = pBmi;
}

document.addEventListener("DOMContentLoaded", function (event) {
    
// document.getElementById("results").style.display = "none";

document.getElementById("submit").addEventListener("click", function() {
 bmi.weight = parseInt(document.getElementById("weight").value);
 bmi.height = parseInt(document.getElementById("height").value);
if(!bmi.isValid()){
    alert("Both values must be numeric and greater than zero");    
} else {
  //  bmi.calculate();
     document.getElementById("bmi").value = bmi.calculate().toFixed(2);
    // document.getElementById("results").style.display = "block";
    var pName  = document.getElementById("name").value;
    var pWeight = document.getElementById("weight").value;
    var pHeight = document.getElementById("height").value;
    var pBmi = document.getElementById("bmi").value;

    bmiArray.push(new bRecord(pName, pWeight, pHeight, pBmi));
    console.log(bmiArray);

    thisElement = document.getElementById("bmiList");   

    thisElement.innerHTML = "";
    bmiArray.forEach(function(item, index){
        let li2 = document.createElement("li");
        thisElement.appendChild(li2);
        li2.innerHTML = li2.innerHTML +(index+1)+ " "+ item.Name+" " +item.Weight+"lbs " + item.Height+"Inches " + item.Bmi;
})}
});

document.getElementById("clear").addEventListener("click", function(){

    document.getElementById("name").value = "";
    document.getElementById("weight").value = "";
    document.getElementById("height").value = "";
    document.getElementById("bmi").value = "";
    document.getElementById("name").focus();
});
    document.getElementById("name").focus();

    // create an array of records
    let myArray = [];
    let newRecord = function(pDate, pDay, pIntake, pBurn){
        this.Date = pDate;
        this.Day = pDay;
        this.Intake = pIntake;
        this.Burn = pBurn;
    }

    document.getElementById("addResult").addEventListener("click", function() {
       var pDate  = document.getElementById("date").value;
       var pDay = document.getElementById("day").value;
       var pIntake = document.getElementById("intake").value;
       var pBurn = document.getElementById("burn").value;

       myArray.push(new newRecord(pDate, pDay, pIntake, pBurn));
       console.log(myArray);


      whichElement = document.getElementById("recordList");   

        whichElement.innerHTML = "";
        myArray.forEach(function(item, index){
            let li = document.createElement("li");
            whichElement.appendChild(li);
            li.innerHTML = li.innerHTML +(index+1)+ " "+ item.Date+" " +item.Day+" " + item.Intake+" " + item.Burn;
            
        });
    });

   

document.getElementById("inputClear").addEventListener("click", function(){

    document.getElementById("date").value= "";
    document.getElementById("day").value= "";
    document.getElementById("intake").value = "";
    document.getElementById("burn").value = "";
    document.getElementById("date").focus();
});

    document.getElementById("date").focus();

});

