
                   _                          _                 
  _ __ ___  _   _ (_) ___ _ __ ___  ___   ___| |_ ___ _ __ ___  
 | '_ ` _ \| | | || |/ _ \ '__/ _ \/ __| / __| __/ _ \ '_ ` _ \ 
 | | | | | | |_| || |  __/ | |  __/\__ \ \__ \ ||  __/ | | | | |
 |_| |_| |_|\__,_|/ |\___|_|  \___||___/ |___/\__\___|_| |_| |_|
                |__/                                            

                    ___ ___  _ __   
                    / __/ _ \| '_ \  
                   | (_| (_) | | | | 
                    \___\___/|_| |_| 
                                    _   
                _ __ ___  __ _  ___| |_ 
                | '__/ _ \/ _` |/ __| __|
                | | |  __/ (_| | (__| |_ 
                |_|  \___|\__,_|\___|\__|
                          
# estructura de mi archivo en formato ascci 
```
tensconreact/
├── node_modules/
├── public/
├── src/
│   ├── assets/
|   |   ├───images/
|   │   │   ├── IMG1.jpg
|   │   │   ├── IMG2.jpg
|   │   │   ├── IMG3.jpg
|   │   │   ├── IMG4.jpg
|   │   │   ├── logon.jpg
|   │   │   └── IMG5.jpg
|   |   |   ├── IMG6.jpg
|   │   │   ├── IMG7.jpg
|   │   │   ├── IMG8.jpg
|   │   │   ├── IMG9.jpg 
|   │   │   └── IMG10.jpg
│   ├── components/
│   │   ├── api.jsx  <--- la api (es de noticias)
│   │   ├── Contact.jsx
│   │   ├── datosingresados.jsx
│   │   ├── Footer.jsx
│   │   ├── Header.jsx
│   │   ├── hero.jsx  
│   │   ├── historiasdeexito.jsx  <--- este es el componente extra !
│   │   ├── proyectos.jsx
│   ├── ├── apijson.js
|   |   └── quienessomos.jsx
│   ├── app.css
│   ├── app.jsx
│   ├── index.css
│   └── index.js
|   
├── .gitignore  <--para el control de versiones en github
├── arquitectura.md <-- explicacion de la arquitectura y como funciona plop
├── package-lock.json
└──  package.json

```

# arquitectura  de mi proyecto 

tens con react arreglado y demas esta  bien la estructura


en la pag  2 botones tienen 2 signos singulares que son "★" y "☆"
eso explica que son los componentes especiales "★Historias de Éxito★" es el componente extra y "☆Noticias☆" es la api, es una ayuda visual para las personas que miren la pagina web
dentro de los archivos tiene comentarios !!FAVOR DE NO TOMARSELOS EN SERIO!!
estan escritos por y para la persona que escribio el archivo 

forma de uso : 

- La carpeta `src` contiene todo el código fuente, incluyendo componentes , imagenes y estilos.
- El componente principal es `App.jsx`, que organiza la estructura general de la aplicación.
- En `src/components` se encuentran los componentes reutilizables.
    -`api.jsx` dentro de este componente esta la api  de noticias (https://newsapi.org/)  la api funciona con una key que se saca mediante registrarse (por si la quiero usar otra vez)
    - Se implementó un buscador en `api.jsx` que permite filtrar noticias por palabra clave, haciendo nuevas consultas a la API.
    -`historiadeexitos.jsx` es el componente extra en si
    -todos los demas componentes son para la estructura basica de la pagina. 
    
-gitignore es para la subida de los datos hacia github (que se suba lo importnte nomas)

Esta arquitectura permite una fácil extensión y mantenimiento, separando responsabilidades en componentes claros y consumiendo datos externos mediante APIs públicas.

