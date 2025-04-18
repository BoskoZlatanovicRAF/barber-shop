document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM loaded');  // Debugging log

    let promenaButtons = document.querySelectorAll('.promena');
    console.log(promenaButtons.length + ' buttons found');  // Debugging log

    promenaButtons.forEach(button => {
        button.addEventListener('click', function(event) {
            console.log('Button clicked');  // Debugging log
            event.preventDefault();
            
            let parentRow = event.target.closest('tr');
            if (parentRow) {
                let cenaCell = parentRow.querySelector('td:nth-child(3)');
                let newPrice = prompt("Unesite novu cenu:");
                if (newPrice && !isNaN(newPrice)) {
                    cenaCell.textContent = newPrice;
                } else {
                    alert("Molimo unesite validnu cenu.");
                }
            }
        });
    });
});