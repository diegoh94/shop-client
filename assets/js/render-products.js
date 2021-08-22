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

