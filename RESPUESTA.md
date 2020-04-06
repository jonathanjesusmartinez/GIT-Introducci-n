# GIT Introducción
---
**1. ¿Qué es git?**
Es un sistema de control de versiones distribuido gratuito y de código abierto diseñado para manejar todo, desde proyectos pequeños hasta muy grandes, con velocidad y eficiencia.

**2. ¿Por qué queremos utilizar git?**
Para poder hacer un proyecto donde tenga acceso a los cambios realizados y poder contribuir con múltiples desarrolladores.

**3. ¿Qué es el bash que instala git?**
Es un terminal o consola que instala git con mejor funcionalidad.

**4. Describa los estados (`working directory, staging area, repository`)**
+ `working directory`: donde se trabaja con todos los archivos.

+  `staging área:` donde se agregan los archivos que queremos preparar para guardar.

+  `repository`: donde se guardan los archivos.

**5. Describa el flujo para crear un nuevo repositorio git.**
`git config --global user.email “mail@ejemplo.com”`
`git config --global user.name “Tu nombre”`
`git commit –m “Descripción”`

**6. Describa el flujo para agregar un archivo simple al repositorio.**
`git add archivo.ej`
`git commit –m “Descripción”`

**7. Describa el flujo para cambiar el archivo agregado y guardar los cambios en el repositorio.**
`git reset HEAD archivo.ej`
`git checkout -- archivo.ej`
`git commit -m "Descripción"`

**8. ¿Cómo hago para ignorar un archivo o carpeta?**
Creando un archivo “.gitignore” en la carpeta del proyecto que, mediante el editor de código, contenga los nombres de los archivos o carpetas que se quieran ignorar.

**9. Explique qué es un branch. Dé un pequeño ejemplo de cómo haría uno.**
Es el comando para poder cambiar de versiones de nuestro proyecto.
`git branch <Nombre>`

**10. ¿Qué hago con `git add .`?**
Sirve para añadir los archivos, pasar del `working directory` al `staging área.`

**11. ¿Cómo cambiamos de un branch a otro?**
`git checkout “nombre del branch”`
