# empresa-django-vue

Aplicación Vue de ejemplo con API REST.

## Prerrequisitos

1. Instalar [Docker Desktop](https://www.docker.com/products/docker-desktop/).
2. En Windows, instalar [Scoop](https://scoop.sh) usando PowerShell:

    ```powershell
    Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
    Invoke-RestMethod -Uri https://get.scoop.sh | Invoke-Expression
    ```

   Y después instalar los comandos necesarios:

    ```powershell
    scoop install make
    ```

## Puesta en marcha

1. Crear el fichero `.env` a partir de `env-example` y configurar las variables.
2. Construir el contenedor donde se ejecuta la aplicación:

    ```shell
    make build
    ```

3. Instalar las dependencias de Node.js:

    ```shell
    make install
    ```

4. Arrancar el contenedor:

    ```shell
    make start
    ```

5. Acceder a [la aplicación](http://localhost:5173).

## Referencias

- [How to consume APIs with Vuex, Pinia, and Axios](https://blog.logrocket.com/consume-apis-vuex-pinia-axios)
- [Using Moment](https://momentjs.com/docs/#/use-it/node-js/)
- [Vite - Server Options](https://vitejs.dev/config/server-options#server-watch)
- [usePolling leads to high CPU utilization](https://github.com/paulmillr/chokidar#performance)
- [Vue 3 + Pinia - JWT Authentication Tutorial & Example](https://jasonwatmore.com/post/2022/05/26/vue-3-pinia-jwt-authentication-tutorial-example)
- [How to Use Fetch with async/await](https://dmitripavlutin.com/javascript-fetch-async-await/)
- [Using Axios to set request headers](https://blog.logrocket.com/using-axios-set-request-headers/)
- [Vue 3 + Vite - Access Environment Variables from dotenv (.env)](https://jasonwatmore.com/post/2022/05/28/vue-3-vite-access-environment-variables-from-dotenv-env)
- [Env Variables and Modes](https://vitejs.dev/guide/env-and-mode.html)
- [Form Validation in Vue 3 with Vuelidate and PrimeVue using Composition API](https://dev.to/sumandev/form-validation-in-vue-3-with-vuelidate-and-primevue-using-composition-api-2k36)
- [Vuelidate](https://vuelidate-next.netlify.app)
