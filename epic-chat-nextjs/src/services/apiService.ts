// epic-chat-nextjs/src/services/apiService.ts
console.log("apiService.ts loaded");

const APIService = {
    fetchData: async function(endpoint: string, options: RequestInit = {}): Promise<any> {
        console.log(`APIService: Fetching data from endpoint: ${endpoint}`);
        // This is a placeholder. In a real app, you'd use fetch()
        // For example:
        // const response = await fetch(endpoint, options);
        // if (!response.ok) {
        //     throw new Error(`API Error: ${response.status} ${response.statusText}`);
        // }
        // return response.json();

        return new Promise((resolve) => {
            setTimeout(() => {
                resolve({ message: `Mock response from ${endpoint}` });
            }, 500);
        });
    },

    callOpenAI: async function(prompt: string): Promise<any> {
        console.log("APIService: Calling mock OpenAI API with prompt:", prompt);
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve({
                    choices: [{
                        message: {
                            role: "assistant",
                            content: `This is a simulated AI response to: "${prompt}" (from actual apiService.ts)`
                        }
                    }]
                });
            }, 1000);
        });
    }
};
export default APIService;
