document.addEventListener('DOMContentLoaded', function() {
    fetch('./assets/members.json')
        .then(response => response.json())
        .then(data => {
            renderMembers(data);
        });
});

function renderMembers(data) {
    for (const category in data) {
        const container = document.getElementById(category);

        // Create and append the category title
        const categoryTitle = document.createElement('h2');
        categoryTitle.className = 'category-title';
        // Replace underscores or dashes with spaces and capitalize if needed
        categoryTitle.textContent = category.replace(/_/g, ' ').replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
        container.appendChild(categoryTitle);
        
        data[category].forEach(member => {
            const memberDiv = document.createElement('div');
            memberDiv.className = 'row'; // Changed class to 'row' for grid layout
            // Adjusted layout for the image to be on the left and text on the right
            memberDiv.innerHTML = `
                <div class="col-sm-3">
                    <img src="${member.imageSrc}" class="img-responsive" style="max-width:250px; width:100%; margin-bottom: 50px" alt="Image">
                </div>
                <div class="col-sm-4" style="margin-top: -15px;">
                    <h2 class="text-left" style="margin-bottom: 5px;"><strong>${member.name}</strong></h2>
                    <p class="text-left" style="margin-bottom: 5px;"><b>${member.title}</b></p>
                    ${member.degrees.map(degree => `<p class="text-left" style="margin-bottom: 5px; line-height: 1.2;">${degree}</p>`).join('')}
                    <p class="text-left" style="max-width: 900px; line-height: 1.4; margin-top: 20px; margin-bottom:80px">${member.bio}</p>
                </div>
            `;
            container.appendChild(memberDiv);
        });
    }
}