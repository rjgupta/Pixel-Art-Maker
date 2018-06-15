// When size is submitted by the user, call makeGrid()
document.addEventListener('submit',makeGrid);
/*
take the inputHeight as the table rows and the inputWidth as the table columns
*/

function makeGrid(e) {
    // Select color input
    // const colorPicked = document.getElementById('colorPicker').value;
    // Select size input
    //height (tr)
    let inputHeight = document.getElementById('inputHeight').value;
    // console.log(inputHeight);
    //width (td)
    let inputWidth = document.getElementById('inputWidth').value;
    // console.log(inputWidth);
    // canvas
    let pixelCnvs = document.getElementById('pixelCanvas');
    pixelCnvs.innerHTML = '';
    // adding tr and td to the table
    let tableBody = document.createElement('tbody');
    for(let i = 0; i < inputHeight; i++) {
        let tableRow = document.createElement('tr');
        for (let j = 0; j < inputWidth; j++) {
            let tableColumn = document.createElement('td');
            tableColumn.appendChild(document.createTextNode(''));
            tableRow.appendChild(tableColumn);
        }
        tableBody.appendChild(tableRow);
    }
    pixelCnvs.appendChild(tableBody);
    e.preventDefault();

}


// change pixel colors as per user.
$('body').on('click', 'td', function () {
    var colorPicked = document.getElementById('colorPicker').value;
    $(this).css('background-color', colorPicked);
});