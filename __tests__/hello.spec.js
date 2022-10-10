import handler from '../pages/api/hello'
const { createMocks } = require('node-mocks-http')

// Global Mocks

// example
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
		const { req, res } = createMocks({
			method: 'POST',
			body: JSON.stringify({})
		})
		await handler(req, res)
		expect(res._getStatusCode()).toEqual(200)
		expect(res._getJSONData()).toEqual({
			name: 'John Doe'
		})
	})
})
