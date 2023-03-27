
$.ajax({
    type: 'get',
    url: `https://www.themealdb.com/api/json/v1/1/filter.php?a=Canadian`,
    success: function(response){
        console.log(response);
        for(let i=0;i<response.meals.length;i++){
            let newitem = `<div data-aos="fade-left" class="col-md-3 m-2 shadow-lg p-3 mb-5 bg-white rounded text-center">
            <p>${ response.meals[i].strMeal} </p><a href="https://www.themealdb.com/meal/${response.meals[i].idMeal}">
            <img src="${response.meals[i].strMealThumb}" class="img-fluid"/> <a/>
            <p class="mt-3"> <a href="https://www.themealdb.com/meal/${response.meals[i].idMeal}"> <button class="btn btn-primary butcol">Recipe</button></a> </p>
            </div>`;

            $('#myitems').append(newitem);
        }
    },
    error: function(error){
        console.log(error);
    }
    })
