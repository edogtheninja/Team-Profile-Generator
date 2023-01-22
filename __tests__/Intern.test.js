const Intern = require('../lib/Intern');

describe('Intern', () => {
    const intern = new Intern ('joe', 1, 'joe@gmail.com', 'Michigan State University');

    it('should return a name', () => {    
        expect(intern.getName()).toBe('joe');
    });
    it('should return an id', () => {
        expect(intern.getId()).toBe(1);
    });
    it('should return an email', () => {
        expect(intern.getEmail()).toBe('joe@gmail.com');
    });
    it('should return a School', () => {
        expect(intern.getSchool()).toBe('Michigan State University');
    });
    it('should return Intern as a role', () => {
        expect(intern.getRole()).toBe('Intern');
    });
});