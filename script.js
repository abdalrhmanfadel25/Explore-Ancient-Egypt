// Define the function in the global scope
function showPopupForPage(page) {
    
    window.open(`https://www.ancient-egypt.org/index.html/${page}`, '_blank');
}

document.addEventListener('DOMContentLoaded', function () {
    

    //  existing code for header date
    const currentDate = new Date().toLocaleDateString('en-US', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });

    const headerDateElement = document.querySelector('.header-date');
    if (headerDateElement) {
        headerDateElement.innerHTML = currentDate;
    }

    
    const contactForm = document.getElementById('contactForm');
    const thanksMessage = document.getElementById('thanksMessage');

    if (contactForm && thanksMessage) {
        contactForm.addEventListener('submit', function (event) {
            event.preventDefault();

            contactForm.style.display = 'none';
            thanksMessage.style.display = 'block';
        });
    }

const artifactsExploreButton = document.getElementById('artifacts-explore-btn');
const imageContainer = document.querySelector('.image-container');

if (artifactsExploreButton && imageContainer) {
    artifactsExploreButton.addEventListener('click', function () {
      
        const confirmNavigation = window.confirm('Are you sure you want to explore more artifacts?');
        if (confirmNavigation) {
        
            window.location.href = 'https://www.ancient-egypt.org/from-a-to-z/index.html'; 
        }
    });

    imageContainer.addEventListener('click', function (event) {
        const clickedImage = event.target;
        if (clickedImage.tagName === 'IMG') {
            exploreArtifact(clickedImage);
        }
    });
}



});
