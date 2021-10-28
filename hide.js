function hideDivElement() {
    let x = document.getElementById("records");
    let y = document.getElementById("lifts");
    let z = document.getElementById("WOD");
    const weekRadioList = document.querySelectorAll(".weekRadio");
    const trainingRadioList = document.querySelectorAll(".trainingRadio");

    for (let index = 0; index < weekRadioList.length || weekRadioList[index - 1].checked; index++) {
        if (weekRadioList[index].checked) {
            console.log(weekRadioList[index]);
            for (let index = 0; index < trainingRadioList.length || weekRadioList[index - 1].checked; index++) {
                if (trainingRadioList[i].checked) {
                    trainingRadioList[i]
                    x.style.display = "block";
                }
                else
                    x.style.display="none";
            }
        }
        else
                    x.style.display="none";
        
    }
}

export{hideDivElement}

  /*if () {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}*/