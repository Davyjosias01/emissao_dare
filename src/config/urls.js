const dayjs = require('dayjs'); //lib para trabalhar com datas

// acessToken do arquivo token.js
const { acessToken } = require('./token.js');


// obligation
const obligation = 'emissao_dare';


//date_start
const date_start = dayjs().startOf('month').format('DD/MM/YYYY'); 


//date_end
const date_end = dayjs().endOf('month').format('DD/MM/YYYY');


// fields
const fields = 'cnpj,id,dominio_code,fantasy_name';


// obligation_enpoint
const endpoint = 'https://app.razonet.com.br/integration/v1/companies/index'


const obligation_finished = true;

/*
//Montar uma classe "constroi URL que recebe os parâmetros passados por request, monta a URL e devolve ela"
class name {
    constructor(parameters) {
        
    }
}
*/

// url
const url = `${endpoint}?obligation=${obligation}&date_start${date_start}&date_end${date_end}&fields=${fields}`;

function toString(){
    console.log(`\tacessToken: ${ acessToken } \n
        obligation: ${ obligation } \n
        date_start: ${ date_start } \n
        date_end: ${ date_end } \n
        fields: ${ fields } \n 
        endpoint: ${ endpoint }\n`);
}
// toString(); //Debug pra apresentar as variáveis utilizadas na URL