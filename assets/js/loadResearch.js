document.addEventListener('DOMContentLoaded', function() {
    const params = new URLSearchParams(window.location.search);
    const type = params.get('type'); // 'published' or 'ongoing'
    fetch('./assets/research.json')
        .then(response => response.json())
        .then(data => {
            displayResearch(type, data);
        });
});

function displayResearch(type, data) {
    const container = document.getElementById('research-content');
    container.innerHTML = ''; // Clear any previous content

    // Determine the key to use in the researchData based on the type parameter
    const dataKey = (type === 'published') ? 'publishedResearch' : 'ongoingResearch';
    
    const researchArray = data[dataKey] || [];
    researchArray.forEach(item => {
        const div = document.createElement('div');
        div.style.paddingLeft = '50px'; // Add padding to the left
        div.style.margin = '10px'; // Optionally add margins
        var yearInfo;
        if (item.expectedCompletion != undefined){
            yearInfo = item.startYear + ' - ' + item.expectedCompletion;
        }
        else {
            yearInfo = item.year;
        }
        div.innerHTML = `
            <h3 style="font-size: 24px; margin-bottom: 0px; line-height: 1.2;">${item.title}(${yearInfo})</h3>
            <p style="margin-bottom: 8px;"><strong>${item.authors ? 'Authors: ' + item.authors.join(', ') : 'Researchers: ' + item.researchers.join(', ')}</strong></p>
            <p style="margin-bottom: 15px;">${item.summary || item.description}</p>
            ${item.link ? `<a href="${item.link}">More Info</a>` : ''}
            ${item.pdf ? `<a href="${item.pdf}">Download PDF</a>` : ''}
        `;
        container.appendChild(div);
    });
}