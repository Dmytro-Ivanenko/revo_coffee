const standartGoodsCards = {
	cardsArr: [
		{
			img: "./images/standart-goods/morning.png",
			img2x: "./images/standart-goods/morning@2x.png",
			price: 99.0,
			cardName: "REVO Morning",
			description: "Bitter, sweet aftertaste, floral scent",
		},
		{
			img: "./images/standart-goods/origin.png",
			img2x: "./images/standart-goods/origin@2x.png",
			price: 139.0,
			cardName: "REVO Origin",
			description: "Sweet aftertaste, less bitter, strawberry sour taste",
		},

		{
			img: "./images/standart-goods/everyday.png",
			img2x: "./images/standart-goods/everyday@2x.png",
			price: 85.0,
			cardName: "REVO Everyday",
			description: "balance, bitter aftertaste, chocolate taste",
		},

		{
			img: "./images/standart-goods/bold.png",
			img2x: "./images/standart-goods/bold@2x.png",
			price: 75.0,
			cardName: "REVO Bold",
			description: "bold, bitter, traditional",
		},
		{
			img: "./images/standart-goods/honey.png",
			img2x: "./images/standart-goods/honey@2x.png",
			price: 195.0,
			cardName: "REVO Honey",
			description: "high sweetness, after sweet, sour apple family",
		},
		{
			img: "./images/standart-goods/natural.png",
			img2x: "./images/standart-goods/natural@2x.png",
			price: 85.0,
			cardName: "REVO Natural",
			description: "Sweet aftertaste, floral scent, strawberry sour taste",
		},
	],
};

function renderCards({ cardsArr }) {
	const markup = cardsArr
		.map(({ img, img2x, cardName, price, description }) => {
			return `<div class="standart-card">
    <img srcset="${img} 235w, ${img2x} 470w " sizes="235px" src="${img}" alt="${cardName}" width = "200" />
    <div class="standart-info">
        <p class="standart-price">${price}</p>
        <p class="standart-name">${cardName}</p>
        <p class="standart-description">${description}</p>

        <ul class="standart-buttons">
            <li><button class="buy-now-btn" type="button">BUY NOW</button></li>
            <li><button class="detail-btn" type="button">DETAIL</button></li>
        </ul>
    </div>
</div>`;
		})
		.join("");
	console.dir(markup);
	document.querySelector(".standart-cards-list").innerHTML = markup;
}

// renderCards(standartGoodsCards);
