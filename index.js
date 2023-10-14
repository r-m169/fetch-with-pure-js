fetch('https://dummyjson.com/products')
    .then(response => response.json())
    .then(data => {
        const productsList = data.products;
        const productsContainer = document.getElementById('products-container');

        productsList.forEach(product => {
            const card = document.createElement('div');
            card.classList.add('card');

            const cardImage = document.createElement('img');
            cardImage.classList.add('card-img-top');
            cardImage.src = product.thumbnail;

            const cardBody = document.createElement('div');
            cardBody.classList.add('card-body');

            const cardTitle = document.createElement('h5');
            cardTitle.classList.add('card-title');
            cardTitle.textContent = product.title;

            const cardText = document.createElement('p');
            cardText.classList.add('card-text');
            cardText.textContent = product.description;

            // Calculate the discounted price
            const price = product.price;
            const discountPercentage = product.discountPercentage;
            const discountedPrice = (price * discountPercentage) / 100;
            const finalPrice = price - discountedPrice;

            const priceContainer = document.createElement('div');
            priceContainer.classList.add('price-container');

            const finalPriceElement = document.createElement('p');
            finalPriceElement.style.color = 'green';
            finalPriceElement.style.fontWeight = 'bold';
            finalPriceElement.textContent = `${finalPrice.toFixed(2)}`;

            const originalPriceElement = document.createElement('del');
            originalPriceElement.style.color = 'red';
            originalPriceElement.textContent = `$${price.toFixed(2)}`;

            priceContainer.appendChild(finalPriceElement);
            priceContainer.appendChild(document.createTextNode(' '));
            priceContainer.appendChild(originalPriceElement);

            const buttonContainer = document.createElement('div');
            buttonContainer.classList.add('button-container');

            const addToCartButton = document.createElement('button');
            addToCartButton.classList.add('btn-primary');
            addToCartButton.textContent = 'Add to Cart';

            const heartIcon = document.createElement('i');
            heartIcon.classList.add('fas', 'fa-heart');

            addToCartButton.appendChild(heartIcon);
            buttonContainer.appendChild(addToCartButton);
            cardBody.appendChild(cardTitle);
            cardBody.appendChild(cardText);
            cardBody.appendChild(priceContainer);
            cardBody.appendChild(buttonContainer);
            card.appendChild(cardImage);
            card.appendChild(cardBody);
            productsContainer.appendChild(card);
        });
    })
    .catch(error => console.error('Error:', error));
