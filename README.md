Este es un pequeño bot de prueba que he hecho para gestionar los turnos de los alumnos del bootcmamp de codenotch, cuenta con unos pocos comandos, que en una próxima versión mejoraré.
Los comandos que tiene por el momento son:

He añadido al .gitignore los modulos de node, para añadirlos si deseas probar el bot, debes iniciar el proyecto node, e instalar el siguiente módulo de discord.js:

npm init
npm install discord.js@12.5.3 (La versión más actual no me funcinó correctamente)

!add-turn (Los alumnos añaden su turno)
!drop-my-turn (Los alumnos borran su turno)
!reset-turns (Solo los profesores pueden resetear los turnos)
!drop-first-turn (Solo los profesores pueden borrar el primer turno)
!show-turns (Todos pueden mostrar los turnos de la lista)

npm install discord.js@12.5.3