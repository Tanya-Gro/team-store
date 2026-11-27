import "./styles/base.css";
import { createSnowfall, renderAboutPage } from "./pages/about";
const app = document.querySelector<HTMLDivElement>("#app");

if (app) {
  app.replaceChildren(renderAboutPage());
}

document.body.appendChild(createSnowfall());
