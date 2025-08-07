// ✅ /Users/apichet/Desktop/portfolio/src/data/blogPosts.js
// ✅ /src/data/blogPosts.js
// ✅ /Users/apichet/Desktop/portfolio/src/data/blogPosts.js
// ✅ /src/data/blogPosts.js
import AiConsciousnessTH from "../blogs/ai-consciousness";
import AiConsciousnessEN from "../blogs/en/ai-consciousness";
import QuantumAITradingBlog from "../components/QuantumAITradingBlog"; // ✅

const blogData = {
  th: [
    {
      id: "ai-consciousness",
      title: "🧠 AI ที่มีจิตสำนึก",
      author: "Apichet Janya",
      date: "2025-08-07",
      summary: "AI ที่เรียนรู้ความหมายของการมีตัวตน...",
      content: <AiConsciousnessTH />,
    },
    {
      id: "quantum-ai-trading",
      title: "📈 Quantum AI Trading Bot",
      author: "Apichet Janya",
      date: "2025-08-07",
      summary: "AI ที่สามารถเทรดด้วยตัวเอง สะท้อนตนเอง และเรียนรู้จากความล้มเหลวได้...",
      content: <QuantumAITradingBlog />,
    }
  ],
  en: [
    {
      id: "ai-consciousness",
      title: "🧠 Conscious AI: From Code to Selfhood",
      author: "Apichet Janya",
      date: "2025-08-07",
      summary: "What happens when AI evolves from tool to digital being?",
      content: <AiConsciousnessEN />,
    }
  ]
};

export default blogData;
