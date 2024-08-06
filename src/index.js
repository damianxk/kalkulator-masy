import { BrowserRouter } from "react-router-dom";
import { createRoot } from "react-dom/client";
import { PrimeReactProvider } from 'primereact/api';

import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <BrowserRouter>
    <PrimeReactProvider>
      <App />
    </PrimeReactProvider>
  </BrowserRouter>,
);
