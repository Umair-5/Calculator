var displayField = document.getElementById("displayfield");
var buttonValue = document.getElementsByTagName("button")
function display(e) {
    displayField.value += e;
}
function eq() {
    try {
        displayField.value = eval(displayField.value);
    } catch (error) {
        displayField.value = "Error";
    }
}
function allClear() {
    displayField.value = ""
}
function Clear() {
    var currentValue = displayField.value;
    displayField.value = currentValue.substring(0, currentValue.length - 1);

}
function generateTable() {
    var table = document.getElementById("tableNum").value;
    var tableRange = document.getElementById("tableRange").value;
    var tableContent = "";
    for (i = 1; i <= tableRange; i++) {
        tableContent += table + " x " + i + " = " + table * i + "<br>";
    }
    document.getElementById("table").innerHTML = tableContent;
    document.getElementById("tableNum").value = "";
    document.getElementById("tableRange").value = "";
    var footer = document.getElementById("foot");

}

function sidebar() {
    var checkBox = document.getElementById("toggle-btn");
    var sidebar = document.getElementById("sidebar")
    var bar = document.getElementById("switch")

    if (checkBox.checked = true) {
        checkBox.style.display = "none"
        bar.style.display = "none"
        sidebar.style.left = "0vw"
    }

}
function sidebarHide() {
    var checkBox = document.getElementById("toggle-btn");
    var sidebar = document.getElementById("sidebar")
    var cross = document.getElementById("cancel-checkbox")
    var bar = document.getElementById("switch")

    if (cross.checked = true) {
        bar.style.display = "block"
        checkBox.style.display = "none"
        sidebar.style.left = "-40vw"
    }

}
function age() {
    var ageField = document.getElementById("ageField")
    var dob = new Date(document.getElementById("dob").value)
    var currentDate = new Date().getTime();
    var age = currentDate - dob.getTime()
    var convertAge = Math.floor(age / (1000 * 60 * 60 * 24 * 365));
    ageField.value = `You are ${convertAge} years old`
}