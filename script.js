document.addEventListener('DOMContentLoaded', function () {
    var filterButtons = document.querySelectorAll('#filter-container button');
    filterButtons.forEach(function(button) {
        button.addEventListener('click', function() {
            var plantType = this.getAttribute('data-plant-type');
            filterPlants(plantType);
        });
    });

    var resetButton = document.querySelector('#filter-container button[data-action="reset"]');
    if (resetButton) {
        resetButton.addEventListener('click', function () {
            resetFilter();
        });
    }

    var searchButton = document.querySelector('.search-button');
    if (searchButton) {
        searchButton.addEventListener('click', function () {
            var searchInput = document.getElementById('searchInput').value.trim().toLowerCase();
            filterPlants(searchInput);
        });
    }
});

function filterPlants(filterValue) {
    var plantCards = document.querySelectorAll('.plant-card');

    plantCards.forEach(function (card) {
        var cardPlantType = card.getAttribute('data-plant-type').toLowerCase();
        var display = 'none';
        
        if (filterValue === '' || cardPlantType.includes(filterValue.toLowerCase())) {
            display = 'block';
        }
        
        card.style.display = display;
    });
}

function resetFilter() {
    var plantCards = document.querySelectorAll('.plant-card');
    plantCards.forEach(function (card) {
        card.style.display = 'block';
    });
}