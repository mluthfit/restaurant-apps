import DrawerInitiator from '../utils/drawer-initiator';
import UrlParser from '../routes/url-parser';
import routes from '../routes/routes';

class App {
constructor({ button, drawer, body }) {
    this._button = button;
    this._drawer = drawer;
    this._body = body;

    this._initialAppShell();
  }

  _initialAppShell() {
    DrawerInitiator.init({
      button: this._button,
      drawer: this._drawer,
      body: this._body,
    });
  }

  async renderPage() {
    const url = UrlParser.parseActiveUrlWithCombiner();
    const page = routes[url];
    const main = document.querySelector('main');

    try {
      main.innerHTML = await page.render();
      await page.afterRender();
    } catch (error) {
      location.href = '/';
    }
  }
}

export default App;
