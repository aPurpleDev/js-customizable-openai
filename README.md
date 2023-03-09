This is a singleton implementation of OpenAPI GPT instances.

It takes a model, temperature, prompt and max-tokens as parameter to fetch a response.
Available models are listed in services/openai.js under the constant AI_Models (this will require manual maintenance for now)

# Requirements

Create a .env file at the root project and populate OPENAI_API_KEY with your API Key

# Get Started

npm install

npm run start

# Tests

npm run test
