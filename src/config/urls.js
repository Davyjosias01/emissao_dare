const dayjs = require('dayjs'); //lib para trabalhar com datas

//date_start
const date_start = dayjs().startOf('month');
console.log(date_start.format('DD/MM/YYYY'));

//date_end
const date_end = dayjs().endOf('month');
console.log(date_end.format('DD/MM/YYYY'));

// fields
const fields = 'cnpj,id,dominio_code,fantasy_name,';



const obligation = 'monitoramento_det';