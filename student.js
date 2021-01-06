const fs =require("fs");

const addstudent = (id,name,grade,comment) =>{
    const student=loadstudents();
    student.push({
        id,
        name,
        grade,
        comment
    })
    savestudent(student)
    console.log('Saved Successfully')
}
const loadstudents = () => {
    try {
    const data = fs.readFileSync("students.json").toString();
    return JSON.parse(data);
  } catch (e) {
    return [];
  }
};
const savestudent = (students) =>{
    const saveData =  JSON.stringify(students)
    fs.writeFileSync('students.json',saveData)
    }
    const liststudent = (id) =>{
        const students =loadstudents()
        students.forEach(student => {
            if(student.id===id)
            console.log('name is: '+student.name+' ,grade is: '+student.grade)
        });
    }
    module.exports={
        addstudent:addstudent ,
        liststudent:liststudent
    
    }