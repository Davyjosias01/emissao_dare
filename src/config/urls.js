const dayjs = require('dayjs'); //lib para trabalhar com datas

// acessToken do arquivo token.js
const { acessToken } = require('token.js');
console.log(`acessToken: ${acessToken}`);


// obligation
const obligation = 'emissao_dare';
console.log(`obligation: ${obligation}`);


//date_start
const date_start = dayjs().startOf('month'); 
console.log(date_start.format('DD/MM/YYYY'));


//date_end
const date_end = dayjs().endOf('month');
console.log(date_end.format('DD/MM/YYYY'));

// fields
const fields = 'cnpj,id,dominio_code,fantasy_name,';

// obligation_enpoint
const endpoint = 'https://app.razonet.com.br/integration/v1/companies/index'