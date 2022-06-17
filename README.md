## Server Independiente

El  Objetivo de este servidor es poder ser escalado en cualquier momento
las dependencias NO SON imprescindible , el servidor podra ser por ejemplo cambiado de EXPRESS a FASTIFY u otra tecnologias de manera sencilla , esto aprovechando la arquitectura basada en interfaces.


## Instrucciones

 El archivo package.json tiene los siguientes scripts.

``` npm run clean ``` , este comando limpia el proyecto , borra la carpeta dist y los node_modules.

``` npm run build ``` , este comando usa typescript para la transpilación de los archivos ts usando la configuración del tsconfig.json 

``` npm run dev ``` , este comando ejecuta el archivo transpilado en la carpeta dist 

## Autor

- 'Francisco Javier Jimenez Cohen' 