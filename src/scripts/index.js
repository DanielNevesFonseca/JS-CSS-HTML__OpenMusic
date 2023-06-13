function createCard(product) {
    const card = document.createElement('li');
    const cardImage = document.createElement('img');
    const cardBandNameAndYear = document.createElement('p');
    const cardAlbumTitle = document.createElement('h2');

    const buyContainer = document.createElement('span');
    const productPrice = document.createElement('p');
    const buyButton = document.createElement('button');

    card.classList.add('render-cards__item');
    cardImage.classList.add('item__image');
    cardBandNameAndYear.classList.add('item__name-and-year', 'text3');
    cardAlbumTitle.classList.add('item__album-title', 'text2');

    buyContainer.classList.add('item__buy-container');
    productPrice.classList.add('price', 'text2');
    buyButton.classList.add('btn-buy', 'btn-default');

    cardImage.src = product.img;
    cardImage.alt = `Imagem do álbum ${product.title}`;

    
    cardBandNameAndYear.innerText = `${product.band} ${product.year}`;
    cardAlbumTitle.innerText = product.title;
    productPrice.innerText = "R$ " + product.price.toFixed(2);
    buyButton.innerText = 'Comprar';

    buyContainer.append(productPrice, buyButton);
    card.append(cardImage, cardBandNameAndYear, cardAlbumTitle, buyContainer);

    return card;
}

function renderButtons(array) {
    const buttonsContainer = document.querySelector('.manage-filters__buttons-container');
    array.forEach((category) => {
        // console.log(elem);
        const buttonsItem = document.createElement('li');
        const button = document.createElement('button');

        button.innerText = category;

        button.classList.add('btn-default');

        buttonsItem.appendChild(button);
        buttonsContainer.appendChild(buttonsItem);
    })
}

function renderCards(array) {
    const cardsContainer = document.querySelector('.render-cards__container');
    array.forEach((card) => {
        const createdCard = createCard(card);
        cardsContainer.appendChild(createdCard);
    })
}
renderButtons(categories); 
renderCards(products);