
import Link from "next/link";
import Image from 'next/image';
const SolicitudDePermisos= () => {
  return (
    <main className="container mx-auto max-w-7xl px-6 flex-grow pt-16">
      <div className="min-h-screen bg-white flex flex-col items-center justify-top">
        {/* Main Container */}
        <div className="w-full max-w-md bg-white rounded-lg p-6 space-y-2">
          {/* Logo Section */}
          <div className="text-center">
            <img
              src="/resource/usuario.png"
              alt="Logo Talento Humano"
              className="h-17  ml-auto mr-12 w-full max-w-[100px]"
            />
            <h1 className="text-blue-600 text-2xl md:text-3xl font-bold">
              TALENTO HUMANO
            </h1>
          </div>
          {/* Form Section */}
          <div className="space-y-4">
            <h2 className="text-gray-700 text-center text-sm mb-6">
              Inicia sesión para continuar
            </h2>
            <form className="space-y-4">
              {/* Email Field */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  CORREO ELECTRONICO
                </label>
                <input
                  type="email"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="ejemplo@correoelectronico.com"
                />
              </div>
              {/* Password Field */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  CONTRASEÑA
                </label>
                <input
                  type="password"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="••••••••••"
                />
              </div>
              {/* Login Button */}
              <Link href="/permisos">
                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white mt-6 py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
                >
                  INGRESAR
                </button>
              </Link>
            </form>
          </div>
        </div>
        {/* Footer Logo */}
        <div className=" w-full max-w-[200px] bg-white rounded-lg p-4">
          <img
            src="resource/palenque.png"
            alt="Alcaldia Ciudadana de Palenque"
            className="w-full h-auto object-contain"
          />
        </div>
      </div>
    </main>
  )
}

export default SolicitudDePermisos
