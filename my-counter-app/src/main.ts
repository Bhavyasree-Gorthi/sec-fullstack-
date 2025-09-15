import './style.css';
import typescriptLogo from './typescript.svg';
import viteLogo from '/vite.svg';
import { setupCounter } from './counter';

const appDiv = document.querySelector<HTMLDivElement>('#app');

if (!appDiv) throw new Error('Cannot find element with id "app"');

appDiv.innerHTML = `
  <div>
    <a href="https://vite.dev" target="_blank" rel="noreferrer">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://www.typescriptlang.org/" target="_blank" rel="noreferrer">
      <img src="${typescriptLogo}" class="logo vanilla" alt="TypeScript logo" />
    </a>
    <h1>Vite + TypeScript</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite and TypeScript logos to learn more
    </p>
  </div>
`;

const counterBtn = document.querySelector<HTMLButtonElement>('#counter');

if (!counterBtn) throw new Error('Cannot find button with id "counter"');

setupCounter(counterBtn);
