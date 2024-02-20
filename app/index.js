//crear un objeto con datos de una farmacia una funcion con desustructurrisacion
const farmacia =[
    {
        medicamento:"parasetamol",
        precio: 150,
        peso:"60g"
    },{
        medicamento:"aspirina",
        precio: 20,
        peso:"30g"
    },{
        medicamento:"cubre bocas",
        precio: 10,
        peso:"5g"
    }
]

const datos = (farmacia)=>{
    farmacia.map(({medicamento,precio,peso})=>{
        console.log(`el medicamento es: ${medicamento}, el precio es: ${precio} y el peso es:${peso}`);
    })
}

const inventario = datos(farmacia)
