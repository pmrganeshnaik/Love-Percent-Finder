document.getElementById("submitBtn").addEventListener("click", function() {
    let boyNameInput = document.getElementById("boyName");
    let grilNameInput = document.getElementById("grilName");

    // Retrieve input values
    let boyName = boyNameInput.value.trim();
    let grilName = grilNameInput.value.trim();

    // Clear the result container
    let resultContainer = document.getElementById("resultContainer");
    resultContainer.innerHTML = '';

    // Check if boyName or grilName is empty
    if (!boyName && !grilName) {
        let errorElement = document.createElement("h5");
        errorElement.innerText = "Please enter both names!";
        resultContainer.appendChild(errorElement);
        errorElement.className = "error";
    } 
    
    else if (!boyName) {
        let errorElement = document.createElement("h5");
        errorElement.innerText = "Please enter the Heart 1 name!";
        resultContainer.appendChild(errorElement);
        errorElement.className = "error";
    } 
    
    else if (!grilName) {
        let errorElement = document.createElement("h5");
        errorElement.innerText = "Please enter the Heart 2 name!";
        resultContainer.appendChild(errorElement);
        errorElement.className = "error";
    }
    
    else if (boyName === grilName) {
        let errorElement = document.createElement("h5");
        errorElement.innerText = "You entered the same name!";
        resultContainer.appendChild(errorElement);
        errorElement.className = "error";
    } 
    
    else {
        // Create and append the combined name element
        let combinedNameElement = document.createElement("h1");
        combinedNameElement.innerText = `${boyName} 💕 ${grilName}`;
        resultContainer.appendChild(combinedNameElement);
        combinedNameElement.className = "outputName";

        // Generate and append a random number
        let randomNumber = Math.floor(Math.random() * 100) + 1;
        let randomPercentageElement = document.createElement("h3");
        randomPercentageElement.innerText = `${randomNumber}%`;
        resultContainer.appendChild(randomPercentageElement);

        // Clear the input values
        boyNameInput.value = '';
        grilNameInput.value = '';
    }
});
