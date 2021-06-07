import React from "react"

const PreviewBanner: React.FC = () => (
  <div className="p-4 bg-yellow-100 border border-yellow-300 text-center text-sm font-semibold">
    This is a preview,{" "}
    <a
      href="/api/exit-preview"
      className="underline hover:text-cyan duration-200 transition-colors"
    >
      click here to close
    </a>
  </div>
)

export { PreviewBanner }
