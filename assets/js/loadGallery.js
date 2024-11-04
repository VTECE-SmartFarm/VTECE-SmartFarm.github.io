document.addEventListener("DOMContentLoaded", () => {
    const galleryContainer = document.getElementById("gallery-container");

    // Fetch the gallery structure from JSON
    fetch('./assets/gallery.json')
        .then(response => response.json())
        .then(data => loadGallery(data))
        .catch(error => console.error("Error loading gallery manifest:", error));

    // Function to load images based on JSON structure
    function loadGallery(structure) {
        for (const [folderName, images] of Object.entries(structure)) {
            // Create a section for each folder
            const folderSection = document.createElement("section");
            folderSection.classList.add("folder");

            // Add folder name as subtitle
            const subtitle = document.createElement("h2");
            subtitle.textContent = folderName;
            folderSection.appendChild(subtitle);

            // Container for images
            const imagesContainer = document.createElement("div");
            imagesContainer.classList.add("images");

            // Loop through images in this folder
            images.forEach(image => {
                const imgElement = document.createElement("img");
                imgElement.src = `images/gallery/${folderName}/${image}`;
                imgElement.alt = `${image}`;
                
                // Set max width to fit 40% of the screen
                imgElement.style.maxWidth = "40%";
                imgElement.style.height = "auto"; // Maintain aspect ratio
                imgElement.style.gap = "20px"
                imgElement.style.marginTop = "20px"
                imgElement.style.margin = "10px";
                // imgElement.style.display = "flex"
                imgElement.style.flexWrap = "wrap"
                imgElement.style.justifyContent = "center"
                imgElement.style.alignItems = "center"

                imagesContainer.appendChild(imgElement);
            });

            // Append images to folder section
            folderSection.appendChild(imagesContainer);
            galleryContainer.appendChild(folderSection);
        }
    }
});
