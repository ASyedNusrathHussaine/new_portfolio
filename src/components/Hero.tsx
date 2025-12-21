import { Download } from 'lucide-react';
import profilePic from '../Profile.png';
import resumePdf from '../new_resu.pdf';

function Hero() {
  return (
    <section id="home" className="bg-white py-16 md:py-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3 text-center md:text-left">
              Hi, I'm Syed Nusrath Hussaine
            </h2>
            <p className="text-lg md:text-xl text-slate-700 mb-6 font-medium text-center md:text-left">
              Portfolio
            </p>
            <p className="text-gray-600 leading-relaxed mb-6 md:mb-8 text-base md:text-lg">
              I am a computer science graduate with strong proficiency in Python and web technologies.
              I enjoy building clean, responsive web applications and practical projects that solve real-world problems.
            </p>
            <div className="flex flex-wrap gap-3 justify-center md:justify-start">
              <a
                href={resumePdf}
                download="Syed_Nusrath_Hussaine_Resume.pdf"
                className="inline-flex items-center gap-2 bg-slate-900 text-white px-4 md:px-6 py-2 md:py-3 rounded-md hover:bg-slate-800 transition-colors"
              >
                <Download size={18} />
                Download Resume
              </a>
              <a
                href="https://www.linkedin.com/in/syed-nusrath-hussaine26/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border-2 border-slate-900 text-slate-900 px-4 md:px-6 py-2 md:py-3 rounded-md hover:bg-slate-50 transition-colors"
              >
                LinkedIn Profile
              </a>
            </div>
          </div>
          <div className="flex justify-center md:justify-end mt-6 md:mt-0">
            <div className="w-40 h-40 md:w-64 md:h-64 rounded-2xl overflow-hidden bg-gray-200 flex items-center justify-center">
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
