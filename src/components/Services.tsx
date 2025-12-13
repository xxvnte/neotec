import { Code, Smartphone, Cloud, Database, Cpu, Globe } from 'lucide-react';

const services = [
  {
    icon: Code,
    title: 'Desarrollo Web',
    description: 'Aplicaciones web modernas y escalables con las últimas tecnologías',
  },
  {
    icon: Smartphone,
    title: 'Apps Móviles',
    description: 'Soluciones móviles nativas y cross-platform para iOS y Android',
  },
  {
    icon: Cloud,
    title: 'Cloud Computing',
    description: 'Arquitecturas cloud robustas y servicios en la nube',
  },
  {
    icon: Database,
    title: 'Big Data',
    description: 'Análisis y procesamiento de grandes volúmenes de datos',
  },
  {
    icon: Cpu,
    title: 'IA & Machine Learning',
    description: 'Soluciones inteligentes con aprendizaje automático',
  },
  {
    icon: Globe,
    title: 'Consultoría Tech',
    description: 'Asesoría estratégica en transformación digital',
  },
];

export function Services() {
  return (
    <section id="servicios" className="py-32 px-6 bg-gradient-to-b from-black via-purple-950/10 to-black relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl mb-4 bg-gradient-to-r from-violet-400 to-purple-500 bg-clip-text text-transparent">
            Nuestros Servicios
          </h2>
          <p className="text-xl text-gray-400">
            Soluciones tecnológicas completas para tu empresa
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group p-8 bg-gradient-to-br from-purple-950/30 to-black border border-violet-500/20 rounded-2xl hover:border-violet-500/50 hover:shadow-2xl hover:shadow-violet-500/20 transition-all duration-300"
            >
              <div className="w-14 h-14 mb-6 bg-gradient-to-br from-violet-600 to-purple-700 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                <service.icon className="w-7 h-7" />
              </div>
              <h3 className="text-2xl mb-3 text-violet-200">
                {service.title}
              </h3>
              <p className="text-gray-400">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}