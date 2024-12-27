document.getElementById('imageForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    // Show loading overlay
    document.getElementById('loadingOverlay').style.display = 'flex';

    const imageText = document.getElementById('imageText').value;

    // Simulate image generation process
    let progress = 0;
    const progressInterval = setInterval(function() {
        progress += 10;
        document.getElementById('progressText').textContent = `${progress}%`;
        document.getElementById('progressCircle').style.background = `conic-gradient(#ff0000 ${progress}% 0%, #444 0% 100%)`;

        if (progress === 100) {
            clearInterval(progressInterval);
            // Hide loading overlay
            document.getElementById('loadingOverlay').style.display = 'none';
            generateImage(imageText); // Call the image generation API
        }
    }, 500); // Progress increases every 0.5 seconds
});

// Function to generate image using the Hazex API
function generateImage(prompt) {
    // Construct the API URL with the provided prompt
    const apiUrl = `https://img.hazex.workers.dev/?prompt=${encodeURIComponent(prompt)}`;

    // Create an image element to display the result
    const imageContainer = document.createElement('div');
    imageContainer.style.marginTop = '20px';
    
    const generatedImage = document.createElement('img');
    generatedImage.src = apiUrl;
    generatedImage.alt = 'Generated Image';
    generatedImage.style.maxWidth = '100%';
    generatedImage.style.border = '2px solid #ff0000';
    generatedImage.style.borderRadius = '8px';

    imageContainer.appendChild(generatedImage);

    // Append the generated image below the form
    document.body.appendChild(imageContainer);
}
