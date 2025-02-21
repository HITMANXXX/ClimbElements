# ClimbElements
Aplicacion para calcular elementos para escalar una montaña de acuerdo a sus calorias minimas y peso maximo 

Esta prueba se da solución utilizando como lenguaje de programación JavaScript, (Nodejs y express) para el backend, y para el diseño del frontend se utilizó HTML, JavaScript y bootstrap 4.5. 

La aplicación se encuentras en diferentes módulos que son: 
-	Index.html: Esta es nuestra vista de la aplicación.
-	Server.js: es nuestro backend donde creamos nuestro endpoint e iniciamos el servidor
-	Main.js: en él se encuentra las funciones lógicas de nuestra aplicación como agregar los elementos desde la vista, enviar los elementos a nuestro backend.
-	findElement.js: Es el algoritmo que nos va a permitir calcular nuestros elementos de acuerdo al peso y calorías permitidas.

Para escalar el backend ya que está construido en Nodejs y Express y este ejecuta un algoritmo de programación dinámica, se podría mejorar con algoritmos de aproximación que puedan proporcionar una solución cercana a la óptima en menor tiempo. 

También si hay muchas peticiones al backend se puede utilizar un balanceador de carga como Nginx para poder distribuir las solicitudes. También poder empaquetar el backend en contenedores como Docker. Y por último si hay elementos fijos los podemos almacenar en una DB para no tener que enviar estos elementos en cada solicitud. 

A nivel de frontend como está construido en HTML, JavaScript y Bootstrap, se pueden utilizar frameworks como Vuejs o React que nos puedan ayudar a manejar mejor los estados y crear y reutilizar los componentes.

El proyecto estará en un repositorio de GitHub. Para poder configurar y ejecutarlo realizaremos los siguientes pasos: 

-	Clonar el repositorio:
git clone <url del repositorio>
cd <nombre del repositorio>

-	Instalar las dependencias:
npm install express cors

-	Iniciar el servidor
node server.js

-	Ejecutar la vista 
Index.html
Si se tiene la extensión en VScode live server, se puede ejecutar el archivo desde esta, para no abrir el archivo directamente.

-	Ingresamos los datos (calorías mínimas y peso máximo) y hacemos click en calcular.

-	Observamos el resultado en elementos permitidos. 
