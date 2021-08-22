const API_CATEGORIES = "https://shop-rest-api.test.com/api/categories";
const API_PRODUCTS = "https://shop-rest-api.test.com/api/products";
let category_id = null;
let character_like = null;
let filterType = null;

const htmlCategories = document.querySelector("#categories");
const htmlProducts = document.querySelector("#products");
const inputSearch = document.querySelector('#searchProduct');

addElementCategory();
addElementProducts(getProductsApiUrl(category_id, filterType));

document.addEventListener('click', isCategory)
inputSearch.addEventListener('input', searchProducts);

function isCategory	(e){
	if(e.target.tagName.toLowerCase() === 'li'){
	    category_id = e.target.value;
	    filterType = 'byCategory'
	    addElementProducts(getProductsApiUrl(category_id, filterType));
	}
}

function searchProducts(e){
	character_like = e.target.value;
	filterType = 'searchProducts'
	addElementProducts(getProductsApiUrl(character_like, filterType));
}

function addElementCategory(){
	fetch(API_CATEGORIES)
	.then((response) => response.json())
	.then((categories) => {
		for (category of categories){
			renderCategory(category);	    	
	    } 
	});	
}

function addElementProducts(apiURl){	
	console.log(apiURl)
	fetch(apiURl)
	.then((response) => response.json())
	.then((products) => {		
		htmlProducts.innerHTML = "";		
		for(product of products){
			renderProduct(product);
		}
	});	
}

function getProductsApiUrl(data, filterType){
	if(data && filterType == 'byCategory'){
		return API_PRODUCTS+'?category_id='+data;
	}
	if(data && filterType == 'searchProducts'){
		return API_PRODUCTS+'?character='+data;
	}
	return API_PRODUCTS;
}







