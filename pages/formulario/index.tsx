import DefaultLayout from "@/layouts/default";
import { MdOutlinePermIdentity } from "react-icons/md";
import Link from "next/link";
import { PieChart, Pie, Cell } from 'recharts';
import React from 'react';
import { Calendar, Send, ChevronLeft } from 'lucide-react';
import { Card, CardTitle } from '@/components/ui/card.jsx';
import { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
}

export default function IndexPage() {
  function CardContent({ children, className = '' }: CardProps) {
    return <div className={`${className}`}>{children}</div>;
  }
  
  function CardHeader({ children, className = '' }: CardProps) {
    return <div className={`border-b p-4 ${className}`}>{children}</div>;
  }

  return (
    <DefaultLayout>
      <div className="max-w-5xl mx-auto bg-blue-50 min-h-screen p-4 lg:p-8">
        {/* Back Button */}
        <div className="mb-6">
          <Link href="/dashboard">
            <button className="flex items-center text-blue-600 hover:bg-blue-100 px-4 py-2 rounded-lg transition-colors">
              <ChevronLeft className="w-5 h-5" />
              <span className="ml-1">Volver al Dashboard</span>
            </button>
          </Link>
        </div>

        <Card className="bg-blue-100/50 border-2 border-blue-200 max-w-4xl mx-auto">
          <CardHeader className="bg-white/50 p-6">
            <CardTitle className="text-center text-2xl font-bold text-gray-800">
              COMPROBANTE DE PERMISO
            </CardTitle>
          </CardHeader>
          <CardContent className="p-8">
            <form className="space-y-6">
              <div className="grid lg:grid-cols-2 gap-6">
                {/* Left Column */}
                <div className="space-y-6">
                  {/* Fecha Permiso */}
                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-700">
                      Fecha Permiso
                    </label>
                    <div className="relative">
                      <input
                        type="date"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                      <Calendar className="absolute right-5 top-4 h-5 w-5 text-gray-400" />
                    </div>
                  </div>

                  {/* Apellidos y Nombres */}
                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-700">
                      Apellidos y Nombres:
                    </label>
                    <input
                      type="text"
                      placeholder="escriba su nombre"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>

                  {/* Departamento */}
                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-700">
                      Departamento:
                    </label>
                    <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                      <option value="">Tipo de departamento</option>
                      <option value="rh">Recursos Humanos</option>
                      <option value="it">IT</option>
                      <option value="finance">Finanzas</option>
                    </select>
                  </div>
                </div>

                {/* Right Column */}
                <div className="space-y-6">
                  {/* Dia Salida/Regreso */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="block text-sm font-medium text-gray-700">
                        Día Salida
                      </label>
                      <div className="relative">
                        <input
                          type="date"
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        <Calendar className="absolute right-5 top-4 h-5 w-5 text-gray-400" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="block text-sm font-medium text-gray-700">
                        Día de Regreso
                      </label>
                      <div className="relative">
                        <input
                          type="date"
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        <Calendar className="absolute right-5 top-4 h-5 w-5 text-gray-400" />
                      </div>
                    </div>
                  </div>

                  {/* Numero de Horas */}
                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-700">
                      Número de Horas
                    </label>
                    <input
                      type="number"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>

                  {/* Razon */}
                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-700">
                      Razón:
                    </label>
                    <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                      <option value="">Tipo de permiso</option>
                      <option value="medical">Permiso Médico</option>
                      <option value="personal">Permiso Personal</option>
                      <option value="vacation">Vacaciones</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Signatures */}
              <div className="grid grid-cols-3 gap-8 mt-12 pt-8 border-t border-gray-200">
                <div className="text-center">
                  <div className="border-t-2 border-gray-300 pt-2">
                    <p className="text-sm font-medium">Empleado</p>
                  </div>
                </div>
                <div className="text-center">
                  <div className="border-t-2 border-gray-300 pt-2">
                    <p className="text-sm font-medium">Doctor</p>
                  </div>
                </div>
                <div className="text-center">
                  <div className="border-t-2 border-gray-300 pt-2">
                    <p className="text-sm font-medium">G. Talento Humano</p>
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <div className="flex justify-center pt-8">
                <button
                  type="submit"
                  className="flex items-center gap-2 bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
                >
                  <span>Para enviar</span>
                  <Send className="w-5 h-5" />
                </button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </DefaultLayout>
  );
}