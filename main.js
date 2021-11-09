function createTable(formData) {
    //do psuedocode for this
}

function generateWOD(formData) {
    let myString = "<tr><th>Exercise</th><th>Sets</th><th>Repetitions</th><tr>";
    createTable(formData);
    document.getElementById("WOD").innerHTML = myString;
}

document.getElementById("workoutForm").addEventListener("click", function(event){
    event.preventDefault()
  });

  document.getElementById("submisssion").addEventListener("click", function () {
    let myForm = document.getElementById('workoutForm');
    let formData = new FormData(myForm);
    //console.log(formData.get(" week"));
    /*for (var key of formData.keys()) {
        console.log(formData.get(key));
        console.log(key);
     }*/
     generateWOD(formData);
  })