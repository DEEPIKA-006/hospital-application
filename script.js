let otp;

function sendOTP() {
    const phoneNumber = document.getElementById('phoneNumber').value;
    if (phoneNumber.trim() === '') {
        alert('Please enter a phone number.');
        return;
    }

    // Simulating OTP generation and sending (replace with actual logic)
    otp = Math.floor(100000 + Math.random() * 900000);
    alert('OTP sent successfully!');

    // Hide send OTP section and show verify OTP section
    document.getElementById('sendOTP').style.display = 'none';
    document.getElementById('verifyOTP').style.display = 'block';
}

function verifyOTP() {
    const enteredOTP = document.getElementById('otp').value;
    if (enteredOTP.trim() === '') {
        alert('Please enter OTP.');
        return;
    }

    if (otp == enteredOTP) {
        document.getElementById('response').innerHTML = 'OTP verification successful!';
    } else {
        document.getElementById('response').innerHTML = 'OTP verification failed. Please try again.';
    }
}
