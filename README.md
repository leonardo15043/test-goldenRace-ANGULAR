<p align="center"><a href="https://goldenrace.com/es" target="_blank"><img src="https://goldenrace.com/images/logo.png" width="400"></a></p>


## Test GoldenRace

Este proyecto es un juego de lotería desarrollado en Angular que inicialmente está configurado con 10 bolas, la idea es apostar un valor mínimo de 5 € y si coincide la bola que selecciono con la del sistema del juego la ganancia será de 1.5.

### Adicionales 

- Se mejoró la interfaz gráfica en UX y UI
- Guardado del historial de apuestas por usuario mediante un token.
- Configuración del juego 

### Instalación y configuración 

- Tener todo el ambiente de desarrollo, esto incluye tener node js y un IDE de desarrollo
- Clonar el repositorio en nuestro computador 
- Nos dirigimos a la carpeta de nuestro proyecto por consola y ejecutamos el siguiente comando para instalar las dependencias de npm 

    ```npm install```
    
- Esta aplicación como fuente de información usa unos servicios locales que funcionan con [JSON Server](https://www.npmjs.com/package/json-server), la estructura de datos esta en **src/api/db.json**
- Para ejecutar nuestra api local solo debemos ir a la ruta **src/api/** y ejecutar el comando ```json-server db.json --routes routes.json```, por lo general debería ejecutar en el puerto **3000** pero si no es asi debemos cambiar el puerto en el archivo **proxy.conf.json** para evitar errores de **CORS**
- luego ejecutamos nuestro proyecto para que se visualice en el navegador con el comando 

   ```ng serve```
   
### Lista de servicios

#### Configuración del juego   

 **GET** ```http://localhost:3000/api/game```

  Con este servicio podemos ver la configuración de:
  - La velocidad del intervalo de cada bola
  - El monto mínimo que el usuario puede apostar
  - El valor de ganancia por cada apuesta

#### Guardar apuesta

  **POST** ```http://localhost:3000/api/resultGame```
  
  Este servicio nos sirve para guardar el resultado final de la apuesta enviando los datos de tipo **ControlGame**
  
#### Listado de bolas

  **GET** ```http://localhost:3000/api/balls```
  
  Trae el listado de bolas para comenzar el juego , cada bola tiene su valor y color correspondiente, si queremos agregar más bolas podemos usar el servicios 
  **POST** ```http://localhost:3000/api/balls``` enviando la data correspondiente de la interfaz **Ball**
  
#### Ver bola

  **GET** ```http://localhost:3000/api/balls/${idBall}```
  
  Trae la información correspondiente de una bola
  
#### Mostrar información de un usuario 

  **GET** ```http://localhost:3000/api/users?token=${tokenUser}```
  
  Con el token que se guarda en el **storage** podemos consultar la información de un usuario  
  
#### Guardar información de un usuario 

  **POST** ```http://localhost:3000/api/users```
  
  Guarda la información del usuario de tipo **User**
  
#### Actualizar información de un usuario 

  **PATCH** ```http://localhost:3000/api/users```
  
  Este servicio sirve para actualizar la información del usuario pero en concreto para el alcance de este proyecto se usa para actualizar el valor acumulado del usuario
  
## Recomendaciones

- si hacemos un cambio directo en la base de datos del sistema debemos parar el proceso y volverlo a ejecutar
- si ya hemos apostado y queremos apostar con un usuario nuevo debemos eliminar el token del storage y refrescar la página 



