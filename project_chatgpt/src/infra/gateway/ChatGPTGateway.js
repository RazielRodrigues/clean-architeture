import InterfaceChatbotAPI from '../../interfaces/gateway/InterfaceChatbotAPI.js'
import { Configuration, OpenAIApi } from "openai";

export default class ChatGPTGateway extends InterfaceChatbotAPI {

    async send(message) {
        try {

            const apiKey = '';
            const configuration = new Configuration({
                organization: "org-kmuiDJl3Eg3fZSvy88pni0WE",
                apiKey: apiKey,
            });
            const openai = new OpenAIApi(configuration);

            const completion = await openai.createChatCompletion({
                model: "gpt-3.5-turbo",
                messages: [{ "role": "system", "content": "You are a helpful assistant." }, { role: "user", content: "Hello world" }],
            });
            const answer = completion.data.choices[0].text.trim();

            return answer;
        } catch (error) {
            console.error('Erro ao conectar com o Chatbot:', error);
            throw error;
        }
    }

}