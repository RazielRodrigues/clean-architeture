import fetch from 'node-fetch';
import InterfaceChatbotAPI from '../../interfaces/gateway/InterfaceChatbotAPI'

export default class ChatGPTGateway extends InterfaceChatbotAPI {

    async send(message) {

        const apiKey = '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';
        const url = 'https://api.openai.com/v1/engines/davinci-codex/completions';

        const requestBody = {
            prompt: message,
            max_tokens: 50, // Define o número máximo de tokens na resposta
            temperature: 0.7 // Controla a criatividade das respostas (0.0 a 1.0)
        };

        try {
            const resposta = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${apiKey}`
                },
                body: JSON.stringify(requestBody)
            });

            const { choices } = await resposta.json();
            const respostaChatbot = choices[0].text.trim();
            return respostaChatbot;
        } catch (error) {
            console.error('Erro ao conectar com o Chatbot:', error);
            throw error;
        }
    }

}