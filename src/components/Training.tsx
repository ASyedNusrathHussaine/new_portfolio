function Training() {
  const trainings = [
    {
      title: 'REST API Development using Java- Siemens (Workshop)',
      date: 'Sep 2022',
      description: 'Learned REST API concepts and backend request–response architecture.',
    },
    {
      title: 'Real-Time AWS Session- Department of CSE',
      date: 'Sep 2023',
      description: 'Understood cloud fundamentals, EC2 usage, and deployment overview.',
    },
    {
      title: 'Data Science & AI/ML Intern- YBI Foundation (Online)',
      date: 'Jul 2024',
      description: 'Gained foundational exposure to data science concepts and AI/ML workflows.',
    },
  ];

  return (
    <section id="training" className="bg-white py-20">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-gray-900 mb-12">Training, Workshops & Internship</h2>
        <div className="grid md:grid-cols-1 gap-6">
          {trainings.map((training, index) => (
            <div key={index} className="bg-gray-50 p-6 rounded-lg border border-gray-200">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-lg font-semibold text-gray-900">
                  {training.title}
                </h3>
                <span className="text-sm text-gray-500 font-medium">
                  {training.date}
                </span>
              </div>
              <p className="text-gray-600">{training.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Training;
