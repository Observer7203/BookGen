import React from "react";
import { createRoot } from "react-dom/client";
import App from "./components/App";
import './styles/app.css';

// Подключаем стили
import './styles/app.min.css';
import './styles/bootstrap.min.css';

const root = createRoot(document.getElementById("root"));
root.render(<App />);


/*
 * Welcome to your app's main JavaScript file!
 *
 * We recommend including the built version of this JavaScript file
 * (and its CSS file) in your base layout (base.html.twig).
 */

// any CSS you import will output into a single css file (app.css in this case)

