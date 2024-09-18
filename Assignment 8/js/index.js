const eventData = [
    {
        "id": 1,
        "imageUrl": "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        "title": "Summer Music Festival",
        "price": 50,
        "date": "August 20, 2021",
        "location": "Central Park, New York City",
        "company": "Music Festivals Inc."
    },
    {
        "id": 2,
        "imageUrl": "https://images.unsplash.com/photo-1495147466023-ac5c588e2e94?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
        "title": "Food and Wine Expo",
        "price": 75,
        "date": "September 25, 2021",
        "location": "Moscone Center, San Francisco",
        "company": "Food and Wine Events LLC"
    },
    {
        "id": 3,
        "imageUrl": "https://images.unsplash.com/photo-1618519764620-7403abdbdfe9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        "title": "Comic Con",
        "price": 35,
        "date": "October 15, 2021",
        "location": "Los Angeles Convention Center",
        "company": "Comic Con International"
    },
    {
        "id": 4,
        "imageUrl": "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YXJ0JTIwYW5kJTIwZGVzaWduJTIwZmFpcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
        "title": "Art and Design Fair",
        "price": 20,
        "date": "November 12, 2021",
        "location": "Navy Pier, Chicago",
        "company": "Art and Design Expo LLC"
    },
    {
        "id": 5,
        "imageUrl": "https://plus.unsplash.com/premium_photo-1661766479722-ddedc5dce339?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80",
        "title": "Holiday Market",
        "price": 5,
        "date": "December 3, 2021",
        "location": "Union Square, New York City",
        "company": "Holiday Markets Inc."
    },
    {
        "id": 6,
        "imageUrl": "https://plus.unsplash.com/premium_photo-1661290419867-79072e8d5f00?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y29uY2VydCUyMHBhcmt8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
        "title": "Concert in the Park",
        "price": 20,
        "date": "August 20, 2022",
        "location": "Central Park, New York City",
        "company": "Live Nation"
    },
    {
        "id": 7,
        "imageUrl": "https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "title": "Food and Wine Festival",
        "price": 50,
        "date": "September 15-18, 2022",
        "location": "Union Square, San Francisco",
        "company": "Taste of San Francisco"
    },
    {
        "id": 8,
        "imageUrl": "https://plus.unsplash.com/premium_photo-1661602441396-67b89b6ac4d8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        "title": "Summer Beach Party",
        "price": 15,
        "date": "July 3, 2022",
        "location": "Venice Beach, Los Angeles",
        "company": "LA Beach Parties"
    },
    {
        "id": 9,
        "imageUrl": "https://images.unsplash.com/photo-1607799279861-4dd421887fb3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        "title": "Angular Nation Expo",
        "price": 35,
        "date": "October 1-3, 2022",
        "location": "Google Hall, San Fransico",
        "company": "ArtExpo NY"
    },
    {
        "id": 10,
        "imageUrl": "https://images.unsplash.com/photo-1465310477141-6fb93167a273?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        "title": "Sports and Adventure Expo",
        "price": 20,
        "date": "May 20-22, 2022",
        "location": "McCormick Place, Chicago",
        "company": "Google"
    }
];

let favorites = JSON.parse(localStorage.getItem('favorites')) || [];

function renderEvents(events) {
    const eventList = document.getElementById('event-list');
    eventList.innerHTML = '';

    const fragment = document.createDocumentFragment();

    events.forEach(event => {
        const eventCard = document.createElement('div');
        eventCard.classList.add('event-card');
        eventCard.innerHTML = `
            <img data-src="${event.imageUrl}" alt="${event.title}">
            <div class="event-details">
                <h2>${event.title}</h2>
                <p>Date: ${event.date}</p>
                <p>Location: ${event.location}</p>
                <p>Price: ${event.price} ksh</p>
                <button class="favorite-btn">Buy Now</button>
            </div>
          `;
        eventCard.querySelector('.favorite-btn').addEventListener('click', () => toggleFavorite(event));
        fragment.appendChild(eventCard);
    });

    eventList.appendChild(fragment);
    lazyLoadImages(); // Lazy load images after events render
}

function renderFavorites() {
    const favoriteList = document.getElementById('favorites-list');
    favoriteList.innerHTML = favorites.map(fav => `<p>${fav.title}</p>`).join('');
}

function filterEvents() {
    const priceFilter = document.getElementById('filter-price').value;
    const locationFilter = document.getElementById('filter-location').value;

    let filteredEvents = eventData;

    if (priceFilter !== 'all') {
        if (priceFilter === 'low') {
            filteredEvents = filteredEvents.filter(event => event.price < 30);
        } else if (priceFilter === 'mid') {
            filteredEvents = filteredEvents.filter(event => event.price >= 30 && event.price <= 50);
        } else {
            filteredEvents = filteredEvents.filter(event => event.price > 50);
        }
    }

    if (locationFilter !== 'all') {
        filteredEvents = filteredEvents.filter(event => event.location === locationFilter);
    }

    renderEvents(filteredEvents);
}

function toggleFavorite(event) {
    const index = favorites.findIndex(fav => fav.id === event.id);
    if (index > -1) {
        favorites.splice(index, 1); // Remove if already in favorites
    } else {
        favorites.push(event); // Add to favorites
    }
    localStorage.setItem('favorites', JSON.stringify(favorites));
    renderFavorites();
}

function sortByPrice() {
    eventData.sort((a, b) => a.price - b.price);
    renderEvents(eventData);
}

function sortByDate() {
    eventData.sort((a, b) => new Date(a.date) - new Date(b.date));
    renderEvents(eventData);
}

function lazyLoadImages() {
    const images = document.querySelectorAll('img[data-src]');
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.getAttribute('data-src');
                img.removeAttribute('data-src');
                observer.unobserve(img);
            }
        });
    });

    images.forEach(img => observer.observe(img));
}

// Initial Render
renderEvents(eventData);
renderFavorites();

document.getElementById('filter-price').addEventListener('change', filterEvents);
document.getElementById('filter-location').addEventListener('change', filterEvents);
document.getElementById('sort-price').addEventListener('click', sortByPrice);
document.getElementById('sort-date').addEventListener('click', sortByDate);
