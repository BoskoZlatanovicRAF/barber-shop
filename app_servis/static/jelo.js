document.getElementById("forma").addEventListener("submit", function(e){
    let spanovi = document.querySelectorAll("#sastojci > span.badge");
    
    // 2. Prolazak kroz spanove i smeštanje id-eva u niz
    let niz = [];
    for(let i=0; i<spanovi.length; i++){
       niz.push(spanovi[i].dataset.id);
    }
    
    // 3. Pretvaranje niza u JSON string
    let jsonSastojci = JSON.stringify(niz);
    
    // 4. Postavljanje vrednosti skrivenog input polja
    document.getElementById("sastojci-input").value = jsonSastojci;


    let validno = true; 
    let nazivInput = document.getElementById("naziv");
    if(nazivInput.value.length < 3 ){
        validno = false;
        nazivInput.classList.add("error");
        nazivInput.classList.remove("success");
    }
    else {
        nazivInput.classList.add("success");
        nazivInput.classList.remove("error");
    }    
    if(!validno)
        e.preventDefault();
    return validno; 
});



document.getElementById("naziv").addEventListener("keypress", function(){
    this.classList.remove('success'); 
    this.classList.remove('error'); 
});

// document.getElementById("dodaj-sastojak").addEventListener("click", function(){
//     let id = document.getElementById("spisak-sastojaka").value;
//     if(!id){
//         alert("Izaberi sastojak");
//         return;
//     }
//     dodajSastojak(id);
// });


// function dodajSastojak(id) {
//     // Disable-ovanje izabranog sastojka
//     document.querySelector(`#spisak-sastojaka > option[value='${id}']`).disabled = true;
    
//     // Povratak dropdown-a na početnu vrednost
//     document.getElementById("spisak-sastojaka").selectedIndex = 0;

//     // Dohvatanje naziva sastojka
//     let naziv = document.querySelector(`#spisak-sastojaka > option[value='${id}']`).innerHTML;
    
//     // Kreiranje <span> elementa
//     let span = document.createElement("span");
//     span.classList.add("badge");
//     span.classList.add("bg-secondary");
//     span.dataset.id = id;
//     span.innerHTML = naziv;

//     // Kreiranje <button> elementa
//     let button = document.createElement("button");
//     button.type = "button";
//     button.classList.add("btn");
//     button.classList.add("btn-default");
//     button.classList.add("btn-sm");
//     button.innerHTML = "X";

//     // Dodavanje <button> u <span>
//     span.appendChild(button);

//     // Dodavanje <span> u roditeljski element
//     document.getElementById("sastojci").appendChild(span);

//     document.getElementById("sastojci").appendChild(document.createTextNode(" "));

//     button.addEventListener("click", function(){    
//         let id = this.parentNode.dataset.id;
//         this.parentNode.parentNode.removeChild( this.parentNode );
//         document.querySelector(`#spisak-sastojaka > option[value='${id}']`).disabled = false;

//     });

// }


function validacija(){
    let validno = true; 
    let nazivInput = document.getElementById("naziv");
    if(nazivInput.value.length < 3 ){
        validno = false;
        nazivInput.classList.add("error");
        nazivInput.classList.remove("success");
    }
    else {
        nazivInput.classList.add("success");
        nazivInput.classList.remove("error");
    }    
    return validno; 
}
function resetBorder(){
    let nazivInput = document.getElementById("naziv");
    nazivInput.classList.remove("success");
    nazivInput.classList.remove("error");
}

