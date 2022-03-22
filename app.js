const btn = document.querySelector('.btn');
const food_value = document.getElementById('food-value');
const results = document.getElementById('results');
const modalContent = document.querySelector('.modalContent');

btn.addEventListener('click', function () {
	const api_url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${food_value.value}`;
	get_api(api_url);
});

async function get_api(api_url) {
	const response = await fetch(api_url);
	var data = await response.json();
	const mealData = data.meals;

	showData(mealData);
}

function showData(mealData) {
	const meals = mealData;
	console.log(meals);

	console.log(meals);

	if (meals === null || food_value.value === '') {
		results.innerHTML = `<p class="text-danger">Please enter a input fields</p>`;
	} else {
		results.innerHTML = meals.map(
			(meal) => `
			<div class="card" style="width: 18rem;">
				<img class="card-img-top" src="${meal.strMealThumb}" alt="Card image cap">
				<div class="card-body">
					<h5 class="card-title">${meal.strMeal}</h5>
<<<<<<< Updated upstream
					<p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
					<button type="button" class="modalBtn btn btn-start">
						Cook this!
						</button>
=======
					<p class="card-text">${meal.strCategory}</p>
					<a href="#" class="btn btn-primary">Cook this!</a>
>>>>>>> Stashed changes
				</div>
			</div>
			`
		);
	}

	showModal();
}

function showModal() {
	const btnModal = document.getElementsByClassName('modalBtn');

	for (let i = 0; i < btnModal.length; i++) {
		const button = btnModal[i];
		button.addEventListener('click', function (event) {
			const buttonClicked = event.target;
			modalContent.style.display = 'block';
			console.log(modalContent);
			console.log(buttonClicked);
		});
	}
}
