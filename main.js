const prdt = ["wijn", "citroen", "lime", "tomaten"];
let i, len, text;
for (i = 0, len = prdt.length, text = ""; i < len; i++) {
  text += prdt[i] + "<br>";
}
document.getElementById("discount3").innerHTML = text;

document.getElementById("myBtn").addEventListener("click", displayDate);
function displayDate() {
    document.getElementById("demo").innerHTML = Date();
  }