
/*search*/
const items = ['Keychain', 'Keychain with charm', 'coaster', 'Name-stand', 'Pendent', 'bookmark' ,'Product 2 Image'];
const searchBar = document.getElementById('search-bar');
const results = document.getElementById('results');
const noResults = document.getElementById('no-results');

searchBar.addEventListener('input', function() {
    const query = searchBar.value.toLowerCase();
    results.innerHTML = '';
    noResults.style.display = 'none';

    if (query) {
        const filteredItems = items.filter(item => item.toLowerCase().includes(query));

        if (filteredItems.length > 0) {
            filteredItems.forEach(item => {
                const li = document.createElement('li');
                li.textContent = item;
                results.appendChild(li);
            });
        } else {
            noResults.style.display = 'block';
        }
    }
});


/*Contact us*/

document.getElementById('contactForm').addEventListener('submit', function(event) {
    // Example validation code (can be extended as needed)
    const phoneInput = document.getElementById('phone');
    const phonePattern = /^[0-9]{10}$/;
    if (!phonePattern.test(phoneInput.value)) {
        alert('Please enter a valid 10-digit phone number.');
        event.preventDefault();
    } else {
        // If validation is successful, redirect to the thank you page
        event.preventDefault();
        window.location.href = 'thankyou.html';
    }
});
