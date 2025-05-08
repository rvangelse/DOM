# Contenido Extra

## npm 
Node Package Manager (npm) es un administrador de bibliotecas que puedes usar en tus proyectos

```sh
#Inicializo npm en mi proyecto
npm init
#Instalo una nueva biblioteca 
npm install normalize.css

#Instala las dependencias que necesita un proyecto que clonaste
npm ci
```
OJO: Siempre lee la documentación de las bibliotecas que instalas en tus proyectos.

OJO: Al subir tu proyecto a git, incluye a node_modules en el `.gitignore`, así no subes todas las bibliotecas de tu proyecto a tu repositorio (Son pesadas)

## webpack
Es una biblioteca de JS que nos sirve para minificar los archivos de nuestro proyecto

OJO: `webpack` es una herramienta que usas para optimizar tu proyecto, no dentro del mismo.

OJO: Ignora la carpeta `dist` en tu repositorio, cuando uses webpack.

OJO: Hoy en día, es mas recomendable usar `Vite`
