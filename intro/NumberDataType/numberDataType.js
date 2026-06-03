function onClickAdd() {

    let firstNumber =
        Number(document.getElementById("txtFirstNumber").value);

    let secondNumber =
        Number(document.getElementById("txtSecondNumber").value);

    let sum = firstNumber + secondNumber;

    document.getElementById("result").innerHTML =
        "Result = " + sum;
}