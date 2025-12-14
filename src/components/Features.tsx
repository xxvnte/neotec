import { Zap, Shield, Rocket, Users } from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Desarrollo Ágil",
    description: "Metodologías ágiles para entregas rápidas y eficientes",
  },
  {
    icon: Shield,
    title: "Seguridad Garantizada",
    description:
      "Implementamos las mejores prácticas de seguridad en cada proyecto",
  },
  {
    icon: Rocket,
    title: "Tecnología Avanzada",
    description: "Utilizamos las últimas tecnologías y frameworks del mercado",
  },
  {
    icon: Users,
    title: "Equipo Experto",
    description: "Profesionales altamente capacitados y certificados",
  },
];

export function Features() {
  return (
    <section
      id="caracteristicas"
      className="py-32 px-6 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl mb-4 py-2 bg-linear-to-r from-violet-400 to-purple-500 bg-clip-text text-transparent">
            ¿Por Qué Neotec?
          </h2>
          <p className="text-xl text-gray-400">
            La diferencia que nos hace únicos
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="relative p-10 bg-linear-to-br from-black to-purple-950/20 border border-violet-500/30 rounded-2xl overflow-hidden group hover:border-violet-500/60 transition-all"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-linear-to-br from-violet-600/20 to-purple-700/20 blur-2xl group-hover:scale-150 transition-transform" />

              <div className="relative z-10">
                <div className="w-16 h-16 mb-6 bg-linear-to-br from-violet-600 to-purple-700 rounded-2xl flex items-center justify-center">
                  <feature.icon className="w-8 h-8" />
                </div>
                <h3 className="text-2xl mb-3 text-violet-200">
                  {feature.title}
                </h3>
                <p className="text-gray-400 text-lg">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
