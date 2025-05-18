console.log("ai-service.js loaded");

const AIService = {
    getAIResponse: async function(userInput) {
        console.log("AIService: Getting AI response for:", userInput);
        try {
            // This would typically call your API service, which in turn might call an external AI API
            const response = await APIService.callOpenAI(userInput); // Using the mock from api-service.js
            
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