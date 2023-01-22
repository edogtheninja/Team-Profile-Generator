const Engineer = require('../lib/Engineer');

describe('Engineer', () => {
    const engineer = new Engineer('joe', 1, 'joe@gmail.com', 'tamad');

    it('should return a name', () => {    
        expect(engineer.getName()).toBe('joe');
    });
    it('should return an id', () => {
        expect(engineer.getId()).toBe(1);
    });
    it('should return an email', () => {
        expect(engineer.getEmail()).toBe('joe@gmail.com');
    });
    it('should return a GitHub', () => {
        expect(engineer.getGithub()).toBe('tamad');
    });
    it('should return Engineer as a role', () => {
        expect(engineer.getRole()).toBe('Engineer');
    });
});