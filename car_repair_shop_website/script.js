const bookingForm = document.getElementById("bookingForm");
const successOverlay = document.getElementById("successOverlay");
const msg = document.getElementById("msg");
const okBtn = document.getElementById("okBtn");

//set date validation
const datePicker = document.querySelector('input[type="date"]');
const todayStr = new Date().toISOString().split('T')[0];
datePicker.setAttribute('min', todayStr);

//scroll to booking form
function scrollToBooking() {
    document.getElementById("booking").scrollIntoView({
        behavior: "smooth"
    });
}

// When form is submitted
bookingForm.addEventListener("submit", function(e) {
    e.preventDefault();
    
    // Set text and show the overlay
    msg.innerText = "Thank you for booking our services! We will contact you soon.";
    successOverlay.style.display = "flex"; // Using flex to center content
    
    this.reset();
});

// When OK button is clicked
okBtn.addEventListener("click", function() {
    successOverlay.style.display = "none";
});