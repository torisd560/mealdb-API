const errorDiv = document.getElementById('error');
const mealCategories = document.getElementById('meal-categories')
// search meal by name or fisrt letter
const searchFood = async () => {
    const searchInput = document.getElementById('search-input')
    const searchText = searchInput.value
    searchInput.value = '';
    // error handling
    if (searchText == '') {
        errorDiv.style.display = 'block'
        errorDiv.innerText = `"please write food name in search input"`
        return;
    }
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`
    const res = await fetch(url)
    const data = await res.json()
    displayMeals(data.meals)
}


//display meal
const displayMeals = meals => {

    if (!meals) {
        errorDiv.style.display = 'block'
        errorDiv.innerText = `"No Result Found"`
        mealCategories.style.display = 'none';
    }
    mealCategories.innerText = 'Latest Meals'
    const mealContainer = document.getElementById('display-meal')
    mealContainer.style.cursor = 'pointer'
    mealContainer.textContent = '';
    mealCategoriesContainer.textContent = '';
        meals.forEach(meal => {
            errorDiv.style.display = 'none'
            const div = document.createElement('div')
            div.classList.add('col')
            div.innerHTML = `
                <img onclick="loadMealDetail(${meal.idMeal})" class="img-fluid" src ="${meal.strMealThumb}">
                <p class="text-white text-center">${meal.strMeal}</p>
            `;
            mealContainer.appendChild(div)
            
        });
}
// display meal details by id
const loadMealDetail = async mealId => {
    const res = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`)
    const data = await res.json()
    displayMealDetail(data.meals[0])
}
const displayMealDetail = meal => {
    console.log(meal)
    const mealDetail = document.getElementById('meal-detail')
    mealDetail.textContent = '';
    const div = document.createElement('div')
    div.innerHTML = `
        <img src="${meal.strMealThumb}" class="card-img-top " alt="...">
            <div class="card-body  text-center">
                <h5 class="card-title">${meal.strMeal}</h5>
                <p class="card-text">${meal.strInstructions.slice(0, 150)}.</p>
                <a href="${meal.strYoutube}" class="btn btn-primary">See more</a>
            </div>
    `;
    mealDetail.appendChild(div)
}
//meal categories
const mealCategoriesContainer = document.getElementById('display-meal-categories')
const loadMealCategories = async () => {
    const res = await fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
    const data = await res.json()
    displayMealCategories(data.categories)
}
loadMealCategories()
// display meal categories
const displayMealCategories = categories => {
    categories.forEach(category => {
        const div = document.createElement('div')
        div.classList.add('col')
        div.innerHTML = `
            <img class="img-fluid" src ="${category.strCategoryThumb}">
            <p class="text-white text-center">${category.strCategory}</p>
        `;
        mealCategoriesContainer.appendChild(div)
    })
}
