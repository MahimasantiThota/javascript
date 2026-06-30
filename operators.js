function checkData() {
    let age = document.getElementById("age").value;
    let gender = document.getElementById("gender").value;

    let result = "";

    result += "Original Age: " + age + "<br>";

    age++;
    result += "After Increment (++): " + age + "<br>";


    age--;
    result += "After Decrement (--): " + age + "<br>";


    result += "age > 10 : " + (age > 10) + "<br>";
    result += "age < 18 : " + (age < 18) + "<br>";
    result += "age == 12 : " + (age == 12) + "<br>";
    result += "age === 12 : " + (age === 12) + "<br>";
    result += "gender === 'female' : " + (gender === "female") + "<br><br>";


    if (age >= 12 && gender === "female") {
        result += "The person is a 12-year-old female.";
    } else {
        result += "Condition not matched.";
    }
    document.getElementById("output").innerHTML = result;
}