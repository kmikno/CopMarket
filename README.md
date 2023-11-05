# CopMarket

App que sirve para comparar precios en mercados locales.

## DEPENDENCIAS DE DESARROLLO

- Backend
  - Nodemon: https://github.com/remy/nodemon#nodemon
  - Express: https://expressjs.com/
  - Playwright: https://playwright.dev/docs/intro
- Frontend
  - React: https://react.dev/learn
  - Vite: https://vitejs.dev/guide/
  - Eslint: https://eslint.org/docs/latest/use/getting-started
  - Tailwind: https://tailwindcss.com/docs/guides/vite

## USO

Descargar o clonar el repositorio desde:

```shell
git clone https://github.com/kmikno/CopMarket.git
```

Existen dos partes principales, la carpeta `backend` en la que se encuentra nuestro servicio de extraccion de precios para X mercado.

- Si queremos ejecutar este servicio debemos entrar a la carpeta `backend` y desde la terminal escribir:
  ```shell
    npm install
    npx playwright install
  ```
- Despues que termine de instalar las dependencias podemos ver en el archivo `package.json` los codigos para ejecutar el script.

El mismo paso se haria para ejecutar el frontend de la app, nos paramos en la carpeta raiz: `copMarket`

- Escribimos en la terminal `npm install`
- Y despues, escribimos `npm run dev` para seguir programando 🚀

### Primeros acercamientos de desarrollo

Se realizo desde vanilla javascript para conocer el lenguaje de programacion y como interactuar con el desarrollo web.
Los conceptos aprendidos fueron:

- Etiquetas HTML
- Manipulacion del DOM a traves de JavaScript
- Estilos CSS y como crear variables.

## Documentacion

- Normalize.css -> https://github.com/necolas/normalize.css/
- Gradientes en CSS -> https://cssgradient.io/
- Referencia de propiedades HTML -> https://www.w3schools.com/html/html_favicon.asp
- Variables en CSS -> https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties
