const Engineer = require('../lib/Engineer');

describe('Engineer', () => {
    it("should return engineer as the role", () => {
      const eng = new Engineer();
      const role = eng.getRole();

      expect(role).toEqual("Engineer");
    });

    it("should return joejoe as the github handle", () => {
        const eng = new Engineer('Joe', 1, 'joe@gmail.com', 'joejoe');
  
        expect(eng.github).toEqual('joejoe');
      });
  });