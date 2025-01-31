import React from 'react';

import Link from "next/link";
const LoginForm = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center ">
      {/* Main Container */}
      <div className="w-full max-w-md bg-white rounded-lg shadow-sm p-6 space-y-6">
        {/* Logo Section */}
        
        <div className="text-center mb-8">
        <div className="mt-2 aling-right">
        <img
          src="/resource/usuario.png"
          alt="Alcaldia Ciudadana de Palenque"
          className="h-24 w-auto"
        />
      </div>
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
            <Link  className="inline-flex items-center justify-center  w-full bg-blue-600 text-white mt-4 py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
            href="/inicio">
              INGRESAR
            </Link>
          </form>
        </div>
      </div>

      {/* Footer Logo */}
      <div className="mt-8">
        <img
          src="/resource/palenque.png"
          alt="Alcaldia Ciudadana de Palenque"
          className="h-24 w-auto"
        />
      </div>
    </div>
  );
};

export default LoginForm;