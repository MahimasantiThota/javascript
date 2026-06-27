function onClickAdd() {
    let firstValue = (document.getElementById("txtFirstValue").value);
    let secondValue = document.getElementById("txtSecondValue").value;

    alert(isNaN(firstValue));
    alert(isNaN(secondValue));

    if (!isNaN(firstValue) && !isNaN(secondValue)) {

        alert(Number(firstValue) + Number(secondValue))
    }

    else {
        alert(firstValue+secondValue)

    }
}