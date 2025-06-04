// epic-chat-nextjs/src/services/speechRecognitionService.ts
console.log("speechRecognitionService.ts loaded");

interface SpeechRecognitionCallback {
    (transcript: string): void;
}

interface SpeechErrorCallback {
    (error: string): void;
}

const SpeechRecognitionService = {
    startRecognition: function(
        callback: SpeechRecognitionCallback,
        errorCallback: SpeechErrorCallback
    ): void {
        console.log("SpeechRecognitionService: Starting recognition.");
        if (typeof window !== 'undefined') { // Ensure window context for prompt
            setTimeout(() => {
                const spokenText = prompt("Mock Speech Input: Enter what you 'said':");
                if (spokenText) {
                    callback(spokenText);
                } else {
                    errorCallback("No speech input received or recognition failed.");
                }
            }, 500);
        } else {
            errorCallback("Speech recognition can only be used in the browser.");
        }
    }
};
export default SpeechRecognitionService;
