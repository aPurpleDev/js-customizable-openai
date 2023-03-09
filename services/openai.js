require('dotenv').config()
const { Configuration, OpenAIApi } = require('openai')

/** 
    @constant - list of available models scoped to GPT3.5 (need manual maintenance for now)
    @type {object}
*/
const AI_MODELS = {
  turbo: 'gpt-3.5-turbo',
  oldTurbo: 'gpt-3.5-turbo-0301',
  davinciText3: 'text-davinci-003',
  davinciText2: 'text-davinci-002',
  davinciCode: 'code-davinci-002',
}

let AiInstance

/**
 * Singleton for OpenAI instance
 * @function
 * @returns {object} OpenAI instance
 */
const singletonAI = () => {

    const createAI = () => {
        const configuration = new Configuration({
            apiKey: process.env.OPENAI_API_KEY,
        })

        const openAI = new OpenAIApi(configuration)

        return openAI
    }

    return {
        getAIInstance: () => {
            if (!AiInstance) {
                AiInstance = createAI()
            }
            return AiInstance
        }
    }
}

/**
 * Function to query the AI instance
 * @function
 * @param {string} model - the OpenAI GPT Model
 * @param {string} prompt - the Question/Prompt for the AI
 * @param {number} temperature - desired predictability of answer
 * @param {number} max_tokens - the maximum tokens (essentially words/chars) allowed for consumption
 * @returns {object} OpenAI response
 */
const askOpenAI = async(model, prompt, temperature, max_tokens) => {

    if(!Object.values(AI_MODELS).includes(model)){
        throw new Error('AI Model doesn\'t exist')
    }

    const openAI = singletonAI().getAIInstance()
    const response = await openAI.createCompletion({
    model,
    prompt,
    temperature,
    max_tokens,
    })

    return response
}

module.exports = {
  askOpenAI,
}