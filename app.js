const API_CATEGORIES = "https://shop-rest-api.test.com/api/categorias";
const API_PRODUCTS = "https://shop-rest-api.test.com/api/productos";

const htmlCategories = document.querySelector("#categories");
const htmlProducts = document.querySelector("#products");



fetch(API_CATEGORIES)
	.then((response) => response.json())
	.then((categories) => {
		for (category of categories){
	    	let li = document.createElement('li');
	    	li.className = "list-group-item btn btn-primary text-left";

			li.appendChild(
				document.createTextNode(category.name)
			);
			htmlCategories.appendChild(li);
	    } 
	});

fetch(API_PRODUCTS)
	.then((response) => response.json())
	.then((products) => {
		for(product of products){
			
			let templateProduct = document.querySelector("#templateProduct");
			let contentTemplateProduct = document.importNode(templateProduct.content, true);

			const formatCurrency = new Intl.NumberFormat('es-PE', {
				style: 'currency',
			    currency: 'PEN',
			    minimumFractionDigits: 2
			});

			contentTemplateProduct.querySelector('h3.card-title').innerHTML = product.name;
			contentTemplateProduct.querySelector('img.card-img-top').src = product.url_image;
			contentTemplateProduct.querySelector('img.card-img-top').alt = product.name;
			contentTemplateProduct.querySelector('img.card-img-top').title = product.name;
			contentTemplateProduct.querySelector('span.price').innerHTML = formatCurrency.format(product.price);

			if(product.discount == 0)
				contentTemplateProduct.querySelector('div.discount').className = "d-none"
			else
				contentTemplateProduct.querySelector('div.discount').innerHTML = product.discount+'%';

			htmlProducts.appendChild(contentTemplateProduct);
		}
	});



	