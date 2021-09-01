//1.
const company = {
    CEO : 'jhankar mahbub',
    name: 'programming hero',
    employee:45,
    work: {
        course: 'web development',
        supprtSessionTime : [11,4,9],
        conceptualSession: '9pm'
    },
    section:['web development course', 'SCIC' ,'Neptune app development', 'ACC' ],
    founder : function(){
        return this.CEO;
    }
}
// console.log(company.founder());
//2.
const myPassion = `Learning ${company.work.course} 
I want to go ${company.section[1]}
thank a lot ${company.founder()} vhaia for give us this course`
// console.log(myPassion)


