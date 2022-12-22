const Employee = require('../lib/Employee');

describe('Employee', () => {
    it("should return employee as the role", () => {
      const employee = new Employee();
      const role = employee.getRole();

      expect(role).toEqual("Employee");
    });

    it("should return Joe as the namee", () => {
        const employee = new Employee('Joe', 1, 'joe@gmail.com');
  
        expect(employee.getName()).toEqual('Joe');
      });
  });