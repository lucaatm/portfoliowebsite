document.addEventListener('DOMContentLoaded', function () {
    function getCookie(name) {
        const value = `; ${document.cookie}`;
        const parts = value.split(`; ${name}=`);
        if (parts.length === 2) return parts.pop().split(';').shift();
    }

    const isStartpage = window.location.pathname.endsWith("index.html") || window.location.pathname === "/";
    const h1 = document.getElementById('greeting');

    if (isStartpage && getCookie('visited')) {
        h1.textContent = 'welcome back.';

    } else {
        document.cookie = "visited=true; path=/; max-age=31536000"; // 1 year
        // h1 remains "welcome, stranger."
    }
});