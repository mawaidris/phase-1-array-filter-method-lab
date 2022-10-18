// Code your solution here
const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']

const findMatching= (drivers,name)=> drivers.filter(na => na.toLowerCase() === name.toLowerCase())


const fuzzyMatch = (drivers, name)=> drivers.filter(na => na.indexOf(name) === 0)


const  matchName=(drivers , name) => drivers.filter(na => na.name === name)