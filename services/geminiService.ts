import { GoogleGenAI } from "@google/genai";

const getClient = () => {
  const apiKey = process.env.API_KEY;
  if (!apiKey) {
    console.error("API Key not found in environment variables");
    return null;
  }
  return new GoogleGenAI({ apiKey });
};

export const generateRefinedMessage = async (userInput: string): Promise<string> => {
  const client = getClient();
  if (!client) return "Не удалось подключиться к сервису ИИ.";

  try {
    const response = await client.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: `Вы — старший консультант сервиса DM Leads. Ваша цель — помочь частному брокеру или агентству недвижимости сформулировать запрос на покупку лидов.
      
      Пользователь написал: "${userInput}".
      
      Сформулируй четкий запрос, который брокер отправит менеджеру DM Leads.
      Структура:
      1. Кто обращается (Частный брокер / Агентство).
      2. Регион и сегмент (например: Москва, Новостройки Бизнес-класса).
      3. Требуемый объем заявок в неделю/месяц.
      4. Основной критерий качества (например: только с ипотечным одобрением).
      
      Текст должен быть деловым, уверенным, на русском языке.`,
    });
    
    return response.text?.trim() || "Не удалось сгенерировать сообщение.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Ошибка при использовании ИИ.";
  }
};

export const analyzeLeadPotential = async (formData: string): Promise<string> => {
  const client = getClient();
  if (!client) return "";

  try {
    const response = await client.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: `Проанализируй этот запрос от брокера недвижимости: ${formData}. 
      Кратко оцени потенциал сотрудничества (1 предложение на русском).`,
    });
    return response.text?.trim() || "";
  } catch (e) {
    return "";
  }
};