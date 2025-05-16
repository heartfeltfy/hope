const Loading = () => {
  return (
    <div className="fixed inset-0 z-50 flex justify-center items-center bg-white dark:bg-zinc-900 transition-colors duration-300">
      <div
        className="
          w-[50px] h-[50px] rounded-full
          border-4 border-slate-200 border-t-blue-400
          dark:border-zinc-700 dark:border-t-blue-500
          animate-spin
        "
      />
    </div>
  )
}

export default Loading
