##  SHOP FRONTEND

Este proyecto ha sido realizado como solución a un ejercicio propuesto para postular a un puesto de backend developer.

El proyecto en cuestión es una aplicación básica que realiza peticiones a una [API REST](https://github.com/diegoh94/shop-rest-api).

La aplicación debe hacer lo siguiente:
- Desplegar todos los productos en el primer renderizado.
- Servir dinamicamente productos por categoría.
- Implementar un buscador de productos.

Para ello debe realizar peticiones a auna API que devuelva en formato JSON los datos filtrados.

## Tecnología

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
- render-info.js

El primero es usado para declaración de variables globales y metodos generales.
- Declaración de variables globales como contenedores dinámicos y URL de la API
- Funciones para escuchar eventos y hacer peticiones a la API de a acuerdo a la acción realizada.
- Funciones que reciben la URL_API generada, hacen una petición a la API por medio del metodo fecth y obtienen una respuesta que se envía a renderizar en los metodos siguientes(render-products.js y render-categories.js).

## App Cliente - Versión 2.0 
Se procedió a implementar puntos a mejorar en la aplicación cliente:
- Realizar búsqueda de productos al escuchar el evento de clic en un botón “Buscar”.
- Realizar búsqueda de productos al escuchar el evento keyup sobre la tecla enter en el input.
- Se corrigió el defecto de deformación de card’s de productos agregando un alto fijo.
- La selección de categorías se refresca al hacer una nueva petición. 
- Mientras se espera respuesta del servidor se muestra un loading Indicator.
- Se muestra un mensaje de advertencia al intentar realizar una búsqueda de productos sin ingresar texto.
- Se muestra información adicional respecto a la búsqueda realizada y/o selección de categoría.
