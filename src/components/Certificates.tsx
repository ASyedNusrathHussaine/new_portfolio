function Certificates() {
  const certificates = [
    {
      title: 'Neural Networks and Deep Learning',
      issuer: 'Guvi',
    },
    {
      title: 'DevOps Essentials',
      issuer: 'Infosys Springboard',
    },
    {
      title: 'Network Essentials',
      issuer: 'Cisco',
    },
    {
      title: 'Complete 2024 Web Development Bootcamp',
      issuer: 'Udemy',
    },
  ];

  return (
    <section id="certificates" className="bg-gray-50 py-20">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-gray-900 mb-12">Certificates</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {certificates.map((certificate, index) => (
            <div key={index} className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {certificate.title}
              </h3>
              <p className="text-gray-600">{certificate.issuer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Certificates;
