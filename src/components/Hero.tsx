import { ArrowRight, Sparkles } from "lucide-react";
import { ThreeBlobScene } from "./ThreeBlobScene";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background overlay */}
      <div className="absolute inset-0 bg-black" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div>
            <h1 className="text-4xl md:text-7xl mb-6 py-1 bg-linear-to-r from-violet-500 via-purple-300 to-indigo-500 bg-clip-text text-transparent">
              Transformamos ideas en realidad
            </h1>

            <p className="text-xl text-[#ccccccf3] mb-10">
              Creamos soluciones de software innovadoras que impulsan el futuro
              de tu negocio con tecnología
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <button className="group px-8 py-4 bg-linear-to-r from-violet-600 to-purple-600 rounded-lg hover:shadow-2xl hover:shadow-violet-500/50 transition-all flex items-center justify-center gap-2">
                <span>Iniciar Proyecto</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="px-8 py-4 bg-transparent border-2 border-violet-500 rounded-lg hover:bg-purple-950/50 transition-all">
                Ver Portfolio
              </button>
            </div>
          </div>

          {/* Right - 3D Blob Scene */}
          <div className="relative">
            <div className="h-96">
              <ThreeBlobScene />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
