##  SHOP FRONTEND

Este proyecto ha sido realizado como solución a un ejercicio propuesto para postular a un puesto de backend developer.

El proyecto en cuestión es una aplicación básica que realiza peticiones a una [API REST](https://github.com/diegoh94/shop-rest-api).

La aplicación debe hacer lo siguiente:
- Desplegar todos los productos en el primer renderizado.
- Servir dinamicamente productos por categoría.
- Implementar un buscador de productos.

Para ello debe realizar peticiones a auna API que devuelva en formato JSON los datos filtrados.

##Tecnología

De acuerdo con lo solicitado en el ejercicio no se ha hecho uso de nogun framework. La aplicación usa las siguientes tecnologías:
- Java Script de forma nativa
- HTML
- Bootstrap

## Index
Se ha diseñado una vista sencilla(**index.html**), donde los productos y categorías se irán cargando de forma dinámica.

### Templates
Se han diseñado templates que se irán habilitando e insertando en donde corresponda según se requiera.  

### Scripts
Se ha organizado los archivos en 3 ficheros, que son llamados desde el HTML.
- app.js
- render-products.js
- render-categories.js

El primero es usado para declaración de variables globales y metodos generales.
- Declaración de variables globales como contenedores dinámicos y URL de la API
- Funciones para escuchar eventos y hacer peticiones a la API de a acuerdo a la acción realizada.
- Funciones que reciben la URL_API generada, hacen una petición a la API por medio del metodo fecth y obtienen una respuesta que se envía a renderizar en los metodos siguientes(render-products.js y render-categories.js).