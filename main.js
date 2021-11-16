function calculateResistance(percentResistance, record) {
    return ((percentResistance + 25) / 100) * record;
}

document.getElementById("workoutForm").addEventListener("click", function (event) {
    event.preventDefault()
});

function generateWOD(formData) {
    /*for (var key of formData.keys()) {
        console.log(formData.get(key));
     }*/
    let myString = "<tr><th>Exercise</th><th>Resistance</th><th>Sets</th><th>Repetitions</th></tr>";

    let record = document.getElementById("maxRecord").value;
    let lift = document.getElementById("lift").value;
    let resistance;
    let sets;
    let repetitions;

    if (formData.get("trainingDay") == "max") {
        sets = 1;
        repetitions = 1;
        resistance = "\\";
    }
    else if (formData.get("trainingDay") == "dynamicLower") {
        sets = 10;
        repetitions = 2;
        if (formData.get("week") == "one") {
            resistance = calculateResistance(50, record);
        }
        else if (formData.get("week") == "two") {
            resistance = calculateResistance(55, record);
        }
        else {
            resistance = calculateResistance(60, record);
        }
    }
    else if (formData.get("trainingDay") == "dynamicUpper") {
        sets = 9;
        repetitions = 3;
        if (formData.get("week") == "one") {
            calculateResistance(50, record);
        }
        else if (formData.get("week") == "two") {
            resistance = calculateResistance(55, record);
        }
        else {
            resistance = calculateResistance(60, record);
        }
    }

    myString += "<tr><td>" + lift + "</td><td>" 
    + resistance + "</td><td>" + sets + "</td><td>" 
    + repetitions + "</td></tr>";

    document.getElementById("WOD").innerHTML = myString;
}

document.getElementById("submisssion").addEventListener("click", function () {
    let myForm = document.getElementById('workoutForm');
    let formData = new FormData(myForm);

    generateWOD(formData);
})