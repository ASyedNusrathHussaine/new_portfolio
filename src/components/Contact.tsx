import { Mail, Linkedin, Github, MapPin } from 'lucide-react';

function Contact() {
  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'syednusrath2604@gmail.com',
      link: 'mailto:syednusrath2604@gmail.com',
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'Connect on LinkedIn',
      link: 'https://www.linkedin.com/in/syed-nusrath-hussaine26/',
    },
    {
      icon: Github,
      label: 'GitHub',
      value: 'View GitHub Profile',
      link: 'https://github.com/SyedNusrath07',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Vellore, India',
      link: null,
    },
  ];

  return (
    <section id="contact" className="bg-gray-50 py-20">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-gray-900 mb-12">Contact</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {contactInfo.map((item, index) => (
            <div key={index} className="bg-white p-6 rounded-lg border border-gray-200">
              <div className="flex items-start gap-4">
                <div className="text-slate-900 mt-1">
                  <item.icon size={22} />
                </div>
                <div>
                  <p className="font-medium text-gray-900 mb-1">{item.label}</p>
                  {item.link ? (
                    <a
                      href={item.link}
                      target={item.link.startsWith('http') ? '_blank' : '_self'}
                      rel={item.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="text-gray-600 hover:text-slate-900 transition-colors"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p className="text-gray-600">{item.value}</p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <footer className="max-w-6xl mx-auto px-6 mt-16 pt-8 border-t border-gray-200">
        <p className="text-center text-gray-600 text-sm">
          © 2024 Syed Nusrath Hussaine. All rights reserved.
        </p>
      </footer>
    </section>
  );
}

export default Contact;
