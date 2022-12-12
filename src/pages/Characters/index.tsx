import React, { useEffect, useState } from "react";
import api from "../../services/api"; //import da api do arquivo api (genérico)
import { Container, CardList, Card } from "./styles"; // import do estilo no arquivo ./Characters/styles.ts

interface ResponseData {
  // no typescript temos que dizer o tipo e criamos um tipo para informar ao useState() // Esse tipo indica os ATRIBUTOS/DADOS que serão extraidos do .then((response => setCharacters(response.data.data.results))!
  id: string;
  name: string;
  description: string;
  thumbnail: {
    path: string;
    extension: string;
  };
}

const Characters: React.FC = () => {
  const [characters, setCharacters] = useState<ResponseData[]>([]); // <ResponseData> é o tipo que useState() vai recerber e que criamos antes da const Characters!!! // o [] dentro de <ResponseData[]> indica que ele receberá um array. e [] dentro de useState([]), indica o valor inicial da variavel characters, que virá com um array vazio -> [] //useState() is a React Hook that lets you add a state variable to your component. setState está recebendo um array e setCharacters está alterando o estado da const characters
  useEffect(() => {
    api //jogamos a requisição para o arquivo api
      .get("/characters") // aqui é colocada a requisição da Core Entity Representations, de onde virão os dados
      .then((response) => {
        setCharacters(response.data.data.results); // seta a resposta na const characters fazendo o destruction(desempacotamento) e alterando o estado da variável characters
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <Container>
      <CardList>
        {characters.map(characters  => {
          return (
            <Card key={characters.id} thumbnail={characters.thumbnail}>
              <div id="img" />
              <h2>{characters.name}</h2>
              <p>{characters.description}</p>
            </Card>
          )
        })}
      </CardList>
      
    </Container>
  );
}; // o retorno da requisição será enviado para o componente <Characters /> no arquivo App.tsx que irá renderizar - render() - na HTML.
export default Characters;

//versão antiga
// useEffect(() => {
// axios
//   .get(`${baseURL}ts=${timeStamp}&apikey=${publicKey}&hash=${hash}&offset=0&limit=100`)//1º parêmetro é uma arrow function e o 2º é um array de dependências. Vai pegar o axios e fazer um get() - para fazer uma solicitação GET para seu endpoint e usar uma callback . then() para obter de volta todos os dados da resposta. A resposta é retornada como um objeto.
//   //For example, a user with a public key of "1234" and a private key of "abcd" could construct a valid call as follows: http://gateway.marvel.com/v1/public/comics?ts=1&apikey=1234&hash=ffd275c5130566a2916217b101f26150 (the hash value is the md5 digest of 1abcd1234)
//   .then(response => console.log(response.data.data)) //vai gerar a resposta da requisição
//   .catch(err => console.log(err)); // caso tenha erro, ele vai mostrar
// }, []);
