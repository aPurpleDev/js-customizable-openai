const openAI = require('../services/openai')

test("Calls and execute the askOpenAi method for queries", () => {
  jest.spyOn(openAI, "askOpenAI")
  openAI.askOpenAI(
    "gpt-3.5-turbo",
    5,
    "Hey GPT, did you receive this query from my API ?",
    100
  )
  expect(openAI.askOpenAI.mock.calls.length).toBe(1)
})