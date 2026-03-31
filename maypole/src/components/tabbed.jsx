import { useState } from "react";

const videos = [
  {
    id: "english",
    label: "English",
    embedUrl: "https://www.youtube.com/embed/MC_lLzYGg2Y",
    description:
      "Learn about our care services, how we support patients, and what families can expect when choosing Maypole Care.",
  },
  {
    id: "ga",
    label: "Ga",
    embedUrl: "https://www.youtube.com/embed/xO9ODTbgNiQ",
    description:
      "A detailed explanation of our care services presented in the Ga language for better understanding by Ga-speaking families.",
  },
  {
    id: "twi",
    label: "Twi",
    embedUrl: "https://www.youtube.com/embed/P8qxkTJeRYw",
    description:
      "Watch this video in Twi to understand how Maypole Care supports patients with compassion, dignity, and professional care.",
  },
];

export default function VideoSection() {
  const [activeTab, setActiveTab] = useState("english");

  const current = videos.find((v) => v.id === activeTab);

  return (
    <section className="w-full max-w-4xl mx-auto px-6 py-16">
      {/* Heading */}
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-gray-900 mb-3">
          Learn About Our Care Services
        </h2>

        <p className="text-gray-600 max-w-2xl mx-auto">
          We believe everyone deserves access to clear and helpful information.
          Watch our short introduction video to learn how Maypole Care supports
          patients and families. Select your preferred language below.
        </p>
      </div>

      {/* Language Tabs */}
      <div className="flex justify-center flex-wrap gap-3 mb-8">
        {videos.map((video) => (
          <button
            key={video.id}
            onClick={() => setActiveTab(video.id)}
            className={`px-5 py-2 rounded-full text-sm font-medium transition
              ${
                activeTab === video.id
                  ? "bg-[#16B3BB] text-white shadow"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
          >
            {video.label}
          </button>
        ))}
      </div>

      {/* Video Card */}
      <div className="bg-white md:rounded-2xl md:shadow-md p-2 md:p-6">
        {/* Video */}
        <div className="aspect-[9/16] md:aspect-video max-h-[650px] w-[calc(100%+2rem)] -mx-4 md:mx-0 md:w-full mb-5">
          <iframe
            key={current.embedUrl}
            src={current.embedUrl}
            title={current.label}
            allowFullScreen
            className="w-full h-full rounded-xl"
          />
        </div>

        {/* Video Description */}
        <p className="text-gray-600 text-center max-w-2xl mx-auto">
          {current.description}
        </p>
      </div>
    </section>
  );
}
