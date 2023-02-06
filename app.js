const { crearTabla } = require ("./helpers/multiplicar")
const argv = require ("./config/yargs")

console.clear();


crearTabla(argv.b, argv.l, argv.t)
    .then(nombreArchivo => console.log(nombreArchivo))
    .catch(err => console.log(err))


