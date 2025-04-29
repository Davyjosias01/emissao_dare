const dayjs = require('dayjs'); //lib para trabalhar com datas

// acessToken do arquivo token.js
const { acessToken } = require('./token.js');


// obligation
const obligation = 'emissao_dare';


//date_start
const date_start = dayjs().startOf('month').format('DD/MM/YYYY'); 


//date_end
const date_end = dayjs().endOf('month').format('DD/MM/YYYY');
console.log(date_end);

// fields
const fields = 'cnpj,id,dominio_code,fantasy_name';

// obligation_enpoint
const endpoint = 'https://app.razonet.com.br/integration/v1/companies/index'

function toString(){
    console.log(`acessToken: ${ acessToken } \n
        obligation: ${ obligation } \n
        date_start: ${ date_start } \n
        date_end: ${ date_end } \n
        fields: ${ fields } \n 
        endpoint: ${ endpoint }\n`);
}