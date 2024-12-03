document.getElementById('travel-form').addEventListener('submit', function (e) {
    e.preventDefault();

    const start = document.getElementById('start').value;
    const destination = document.getElementById('destination').value;
    const vehicle = document.getElementById('vehicle').value;

    // Basic cost estimation logic
    let cost = 0;
    if (vehicle === 'car') cost = 500;
    else if (vehicle === 'bike') cost = 200;
    else cost = 1000;

    document.getElementById('result').innerText = `Estimated travel cost from ${start} to ${destination} using a ${vehicle}: ₹${cost}`;
});
