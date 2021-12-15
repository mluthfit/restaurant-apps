import 'regenerator-runtime';
import '../styles/style.css';
import App from './views/app';
import swRegister from './utils/sw-register';

const app = new App({
  button: document.querySelector('nav button'),
  drawer: document.querySelector('nav .menu'),
  body: document.body,
});

window.addEventListener('load', () => {
  app.renderPage();
  swRegister();

  const skipLink = document.querySelector('.skip-link');
  skipLink.addEventListener('click', (event) => {
    event.preventDefault();
    document.querySelector('#mainContent').focus();
  });
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});
