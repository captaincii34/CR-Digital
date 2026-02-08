import { GoogleGenAI, Type } from "@google/genai";

// Always use named parameter for apiKey and use process.env.API_KEY directly as per guidelines
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const evaluateProject = async (status: string, goal: string) => {
  const prompt = `
    Sen CRAY Digital ajansının kıdemli Web3 danışmanısın. 
    Aşağıdaki proje bilgilerini analiz et ve kullanıcıya kısa, profesyonel ve etkileyici bir ön değerlendirme sun.
    
    Proje Durumu: ${status}
    Hedef: ${goal}
    
    Lütfen şu formatta bir JSON döndür:
    {
      "summary": "Projenin genel durumu hakkında 1 cümlelik analiz.",
      "opportunities": ["Fırsat 1", "Fırsat 2"],
      "nextStep": "Harekete geçirici bir öneri."
    }
  `;

  try {
    // Use ai.models.generateContent with model name and prompt directly
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            summary: { 
              type: Type.STRING,
              description: 'Projenin genel durumu hakkında 1 cümlelik analiz.'
            },
            opportunities: { 
              type: Type.ARRAY, 
              items: { type: Type.STRING },
              description: 'Potansiyel fırsatlar listesi.'
            },
            nextStep: { 
              type: Type.STRING,
              description: 'Harekete geçirici bir öneri.'
            },
          },
          required: ["summary", "opportunities", "nextStep"],
          propertyOrdering: ["summary", "opportunities", "nextStep"],
        },
      },
    });

    // response.text is a getter property, not a method
    return JSON.parse(response.text || "{}");
  } catch (error) {
    console.error("Evaluation error:", error);
    return null;
  }
};