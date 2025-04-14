const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    if (this.scrollY > 0) {
        navbar.classList.remove('py-4');
        navbar.classList.add('shadow', 'py-3');
    } else {
        navbar.classList.add('py-4');
        navbar.classList.remove('shadow', 'py-3');
    }
});

function handleFormSubmit(event) {
    event.preventDefault(); // Prevent the default form submission
  
    // Collect form data
    const formData = new FormData(event.target);
  
    // Send form data using fetch
    fetch('https://formsubmit.co/dubeyratneshvar@gmail.com', {
      method: 'POST',
      body: formData,
    })
    .then(response => {
      if (response.ok) {
        // Display the success message
        document.getElementById('success-message').style.display = 'block';
    
         // Reset the form fields
      event.target.reset();
    } else {
        throw new Error('Network response was not ok.');
      }
    })
    .catch(error => {
      console.error('There was a problem with the fetch operation:', error);
    });
  }