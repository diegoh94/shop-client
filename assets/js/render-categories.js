function renderCategory(category) {	
	let elementTemplate = document.querySelector("#templateCategory");
	let template = document.importNode(elementTemplate.content, true);

	renderCategoryName(template, category);

	htmlCategories.appendChild(template);
}

function renderCategoryName(template, category){
	template.querySelector('li').innerHTML = category.name;
	template.querySelector('li').value = category.id;
}