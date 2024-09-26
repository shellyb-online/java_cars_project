const apiKey = 't8r66jTVyOqNYuMoQh8hnQ==2N3aPNJ3ked5tvha'; 

function fetchCarData() {
    const carModel = document.getElementById("car-model").value;
    const url = `https://api.api-ninjas.com/v1/cars?model=${carModel}`;

    fetch(url, {
        method: 'GET',
        headers: {
            'X-Api-Key': apiKey
        }
    })
    .then(response => response.json())
    .then(data => {
        displayCarData(data);
    })
    .catch(error => {
        console.error('Error fetching car data:', error);
        document.getElementById("car-details").innerHTML = "<p>Car data not found. Please try a different model.</p>";
    });
}

function displayCarData(cars) {
    const carDetailsDiv = document.getElementById("car-details");
    carDetailsDiv.innerHTML = '';  // Clear previous results

    if (cars.length > 0) {
        const car = cars[0];  // Display first result
        carDetailsDiv.innerHTML = `
            <h2>${car.make} ${car.model}</h2>
            <p><strong>Year:</strong> ${car.year}</p>
            <p><strong>Transmission:</strong> ${car.transmission}</p>
            <p><strong>Engine:</strong> ${car.engine_type}</p>
            <p><strong>Fuel Type:</strong> ${car.fuel_type}</p>
            <p><strong>Highway MPG:</strong> ${car.mpg_highway}</p>
            <p><strong>City MPG:</strong> ${car.mpg_city}</p>
        `;
    } else {
        carDetailsDiv.innerHTML = '<p>No car data available for the entered model.</p>';
    }
}
