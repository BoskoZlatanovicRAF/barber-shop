// document.addEventListener("DOMContentLoaded", function() {
//     const currentDishes = JSON.parse(sessionStorage.getItem("dishes") || "[]");

//     if (document.querySelector('.table')) {
//         const buttons = document.querySelectorAll(".btn-izmeni");

//         buttons.forEach(button => {
//             button.addEventListener("click", function() {
//                 const selectElem = this.closest('tr').querySelector('select');
//                 const options = Array.from(selectElem.options).map(option => option.textContent);
//                 sessionStorage.setItem("dishes", JSON.stringify(options));
//                 window.location.href = "kategorija.html";
//             });
//         });
//     } else if (document.querySelector('h1').textContent === 'Kategorija') {
//         // Create the list of dishes from sessionStorage
//         const list = document.createElement('ul');

//         currentDishes.forEach(dish => {
//             const listItem = document.createElement('li');
//             listItem.textContent = dish;
//             list.appendChild(listItem);
//         });
//         document.getElementById("kategorijadiv").appendChild(list);

//         // Create a textbox for entering a new dish
//         const input = document.createElement('input');
//         input.type = 'text';
//         input.placeholder = 'Add new dish';
//         document.getElementById("kategorijadiv").appendChild(input);

//         // Create the Add button
//         const addButton = document.createElement('button');
//         addButton.textContent = 'Add';
//         addButton.type = 'button';  // Prevent it from submitting the form by default
//         addButton.addEventListener('click', function() {
//             const dishName = input.value;
//             if (dishName.trim() !== "") { // Ensure the input isn't empty or just whitespace
//                 const listItem = document.createElement('li');
//                 listItem.textContent = dishName;
//                 list.appendChild(listItem);
//                 currentDishes.push(dishName);
//                 input.value = ""; // Clear the input for a new dish
//             }
//         });
//         document.getElementById("kategorijadiv").appendChild(addButton);

//         // When the form is submitted (i.e., when "Sacuvaj" is clicked), update the hidden input with the list of dishes
//         document.getElementById("forma2").addEventListener("submit", function(e){
//             document.getElementById("dishes-input").value = JSON.stringify(currentDishes);
//         });
//     }
// });

document.addEventListener("DOMContentLoaded", function() {
    let currentDishes = JSON.parse(sessionStorage.getItem("dishes") || "[]");

    if (document.querySelector('.table')) {
        const buttons = document.querySelectorAll(".btn-izmeni");

        buttons.forEach(button => {
            button.addEventListener("click", function() {
                const selectElem = this.closest('tr').querySelector('select');
                const options = Array.from(selectElem.options).map(option => option.textContent);
                sessionStorage.setItem("dishes", JSON.stringify(options));
                window.location.href = "kategorija.html";
            });
        });
    } else if (document.querySelector('h1').textContent === 'Kategorija') {
        const list = document.getElementById("dishesList");
        const input = document.getElementById("dish-input");
        const addButton = document.getElementById("addDishButton");

        // Populate dishes from sessionStorage
        currentDishes.forEach(dish => {
            const listItem = document.createElement('li');
            listItem.textContent = dish;
            list.appendChild(listItem);
        });

        // Add dish action
        addButton.addEventListener('click', function() {
            const dishName = input.value;
            if (dishName.trim() !== "") { 
                const listItem = document.createElement('li');
                listItem.textContent = dishName;
                list.appendChild(listItem);
                currentDishes.push(dishName);
                sessionStorage.setItem("dishes", JSON.stringify(currentDishes));  // Update sessionStorage
                input.value = "";
            }
        });

        // Form submission
        document.getElementById("forma2").addEventListener("submit", function(e) {
            e.preventDefault();  // Prevent default form submission
        
            const dishesToSend = Array.from(list.querySelectorAll('li')).map(li => li.textContent);
            
            // Store serialized dish list in the hidden input
            document.getElementById("dishes-input").value = JSON.stringify(dishesToSend);
            
            this.submit();  // Manually submit the form
        });
    }
});




