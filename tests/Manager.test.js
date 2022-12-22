const Manager = require('../lib/Manager');

describe('Manager', () => {
    it("should return manager as the role", () => {
      const manager = new Manager();
      const role = manager.getRole();

      expect(role).toEqual("Manager");
    });

    it("should return 12 as the office number", () => {
        const manager = new Manager('Joe', 1, 'joe@gmail.com', 12);
  
        expect(manager.officeNumber).toEqual(12);
      });
  });