
import { GoogleGenAI, Type } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || "" });

export const evaluateProject = async (status: string, goal: string) => {
  const model = 'gemini-3-flash-preview';
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
    const response = await ai.models.generateContent({
      model,
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            summary: { type: Type.STRING },
            opportunities: { type: Type.ARRAY, items: { type: Type.STRING } },
            nextStep: { type: Type.STRING },
          },
          required: ["summary", "opportunities", "nextStep"],
        },
      },
    });

    return JSON.parse(response.text || "{}");
  } catch (error) {
    console.error("Evaluation error:", error);
    return null;
  }
};
