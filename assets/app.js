const API_CATEGORIES = "https://shop-rest-api.test.com/api/categories";
const API_PRODUCTS = "https://shop-rest-api.test.com/api/products";
const category_id = null;

const htmlCategories = document.querySelector("#categories");
const htmlProducts = document.querySelector("#products");

addElementCategory();
addElementProducts(getProductsApiUrl(category_id));

document.addEventListener('click',function(e){
	if(e.target.tagName.toLowerCase() === 'li'){
	    let categoryId = e.target.value;
	    addElementProducts(getProductsApiUrl(categoryId));
	}
})	

function getProductsApiUrl(categoryId){
	if(categoryId){
		return API_PRODUCTS+'?category_id='+categoryId;
	}
	return API_PRODUCTS;
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

function renderCategory(category) {	
	let elementTemplate = document.querySelector("#templateCategory");
	let template = document.importNode(elementTemplate.content, true);

	renderCategoryName(template, category);

	htmlCategories.appendChild(template);
}


function renderProduct(product) {	
	let elementTemplate = document.querySelector("#templateProduct");
	let template = document.importNode(elementTemplate.content, true);
	
	renderProductImage(template, product);
	renderProductTitle(template, product.name);
	renderProductCategory(template, product.category);
	renderProductPrice(template, product.price);
	renderProductDiscount(template, product.discount);

	htmlProducts.appendChild(template);
}

function renderCategoryName(template, category){
	template.querySelector('li').innerHTML = category.name;
	template.querySelector('li').value = category.id;
}

function renderProductImage(template, product){
	template.querySelector('img.card-img-top').src = getImageUrl(product.url_image);
	template.querySelector('img.card-img-top').alt = product.name;
	template.querySelector('img.card-img-top').title = product.name;
}

function renderProductTitle(template, name){
	template.querySelector('h3.card-title').innerHTML = name;
}

function renderProductCategory(template, category){
	template.querySelector('a.category').innerHTML = category;
}

function renderProductPrice(template, price){
	template.querySelector('span.price').innerHTML = getFormattedPrice(price);
}

function renderProductDiscount(template, discount){
	if(discount > '0'){
		template.querySelector('div.discount').innerHTML = getFormattedDiscount(discount);
	}else{	
		template.querySelector('div.discount').className = "d-none"
	}
}
/**
 * Esta función recibe un producto y devuelve la URL de su imagen.
 * El valor es el mismo a menos que no tenga, y se use una imagen por defecto.
 */
function getImageUrl(url_image) {
	if (url_image) {
		return url_image;
	}
	return 'assets/images/no_image.png';
}

/**
 * Esta función recibe un precio como flotante (ej. 34.5456456)
 * y devuelve una cadena lista para mostrar al usuario final (ej. $ 34.54)
 */
function getFormattedPrice(price) {	
	const formatCurrency = new Intl.NumberFormat('es-PE', {
		style: 'currency',
	    currency: 'PEN',
	    minimumFractionDigits: 2
	});
	return formatCurrency.format(price);
}

function getFormattedDiscount(discount) {	
	return discount+'%';
}




