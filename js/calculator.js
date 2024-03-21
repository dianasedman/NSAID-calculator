document.querySelector('.options').addEventListener('click', function(event) {
  var clickedOption = event.target.closest('.option');
  if (clickedOption) {
    selectOption(clickedOption);
  }
});

function selectOption(option) {
  var options = document.querySelectorAll('.option');
  options.forEach(function(opt) {
    opt.classList.remove('selected');
  });
  // Adding selected class to the clicked option
  option.classList.add('selected');
}

function calculateDosage() {
  var weight = parseFloat(document.getElementById('weight').value);

  // if weight is not a number
  if (isNaN(weight)) {
    document.getElementById('result').innerText = 'Palun sisesta kaal';
    return;
  }

  var selectedOption = document.querySelector('.options .selected');
  if (!selectedOption) {
    document.getElementById('result').innerText = 'Palun vali toode';
    return;
  }

  var leaflet = selectedOption.querySelector('.leaflet').getAttribute('data-value');


  var minDosage, maxDosage, dailyDosage, mlDosage, minMlDosage;
  var instruction;

  if (weight < 5) {
    result = "Liiga väike kaal, konsulteeri arstiga";
  } else if (weight > 40) {
    result = "Kaalu tablettide võimalust";
  } else {

    // Calculate based on selected leaflet value
    switch (leaflet) {
      case "efferalgan":
        minDosage = weight * 10;
        maxDosage = weight * 15;
        dailyDosage = weight * 60;
        mlDosage = maxDosage / 30;
        minMlDosage = minDosage / 30;
        instruction = " mg ühekordse annusena iga 4-6 tunni tagant kuni 4 korda ööpäevas";
        break;
      case "ibustar":
        minDosage = weight * 7;
        maxDosage = weight * 10;
        dailyDosage = weight * 30;
        mlDosage = maxDosage / 20;
        minMlDosage = minDosage / 20;
        instruction = " mg ühekordse annusena iga 6-8 tunni tagant kuni 3 korda ööpäevas";
        break;
      case "ibustar-forte":
        minDosage = weight * 7;
        maxDosage = weight * 10;
        dailyDosage = weight * 30;
        mlDosage = maxDosage / 40;
        minMlDosage = minDosage / 40;
        instruction = " mg ühekordse annusena iga 6-8 tunni tagant kuni 3 korda ööpäevas";
        break;
      case "nurofen-orange":
      case "nurofen-strawberry":
        minDosage = weight * 7;
        maxDosage = weight * 10;
        dailyDosage = weight * 30;
        mlDosage = maxDosage / 40;
        minMlDosage = minDosage / 40;
        instruction = " mg ühekordse annusena iga 6-8 tunni tagant kuni 3 korda ööpäevas";
        break;
      case "panadol":
        minDosage = weight * 10;
        maxDosage = weight * 15;
        dailyDosage = weight * 60;
        mlDosage = maxDosage / 24;
        minMlDosage = minDosage / 24;
        instruction = " mg ühekordse annusena iga 4-6 tunni tagant kuni 4 korda ööpäevas";
        break;
    
      //if leaflet is unknown
      default:
        document.getElementById('result').innerText = 'Proovi uuesti';
        return;
    }
  
  

    var result = "<strong>Soovituslik ühekordne annus:</strong>  " + mlDosage.toFixed(1) + "ml<br>";
    result += "<strong>Annustamine:</strong>" + minDosage.toFixed(1) + " mg (" + (minMlDosage).toFixed(1) + "ml)" + " - " + maxDosage.toFixed(1) + "mg (" + (mlDosage).toFixed(1) + "ml) ";
    result += instruction + "<br>";
    result += "<strong>Maks. ööpäevane annus: </strong>" + dailyDosage.toFixed(1) + "mg";
  }
    document.getElementById("result").innerHTML = result;
  
  
}
