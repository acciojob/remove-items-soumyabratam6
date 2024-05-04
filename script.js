//your JS code here. If required.
document.addEventListener('DOMContentLoaded', function() {
            const colorSelect = document.getElementById('colorSelect');
            const removeButton = document.querySelector('input[type="button"]');

            removeButton.addEventListener('click', function() {
                const selectedOption = colorSelect.options[colorSelect.selectedIndex];
                colorSelect.removeChild(selectedOption);
            });
        });