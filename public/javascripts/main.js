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

let fitResults = {
    intake : 0,
    burn : 0,
    valid : function(){
        if(isNaN(this.intake) || isNaN(this.burn)){
            return false;
        } else if (this.intake <= 0 || this.burn < 0){
            return false;
        } else {
            return true;
        }
    },
     result : function(){
        return(this.intake - this.burn);
    }
   
};




document.addEventListener("DOMContentLoaded", function (event) {
    
document.getElementById("results").style.display = "none";

document.getElementById("submit").addEventListener("click", function() {
 bmi.weight = parseInt(document.getElementById("weight").value);
 bmi.height = parseInt(document.getElementById("height").value);
if(!bmi.isValid()){
    alert("Both values must be numeric and greater than zero");    
} else {
    document.getElementById("bmi").value = bmi.calculate().toFixed(2);
    document.getElementById("results").style.display = "block";
}
});

document.getElementById("clear").addEventListener("click", function(){

    document.getElementById("weight").value = "";
    document.getElementById("height").value = "";
    document.getElementById("bmi").value = "";
    document.getElementById("weight").focus();
});
    document.getElementById("weight").focus();


    document.getElementById("finalResults").style.display = "none";

    document.getElementById("finalRes").addEventListener("click", function() {
        fitResults.intake = parseInt(document.getElementById("intake").value);
        fitResults.burn = parseInt(document.getElementById("burn").value);
       if(!fitResults.valid()){
           alert("Both values must be numeric and intake must be greater than zero");          
       } else {
        document.getElementById("intakeRes").value = fitResults.intake;
        document.getElementById("burnRes").value = fitResults.burn;
           document.getElementById("fitness").value = fitResults.result();
          
           if(fitness.value > 2000){
            document.getElementById("message").value = "Your calories intake is higher than a normal person, go do some exercise!";
           }
           else {              
               document.getElementById("message").value = "You are following a healthy diet, keep up the good work.";
           }
           document.getElementById("finalResults").style.display = "block";
       }
       });

document.getElementById("inputClear").addEventListener("click", function(){

    document.getElementById("intake").value = "";
    document.getElementById("burn").value = "";
    document.getElementById("intake").focus();
});

    document.getElementById("intake").focus();

});
