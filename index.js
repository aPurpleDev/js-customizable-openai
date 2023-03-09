const { askOpenAI } = require('./services/openai')

//TODO ultimately variables to come in from some input, this requires reflexion
let model
let temperature
let prompt
let max_tokens


askOpenAI(
  "gpt-3.5-turbo",
  5,
  "Hey GPT, did you receive this query from my API ?",
  100
)