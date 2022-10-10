import handler from '../pages/api/hello'

// Global Mocks

describe.skip('Name of feature', () => {
	// Local Variables/Mocks
	// Hooks: Before All, Afer All, Before Each, After Each
	// test case:
	// it.skip
	// it.only
	it('specific case description', async () => {
		// 1. Assign
		// 2. Act
		// 3. Assert
	})
})

describe('Hello Handler', () => {
	it('should return sucess', async () => {
		const res = handler({}, {})
		console.log(res)
	})
})
