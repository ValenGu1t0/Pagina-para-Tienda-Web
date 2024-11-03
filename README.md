# Pagina Web-para-Tienda-Online

Proyecto personal en el cual aplico mis conocimientos en HTML5, Tailwind CSS y Javascript puro, con la finalidad de crear una tienda web con todas las prestaciones, atractiva, dinámica y facil de usar tanto para el owner como el user y que sea adaptable o responsive para acceder en mobile.  


-// DOCUMENTACION

Aclaro de antemano que esto es una version inicial de la web y con el tiempo iré implementando mas y mejores cosas. 

Para este proyecto tenia ganas de usar mucho JS puro para aplicar la lógica de automatización del proceso de publicar un producto en tu tienda online de la forma mas simple posible y que el cliente tenga acceso a los mismos de la forma mas directa y llamativa. Decidi usar Tailwind CSS para la apariencia simple y compacta de la tienda, de forma que puedo aplicar codigo reutilizable y combinarlo con el uso de Javascript para hacer una UI rápida y dinámica. 

La tematica de la tienda son los juegos de cartas coleccionables (Trading Card Game o TCG) y los juegos de mesa. De todas formas, el enfoque lógico de la página me permite reutilizar la misma para casi cualquier producto que se desee. Como estoy dedicandome al Front End, decidi implementar una base de datos "falsa" en la cual tengo un array de objetos 
declarados previamente (pero preparado para que se le agreguen objetos y que la pagina muestre ese producto automaticamente).

Cada objeto posee un id_TCG, el cual indica a que "juego" pertenece. Ademas, un id_producto para referenciar al producto directamente; 
cada producto a su vez posee título, imagen, precio y stock, y ademas se trata al array como si fuera una base de datos normalizada, en la cual accedo por id primarias que referencian a 
cada objeto y sus propiedades. Se podria considerar que esta "normalizada", pero eso es otro tema. 

La idea principal es que el dueño de la pagina pueda agregar y modificar los objetos (productos) mediante una interfaz de la web (owner side) en el array de objetos (CRUD manual), y la pagina actualice su contenido de forma automatica y dinámica, en base a los productos existentes, sin tener que ir modificando uno por uno los atributos y clases de cada elemento html.

En esta primer version implemento la logica para hacer la creación de productos y sus respectivas secciones y páginas de forma automática, sin usar mas de 1 archivo html por página (son un total de 3: landing, seccion TCG y producto). Para la próxima version planeo tener la interfaz de dueño y que pueda agregar productos manualmente al array "base de datos".





