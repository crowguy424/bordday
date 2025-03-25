const actionButton = document.getElementById('cardo');
//const feedbackText = document.getElementById('feedbackText');

// Function to handle button press


// Add event listeners for both touch and click events
actionButton.addEventListener('click');
actionButton.addEventListener('touchstart', function(e) {
    // Prevent the touch event from causing any additional actions (like scrolling)
    e.preventDefault();
    
});