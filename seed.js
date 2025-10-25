const { connectDB } = require('./config/db');

async function seed() {
  const db = await connectDB();

  const departments = [
    { id: 'd1', name: 'Engineering', floor: 5 },
    { id: 'd2', name: 'HR', floor: 2 },
    { id: 'd3', name: 'Marketing', floor: 3 },
  ];

  const employees = [
    { id: 'e1', name: 'Alice', position: 'Software Engineer', department: 'd1', salary: 70000 },
    { id: 'e2', name: 'Bob', position: 'HR Manager', department: 'd2', salary: 60000 },
    { id: 'e3', name: 'Charlie', position: 'Marketing Lead', department: 'd3', salary: 65000 },
    { id: 'e4', name: 'David', position: 'Frontend Engineer', department: 'd1', salary: 68000 },
    { id: 'e5', name: 'Eve', position: 'Recruiter', department: 'd2', salary: 55000 },
  ];

  await db.collection('departments').deleteMany({});
  await db.collection('employees').deleteMany({});

  await db.collection('departments').insertMany(departments);
  await db.collection('employees').insertMany(employees);

  console.log('Seeded MongoDB with initial data');
  process.exit(0);
}

seed();