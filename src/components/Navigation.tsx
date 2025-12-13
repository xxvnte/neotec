import { Code2 } from 'lucide-react';

export function Navigation() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-lg border-b border-purple-900/30">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="p-2 bg-gradient-to-br from-violet-600 to-purple-700 rounded-lg">
              <Code2 className="w-6 h-6" />
            </div>
            <span className="text-2xl bg-gradient-to-r from-violet-400 to-purple-500 bg-clip-text text-transparent">
              neotec
            </span>
          </div>
          
          <div className="hidden md:flex items-center gap-8">
            <a href="#servicios" className="text-gray-300 hover:text-violet-400 transition-colors">
              Servicios
            </a>
            <a href="#caracteristicas" className="text-gray-300 hover:text-violet-400 transition-colors">
              Características
            </a>
            <a href="#contacto" className="text-gray-300 hover:text-violet-400 transition-colors">
              Contacto
            </a>
          </div>
          
          <button className="px-6 py-2 bg-gradient-to-r from-violet-600 to-purple-600 rounded-lg hover:shadow-lg hover:shadow-violet-500/50 transition-all">
            Comenzar
          </button>
        </div>
      </div>
    </nav>
  );
}