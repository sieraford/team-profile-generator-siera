const Intern = require('../lib/Intern');

describe('Intern', () => {
    it("should return intern as the role", () => {
      const intern = new Intern();
      const role = intern.getRole();

      expect(role).toEqual("Intern");
    });

    it("should return UCSB as the school", () => {
        const intern = new Intern('Joe', 1, 'joe@gmail.com', 'UCSB');
  
        expect(intern.school).toEqual('UCSB');
      });
  });