const document =require('booking-form');
 document.getElementById('booking-form').addEventListener('submit', function(event) {
    event.preventDefault();
    let carMake = document.getElementById('car-make').value;
    let serviceType = document.getElementById('service-type').value;
    let appointmentDate = document.getElementById('appointment-date').value;

    if (!carMake || !serviceType || !appointmentDate) {
        alert("Please fill in all the fields");
        return;
    }

    // Call to backend API to book an appointment
    fetch('/api/book-service', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            carMake: carMake,
            serviceType: serviceType,
            appointmentDate: appointmentDate
        })
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById('response').innerText = "Booking Successful!";
    })
    .catch(error => {
        console.error("Error:", error);
        document.getElementById('response').innerText = "Error booking service.";
    });
});
