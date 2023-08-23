document.addEventListener('DOMContentLoaded', () =>{
    const addPetBtn = document.getElementById('addPetBtn');
    const petContainer = document.getElementById('petContainer');

    if (addPetBtn && petContainer) {
        addPetBtn.addEventListener('click', () => {
            const newRow = document.createElement('div');
            newRow.classList.add('mb-3');
            newRow.innerHTML = `
                <div class="container">
                    <div class="row">
                        <div class="col-8">
                            <input type="text" class="form-control" name="petName" placeholder="Pet Name" aria-label="Pet Name">
                        </div>
                        <div class="col-4">
                            <button class="btn btn-danger removeBtn" type="button">Remove</button>
                        </div>
                    </div>
                </div>
            `;
            petContainer.appendChild(newRow);

            const removeButtons = document.querySelectorAll('.removeBtn');
            removeButtons.forEach(button => {
                button.addEventListener('click', () => {
                    petContainer.removeChild(newRow);
                });
            });
        });
    }
});