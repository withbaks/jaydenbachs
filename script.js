window.onload = function() {
    const loader = document.querySelector('.loader');
    const content = document.querySelector('.content');

    // Delay to allow loader animation to complete
    setTimeout(() => {
        loader.classList.add('hidden');
        content.classList.add('visible');
    }, 100); // Adjust timeout if needed
};

// Nav animation switching
document.addEventListener('DOMContentLoaded', () => {
    const text1 = document.getElementById('text1');
    const text2 = document.getElementById('text2');
    
    if (!text1 || !text2) {
        console.error("Text elements not found!");
        return;
    }

    let showText1 = true;

    function switchText() {
        if (showText1) {
            text1.classList.remove('hideText');
            text2.classList.add('hideText');
            text1.style.animation = 'moveText 4s linear infinite';
            text2.style.animation = 'none';
        } else {
            text1.classList.add('hideText');
            text2.classList.remove('hideText');
            text2.style.animation = 'moveText 4s linear infinite';
            text1.style.animation = 'none';
        }
        showText1 = !showText1;
    }

    // Initial positioning
    text1.classList.add('hideText');
    text2.classList.remove('hideText');

    // Switch every 4 seconds to match the animation cycle time
    setInterval(switchText, 4000);
});

// Function to copy product URL
document.addEventListener('DOMContentLoaded', () => {
    const copyEmailButton = document.getElementById('copyEmail');
    const emailText = document.getElementById('emailText');
    const copiedMessage = document.getElementById('copiedMessage');
    
    if (!copyEmailButton || !emailText || !copiedMessage) {
        console.error("Elements not found!");
        return;
    }

    copyEmailButton.addEventListener('click', (event) => {
        event.preventDefault(); // Prevent default action of the link

        // Copy email text to clipboard
        const email = emailText.textContent;
        const textArea = document.createElement('textarea');
        textArea.value = email;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);

        // Display "Copied!" message
        copiedMessage.classList.remove('hidden');
        setTimeout(() => {
            copiedMessage.classList.add('hidden');
        }, 2000); // Hide message after 2 seconds
    });
});

// Scroll animation
document.addEventListener("DOMContentLoaded", function() {
    // Use a more specific class or selector if needed
    const elements = document.querySelectorAll('.fade-in-element');

    const observerOptions = {
        root: null, // Use the viewport as the container
        rootMargin: '0px',
        threshold: [0.1, 0.9] // Trigger at 10% and 90% visibility
    };

    const observerCallback = function(entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                entry.target.classList.remove('hidden');
            } else {
                entry.target.classList.remove('visible');
                entry.target.classList.add('hidden');
            }
        });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    elements.forEach(element => {
        // Ensure only specific elements are observed
        if (element.classList.contains('fade-in-element')) {
            observer.observe(element);
        }
    });
});

// Typewriter Effect
const paragraph = document.getElementById('typewriter');
    const text = paragraph.textContent;
    paragraph.textContent = ''; // Clear the text content

    let index = 0;

    function type() {
        if (index < text.length) {
            paragraph.textContent += text.charAt(index);
            index++;
            setTimeout(type, 50); // Adjust typing speed here (milliseconds)
        } else {
            // Typing completed, reset index and clear paragraph
            index = 0;
            paragraph.textContent = '';
            // Call type function again to start typing from the beginning
            setTimeout(type, 1000); // Adjust delay before starting typing again (milliseconds)
        }
    }

    type();