var map = L.map('main_map').setView([-26.812386, -65.263015], 100);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    accessToken: 'pk.eyJ1IjoiZXhlbnYiLCJhIjoiY2tpd2FhNHZsMGhscTJzcDNvOGwxZ2QzZCJ9.6bd-DlcEoc77tbdMpmN6xA'
}).addTo(map);

L.marker([-26.812386, -65.263015]).addTo(map);