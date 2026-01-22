const OPENAI_KEY = "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"; // 🔴 حط التوكن هنا

export default async function handler(req, res) {
  const { question } = req.query;

  if (!question) {
    return res.status(400).json({
      Reponde: "❌ خاصك question",
      Status: "error 🇲🇦",
      Youtube: "XVX TEAM"
    });
  }

  try {
    const response = await fetch(
      "https://api.openai.com/v1/chat/completions",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${OPENAI_KEY}`
        },
        body: JSON.stringify({
          model: "gpt-4o-mini",
          messages: [
            {
              role: "user",
              content: question
            }
          ]
        })
      }
    );

    const data = await response.json();
    const reply =
      data.choices?.[0]?.message?.content || "ما كاين حتى رد";

    res.status(200).json({
      Reponde: reply,
      Status: "succès 🇲🇦",
      Youtube: "XVX TEAM"
    });

  } catch (err) {
    res.status(500).json({
      Reponde: "وقع خطأ فـ AI",
      Status: "error 🇲🇦",
      Youtube: "XVX TEAM"
    });
  }
}