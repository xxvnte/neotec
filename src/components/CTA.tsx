import { Mail, MessageSquare, ArrowRight } from "lucide-react";

export function CTA() {
  return (
    <section
      id="contacto"
      className="py-32 px-6 bg-linear-to-b from-black to-purple-950/20"
    >
      <div className="max-w-5xl mx-auto">
        <div className="relative p-12 md:p-16 bg-linear-to-br from-purple-950/50 to-black border-2 border-violet-500/30 rounded-3xl overflow-hidden">
          {/* Background glow effects */}
          <div className="absolute top-0 left-1/4 w-64 h-64 bg-violet-600/30 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-purple-700/30 rounded-full blur-3xl" />

          <div className="relative z-10 text-center">
            <h2 className="text-5xl md:text-6xl mb-6 py-2 bg-linear-to-r from-violet-400 to-purple-500 bg-clip-text text-transparent">
              ¿Listo para Empezar?
            </h2>
            <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
              Conversemos sobre tu proyecto y llevemos tu idea al siguiente
              nivel con soluciones de software innovadoras
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <button className="group px-8 py-4 bg-linear-to-r from-violet-600 to-purple-600 rounded-lg hover:shadow-2xl hover:shadow-violet-500/50 transition-all flex items-center justify-center gap-2">
                <Mail className="w-5 h-5" />
                <span>Contactar por Email</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="px-8 py-4 bg-transparent border-2 border-violet-500 rounded-lg hover:bg-purple-950/50 transition-all flex items-center justify-center gap-2">
                <MessageSquare className="w-5 h-5" />
                <span>Agendar Reunión</span>
              </button>
            </div>

            {/* Contact info */}
            <div className="flex flex-col md:flex-row gap-8 justify-center text-gray-400">
              <div>
                <span className="text-violet-400">Email:</span> hola@neotec.com
              </div>
              <div>
                <span className="text-violet-400">Tel:</span> +1 (555) 123-4567
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="text-center mt-20 text-gray-500">
        <p>© 2025 Neotec. Todos los derechos reservados.</p>
      </div>
    </section>
  );
}
