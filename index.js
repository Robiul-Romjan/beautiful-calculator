const inputField = document.getElementById("input-field");

const calculation = (input) => {
    inputField.value += input;
};

const equation = () => {
    inputField.value = eval(inputField.value)
};

const clearAll = () => {
    inputField.value = "";
};

const deleteValue = () => {
   inputField.value = inputField.value.slice(0, -1);
}