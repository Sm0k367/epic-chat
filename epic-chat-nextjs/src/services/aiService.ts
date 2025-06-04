// epic-chat-nextjs/src/services/aiService.ts
import APIService from './apiService'; // Assuming APIService is in the same directory
console.log("aiService.ts loaded");

interface AIResponseFormat {
    choices: Array<{
        message: {
            role: string;
            content: string;
        }
    }>;
}

const AIService = {
    getAIResponse: async function(userInput: string): Promise<string> {
        console.log("AIService: Getting AI response for:", userInput);
        try {
            const response: AIResponseFormat = await APIService.callOpenAI(userInput);

            if (response && response.choices && response.choices.length > 0 && response.choices[0].message) {
                return response.choices[0].message.content;
            } else {
                console.error("Invalid AI response format:", response);
                return "Sorry, I couldn't understand the AI's response.";
            }
        } catch (error) {
            console.error("Error getting AI response:", error);
            return "Sorry, there was an issue connecting to the AI service.";
        }
    }
};
export default AIService;
