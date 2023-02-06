const argv = require("yargs")
                        .options("b", {
                            alias: "base",
                            demandOption: true,
                            type: "number",
                            description: "Base de multiplicar"
                        })
                        .options("l", {
                            alias: "listar",
                            demandOption: false,
                            type: "boolean",
                            default: false,
                            description: "Muestra la tabla en consola"
                        })
                        .options("t", {
                            alias: "tamaño",
                            demandOption: false,
                            type: "number",
                            default: 10,
                            description:"Tamaño de la tabla"
                            
                        })
                        .check((argv, options) => {
                            if (isNaN(argv.b)){
                                throw("La base debe ser un numero");
                            }
                            return true;
                        })
                        .argv;

module.exports = argv;