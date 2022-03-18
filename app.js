// const api_key = `4fb26edefa3844e4ad2455ef77fc0d13`;
// const api_url = `https://api.spoonacular.com/recipes/random?apiKey=${api_key}&number=2`;

// const recipe_container = document.querySelector('.recipe_container');

// // Defining async function
// async function getapi(api_url) {
// 	// Storing response
// 	const response = await fetch(api_url);

// 	// Storing data in form of JSON
// 	var data = await response.json();
// 	const data_recipes = data.recipes;

// 	data_recipes.forEach((recipe) => {
// 		// Creating divs
// 		const create_div = document.createElement('div');

// 		console.log(recipe);

// 		create_div.innerHTML = `
//             <p class="recipe_title">${recipe.title}</p>
//             <img class="recipe_image" src=${recipe.image} />
//         `;

// 		recipe_container.appendChild(create_div);
// 	});
// }
// // Calling that async function
// getapi(api_url);
