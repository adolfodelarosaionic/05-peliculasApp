# Aplicación de peliculas                                                                           27 clases 03:17:07

## Introducción a la sección                                                                                     00:43

:+1:

## Temas puntuales de la sección                                                                                 00:12

En esta sección nos enfocaremos en trabajar creando una aplicación real que eventualmente desplegaremos en las AppStores, que se encargue de mostrar información de diversas películas actuales, uso de storage, consumo de APIS y mucho más.

El objetivo es reforzar conocimientos con las tareas y enfocarnos en un diseño más horizontal.

## Demostración de la aplicación - Peliculas                                                                     02:10

:+1:

## Inicio de proyecto - PeliculasApp                                                                             02:42

Creación del nuevo proyecto:

`ionic start peliculasApp tabs`

Cambiemonos a la carpeta del proyecto y levantemos el servidor:

`ionic serve`

<img src="images/peliculasAppInicio.png">

Vamos a cambiar el nombre de los tabs en el archivo `tabs.page.html` por:

* Películas
* Buscar
* Favoritos

Así como el icono del 3er tab por `star-outline`.

<img src="/images/peliculasAppNewTabas.png">

## Creando un API Key en TheMovieDB                                                                              03:21

Vamos a utilizar la página [themoviedb](https://www.themoviedb.org/) 

"La base de datos de películas (TMDb) es una base de datos de películas y televisión creada por la comunidad. Todos los datos han sido agregados por nuestra increíble comunidad que se remonta a 2008. El fuerte enfoque internacional y la amplitud de datos de TMDb son en gran medida incomparables y algo de lo que estamos increíblemente orgullosos. En pocas palabras, vivimos y respiramos comunidad y eso es precisamente lo que nos hace diferentes."

<img src="/images/themoviedb.png">

### Registrarse en The Movie DB

Debemos registrarnos en The Movie DB

<img src="/images/themoviedbRegistro.png">

Una vez validado el email que nos envian podemos ingresar a nuestra cuenta:

<img src="/images/themoviedbIngreso.png">

Una vez adentro de nuestra cuenta ya podemos crear nuestro API Key, nos vamos a  `Perfil / Editar perfil / API`:

<img src="/images/themoviedbAPI.png">

Pulsamos en `click here`:

<img src="/images/themoviedbDeveloper.png">

Nos sale un texto que debemos Aceptar. Llegamos a un formulario que debemos rellenar.

<img src="/images/themoviedbFormulario.png">

Una vez rellenado el formulario nos genera nuestra **Clave de la API (v3 auth) 5cc470f991922e74ecfac8aaed7d9350** 

<img src="/images/themoviedbClave.png">

Podemos usar el URL [https://api.themoviedb.org/3/movie/550?api_key=5cc470f991922e74ecfac8aaed7d9350](https://api.themoviedb.org/3/movie/550?api_key=5cc470f991922e74ecfac8aaed7d9350) para recuperar el JSON.

También nos genera un **Token de acceso de lectura a la API (v4 auth)**

### The Movie Database (TMDb) API

En el siguiente enlace tenemos información completa sobre [The Movie Database (TMDb) API](https://developers.themoviedb.org/3/getting-started/introduction)

### Descubre Ejemplos del API

En el siguiente enlace podemos ver algunos [Ejemplos del API](https://www.themoviedb.org/documentation/api/discover)

## Servicio para traer las películas de estreno                                                                  08:31

### Descubre ejemplos de API

En el siguiente enlace tenemos algunos ejemplos para usar el API:

[Descubre ejemplos de API]()

## Crear la interfaz de la respuesta y películas                                                                 04:18
## Mostrar películas - pipe.module y pipe imagen                                                                 10:56
## Variables globales de nuestra aplicación                                                                      10:24
## Componente SlideShow y componente SlideShow-Poster                                                            12:20
## Mostrar películas populares                                                                                   04:36
## Mostrar pares de películas                                                                                    07:58
## Cargar más películas horizontalmente                                                                          11:44
## Modal con los detalles de la película                                                                         08:04
## Información de la película y actores                                                                          09:27
## Mostrar detalles de la película                                                                               10:44
## Mostrar detalles de la película - Parte 2                                                                     13:21
## Diseño de la página de búsqueda de películas                                                                  08:04
## Servicio para buscar películas                                                                                04:24
## Diseño de la página de búsqueda de películas                                                                  11:05
## Guardar películas en el storage                                                                               06:32
## Prevenir duplicados en nuestro storage de películas                                                           04:54
## Cargar favoritos del storage y verificar si existe una película por ID                                        12:24
## Mostrar pantalla de favoritos                                                                                 12:49
## Tarea: Favoritos por género                                                                                   10:18
## Pequeños arreglos estéticos en ios                                                                            04:48
## Código fuente de la sección                                                                                   00:18