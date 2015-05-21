# Angular Js template project Overview

Template de la configuración básica para iniciar un proyecto de frontend en angularjs.

# Requisitos (Ubuntu OS)

- Tener instalado Nodejs.
```sudo apt-get install nodejs```
```node -v``` - Para verificar que se haya instalado correctamente.

- Instalar bower
```npm install -g bower```

- Instalar módulos de angularjs. Situarse en la carpeta ráiz del proyecto, a nivel de package.json y bower.json.
```npm install```

- En caso de modificar alguna dependencia, ejecutar:
```npm update & bower update```

- Instalar grunt para ejecutar tareas:
```sudo npm install -g grunt-cli```

- Levantar el servidor Frontend:
```grunt serve```

- Al iniciar el server con la tarea anterior, se creará un archivo de configuración ```app/scripts/app_config.js```
el cual tendrá los datos necesarios de configuración para un ambiente de desarrollo. Este archivo es
ignorado por git ya que debe ser generado automáticamente en cada deploy.

Para generar uno diferente al de desarrollo, se debe agregar un nuevo archivo de config en ```app/env```
y ejecutar el siguiente comando (Por ejemplo para production.js):

```ENV=production grunt serve```

Así el servidor levantará con el archivo de configuración apropiado al ambiente de deploy.

Si solo se requiere crear el archivo sin levantar el server ejecutar:
```grunt concat:config_file```

Revisar archivo Gruntfile.js para conocer las configuraciones.

Preguntas: amed.nin@gmail.com, skype: amed.ia