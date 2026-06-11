var nandGate = [
    [1, 5, 0],
    [0, 1, 0],
    [1, 3, 6],
    [1, 1, 1]
];
function onClick2dArray() {
    debugger;
    var inputIndex = Number(document.getElementById("txtInputIndex").value);
    var secondIndex = Number(document.getElementById("txtSecondIndex").value);
    document.getElementById("pResult").innerHTML = nandGate[inputIndex][secondIndex];
}