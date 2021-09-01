//6.
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
}
// const {CEO,name,employee, work:{course,supprtSessionTime,conceptualSession}}=company
const {CEO, name ,employee, course, supprtSessionTime, conceptualSession}=company.work
// console.log(CEO,name,employee,course,supprtSessionTime,conceptualSession)

const myObj = {
    name: "John",
    age: 30,
    cars: [
      {name1:"Ford", models:["Fiesta", "Focus", "Mustang"]},
      {name2:"BMW", models:["320", "X3", "X5"]},
      {name3:"Fiat", models:["500", "Panda"]}
    ]
  }
  const {cars:[{name1}]}=myObj
  console.log(name1)
//6.
const [, balance] = [78, 100, 23, 56, 90, 12]

// console.log(balance)
