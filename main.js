function createTable(formData) {
    let myString = "<tr>";
    if (formData.get(week) == "one") {
        
    }
}

function generateWOD(formData) {
    let myString = "<tr><th>Exercise</th><th>Sets</th><th>Repetitions</th><tr>";
    //mystring += createTable(formData);
    document.getElementById("WOD").innerHTML = myString;
}

document.getElementById("workoutForm").addEventListener("click", function (event) {
    event.preventDefault()
});

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
document.getElementById("lift").addEventListener("change", console.log(
    "Lift listener called"
));

function showMaxRecordField() {
    
    let lift = document.getElementById("lift").value;
    let record = document.getElementsByClassName("record");
    let training = document.getElementById("trainingDay");
    let trainingSelected = training.options[training.selectedIndex].value;

    console.log(lift);

    if (lift != "" && trainingSelected != "max") {
        
        record[0].style.display = "block";
        record[1].style.display = "block";
    }
    else{
        record[0].style.display = "none";
        record[1].style.display = "none";
    }
}

document.getElementById("submisssion").addEventListener("click", function () {
    let myForm = document.getElementById('workoutForm');
    let formData = new FormData(myForm);
    //console.log(formData.get(" week"));
    for (var key of formData.keys()) {
        console.log(formData.get(key));
        console.log(key);
     }
    generateWOD(formData);
})