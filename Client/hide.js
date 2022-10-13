/*

document.getElementById("week").addEventListener("change", function () {
    let training = document.getElementsByClassName("training");
    training[0].style.display = "block";
    training[1].style.display = "block";
})

document.getElementById("trainingDay").addEventListener("change", function () {
    let previously = document.getElementsByClassName("previously");
    let proximately = document.getElementsByClassName("proximately");
    let training = document.getElementById("trainingDay");
    let trainingSelected = training.options[training.selectedIndex].value;

    if (trainingSelected == "dynamic") {
        previously[0].style.display = "block";
        previously[1].style.display = "block";
        proximately[0].style.display = "none";
    }
    else{
        proximately[0].style.display = "block";
        proximately[1].style.display = "block"; 
        previously[0].style.display = "none";
    }
    showMaxRecordField();
})

//document.getElementById("trainingDay").addEventListener("change", showMaxRecordField());
document.getElementById("lift").addEventListener("input", console.log(
    "Lift listener called"
));

function showMaxRecordField() {
    
    let lift = document.getElementById("lift").value;
    let record = document.getElementsByClassName("record");
    let training = document.getElementById("trainingDay");
    let trainingSelected = training.options[training.selectedIndex].value;

    if (lift != "" && trainingSelected != "max") {
        
        record[0].style.display = "block";
        record[1].style.display = "block";
    }
    else{
        record[0].style.display = "none";
        record[1].style.display = "none";
    }
}*/