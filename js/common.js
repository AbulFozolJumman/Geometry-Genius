// Function for get input Value by id
function getInputValueById(id) {
    const inputField = document.getElementById(id);
    const inputFieldString = inputField.value;
    const inputValue = parseFloat(inputFieldString);
    return inputValue;
}
// Function for change background color by hover
function changeBackgroundColor(id) {
    const cardElement = document.getElementById(id);
    function randomColor() {
        return Math.floor(Math.random() * 255);
    }
    cardElement.addEventListener('mouseenter', () => {
        cardElement.style.backgroundColor = 'rgba(' 
            + randomColor() + ',' + randomColor() 
            + ',' + randomColor() + '\)'
    });
};