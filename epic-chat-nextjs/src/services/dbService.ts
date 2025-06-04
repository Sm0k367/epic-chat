// epic-chat-nextjs/src/services/dbService.ts
console.log("dbService.ts loaded");

interface ConversationEntry {
    user?: string;
    bot?: string;
    text?: string; // for loaded history
    sender?: 'user' | 'bot'; // for loaded history
    timestamp: string;
}

interface StoredConversation {
    user: string;
    bot: string;
}


const DBService = {
    saveConversation: function(conversation: StoredConversation): void {
        console.log("DBService: Saving conversation:", conversation);
        if (typeof window !== 'undefined') { // Ensure localStorage is available
            try {
                let history: ConversationEntry[] = JSON.parse(localStorage.getItem('chatHistoryNextJs') || '[]');
                history.push({ ...conversation, timestamp: new Date().toISOString() });
                localStorage.setItem('chatHistoryNextJs', JSON.stringify(history));
                console.log("Conversation saved to localStorage (NextJs).");
            } catch (error) {
                console.error("Error saving conversation to localStorage:", error);
            }
        }
    },

    getConversationHistory: function(): Array<{text: string, sender: 'user' | 'bot'}> {
        console.log("DBService: Retrieving conversation history.");
        if (typeof window !== 'undefined') {
            try {
                const history: ConversationEntry[] = JSON.parse(localStorage.getItem('chatHistoryNextJs') || '[]');
                return history.map(item => ({
                    text: item.user || item.bot || '', // Ensure text is always a string
                    sender: item.user ? 'user' : 'bot'
                }));
            } catch (error) {
                console.error("Error retrieving conversation history from localStorage:", error);
                return [];
            }
        }
        return [];
    }
};
export default DBService;
