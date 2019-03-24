
### `Backend`
 1. U terminalu ili cmd-u promijenite direktorij u "Django-React\Backend"
 2. Instalirajte sve pakete iz requirements.txt datoteke
 3. Napravite migraciju baze ("python manage.py makemigrations" i "python manage.py migrate")
 4. Pokrenite server ("python manage.py runserver")


### `Frontend`
 1. Instalirajte Node.js ukoliko ga nemate (https://nodejs.org/en/)
 2. Otvorite drugi terminal ili cmd te promijenite direktorij u "Django-React\Frontend\rssview"
 3. Pokrenite naredbu "npm install" kako bi instalirali neophodne pakete
 4. Pokrenite server ("npm start")
 5. U browseru otvorite "http://localhost:3000"


### `Napomene`
 Za frontend dizajn u Reactu sam koristio "AntD". U "masteru" trenutno povezujem frontend i backend na drugi način (konfiguracijom webpack servera i babela)