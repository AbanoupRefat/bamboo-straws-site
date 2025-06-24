// Language selector functionality
document.getElementById('language-select').addEventListener('change', function() {
    const selectedLanguage = this.value;
    
    // This is where you would implement your actual language switching logic
    console.log('Language changed to:', selectedLanguage);
    
    // Example of what you might do:
    // window.location.href = `?lang=${selectedLanguage}`;
    // Or use a translation library like i18next
    
    // For demo purposes, we'll just show an alert
    alert(`Language changed to ${this.options[this.selectedIndex].text}`);
    
    // You would typically implement actual translation logic here
    // For a real implementation, you would:
    // 1. Load translation files
    // 2. Update all text elements on the page
    // 3. Possibly change text direction for RTL languages
});

// Optional: Set initial language based on browser preference
const browserLang = navigator.language || navigator.userLanguage;
const langSelect = document.getElementById('language-select');
if (browserLang.startsWith('ar')) {
    langSelect.value = 'ar';
} else if (browserLang.startsWith('fr')) {
    langSelect.value = 'fr';
} // Add other language checks as needed


document.addEventListener('DOMContentLoaded', function() {
    // Add intersection observer for scroll animations
    const animateElements = document.querySelectorAll('.animate-slide-up, .animate-fade-in, .animate-grow');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animationPlayState = 'running';
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1
    });
    
    animateElements.forEach(element => {
        observer.observe(element);
        element.style.animationPlayState = 'paused';
    });
    
    // Add hover effect to message items
    const messageItems = document.querySelectorAll('.message-item');
    messageItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.transform = 'translateX(-5px)';
            this.style.transition = 'transform 0.3s ease';
        });
        
        item.addEventListener('mouseleave', function() {
            this.style.transform = 'translateX(0)';
        });
    });
});
