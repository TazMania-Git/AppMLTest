# AppMLTest
AppMLTest es un programa realizado con Ionic, hibrido para las plataformas Android y IOS (escalable a Web). Según lo solicitado se creó una aplicación la cual se conecta a la API de MercadoLibre y por medio de las solicitudes enviadas se obtiene según el id del vendedor elegido todos sus ítems para luego poder descargarlos en un formato PDF. 
En la aplicación se agregaron funciones como el refresh token el cual se encarga (siempre en cuando se corrija en el script en el sector designado de los servicios los datos del id de una app de ML, el secret key y el refresh token).

## Funcionamiento 🚀
La aplicación es muy intuitiva ya que utiliza las funcionalidades nativas de Android y IOS (por el momento se utilizó un emulador Android) 

![](https://github.com/TazMania-Git/AppMLTest/blob/main/src/assets/AppMLTest.gif)

## Download Log

![Alt text](https://github.com/TazMania-Git/AppMLTest/blob/main/src/assets/Captura1.PNG?raw=true)![Alt text](https://github.com/TazMania-Git/AppMLTest/blob/main/src/assets/Captura2.PNG?raw=true)


![Alt text](https://github.com/TazMania-Git/AppMLTest/blob/main/src/assets/Captura3.PNG?raw=true)![Alt text](https://github.com/TazMania-Git/AppMLTest/blob/main/src/assets/Captura4.PNG?raw=true)

## About

![Alt text](https://github.com/TazMania-Git/AppMLTest/blob/main/src/assets/Captura5.PNG?raw=true)

## Buscador

![Alt text](https://github.com/TazMania-Git/AppMLTest/blob/main/src/assets/Captura6.PNG?raw=true)

## Formato PDF

![Alt text](https://github.com/TazMania-Git/AppMLTest/blob/main/src/assets/PDF1.jpg?raw=true)
![Alt text](https://github.com/TazMania-Git/AppMLTest/blob/main/src/assets/PDF2.jpg?raw=true)

## Script

_Por cuestiones de seguridad y privacidad los datos fueron tapados, pero se explica su funcionamiento_

### refreshToken()

es la función encargada de realizar la actualización del token cada vez que se termine el tiempo de 6hs, para poder utilizar se necesita completar los datos de client_id con un numero de app generado en la página de ML developer, el client_secret que también es otorgado después de crear una aplicación y el refresh token que es el primero que se nos otorga cuando hacemos nuestra primera autorización del token.

![Alt text](https://github.com/TazMania-Git/AppMLTest/blob/main/src/assets/refresh.jpg?raw=true)

### buscarPorSellerId()

es la función encargada de realizar la búsqueda dependiendo de numero de id le brindemos. 

![Alt text](https://github.com/TazMania-Git/AppMLTest/blob/main/src/assets/buscarPorSellerId.jpg?raw=true)

### buscarPorSeller()

esta función es la primera que se ejecuta y trae los datos solicitados del id 179571326 que se nos pide al inicio del ejercicio.

![Alt text](https://github.com/TazMania-Git/AppMLTest/blob/main/src/assets/buscarPorSeller.jpg?raw=true)

## Comentarios

La aplicación se realizó en un promedio de 55hs distribuidas en 6 días de desarrollo por la urgencia de poder presentar el proyecto y ser evaluado, por lo tanto, se encuentra en una versión alpha la cual puede escalarse sin problemas.




