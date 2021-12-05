// zombify the input string
function convertString() {
    var inputStringValue = document.getElementById("stringInput").value;
    document.getElementById("stringOutput").innerHTML = zombify(inputStringValue);
}

// Throw errors beside the convert button (unused for the time being)
function throwError(errorString) {
    document.getElementById("errorText").innerHTML = errorString;
}

function copyText() {
    var inputStringValue = document.getElementById("stringInput").value;
    var output = zombify(inputStringValue)
    navigator.clipboard.writeText(output);
}