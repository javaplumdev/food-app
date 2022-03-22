const btn = document.querySelector('.btn');
const food_value = document.getElementById('food-value');
const results = document.getElementById('results');
const modalContent = document.querySelector('.modalContent');
const btnShuffle = document.querySelector('.btnShuffle');

btn.addEventListener('click', function () {
	const api_url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${food_value.value}`;

	get_api(api_url);
});

btnShuffle.addEventListener('click', function () {
	const randomMealUrl = 'https://www.themealdb.com/api/json/v1/1/random.php';
	randomMeal(randomMealUrl);
});

async function randomMeal(randomMealUrl) {
	const response = await fetch(randomMealUrl);
	var data = await response.json();
	const randomMealData = data.meals;

	showRandomData(randomMealData);
}

async function get_api(api_url) {
	const response = await fetch(api_url);
	var data = await response.json();
	const mealData = data.meals;

	showData(mealData);
}

function showRandomData(randomMealData) {
	const randomMealsData = randomMealData;

	randomMealsData.forEach((randomMeal) => {
		results.innerHTML = `
			<div class="card d-flex" style="width: 30rem;">
				<img class="card-img-top" src="${randomMeal.strMealThumb}" alt="Card image cap">
				<div class="card-body">
					<h5 class="card-title">${randomMeal.strMeal}</h5>
					<p>Category: ${randomMeal.strCategory} <br> Cuisine: ${randomMeal.strArea} <br> Ingridients: ${randomMeal.strIngredient1}
					${randomMeal.strIngredient2}
					${randomMeal.strIngredient3}
					${randomMeal.strIngredient4}
					${randomMeal.strIngredient5}
					${randomMeal.strIngredient6}
					${randomMeal.strIngredient7}
					${randomMeal.strIngredient8}
					${randomMeal.strIngredient9}
					${randomMeal.strIngredient10}</p>
					<p>${randomMeal.strInstructions}</p>
				</div>	
			</div>
			`;
	});
}

function showData(mealData) {
	const meals = mealData;

	if (meals === null || food_value.value === '') {
		results.innerHTML = `<p class="text-danger">Please enter a input fields</p>`;
	} else {
		results.innerHTML = meals.map(
			(meal) => `
			<div class="card" style="width: 18rem;">
				<img class="card-img-top" src="${meal.strMealThumb}" alt="Card image cap">
				<div class="card-body">
					<h5 class="card-title">${meal.strMeal}</h5>
					<p>Category: ${meal.strCategory} <br> Cuisine: ${meal.strArea}</p>
					<button
						type="button"
						class="modalBtn btn"
						data-bs-toggle="modal"
						data-bs-target="#staticBackdrop"
					>
						Cook this!
					</button>
				</div>
			</div>
			`
		);

		food_value.value = '';
	}

	showModal(meals);
}

function showModal(meals) {
	const btnModal = document.getElementsByClassName('modalBtn');
	const modalBody = document.querySelector('.modal-body');
	const modalTitle = document.querySelector('.modal-title');

	for (let i = 0; i < btnModal.length; i++) {
		const button = btnModal[i];
		button.addEventListener('click', function (event) {
			const buttonClicked = event.target;
			const foodName = buttonClicked.parentElement.children[0].innerHTML;

			meals.forEach((meal) => {
				if (foodName === meal.strMeal) {
					modalTitle.innerHTML = `${meal.strMeal}`;
					modalBody.innerHTML = `
						<div class="ingridients fs-5 p-2">Ingridients: 
							${meal.strIngredient1}
							${meal.strIngredient2}
							${meal.strIngredient3}
							${meal.strIngredient4}
							${meal.strIngredient5}
							${meal.strIngredient6}
							${meal.strIngredient7}
							${meal.strIngredient8}
							${meal.strIngredient9}
							${meal.strIngredient10}
						</div>
							${meal.strInstructions}
					`;
					console.log(meal);
				}
			});
		});
	}
}
