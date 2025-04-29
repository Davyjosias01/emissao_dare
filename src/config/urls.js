const dayjs = require('dayjs'); //lib para trabalhar com datas

// acessToken do arquivo token.js
const { acessToken } = require('./token.js');
console.log(`acessToken: ${acessToken}`);


// obligation
const obligation = 'emissao_dare';
console.log(`obligation: ${obligation}`);


//date_start
const date_start = dayjs().startOf('month').format('DD/MM/YYYY'); 
console.log(date_start);


//date_end
const date_end = dayjs().endOf('month').format('DD/MM/YYYY');
console.log(date_end);

// fields
const fields = 'cnpj,id,dominio_code,fantasy_name';
console.log(`fields: ${fields}`);

// obligation_enpoint
const endpoint = 'https://app.razonet.com.br/integration/v1/companies/index'
console.log(`endpoint: ${endpoint}`);

