const Posts: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-blue-100 dark:from-zinc-900 dark:to-zinc-800 p-4 transition-colors duration-300">
      <div className="w-full max-w-2xl mx-auto p-6 sm:p-10 rounded-xl shadow-lg bg-white dark:bg-zinc-900 transition-all duration-300">
        <h1 className="text-3xl sm:text-4xl font-bold text-center mb-8 text-indigo-700 dark:text-zinc-100 drop-shadow title-animation transition-all duration-300">
          勇往直前，追逐梦想
        </h1>

        <div className="content-card p-6 sm:p-8 mb-8 rounded-lg shadow bg-white dark:bg-zinc-800 transition-all duration-300">
          <p className="mb-5 text-base sm:text-lg leading-relaxed text-gray-700 dark:text-gray-200 transition-colors duration-300">
            亲爱的年轻人，在这个充满机遇与挑战的时代，你们正站在人生的十字路口。请记住，你们的双肩承载着家国的希望，你们的步伐定义着未来的方向。
          </p>
          <p className="mb-5 text-base sm:text-lg leading-relaxed text-gray-700 dark:text-gray-200 transition-colors duration-300">
            不要害怕失败，因为失败是成功的垫脚石。每一次跌倒都是为了更好地站起来，每一次挫折都是为了让你变得更加坚强。人生就像爬山，道路崎岖不平，但只有登上顶峰，才能看到最美的风景。
          </p>
          <p className="mb-5 text-base sm:text-lg leading-relaxed text-gray-700 dark:text-gray-200 transition-colors duration-300">
            请相信自己的能力，相信自己的价值。在这个快速变化的世界里，保持学习的热情，保持创新的思维。知识是你最强大的武器，勤奋是你最忠实的朋友。
          </p>

          <div className="section-block section-dreams my-8 p-6 border-l-4 border-blue-400 dark:border-blue-600 bg-blue-50/60 dark:bg-blue-900/20 rounded-r-lg transition-all duration-300">
            <h2 className="font-bold mb-4 text-blue-700 dark:text-blue-300 text-xl sm:text-2xl transition-colors duration-300">
              坚持梦想，不负韶华
            </h2>
            <p className="mb-4 leading-relaxed text-gray-700 dark:text-gray-200 transition-colors duration-300">
              每个人心中都有一个梦想，它可能微小，可能遥远，但它是你前进的方向。不要因为道路遥远而放弃，不要因为别人的质疑而退缩。坚持自己的选择，勇敢追逐内心的声音。
            </p>
            <p className="mb-4 leading-relaxed text-gray-700 dark:text-gray-200 transition-colors duration-300">
              时光不会辜负每一个努力的人。无论你来自何方，无论你的起点如何，只要你愿意付出，愿意坚持，你终将到达你想去的地方。青春是一次性的消费品，请不要让它在迷茫和犹豫中悄然流逝。
            </p>
          </div>

          <div className="section-block section-future my-8 p-6 border-l-4 border-red-400 dark:border-red-600 bg-red-50/60 dark:bg-red-900/20 rounded-r-lg transition-all duration-300">
            <h2 className="font-bold mb-4 text-red-700 dark:text-red-300 text-xl sm:text-2xl transition-colors duration-300">
              拥抱变化，创造未来
            </h2>
            <p className="mb-4 leading-relaxed text-gray-700 dark:text-gray-200 transition-colors duration-300">
              这是一个前所未有的时代，科技日新月异，机会层出不穷。不要害怕变化，而是要学会拥抱变化。培养你的创新思维，提升你的适应能力，让自己成为变化的主导者，而不是被动的接受者。
            </p>
            <p className="mb-4 leading-relaxed text-gray-700 dark:text-gray-200 transition-colors duration-300">
              记住，你们是未来的创造者。今天的努力，将决定明天的高度。愿你们在追逐梦想的道路上，不忘初心，砥砺前行，书写属于自己的精彩篇章。
            </p>
          </div>

          <div className="quote mt-10 text-right italic text-lg text-gray-500 dark:text-gray-400 border-t border-slate-200 dark:border-zinc-700 pt-6 transition-all duration-300">
            "青春由磨砺而出彩，人生因奋斗而升华。"
          </div>
        </div>
      </div>
      <style
        dangerouslySetInnerHTML={{
          __html: `
          .title-animation {
            animation: fadeIn 1s ease-in;
          }
          .content-card {
            animation: slideUp 0.6s ease-out;
          }
          .content-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 10px 20px rgba(0,0,0,0.15);
          }
          .section-dreams {
            animation: fadeIn 0.8s ease-in 0.2s both;
          }
          .section-future {
            animation: fadeIn 0.8s ease-in 0.4s both;
          }
          .quote {
            animation: slideLeft 0.5s ease-in 0.6s both;
          }
          @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
          }
          @keyframes slideUp {
            from { transform: translateY(30px); opacity: 0; }
            to { transform: translateY(0); opacity: 1; }
          }
          @keyframes slideLeft {
            from { transform: translateX(30px); opacity: 0; }
            to { transform: translateX(0); opacity: 1; }
          }
        `,
        }}
      />
    </div>
  )
}

export default Posts
