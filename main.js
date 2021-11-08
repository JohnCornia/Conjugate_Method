function generateWOD(formData) {
    let myString = "<tr><th>Exercise</th><th>Sets</th><th>Repetitions</th><tr>";
    
    document.getElementById("WOD").innerHTML = myString;
}

document.getElementById("workoutForm").addEventListener("click", function(event){
    event.preventDefault()
  });

  document.getElementById("submisssion").addEventListener("click", function () {
    let myForm = document.getElementById('workoutForm');
    let formData = new FormData(myForm);
    for (var key of formData.keys()) {
        console.log(formData.get(key));
     }
     generateWOD(formData);
  })