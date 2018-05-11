import moment from "moment";
import '../scss/index.scss';

console.log("Bienvenue dans webpack!");
console.log(moment().startOf('day').fromNow());

$('h2').append('ajout en jQuery');