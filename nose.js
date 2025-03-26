//vamos a seleccionar los elementos del DOM
//cons=constante
//input, addItemButton e itemList son ID's que estan en el HTML;
const input = document.getElementById('newItemInput');
const addButton = document.getElementById('addItemBtn');
const itemList = document.getElementById('itemList');

//funcion para agregarlo al carrito we.
function addItem() {
    const value = input.value.trim();

    if (value === '') {
        alert("ingresa un item");
        return;
    }
//esta madre crea el elemento a base de la lista li
    const li = document.createElement('li');
    li.textContent = value; //hace que el elemento reciba el valor

//aqui es donde se crea un boton para hacer click y que se seleccione
    const completeBtn = document.createElement('button');
    completeBtn.textContent = 'seleccionate we';
    completeBtn.title = "Que lo hagas dije";
    completeBtn.addEventListener('click', () => {
        li.classList.toggle('completed');
    });

    //aqui es donde se borra del elemento li
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'borrate we';
    deleteBtn.title = 'Que te borres dije';
    deleteBtn.addEventListener('click', () => {
        itemList.removeChild(li);
    });

    //hace que los botones aparezca en la interfaz
    li.appendChild(completeBtn);
    li.appendChild(deleteBtn);
    itemList.appendChild(li);
    //reinicia el texto
    input.value = '';

    //la neta me hice bola, espero que funcione por Dios





}

addButton.onclick = addItem;



