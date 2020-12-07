const students = [
  {
    name: 'John',
    age: 12,
    percentage: '81%'
  },
  {
    name: 'Sean',
    age: 12,
    percentage: '60%'
  },
  {
    name: 'Tony',
    age: 12,
    percentage: '72%'
  }
];

console.log(students.filter(student => parseInt(student.percentage) > 70));
