const colors = require("colors")
const fs = require("fs");
const path = require("path");


const crearTabla = async (base, listar, tamaño) =>{
    let output = "";
    let consola = "";
    try{       
        for (let i=0; i<tamaño; i++){
            output += `${base} x ${i+1} = ${base * (i+1)}\n`
            consola += `  ${base} ${"x".green} ${i+1} ${"=".cyan} ${base * (i+1)}\n`
        }
        if (listar){
            console.log("=================".bgBlue)
            console.log(`   Tabla del ${base}   `.bgBlue)
            console.log("=================".bgBlue)
            console.log(consola);
        }     
        if (!fs.existsSync("./salida")){
            fs.mkdirSync("./salida")
        }
        fs.writeFileSync(`./salida/tabla-${base}.txt`, output );
        console.log("Archivo ha sido guardado correctamente".green);  
        return ("Ruta de salida: " + `./salida/tabla-${base}.txt`.yellow)

    }catch (err){
        throw ("Error:", err);   
    }





} 

module.exports =  { crearTabla };