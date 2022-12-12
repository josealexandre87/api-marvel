import React from "react";
import Characters from "./pages/Characters";

import GlobalStyle from "./styles/global";

const App: React.FC = () => {
  return (
    <>
      <GlobalStyle />
      <Characters />
    </>
  );
};
// no React é o App que gera a renderização do root e mostra o conteúdo da index.html, que está o main.tsx

export default App; // toda função para ser exportada em React tem que ser declarada o export. Assim possibilitando que o App.tsx seja visualizado.
