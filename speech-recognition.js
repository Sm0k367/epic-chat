console.log("speech-recognition.js loaded");

const SpeechRecognitionService = {
    recognition: null,
    
    initialize: function() {
        const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
        if (SpeechRecognition) {
            this.recognition = new SpeechRecognition();
            this.recognition.continuous = false; // Process single utterances
            this.recognition.lang = 'en-US';
            this.recognition.interimResults = false; // Get final results
            this.recognition.maxAlternatives = 1;
            console.log("Speech recognition initialized.");
        } else {
            console.warn("Speech Recognition API not supported in this browser.");
            this.recognition = null;
        }
    },

    startRecognition: function(onResultCallback, onErrorCallback) {
        if (!this.recognition) {
            this.initialize(); // Attempt to initialize if not already
        }

        if (this.recognition) {
            console.log("Starting speech recognition...");
            
            this.recognition.onresult = function(event) {
                const transcript = event.results[0][0].transcript;
                console.log("Transcript:", transcript);
                if (onResultCallback) {
                    onResultCallback(transcript);
                }
            };

            this.recognition.onerror = function(event) {
                console.error("Speech recognition error:", event.error);
                if (onErrorCallback) {
                    onErrorCallback(event.error);
                }
            };
            
            this.recognition.onend = function() {
                console.log("Speech recognition ended.");
            };

            try {
                this.recognition.start();
            } catch (e) {
                console.error("Error starting speech recognition:", e);
                if (onErrorCallback) {
                    onErrorCallback(e.message || "Failed to start recognition");
                }
            }
        } else {
            const errorMsg = "Speech recognition is not available or not initialized.";
            console.error(errorMsg);
            if (onErrorCallback) {
                onErrorCallback(errorMsg);
            }
        }
    },

    stopRecognition: function() {
        if (this.recognition) {
            this.recognition.stop();
            console.log("Speech recognition stopped by request.");
        }
    }
};

// Initialize on load
SpeechRecognitionService.initialize();