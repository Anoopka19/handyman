const contactForm = document.getElementById('contactForm');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const complaintInput = document.getElementById('complaint');
const nameError = document.getElementById('nameError');
const emailError = document.getElementById('emailError');
const complaintError = document.getElementById('complaintError');

contactForm.addEventListener('submit', function(event) {
  let valid = true;
  const nameRegex = /^[A-Za-z\s]+$/;
  if (!nameRegex.test(nameInput.value.trim())) {
    nameError.textContent = 'Please enter a valid name (letters and white spaces only).';
    nameError.style.color = 'red';
    valid = false;
  } else {
    nameError.textContent = '';
  }
  if (emailInput.value.trim() === '') {
    emailError.textContent = 'Please enter your email.';
    emailError.style.color = 'red';
    valid = false;
  } else {
    emailError.textContent = '';
  }
  if (complaintInput.value.trim() === '') {
    complaintError.textContent = 'Please enter your complaint.';
    complaintError.style.color = 'red';
    valid = false;
  } else {
    complaintError.textContent = '';
  }

  if (!valid) {
    event.preventDefault();
  }
});
