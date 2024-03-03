function calculateDosage() {
  var weight = parseFloat(document.getElementById("weight").value);

  if (isNaN(weight)) {
        document.getElementById('result').innerText = 'Palun sisesta kaal';
    return;
}

  var leaflet = document.getElementById("leaflet").value;
  var dosage;
  var dosageInstructions;

  switch (leaflet) {
    case "efferalgan":
      dosage = weight * 15;
      dosageInstructions = dosage + "mg ühekordse annusena iga 6 tunni tagant kuni 4 korda ööpäevas" 
      break;
    case "ibustar":
      dosage = weight * 10;
      dosageInstructions = dosage + "mg ühekordse annusena iga 8 tunni tagant kuni 3 korda ööpäevas" 
      break;
    case "ibustar-forte":
      dosage = weight * 10;
      dosageInstructions = dosage + "mg ühekordse annusena iga 8 tunni tagant kuni 3 korda ööpäevas" 
      break;
    case "nurofen-orange":
      dosage = weight * 10;
      dosageInstructions = dosage + "mg ühekordse annusena iga 8 tunni tagant kuni 3 korda ööpäevas" 
      break;
    case "nurofen-strawberry":
      dosage = weight * 10;
      dosageInstructions = dosage + "mg ühekordse annusena iga 8 tunni tagant kuni 4 korda ööpäevas" 
      break;
    case "panadol":
      dosage = weight * 12;
      dosageInstructions = dosage + "mg ühekordse annusena iga 6 tunni tagant kuni 4 korda ööpäevas" 
      break;
      default:
      dosageInstructions = "Proovi uuesti";
  }
  document.getElementById("result").innerText = dosageInstructions;
  dosageInstructions += "STOP";

}