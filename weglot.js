Weglot.initialize({
    api_key: 'wg_74ea5f282828370b0c827c288f63f15e2'
});

// Listen for language changes and force title re-translation
Weglot.on('languageChanged', function(newLang, prevLang) {
    // Small delay to ensure Weglot has processed the page
    setTimeout(function() {
        const titleElement = document.querySelector('title');
        if (titleElement) {
            // Force Weglot to re-translate the title
            const originalTitle = titleElement.getAttribute('data-original-title') || titleElement.textContent;
            titleElement.setAttribute('data-original-title', originalTitle);
            titleElement.textContent = originalTitle;
            
            // Trigger Weglot's translation process
            Weglot.translate();
        }
    }, 100);
});    