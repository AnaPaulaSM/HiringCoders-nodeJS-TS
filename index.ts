//Importando as bibliotecas
import * as queryString from 'query-string';
import * as url from 'url';
import * as fs from 'fs';
import { createServer, IncomingMessage, ServerResponse } from 'http';

//Definição de porta
const port = 5000;

const server = createServer((request: IncomingMessage, response: ServerResponse)=>{
//Implementação do codigo

response.end('Hello World')

});

//Execução
server.listen(port, ()=> {
    console.log(`Server running on port ${port}`);
});