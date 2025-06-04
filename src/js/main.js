console.log("main.js loaded");

document.addEventListener('DOMContentLoaded', () => {
    const userInput = document.getElementById('user-input');
    const sendButton = document.getElementById('send-button');
    const speechButton = document.getElementById('speech-button');
    const chatLog = document.getElementById('chat-log');

    function addMessageToLog(message, sender) {
        const messageElement = document.createElement('p');
        messageElement.classList.add('message', sender === 'user' ? 'user-message' : 'bot-message');
        messageElement.textContent = message;
        chatLog.appendChild(messageElement);
        chatLog.scrollTop = chatLog.scrollHeight; // Auto-scroll to bottom
    }

    async function handleSendMessage() {
        const messageText = userInput.value.trim();
        if (messageText === '') return;

        addMessageToLog(messageText, 'user');
        userInput.value = '';

        try {
            // Placeholder for AI response
            const aiResponse = await AIService.getAIResponse(messageText);
            addMessageToLog(aiResponse, 'bot');

            // Placeholder for saving to DB
            DBService.saveConversation({ user: messageText, bot: aiResponse });
        } catch (error) {
            console.error("Error processing message:", error);
            addMessageToLog("Sorry, I encountered an error.", 'bot');
        }
    }

    if (sendButton) {
        sendButton.addEventListener('click', handleSendMessage);
    }

    if (userInput) {
        userInput.addEventListener('keypress', (event) => {
            if (event.key === 'Enter') {
                handleSendMessage();
            }
        });
    }

    if (speechButton) {
        speechButton.addEventListener('click', () => {
            console.log("Speech button clicked");
            // Integrate with SpeechRecognitionService
            if (SpeechRecognitionService && typeof SpeechRecognitionService.startRecognition === 'function') {
                SpeechRecognitionService.startRecognition((transcript) => {
                    userInput.value = transcript;
                    handleSendMessage(); // Optionally send immediately after speech-to-text
                }, (error) => {
                    console.error("Speech recognition error:", error);
                    addMessageToLog("Speech recognition failed.", 'bot');
                });
            } else {
                addMessageToLog("Speech recognition is not available.", 'bot');
            }
        });
    }

    // Initial message or setup
    console.log("Epic Tech AI Chat UI Initialized");
});