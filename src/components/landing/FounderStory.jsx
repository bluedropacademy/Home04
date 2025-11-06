
import React from "react";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";

export default function FounderStory() {
  return (
    <section className="py-10 sm:py-20 px-4 bg-white">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            הסיפור מאחורי <span className="text-blue-600">בלודרופ</span>
          </h2>
          <p className="text-xl text-gray-600">איך השעמום בבית הספר הפך למשימת חיים</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl p-8 md:p-12 shadow-xl border border-blue-100 relative overflow-hidden">
            {/* Profile Image - Top Left */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, x: -50 }}
              whileInView={{ opacity: 1, scale: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="absolute top-6 left-6 z-20"
            >
              <div className="relative">
                {/* Animated ring around image */}
                <motion.div
                  animate={{
                    rotate: [0, 360],
                  }}
                  transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                  className="absolute -inset-2 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full opacity-75 blur-sm"
                />
                {/* Image container */}
                <div className="relative w-20 h-20 md:w-32 md:h-32 rounded-full overflow-hidden border-4 border-white shadow-2xl">
                  <img
                    src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68f8ba38bef1cce58f7b12c3/b36159678_image.png"
                    alt="נועם - מייסד בלודרופ"
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Floating badge */}
                <motion.div
                  animate={{
                    y: [0, -5, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="absolute -bottom-2 -right-2 bg-gradient-to-r from-orange-400 to-pink-500 text-white text-xs font-bold px-2 py-1 md:px-3 md:py-1 rounded-full shadow-lg"
                >
                  👋 נועם
                </motion.div>
              </div>
            </motion.div>

            <Quote className="w-12 h-12 text-blue-600 mb-6" />
            
            <div className="prose prose-lg max-w-none pt-8 sm:pt-5 md:pt-0">
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                היי, אני נועם 😊. או ("בלודרופ" למי שמכיר אותי מיוטיוב)
              </p>

              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                מי שמכיר יודע שאני אוהב להפוך נושאים מסובכים למרתקים וכיפיים לצפייה. אבל הסיפור שלי התחיל בדיוק במקום ההפוך.
              </p>

              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                גם אני הייתי פעם תלמיד ששנא ללמוד. ישבתי בכיתה ופשוט לא הבנתי: "למה זה חייב להיות כל כך משעמם?" 😩
              </p>

              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                גיליתי שאני לא לבד. עשרות מיליוני צפיות ומיליוני תגובות כמו "סוף סוף הבנתי!" הבהירו לי: הבעיה היא לא בחומר, אלא בדרך שבה הוא מוגש. 💡
              </p>

              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                הבנתי שלמידה לא צריכה להיות עונש. היא יכולה, וחייבת, להיות הרפתקה!
              </p>

              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                החלטתי לקחת את כל מה שלמדתי, שילבתי את זה עם החומרים שאתם לומדים בבית הספר ועם טכנולוגיית בינה מלאכותית מהמתקדמות בעולם, ויצרתי משהו גדול יותר: האקדמיה של בלודרופ. 🎓
              </p>

              <div className="bg-blue-600 text-white rounded-2xl p-6 text-center">
                <p className="text-xl font-bold mb-2">
                  זה המקום שבו כל תלמיד יכול ללמוד בקצב שלו ובצורה שבאמת מרתקת אותו.
                </p>
                <p className="text-blue-100">
                  כי אם אני הצלחתי להפוך שעמום לסקרנות, כל אחד יכול. 🎉
                </p>
              </div>
            </div>
          </div>

          {/* Decorative elements */}
          <div className="absolute -top-6 -right-6 w-32 h-32 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-full opacity-20 blur-2xl" />
          <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-to-br from-blue-400 to-indigo-400 rounded-full opacity-20 blur-2xl" />
        </motion.div>
      </div>
    </section>
  );
}
