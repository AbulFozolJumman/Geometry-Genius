// Triangle btn event handler
document.getElementById("triangle-btn").addEventListener('click', function () {
    // Calculation
    const b = getInputValueById("triangle-b");
    const h = getInputValueById("triangle-h");
    const triangleAreaString = (0.5 * b * h).toFixed(2);
    const triangleArea = parseFloat(triangleAreaString);
    // Validation
    if (b < 0 || h < 0 || isNaN(triangleArea)) {
        alert("Please input valid number");
        return;
    }
    // Set result by create a li
    const ol = document.getElementById("calculation-result")
    const li = document.createElement('li');
    li.innerHTML = `<p>Triangle <span id='triangle-result'></span>cm<sup>2</sup> <button class='btn btn-primary'>Convert to M<sup>2</sup></button></p>`;
    ol.appendChild(li);
    const setLi = document.getElementById('triangle-result')
    setLi.innerText = triangleArea;
});
//  Hover effect for triangle card
changeBackgroundColor("triangle-card");

// Rectangle btn event handler
document.getElementById("rectangle-btn").addEventListener('click', function () {
    // Calculation
    const w = getInputValueById("rectangle-w");
    const l = getInputValueById("rectangle-l");
    const rectangleAreaString = (w * l).toFixed(2);
    const rectangleArea = parseFloat(rectangleAreaString);
    // Validation
    if (w < 0 || l < 0 || isNaN(rectangleArea)) {
        alert("Please input valid number");
        return;
    }
    // Set result by create a li
    const ol = document.getElementById("calculation-result")
    const li = document.createElement('li');
    li.innerHTML = `<p>Rectangle <span id='rectangle-result'></span>cm<sup>2</sup> <button class='btn btn-primary'>Convert to M<sup>2</sup></button></p>`;
    ol.appendChild(li);
    const setLi = document.getElementById('rectangle-result')
    setLi.innerText = rectangleArea;
 });
 //  Hover effect for rectangle card
 changeBackgroundColor("rectangle-card");

// Parallelogram btn event handler
document.getElementById("parallelogram-btn").addEventListener('click', function () {
    // Calculation
    const b = getInputValueById("parallelogram-b");
    const h = getInputValueById("parallelogram-h");
    const parallelogramAreaString = (b * h).toFixed(2);
    const parallelogramArea = parseFloat(parallelogramAreaString);
    // Validation
    if (b < 0 || h < 0 || isNaN(parallelogramArea)) {
        alert("Please input valid number");
        return;
    }
    // Set result by create a li
    const ol = document.getElementById("calculation-result")
    const li = document.createElement('li');
    li.innerHTML = `<p>Parallelogram <span id='parallelogram-result'></span>cm<sup>2</sup> <button class='btn btn-primary'>Convert to M<sup>2</sup></button></p>`;
    ol.appendChild(li);
    const setLi = document.getElementById('parallelogram-result')
    setLi.innerText = parallelogramArea;
});
//  Hover effect for parallelogram card
changeBackgroundColor("parallelogram-card");

// Rhombus btn event handler
document.getElementById("rhombus-btn").addEventListener('click', function () {
    // Calculation
    const d1 = getInputValueById("rhombus-d1");
    const d2 = getInputValueById("rhombus-d2");
    const rhombusAreaString = (0.5 * d1 * d2).toFixed(2);
    const rhombusArea = parseFloat(rhombusAreaString);
    // Validation
    if (d1 < 0 || d2 < 0 || isNaN(rhombusArea)) {
        alert("Please input valid number");
        return;
    }
    // Set result by create a li
    const ol = document.getElementById("calculation-result")
    const li = document.createElement('li');
    li.innerHTML = `<p>Rhombus <span id='rhombus-result'></span>cm<sup>2</sup> <button class='btn btn-primary'>Convert to M<sup>2</sup></button></p>`;
    ol.appendChild(li);
    const setLi = document.getElementById('rhombus-result')
    setLi.innerText = rhombusArea;
 });
 //  Hover effect for rhombus card
 changeBackgroundColor("rhombus-card");

// Pentagon btn event handler
document.getElementById("pentagon-btn").addEventListener('click', function () {
    // Calculation
    const p = getInputValueById("pentagon-p");
    const b = getInputValueById("pentagon-b");
    const pentagonAreaString = (0.5 * p * b).toFixed(2);
    const pentagonArea = parseFloat(pentagonAreaString);
    // Validation
    if (p < 0 || b < 0 || isNaN(pentagonArea)) {
        alert("Please input valid number");
        return;
    }
    // Set result by create a li
    const ol = document.getElementById("calculation-result")
    const li = document.createElement('li');
    li.innerHTML = `<p>Pentagon <span id='pentagon-result'></span>cm<sup>2</sup> <button class='btn btn-primary'>Convert to M<sup>2</sup></button></p>`;
    ol.appendChild(li);
    const setLi = document.getElementById('pentagon-result')
    setLi.innerText = pentagonArea;
});
//  Hover effect for pentagon card
changeBackgroundColor("pentagon-card");

// Ellipse btn event handler
document.getElementById("ellipse-btn").addEventListener('click', function () {
    // Calculation
    const a = getInputValueById("ellipse-a");
    const b = getInputValueById("ellipse-b");
    const ellipseAreaString = (3.14222 * a * b).toFixed(2);
    const ellipseArea = parseFloat(ellipseAreaString);
    // Validation
    if (a < 0 || b < 0 || isNaN(ellipseArea)) {
        alert("Please input valid number");
        return;
    }
    // Set result by create a li
    const ol = document.getElementById("calculation-result")
    const li = document.createElement('li');
    li.innerHTML = `<p>Ellipse <span id='ellipse-result'></span>cm<sup>2</sup> <button class='btn btn-primary'>Convert to M<sup>2</sup></button></p>`;
    ol.appendChild(li);
    const setLi = document.getElementById('ellipse-result')
    setLi.innerText = ellipseArea;
 });
 //  Hover effect for ellipse card
 changeBackgroundColor("ellipse-card");
//  Hover effect for result card
changeBackgroundColor("result-card");