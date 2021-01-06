
const yargs = require('yargs')
const students = require('./student')
yargs.command({
    command:'add',
    describe: 'Add student',
    builder:{
        id:{
            describe: 'id of student',
            demandOption:true,
            type: 'number'
        },
        name:{
            describe: 'name of student added',
            demandOption:true,
            type: 'string'
        },
        grade:{
            describe:'carry grades of student',
            demandOption:true,
            type:'number'
        },
        comment:{
            describe:'comment about student grade',
            type:'string'
        }
    },
    handler: function(argv){
        students.addstudent(argv.id,argv.name,argv.grade,argv.comment)
    }

})
yargs.command({
    command:'list',
    describe: 'List students',
    builder:{
        id:{
            describe: 'id of student',
            demandOption:true,
            type: 'number'
        },
    },
    handler: function(argv){
       students.liststudent(argv.id)
    }

})
yargs.parse()