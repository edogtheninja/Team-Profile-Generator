const Employee = require('../lib/Employee');

describe('Employee', () => {
    const employee = new Employee('joe', 1, 'Joe@gmail.com');

    it('should return a name', () => {
        expect(employee.getName()).toBe('joe');
    });
    it('should return an id', () => {
        expect(employee.getId()).toBe(1);
    });
    it('should return an email', () => {
        expect(employee.getEmail()).toBe('Joe@gmail.com');
    });
    it('should return Employee as a role', () => {
        expect(employee.getRole()).toBe('Employee');
    });
});