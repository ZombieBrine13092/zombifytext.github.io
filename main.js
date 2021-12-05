// Call zombify with input string
function convertString() {

    var inputStringValue = document.getElementById("stringInput").value;

    document.getElementById("stringOutput").innerHTML = zombify(inputStringValue);
}

// Throw errors beside the convert button
function throwError(errorString) {
    document.getElementById("errorText").innerHTML = errorString;
}