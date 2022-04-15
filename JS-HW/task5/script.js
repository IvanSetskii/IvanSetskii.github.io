var input = document.querySelector('input');
input.addEventListener("input", userText);
function userText () {
    duplicateField.textContent = input.value;
}

function funSub () {
    console.log(input.value);
    duplicateField.textContent = "";
    document.getElementById("text").value = "";
}
