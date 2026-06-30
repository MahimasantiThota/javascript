function checkBranch() {
    let branch = document.getElementById("branch").value;

    if (branch === "ECE" || branch === "AIML") {
        document.getElementById("result").innerHTML =
            "Eligible for Placement Drive";
    } else {
        document.getElementById("result").innerHTML =
            "Not Eligible for Placement Drive";
    }
}