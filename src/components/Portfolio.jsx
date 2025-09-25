export default function Portfolio() {
  const projects = [
    {
      img: "/images/work1.jpeg",  // <-- public folder path
      title: "Luxury Hospitality",
      desc: "Premium marble installations for luxury hotels",
    },
    {
      img: "/images/work2.jpeg",  // <-- public folder path
      title: "Commercial Complexes",
      desc: "Granite solutions for corporate buildings",
    },
    {
      img: "/images/work3.png",  // <-- public folder path
      title: "Architectural Features",
      desc: "Custom stonework for prestigious projects",
    },
  ];

  return (
    <section id="portfolio" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-4xl md:text-5xl font-light text-black tracking-tight">
            Our Work
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-600 font-light leading-relaxed">
            Premium natural stone solutions for prestigious projects
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {projects.map((project, idx) => (
            <div key={idx} className="overflow-hidden rounded-lg shadow-lg">
              <img
                src={project.img}  // <-- now points to public folder
                alt={project.title}
                className="w-full h-100 object-cover"
              />
              <div className="p-4 bg-card">
                <h3 className="font-semibold text-foreground">
                  {project.title}
                </h3>
                <p className="text-sm text-muted-foreground">{project.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
