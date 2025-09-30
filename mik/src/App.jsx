import { useState, useEffect } from 'react'
import './App.css'
import photo1 from './assets/img/mik.jpeg'

function App() {
  const [currentPage, setCurrentPage] = useState(0)
  const [isOpen, setIsOpen] = useState(false)
  const [showWriting, setShowWriting] = useState(false)
  const [showFinalPopup, setShowFinalPopup] = useState(false)
  const [hearts, setHearts] = useState([])

  const pages = [
    {
      title: "Chapter 1: Behind the Lens 📹",
      subtitle: "The moment everything started...",
      content: "From the very first time I saw you behind that camera, my world changed. The way you hold it with such passion, the way your eyes sparkle when you're creating magic through your lens - you became my favorite scene to watch.\n\nEvery 'Action!' you call sends butterflies dancing in my heart. You're not just filming stories, you're living them, breathing life into every frame.",
      hasPhoto: true,
      photoText: "My beautiful filmmaker 💕",
      bgGradient: "from-pink-100 to-rose-200",
      image: photo1
    },
    {
      title: "Chapter 2: The Perfect Frame 🎬",
      subtitle: "When I realized you captured more than just films...",
      content: "In all your short films, you capture raw emotions, perfect lighting, stories that make hearts skip beats. But what you don't know is that you've captured something even more precious - my entire heart.\n\nWatching you work is like watching poetry in motion. You understand the language of emotions, and mine are screaming your name in every heartbeat.",
      hasPhoto: true,
      photoText: "You in your element 🌟",
      bgGradient: "from-pink-100 to-rose-200",
      image: "/mik.jpeg"
    },
    {
      title: "Chapter 3: My Truth 💝",
      subtitle: "No filters, no edits, just pure feelings...",
      content: "Like a director calling 'Action!', I want to tell you my truth - my feelings for you are real, unscripted, straight from the soul. No retakes needed because this is my reality.\n\nYou've taught me that life is about creating beautiful moments. Now I want to create those moments with you, frame by frame, heartbeat by heartbeat.",
      hasPhoto: true,
      photoText: "Your smile that melts me 🌸",
      bgGradient: "from-pink-100 to-rose-200",
      image: "/mik.jpeg"
    },
    {
      title: "Chapter 4: Our Love Story 💕",
      subtitle: "The beginning of something beautiful...",
      content: "Every great film needs perfect chemistry between the leads. I believe we have that magic, that spark that could light up every scene of our lives.\n\nI want to be your co-star in this beautiful story called life. Together, we could create the most amazing love story - filled with laughter, adventures, late-night editing sessions, and endless romance.",
      hasPhoto: true,
      photoText: "Our future together 💐",
      bgGradient: "from-pink-100 to-rose-200",
      image: "mik.jpeg",
      isFinal: true
    }
  ]

  useEffect(() => {
    const timer = setTimeout(() => setIsOpen(true), 500)
    const writingTimer = setTimeout(() => setShowWriting(true), 1500)
    return () => {
      clearTimeout(timer)
      clearTimeout(writingTimer)
    }
  }, [])

  useEffect(() => {
    if (currentPage === pages.length - 1 && showWriting) {
      const finalTimer = setTimeout(() => setShowFinalPopup(true), 3000)
      return () => clearTimeout(finalTimer)
    }
  }, [currentPage, showWriting])

  const createHeartExplosion = () => {
    const newHearts = Array.from({ length: 20 }, (_, i) => ({
      id: Date.now() + i,
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      size: Math.random() * 30 + 20,
      delay: i * 100
    }))
    setHearts(newHearts)
    setTimeout(() => setHearts([]), 3000)
  }

  useEffect(() => {
    if (showFinalPopup) {
      createHeartExplosion()
    }
  }, [showFinalPopup])

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-300 via-rose-200 to-pink-400 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {/* Floating Hearts */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(12)].map((_, i) => (
            <div
              key={i}
              className="absolute text-white/30 animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                fontSize: `${Math.random() * 20 + 15}px`,
                animationDelay: `${i * 0.5}s`,
                animationDuration: `${Math.random() * 3 + 2}s`
              }}
            >
              {['💖', '💕', '💝', '❤️', '🌸'][Math.floor(Math.random() * 5)]}
            </div>
          ))}
        </div>

        {/* Floating Sakura Petals */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="absolute text-pink-200/60 animate-bounce"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${i * 0.8}s`,
                animationDuration: '4s'
              }}
            >
              🌸
            </div>
          ))}
        </div>
      </div>

      {/* Heart Explosion for Final Scene */}
      {hearts.map(heart => (
        <div
          key={heart.id}
          className="absolute pointer-events-none text-red-500 animate-ping z-50"
          style={{
            left: heart.x,
            top: heart.y,
            fontSize: heart.size,
            animationDelay: `${heart.delay}ms`
          }}
        >
          💕
        </div>
      ))}

      <div className="flex items-center justify-center min-h-screen py-8 px-4">
        <div className={`relative transform transition-all duration-2000 ${isOpen ? 'rotate-0 scale-100' : 'rotate-y-90 scale-75'}`}>
          {/* Modern Album Cover */}
          <div className="bg-white/95 backdrop-blur-sm rounded-3xl shadow-2xl p-0 max-w-5xl w-full relative overflow-hidden border-4 border-white/50">

            {/* Gradient Overlay */}
            <div className={`absolute inset-0 bg-gradient-to-br ${pages[currentPage].bgGradient} opacity-20`}></div>

            {/* Album Content */}
            <div className="relative z-10 p-12">
              {/* Album Header */}
              <div className="text-center mb-12 relative">
                <div className="inline-block p-6 bg-white/80 rounded-full shadow-lg mb-6">
                  <div className="text-7xl animate-bounce">💕</div>
                </div>
                <h1 className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-purple-600 mb-4 font-serif">
                  My Love Album
                </h1>
                <div className="flex justify-center items-center gap-6 text-gray-700">
                  <div className="text-3xl">🎬</div>
                  <p className="text-2xl italic font-light">For my favorite filmmaker...</p>
                  <div className="text-3xl">💕</div>
                </div>
              </div>

              {/* Album Page */}
              <div className="bg-white/90 backdrop-blur-md rounded-3xl p-10 shadow-xl border border-pink-200/50 min-h-[600px] relative overflow-hidden">

                {/* Decorative Elements */}
                <div className="absolute top-6 left-6 w-20 h-20 bg-gradient-to-br from-pink-400 to-purple-500 rounded-full opacity-20 animate-pulse"></div>
                <div className="absolute bottom-6 right-6 w-16 h-16 bg-gradient-to-br from-rose-400 to-pink-500 rounded-full opacity-20 animate-pulse"></div>

                {/* Page Header */}
                <div className="text-center mb-8">
                  <h2 className="text-4xl font-bold text-gray-800 mb-2 font-serif">
                    {pages[currentPage].title}
                  </h2>
                  <p className="text-xl text-pink-600 italic font-light">
                    {pages[currentPage].subtitle}
                  </p>
                  <div className="w-64 h-1 bg-gradient-to-r from-pink-400 via-rose-400 to-purple-400 mx-auto rounded-full mt-4"></div>
                </div>

                {/* Content Layout - Modern Magazine Style */}
                <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 items-center">

                  {/* Photo Section */}
                  <div className="lg:col-span-2 space-y-6">
                    <div className="relative group">
                      <div className="bg-gradient-to-br from-pink-50 to-purple-50 p-6 rounded-3xl shadow-lg transform rotate-1 group-hover:rotate-0 transition-all duration-500">
                        <div className="bg-white h-80 rounded-2xl flex items-center justify-center border-4 border-dashed border-pink-300/50 relative overflow-hidden">
                          {pages[currentPage].image ? (
                            <img
                              src={pages[currentPage].image}
                              alt={pages[currentPage].photoText}
                              className="w-full h-full object-cover rounded-xl"
                            />
                          ) : (
                            <div className="text-center text-gray-400">
                              <div className="text-6xl mb-4">📷</div>
                              <p className="text-lg font-medium">Replace with her photo</p>
                            </div>
                          )}
                          {/* Photo overlay effect */}
                          <div className="absolute inset-0 bg-gradient-to-br from-pink-400/10 to-purple-400/10"></div>
                        </div>
                        <div className="mt-4 text-center">
                          <p className="text-pink-600 font-medium text-lg">
                            {pages[currentPage].photoText}
                          </p>
                        </div>

                        {/* Polaroid effect */}
                        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 w-20 h-8 bg-yellow-200/80 rounded rotate-12 shadow-md"></div>
                      </div>
                    </div>
                  </div>

                  {/* Text Content */}
                  <div className="lg:col-span-3">
                    <div className={`transform transition-all duration-2000 ${showWriting ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                      <div className="bg-gradient-to-br from-white/70 to-pink-50/70 p-8 rounded-2xl shadow-inner border border-pink-200/30">
                        <p className="text-gray-700 text-xl leading-relaxed font-serif whitespace-pre-line text-justify tracking-wide">
                          {pages[currentPage].content}
                        </p>
                      </div>
                    </div>

                    {/* Quote Section */}
                    <div className="mt-8 p-6 bg-gradient-to-r from-pink-100 to-purple-100 rounded-2xl border-l-4 border-pink-400 shadow-md">
                      <p className="text-center text-gray-600 italic text-xl font-light">
                        "Every frame of my life is better with you in it" 📸✨
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Navigation */}
              <div className="flex justify-between items-center mt-10">
                <button
                  onClick={() => setCurrentPage(Math.max(0, currentPage - 1))}
                  disabled={currentPage === 0}
                  className="px-10 py-4 bg-gradient-to-r from-purple-500 to-purple-600 text-white rounded-full disabled:opacity-50 hover:from-purple-600 hover:to-purple-700 transition-all duration-300 shadow-xl transform hover:scale-105 flex items-center gap-3 font-semibold text-lg"
                >
                  ⏮️ Previous
                </button>

                <div className="flex items-center gap-4">
                  {pages.map((_, index) => (
                    <div
                      key={index}
                      className={`w-4 h-4 rounded-full transition-all duration-300 ${index === currentPage
                          ? 'bg-gradient-to-r from-pink-500 to-purple-500 scale-125'
                          : 'bg-gray-300'
                        }`}
                    ></div>
                  ))}
                </div>

                <button
                  onClick={() => setCurrentPage(Math.min(pages.length - 1, currentPage + 1))}
                  disabled={currentPage === pages.length - 1}
                  className="px-10 py-4 bg-gradient-to-r from-pink-500 to-pink-600 text-white rounded-full disabled:opacity-50 hover:from-pink-600 hover:to-pink-700 transition-all duration-300 shadow-xl transform hover:scale-105 flex items-center gap-3 font-semibold text-lg"
                >
                  Next ⏭️
                </button>
              </div>
            </div>
          </div>

          {/* Album Shadow */}
          <div className="absolute -bottom-8 -right-8 w-full h-full bg-pink-900/20 rounded-3xl -z-10 blur-xl"></div>
        </div>
      </div>

      {/* Final Popup Animation */}
      {showFinalPopup && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-md flex items-center justify-center z-50 animate-fadeIn">
          <div className="bg-gradient-to-br from-white via-pink-50 to-purple-50 p-12 rounded-3xl shadow-2xl max-w-2xl mx-4 text-center transform animate-bounceIn border-4 border-pink-200">
            <div className="text-8xl mb-8 animate-pulse">💕</div>
            <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-purple-600 mb-6 font-serif">
              I Love You
            </h1>
            <p className="text-2xl text-gray-700 mb-8 font-light leading-relaxed">
              You're the director of my heart, the star of my dreams...
            </p>
            <div className="text-6xl mb-6">💐</div>
            <p className="text-3xl font-bold text-pink-700 mb-8">
              Can I court you?
            </p>
            <div className="flex justify-center gap-6 text-5xl animate-bounce">
              🌹💕🎬💝🌸
            </div>
            <button
              onClick={() => setShowFinalPopup(false)}
              className="mt-8 px-8 py-3 bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-full hover:from-pink-600 hover:to-purple-600 transition-all duration-300 shadow-lg transform hover:scale-105 text-lg font-semibold"
            >
              Close 💕
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default App