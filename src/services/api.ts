//NESTE ARQUIVO ENCONTRAM-SE OS DADOS DA REQUISIÇÃO PARA A API DA MARVEL

import axios from "axios"; // "yarn add axios" - fará todo o trabalho de configurar a requisição.
import md5 from "md5"; // "yarn add md5" - fará a chave
// yarn add -D @types/md5 - necessário para instalar as tipagens do md5, pois o js é fracamente tipado.
//const baseURL = 'http://gateway.marvel.com/v1/public/characters?'; // de onde virão os recursos dos personagens solicitados pela requisição!
const publicKey = "0af58d937d648b1efd188dd46761e625";
const privateKey = "7288eb8f9cac637156cb1169b3bd79a2943a6108"; // 2 chaves geradas ao fazer login no site da API MARVEL(https://developer.marvel.com/account).
const timeStamp = Number(new Date()); // Number() convert a data atual gerada  - new Data() - em Números "13483891923919" ao invés de "23-11-2022", para serem usados no timeStamp solicitado pela API no site da Marvel
const hash = md5(timeStamp + privateKey + publicKey); // hash - a md5 digest of the ts parameter, your private key and your public key (e.g. md5(ts+privateKey+publicKey)

const api = axios.create({  // CONSTANTE GENÉRICA COM A URL BASE E SEUS PARAMS!!!!!
  baseURL: "http://gateway.marvel.com/v1/public/",
  params: {   //get(`${baseURL}ts=${timeStamp}&apikey=${publicKey}&hash=${hash}&offset=0&limit=100`)
    ts: timeStamp,
    apikey: publicKey,
    hash: hash,
    offset:0 , // importante verificar se a api fornece o offset e o limit, para retornar mais dados.
    limit: 30,
  },
}); // FOI REFERENCIADO O ARQUIVO DA REQUISIÇÃO PARA api.ts e inserido const api = axios.creat(baseURL, params), para que seja exportada para o index.tsx, na pasta Characters. Fazendo assim uma requisição genérica que pode ser aproveitada quando criada novas "pages" de assuntos diferentes de characters
export default api; // disponibilia a importação para outros arquivos.


