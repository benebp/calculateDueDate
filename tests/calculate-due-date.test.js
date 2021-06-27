const calculateDueDate = require('../calculate-due-date');

describe('no or invalid input', () => {
	it('should give error when no submit date input', () => {
		const result = calculateDueDate({ turnaroundTime: 16 });

		expect(result).toThrowError('inputs are not given');
	});

	it('should give error when no turnaround time input', () => {
		const result = calculateDueDate({ submitDate: '2021-05-18T13:50' });

		expect(result).toThrowError('inputs are not given');
	});

	it('should give error when no input at all', () => {
		const result = calculateDueDate();

		expect(result).toThrowError('inputs are not given');
	});

	it('should give error when input submit date is not date', () => {
		const result = calculateDueDate({ submitDate: undefined, turnaroundTime: 16 });

		expect(result).toThrowError('inputs are not valid');
	});

	it.only('should give error when input turnaround time is not number', () => {
		expect(() => {
			calculateDueDate({ submitDate: '2021-05-18T13:50', turnaroundTime: 'hour' });
		}).toThrowError('inputs are not valid');
	});

	it('should give error when input submit date is not in working hours', () => {
		expect(() => {
			calculateDueDate({ submitDate: '2021-05-16T13:50', turnaroundTime: 16 });
		}).toThrowError('out of working hours');
	});

	it('should give error when input submit hour is not in working hours', () => {
		expect(() => {
			calculateDueDate({ submitDate: '2021-05-17T19:50', turnaroundTime: 16 });
		}).toThrowError('out of working hours');
	});
});

describe('valid input', () => {
	it('should give valid output when input is valid too', () => {
		const result = calculateDueDate({ submitDate: '2021-05-18T13:50', turnaroundTime: 16 });

		expect(result).toEqual('2021-05-20T13:50');
	});
});

// date format?
// new Date('2021-05-18T13:50')
