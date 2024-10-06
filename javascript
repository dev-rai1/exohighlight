function build() {

  var type = document.star_type_form.star_type.value;
  if (type == "gasgiant") {
    document.getElementById('result').src = "./gasgiant.jfif";
  } else if (type == "neptunian") {
    document.getElementById('result').src = "./neptunian.jfif";
  } else if (type == "superearth") {
    document.getElementById('result').src = "./superearth.jfif";
  } else if (type == "terrestrial") {
    document.getElementById('result').src = "./terrestrial.jfif";
  }
  
  var mass = document.getElementById('mass').value;
  console.log(mass);
  var massActual = mass * 5.972 * 10e24;
  console.log(massActual);
  document.getElementById('mass-result').innerHTML = "The planet weighs " + massActual + " kg!";
  
  var dist = document.getElementById('distance').value;
  var lightYears = dist / (5.879 * 10e12);
  document.getElementById('distance-result').innerHTML = "The planet is " + lightYears + " light years from its star!";

}
