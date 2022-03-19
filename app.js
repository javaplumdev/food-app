// const api_key = `4fb26edefa3844e4ad2455ef77fc0d13`;
// const api_url = `https://api.spoonacular.com/recipes/random?apiKey=${api_key}&number=10`;

// const recipe_container = document.querySelector('.recipe_container');
// const recipe_card = document.querySelector('.recipe-card');

// // Defining async function
// async function getapi(api_url) {
// 	// Storing response
// 	const response = await fetch(api_url);

// 	// Storing data in form of JSON
// 	var data = await response.json();
// 	const data_recipes = data.recipes;

// 	console.log(data_recipes);

// 	data_recipes.forEach((recipe) => {
// 		// Creating divs
// 		const create_div = document.createElement('div');

// 		// console.log(recipe);

// 		create_div.innerHTML = `
// 		<div class="recipe_card text-center">
// 			<p class="recipe_score rounded">${recipe.spoonacularScore}</p>
// 			<p class="recipe_title rounded">${recipe.title}</p>
// 			<img class="recipe_image" src=${recipe.image} />
// 		</div>
// 	`;

// 		console.log(recipe.spoonacularScore);
// 		recipe_container.appendChild(create_div);
// 	});

// 	recipe_card.addEventListener('click', () => {
// 		console.log('first');
// 	});
// }
// // Calling that async function
// getapi(api_url);

const generateButton = document.querySelector('.generate-btn');
const api_url = `https://www.themealdb.com/api/json/v1/1/random.php`;
const generate_div = document.querySelector('.generate-div');

async function get_api(api_url) {
	const response = await fetch(api_url);

	// 	// Storing data in form of JSON
	var data = await response.json();
	let mealData = data.meals[0];

	const child_div = document.createElement('div');
	child_div.innerHTML = `
		<div>
			<p>${mealData.strMeal}</p>
			<img src='${mealData.strMealThumb}'	class="recipe_img rounded shadow"/>
		</div>
	`;

	generate_div.appendChild(child_div);
}

generateButton.addEventListener('click', function () {
	window.location.href = window.location.href;
});

get_api(api_url);
