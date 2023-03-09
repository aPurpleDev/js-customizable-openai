const { Configuration, OpenAIApi } = require("openai")

const AI_MODELS = { // scoped to GPT3.5 
 turbo: 'gpt-3.5-turbo',
 oldTurbo: 'gpt-3.5-turbo-0301',
 davinciText3: 'text-davinci-003',
 davinciText2: 'text-davinci-002',
 davinciCode: 'code-davinci-002	'
 }

 let AiInstance
 let openAI

const singletonAI = () => {

    const createAI = () => {
        const configuration = new Configuration({
            apiKey: process.env.OPENAI_API_KEY,
        })

        openAI = new OpenAIApi(configuration);

        return openAI
    }

    return {
        getAIInstance: () => {
            if (!AiInstance) {
                AiInstance = createAI();
            }
            return AiInstance
        }
    }
}

const askOpenAi = async(model, prompt, temperature, max_tokens) => {

    if(!Object.values(AI_MODELS).includes(model)){
        throw new Error('AI Model doesn\'t exist')
    }

    const openAI = singletonAI().getAIInstance()
    const response = await openAI.createCompletion({
    model: `${model}`,
    prompt: `${prompt}`,
    temperature,
    max_tokens,
    })

    return response
}

module.exports = { askOpenAi }