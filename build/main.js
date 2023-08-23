document.addEventListener('DOMContentLoaded', function () {
    var addPetBtn = document.getElementById('addPetBtn');
    var petContainer = document.getElementById('petContainer');
    if (addPetBtn && petContainer) {
        addPetBtn.addEventListener('click', function () {
            var newRow = document.createElement('div');
            newRow.classList.add('mb-3');
            newRow.innerHTML = "\n                <div class=\"container\">\n                    <div class=\"row\">\n                        <div class=\"col-8\">\n                            <input type=\"text\" class=\"form-control\" name=\"petName\" placeholder=\"Pet Name\" aria-label=\"Pet Name\">\n                        </div>\n                        <div class=\"col-4\">\n                            <button class=\"btn btn-danger removeBtn\" type=\"button\">Remove</button>\n                        </div>\n                    </div>\n                </div>\n            ";
            petContainer.appendChild(newRow);
            var removeButtons = document.querySelectorAll('.removeBtn');
            removeButtons.forEach(function (button) {
                button.addEventListener('click', function () {
                    petContainer.removeChild(newRow);
                });
            });
        });
    }
});
