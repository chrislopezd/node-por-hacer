const opts = {
    descripcion: {
        demand: true,
        alias: 'd',
        desc: 'Descripción de la tarea por hacer'
    },
    completado: {
        alias: 'c',
        default: false,
        desc: 'Marca como completado o pendiente una tarea'
    }
};
const argv = require('yargs')
    .command('crear', 'Crear un elemento por hacer', opts)
    .command('actualizar', 'Actualiza el estado de completado de una tarea', opts)
    .command('borrar', 'Elimina una tarea', opts)
    .help()
    .argv;
module.exports = {
    argv
}