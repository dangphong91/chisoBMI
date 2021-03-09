function tinh() {
let can = document.getElementById("kg").value;
let kg = parseInt(can);
let cao = document.getElementById("m").value;
let m = parseInt(cao);
let bmi = kg / (m ^ 2);
document.getElementById("bmi").innerHTML = bmi;
if (bmi < 18.5) {
    document.getElementById("class").innerHTML = "Underweight"
    } else if (bmi < 25.0) {
        document.getElementById("class").innerHTML = "Nomal"
        } else if (bmi <30.0) {
            document.getElementById("class").innerHTML = "Overweight"
            } else {
                document.getElementById("class").innerHTML = "Obese"
            }
}