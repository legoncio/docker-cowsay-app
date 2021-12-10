DOCKER-COWSAY-APP

Este es el repositorio para la actividad de evaluación del curso nivelador del Master en Full Stack Web Development de la escuela Three Points

Es la misma aplicacion COWSAY-APP pero dockerizada. Crear una imagen ejecutando un comando similar a:

docker build . -t docker-cowsay-app

Esto creara una imagen de la aplicacion, que se puede correr mediante CLI o Docker desktop. Para correr en un contenedor, ejecutar un comando similar a:

docker run -d -p 3000:3000 docker-cowsay-app

Realizar una peticion tipo get:

localhost:3000/cowsay?message=Hello Nodejs

Se obtiene una respuesta del servidor:

< Hello Nodejs >
    \   ^__^
     \  (O O)\_______
        (__)\       )\/\
         U ||----w |
            ||     ||

Se puede obtener una imagen de esta app en el repositorio de imagenes de docker:

https://hub.docker.com/repository/docker/legoncio/docker-cowsay-app