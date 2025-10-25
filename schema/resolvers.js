const resolvers = {
  Query: {
    getAllEmployees: async (_, __, { db }) => {
      const employees = await db.collection('employees').find().toArray();
      return employees;
    },
    getEmployeeDetails: async (_, { id }, { db }) => {
      const employee = await db.collection('employees').findOne({ id });
      if (!employee) throw new Error('Employee not found');
      return employee;
    },
    getEmployeesByDepartment: async (_, { department }, { db }) => {
      return await db.collection('employees').find({ department }).toArray();
    },
    getAllDepartments: async (_, __, { db }) => {
      return await db.collection('departments').find().toArray();
    },
  },
  Mutation: {
    addEmployee: async (_, { name, position, department, salary }, { db }) => {
      const newEmployee = {
        id: `e${Date.now()}`,
        name,
        position,
        department,
        salary,
      };
      await db.collection('employees').insertOne(newEmployee);
      return newEmployee;
    },
  },
  Employee: {
    department: async (employee, _, { db }) => {
      return await db.collection('departments').findOne({ id: employee.department });
    },
  },
};

module.exports = resolvers;