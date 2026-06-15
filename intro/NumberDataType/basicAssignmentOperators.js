function addAssign() {
    let x = (document.getElementById("num").value);

    x += 5;

    document.getElementById("output").innerHTML =
        "<h3>+= Operator</h3>" +
        "Result: " + x +""
}

function subAssign() {
    let x =(document.getElementById("num").value);

    x -= 2;

    document.getElementById("output").innerHTML =
        "<h3>-= Operator</h3>" +
        "Result: " + x +""
       
}

function mulAssign() {
    let x = (document.getElementById("num").value);

    x *= 3;

    document.getElementById("output").innerHTML =
        "<h3>*= Operator</h3>" +
        "Result: " + x +""
}

function divAssign() {
    let x = (document.getElementById("num").value);

    x /= 2;

    document.getElementById("output").innerHTML =
        "<h3>/= Operator</h3>" +
        "Result: " + x +""
}