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

Vamos a crear el primer servicio para recuperar información de **The Movie Database**, antes de esto vamos a ir a [Ejemplos del API](https://www.themoviedb.org/documentation/api/discover) y de allí vamos a copiar el primer URL:

 `/discover/movie?primary_release_date.gte=2014-09-15&primary_release_date.lte=2014-10-22`

 Este URL esta incompleto ya que le falta la primer parte que es:

 `https://api.themoviedb.org/3` la cual la podemos ver en [The Movie Database (TMDb) API](https://developers.themoviedb.org/3/getting-started/introduction).

 Por lo que el enlace completo es:

 `https://api.themoviedb.org/3/discover/movie?primary_release_date.gte=2014-09-15&primary_release_date.lte=2014-10-22`

 Este URL lo podemos probar en el navegador o en Postman:

 <img src="/images/postmanEjemplo1.png">

 Este mensaje que nos regresa nos indica que no estamos facilitando el API Key, el API Key lo debemos mandar como un parámetro adicional:

 `https://api.themoviedb.org/3/discover/movie?primary_release_date.gte=2014-09-15&primary_release_date.lte=2014-10-22&api_key=5cc470f991922e74ecfac8aaed7d9350`


<img src="/images/postmanEjemplo1ConAPIKey.png">

De esta manera nos regresa los datos correspondientes en un JSON, este enlace también lo podemos ejecutar en el navegador:

<img src="/images/navegadorEjemplo1ConAPIKey.png">

Podemos ver algunos de los resultados que nos regresa:

```js
"page": 1,
  "total_results": 2028,
  "total_pages": 102,
  "results": [
    {
      "popularity": 46.689,
      "vote_count": 11285,
      "video": false,
      "poster_path": "/5vHssUeVe25bMrof1HyaPyWgaP.jpg",
      "id": 245891,
      "adult": false,
      "backdrop_path": "/iJlGxN0p1suzloBGvvBu3QSSlhT.jpg",
      "original_language": "en",
      "original_title": "John Wick",
      "genre_ids": [
        28,
        53
      ],
      "title": "John Wick",
      "vote_average": 7.2,
      "overview": "Ex-hitman John Wick comes out of retirement to track down the gangsters that took everything from him.",
      "release_date": "2014-10-22"
    },
```

Podemos cambiar el valor de los parámetros para recuperar información más reciente ya que estabamos llamando información del 2014, cambiemosla:

`https://api.themoviedb.org/3/discover/movie?primary_release_date.gte=2019-11-01&primary_release_date.lte=2019-12-10&api_key=5cc470f991922e74ecfac8aaed7d9350`

<img src="/images/postmanEjemplo1ConAPIKeyReciente.png">

<img src="/images/navegadorEjemplo1ConAPIKeyRecientes.png">

Como podemos observar toda la información esta en inglés, podemos añadir un parámetro más para que la información nos la regrese en español:

`https://api.themoviedb.org/3/discover/movie?primary_release_date.gte=2019-11-01&primary_release_date.lte=2019-12-10&api_key=5cc470f991922e74ecfac8aaed7d9350&language=es`

<img src="/images/navegadorEjemplo1ConAPIKeyRecientesES.png">

Como podemos ver el texto de las descripciones entre otros ya se regresa en español. Otra opción que podemos tener es que las imagenes de las peliculas también se regresen en español añadiendo otro parámetro:

`https://api.themoviedb.org/3/discover/movie?primary_release_date.gte=2019-11-01&primary_release_date.lte=2019-12-10&api_key=5cc470f991922e74ecfac8aaed7d9350&language=es&include_image_language=es`

### Creación del Servicio

Vamos a crear el servicio para recuperar las películas llamado movies:

`ionic g s services/movies --skipTests=true`

Nos a creado el archivo `movies.service.ts` dentro de la carpeta `services`.

```js
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor() { }
}
```

Como ya esta `providedIn: 'root'` no necesitaremos inyectar nada, pero para hacer peticiones **Http** necesitamos importar `HttpClientModule` algo en el `app.module.ts`:

```js
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
```
Una vez que hemos iportado `HttpClientModule` podemos inyectarlo en el servicio para poder hacer la petición **Http**. Vamos a `movies.service.ts` para inyectar `HttpClient` lo tenemos que importar de `@angular/common/http` y crearemos el método `getFeature()` que recuperara la cartelera:

```js
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private http: HttpClient) { }

  getFeature(){
    return this.http.get('https://api.themoviedb.org/3/discover/movie?primary_release_date.gte=2019-11-01&primary_release_date.lte=2019-12-10&api_key=5cc470f991922e74ecfac8aaed7d9350&language=es&include_image_language=es');
  }
}
```
Vamos a probar este servicio. En `tab1.page.ts` que es la página principal inyectaremos dicho servicio e implementaremos el `OnInit()` donde llamaremos el servicio para ver si funciona:

```js
import { MoviesService } from '../services/movies.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit{

  constructor( private moviesService: MoviesService) {}

  ngOnInit() {
    this.moviesService.getFeature()
    .subscribe( console.log );
  }
}
```

Si ejecutamos la aplicación al cargar el Tab Películas vemos como se recupera el JSON con las películas;

<img src="/images/llamadaServicio.png">

## Crear la interfaz de la respuesta y películas                                                                 04:18

Vamos a crear una **Interfaz** para manejar de una manera más sencilla los resultados que regresa el Servicio creado en la sección anterior, en nuestro archivo `tab1.page.ts` donde invocamos el servicio, tenemos:

```js
export class Tab1Page implements OnInit{

  constructor( private moviesService: MoviesService) {}

  ngOnInit() {
    this.moviesService.getFeature()
    .subscribe( console.log );
  }
}
```

Lo modificamos por esto:

```js
ngOnInit() {
  this.moviesService.getFeature()
  .subscribe( resp => {
    console.log('Resp', resp);
  });
}
```

<img src="/images/llamadaServicioResp.png">

Obtenemos el mismo resultado pero con la palabra **Resp** previamente. 

### General la interfaz basadonos en el JSON

Para generar la interfaz a partir de un JSON podemos seguir los siguientes pasos:

* Tener instalada la Extensión JSON to TS
* En la carpeta APP creamos una carpeta llamada **interfaces**
* Creamos el archivo `interfaces.ts`
* Tomando el URL lo cargamos en el navegador:
   `https://api.themoviedb.org/3/discover/movie?primary_release_date.gte=2019-11-01&primary_release_date.lte=2019-12-10&api_key=5cc470f991922e74ecfac8aaed7d9350&language=es&include_image_language=es`
* Copiamos el JSON entero que nos regresa con Ctrl+C
* En el archivo `interfaces.ts` vamos a llamar el Pluging `JSON to TS from clipboard` o usar **Convert from clipboard** (`Ctrl + Alt + V`)

Al hacer todo esto en el archivo `interfaces.ts` se generan dos interfaces basados en el JSON:

```js
interface RootObject {
  page: number;
  total_results: number;
  total_pages: number;
  results: Result[];
}

interface Result {
  popularity: number;
  vote_count: number;
  video: boolean;
  poster_path: string;
  id: number;
  adult: boolean;
  backdrop_path?: string;
  original_language: string;
  original_title: string;
  genre_ids: number[];
  title: string;
  vote_average: number;
  overview: string;
  release_date: string;
}
```

Para que estas dos interfaces puedan ser usadas desde fuera necesitan ser exportables, ademas vamos a cambiarles el nombre para que refrejen lo que representan, por lo que el elcódigo final queda así:

```js
export interface RespuestaMDB {
  page: number;
  total_results: number;
  total_pages: number;
  results: Pelicula[];
}

export interface Pelicula {
  popularity: number;
  vote_count: number;
  video: boolean;
  poster_path: string;
  id: number;
  adult: boolean;
  backdrop_path?: string;
  original_language: string;
  original_title: string;
  genre_ids: number[];
  title: string;
  vote_average: number;
  overview: string;
  release_date: string;
}
```

Ahora que ya tenemos definidas las Interfaces, volvamos a `tab1.page.ts` donde podemos poner el tipo `RespuestaMBD` a **resp** y crearemos el atributo `peliculasRecientes` que será un array que contenga toda la lista de películas, nuestro código final queda así:

```js
import { RespuestaMDB, Pelicula } from './../interfaces/interfaces';
import { MoviesService } from '../services/movies.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit{

  peliculasRecientes: Pelicula[] = [];

  constructor( private moviesService: MoviesService) {}

  ngOnInit() {
    this.moviesService.getFeature()
    .subscribe( (resp: RespuestaMDB) => {
      console.log('Resp', resp);
      this.peliculasRecientes = resp.results;
    });
  }
}
```

Todo debe seguir funcionando igual que antes:

<img src="/images/llamadaServicioResp.png">

Lo único que ya podremos saber exactamente que datos nos regresa el JSON, facilitando su uso.

Si vamos al servicio podemos mandarle explicitamente el tipo de dato que regresa el servicio poniendo `<RespuestaMDB>`:

```js
getFeature() {
    // tslint:disable-next-line:max-line-length
    return this.http.get<RespuestaMDB>('https://api.themoviedb.org/3/discover/movie?primary_release_date.gte=2019-11-01&primary_release_date.lte=2019-12-10&api_key=5cc470f991922e74ecfac8aaed7d9350&language=es&include_image_language=es');
  }
```

Haciendo esto podemos ir a `tab1.page.ts` que tiene:

```js
ngOnInit() {
  this.moviesService.getFeature()
  .subscribe( (resp: RespuestaMDB) => {
    console.log('Resp', resp);
    this.peliculasRecientes = resp.results;
  });
}
```
Y podemos quitar el tipado de aquí, por que ya se manda explicitamente desde el servicio. Por lo que el código puede quedar así:

```js
ngOnInit() {
  this.moviesService.getFeature()
  .subscribe( resp => {
    console.log('Resp', resp);
    this.peliculasRecientes = resp.results;
  });
}
```


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