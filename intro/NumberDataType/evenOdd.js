function onClickNumber() {
    debugger;
    var number = Number(document.getElementById("txtinputNumber").value);
    var result = document.getElementById("pResult");

    if (number % 2 == 0) {
        result.innerText = number + " is Even";
    } else {
        result.innerText = number + " is Odd";
    }
}