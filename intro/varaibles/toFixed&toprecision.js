function onClickTofixed(){
    debugger;
    var InputNum=Number(document.getElementById("txtNum").value);
    var Digit=Number(document.getElementById("txtDigit").value);
    result=InputNum.toFixed(Digit);
    alert(result);
}
function onClickToprecision (){
    debugger;
    var InputNum=Number(document.getElementById("txtNum").value);
    var Digit=Number(document.getElementById("txtDigit").value);
    result=InputNum.toPrecision(Digit);
    alert(result);
}