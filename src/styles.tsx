import { createGlobalStyle } from "styled-components/macro";
import { background, text } from "./constants";

export const GlobalStyle = createGlobalStyle`
@font-face {
    font-family: "Recoleta";
    src: url("../RecoletaAlt-Black.ttf");
}

:root{
    --main-bg-colour: ${background};
    --text-color: ${text};
}

body {
    font-family:  sans-serif;
    padding: 0;
    margin: 0;
    background-color: var(--main-bg-colour);
}

h1 {
    font-size: clamp(32px, 2em, 2rem);
    display: inline;
    line-height: 2rem;
    font-family: 'Recoleta', sans-serif;
    font-weight: 300;
}

h2 {
   font-size:  2rem;
   font-family: 'Recoleta', sans-serif;
}

h3 {
    font-size:  1.45rem;
    font-family: 'Recoleta', sans-serif;
 }


h4 {  
    font-size: 1.2em;
    font-family: sans-serif;
    }

h5 {  font-size: .95em;    }


h1, h2, h3, h4,h5, h6, p, ul, a {
    margin: 0 0 0 0;
    padding: 0 0 0 0;
    color: var(--text-color)
}

a {
    color: var(--text-color);
    text-decoration: none;
    font-size: clamp(12px, 1rem, 1.2rem);
}

ul {
    list-style-type: none;
}

p {
    line-height: 1.7;
    font-size: clamp(12px, 1rem, 1.2rem);
    justify-content: start;
}

button {
    background-color: var(--text-color);
    color: var(--main-bg-colour);
    font-family: "Recoleta", sans-serif;
    font-size: 1rem;
    border: none;
}`;
