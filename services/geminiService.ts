import { RecommendationRequest, RecommendationResponse } from '../types';

const API_KEY = process.env.GEMINI_API_KEY;

export const getEducationCounseling = async (data: RecommendationRequest): Promise<RecommendationResponse> => {
  if (!API_KEY) {
    throw new Error("Gemini API Key is missing");
  }

  const prompt = `
    Act as an experienced study abroad counselor.
    Analyze the following student profile and provide personalized recommendations in strict JSON format.

    Student Profile:
    - Academic Background: ${data.background}
    - Area of Interest: ${data.interest}
    - Budget Range: ${data.budget}
    - Preferred Destinations: ${data.preferredCountries.join(', ') || "Open to suggestions"}

    Output strictly valid JSON with this schema:
    {
      "advice": "A personalized, encouraging 3-4 sentence summary of why they are a good fit for these options and what they should focus on.",
      "topDestinations": [
        { "country": "Country Name", "reason": "Specific reason aligning with their profile" }
      ],
      "suggestedCourses": [
        { "course": "Course Name", "universities": ["Uni 1", "Uni 2", "Uni 3"] }
      ]
    }
  `;

  try {
    const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${API_KEY}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        contents: [{
          parts: [{ text: prompt }]
        }]
      })
    });

    if (!response.ok) {
      throw new Error(`API Error: ${response.statusText}`);
    }

    const result = await response.json();
    const text = result.candidates?.[0]?.content?.parts?.[0]?.text;
    
    // Clean up markdown code blocks if present
    const jsonString = text.replace(/```json\n?|\n?```/g, "").trim();
    
    return JSON.parse(jsonString) as RecommendationResponse;
  } catch (error) {
    console.error("Gemini API Error:", error);
    // Return mock fallback if API fails (graceful degradation)
    return {
      advice: "We strictly recommend speaking to our human counselors for a detailed evaluation.",
      topDestinations: [],
      suggestedCourses: []
    };
  }
};
