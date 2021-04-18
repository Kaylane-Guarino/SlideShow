'use strict';

const images = [
    { 'id': '1', 'url':'./img/atacantes.png', 'text': 'Atacantes'},
    { 'id': '2', 'url':'./img/goleiros.png', 'text': 'Goleiros' },
    { 'id': '3', 'url':'./img/laterais.png', 'text': 'Laterais' },
    { 'id': '4', 'url':'./img/meias.png', 'text': 'Meias' },
    { 'id': '5', 'url':'./img/volantes.png', 'text': 'Volantes' },
    { 'id': '6', 'url':'./img/zagueiros.png', 'text': 'Zagueiros' },
]

const containerItems = document.querySelector('#container-items');

const loadImages = ( images, container ) => {
    images.forEach ( image => {
        container.innerHTML += `
            <div class='item' id="image ${image.id}">
                <div id="container-text"><p class="text">${image.text}</p></div>
                
                <img src='${image.url}'>
            </div>
        `
    })
}

loadImages( images, containerItems );

//Previous and Next
let items = document.querySelectorAll('.item');

const previous = () => {
    containerItems.appendChild(items[0]);
    items = document.querySelectorAll('.item');
}

const next = () => {
    const lastItem = items[items.length - 1];
    containerItems.insertBefore( lastItem, items[0] );
    items = document.querySelectorAll('.item');
}

//Indicadores

//Não consegui fazer os indicadores funcionar pois há 2 erros, um de "sintaxe" que não consegui identificar onde está, e o erro no "insertBefore" que tambem não consegui identificar o problema.

function selected(id) {
  console.log(id);
//   containerItems.insertBefore(document.getElementById("image" + id), containerItems.firstChild);
//   items = document.querySelectorAll('.item');
//   Indicadores(items);
}

const Indicadores = (items) => {
  const containerDots = document.querySelector('.container-dots');
  containerDots.innerHTML = "";
  
    items.forEach ( item => {
      const id = item.id;
      containerDots.innerHTML += `
        <span class="dot" onclick="selected(${id})"></span>
      `
    })
}



Indicadores(items);


document.querySelector('#previous').addEventListener('click', previous);
document.querySelector('#next').addEventListener('click', next);
document.querySelector('.dot').addEventListener('click', selected);