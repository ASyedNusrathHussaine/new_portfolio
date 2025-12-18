import { Download } from 'lucide-react';
import profilePic from '../Profile.png';

function Hero() {
  return (
    <section id="home" className="bg-white py-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-3">
              Hi, I'm Syed Nusrath Hussaine
            </h2>
            <p className="text-xl text-slate-700 mb-6 font-medium">
              Fresher Software Developer
            </p>
            <p className="text-gray-600 leading-relaxed mb-8">
              I am a computer science graduate with strong proficiency in Python and web technologies.
              I enjoy building clean, responsive web applications and practical projects that solve real-world problems.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="inline-flex items-center gap-2 bg-slate-900 text-white px-6 py-3 rounded-md hover:bg-slate-800 transition-colors">
                <Download size={18} />
                Download Resume
              </button>
              <a
                href="https://www.linkedin.com/in/syed-nusrath-hussaine26/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border-2 border-slate-900 text-slate-900 px-6 py-3 rounded-md hover:bg-slate-50 transition-colors"
              >
                LinkedIn Profile
              </a>
            </div>
          </div>
          <div className="flex justify-center md:justify-end">
            <div className="w-64 h-64 rounded-2xl overflow-hidden bg-gray-200 flex items-center justify-center">
              <img
                src={profilePic}
                alt="Profile"
                className="w-full h-full object-cover"
                onError={(e) => {
                  const target = e.currentTarget as HTMLImageElement;
                  target.onerror = null;
                  target.src = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="256" height="256" viewBox="0 0 24 24" fill="none" stroke="%238B8B8B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M16 7a4 4 0 11-8 0 4 4 0 018 0z"/><path d="M12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/></svg>';
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
