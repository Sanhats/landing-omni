"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MessageCircle, FileText, Bell, Users, Zap, CheckCircle, ArrowRight } from "lucide-react"

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      {/* Hero Section */}
      <section className="px-4 py-20 md:py-32 max-w-5xl mx-auto text-center relative">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-green-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse delay-1000"></div>
        </div>

        <Badge
          variant="secondary"
          className="mb-8 text-sm font-semibold px-4 py-2 bg-green-100 text-green-800 border-green-200 shadow-sm"
        >
          🇦🇷 Lanzamiento en Argentina
        </Badge>

        <h1 className="text-5xl md:text-7xl font-bold text-balance mb-8 text-slate-900 leading-tight">
          Convierte cada mensaje de WhatsApp en un pedido o registro en{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-blue-600">segundos</span>
        </h1>

        <p className="text-xl md:text-2xl text-slate-600 mb-12 text-pretty max-w-4xl mx-auto leading-relaxed font-medium">
          Una app pensada para vendedores y profesionales en Argentina que trabajan por WhatsApp.
        </p>

        <Button
          size="lg"
          className="text-lg px-12 py-7 bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-200 rounded-xl font-semibold"
          onClick={() => window.open("https://forms.gle/du29vULq3tTBVLKq7", "_blank")}
        >
          Quiero ser tester gratis
          <ArrowRight className="ml-3 h-5 w-5" />
        </Button>
      </section>

      {/* Problem Section */}
      <section className="px-4 py-20 bg-gradient-to-r from-red-50 to-orange-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-slate-900">¿Te pasa que...?</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-orange-500 mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center p-8 border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 bg-white/80 backdrop-blur-sm">
              <CardContent className="pt-8">
                <div className="bg-red-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                  <MessageCircle className="h-10 w-10 text-red-600" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-slate-900">Los pedidos quedan perdidos en el chat</h3>
                <p className="text-slate-600 leading-relaxed">
                  Entre tantos mensajes, se te escapan pedidos importantes
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-8 border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 bg-white/80 backdrop-blur-sm">
              <CardContent className="pt-8">
                <div className="bg-red-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                  <FileText className="h-10 w-10 text-red-600" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-slate-900">Anotás todo a mano y perdés tiempo</h3>
                <p className="text-slate-600 leading-relaxed">Copiar datos manualmente te quita tiempo valioso</p>
              </CardContent>
            </Card>

            <Card className="text-center p-8 border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 bg-white/80 backdrop-blur-sm">
              <CardContent className="pt-8">
                <div className="bg-red-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                  <Bell className="h-10 w-10 text-red-600" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-slate-900">Te olvidás de enviar recordatorios</h3>
                <p className="text-slate-600 leading-relaxed">Sin sistema, se te pasan fechas y confirmaciones</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="px-4 py-20 bg-gradient-to-br from-green-50 via-white to-blue-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-slate-900">Con nuestra app podés...</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-blue-500 mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-8 border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 bg-white/90 backdrop-blur-sm">
              <CardContent className="pt-8">
                <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                  <Zap className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-slate-900">Registrar pedidos en 2 toques desde WhatsApp</h3>
                <p className="text-slate-600 leading-relaxed">
                  Pasá cualquier mensaje a un pedido organizado al instante
                </p>
              </CardContent>
            </Card>

            <Card className="p-8 border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 bg-white/90 backdrop-blur-sm">
              <CardContent className="pt-8">
                <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                  <MessageCircle className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-slate-900">
                  Generar un mensaje listo para enviar al cliente
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  Sin que tu cliente instale nada, recibe confirmaciones profesionales
                </p>
              </CardContent>
            </Card>

            <Card className="p-8 border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 bg-white/90 backdrop-blur-sm">
              <CardContent className="pt-8">
                <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                  <FileText className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-slate-900">Tener historial simple de pedidos y reclamos</h3>
                <p className="text-slate-600 leading-relaxed">
                  Todo organizado en un lugar, fácil de encontrar y revisar
                </p>
              </CardContent>
            </Card>

            <Card className="p-8 border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 bg-white/90 backdrop-blur-sm">
              <CardContent className="pt-8">
                <div className="bg-orange-100 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                  <Bell className="h-8 w-8 text-orange-600" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-slate-900">Recibir recordatorios básicos</h3>
                <p className="text-slate-600 leading-relaxed">Para no olvidarte de nada importante nunca más</p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-16">
            <Button
              size="lg"
              className="text-lg px-12 py-7 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-200 rounded-xl font-semibold"
              onClick={() => window.open("https://forms.gle/du29vULq3tTBVLKq7", "_blank")}
            >
              Anotate al piloto gratis
              <ArrowRight className="ml-3 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* How it Works Section */}
      <section className="px-4 py-20 bg-gradient-to-r from-slate-100 to-gray-100">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-slate-900">Cómo funciona</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-slate-500 to-gray-500 mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-gradient-to-r from-green-500 to-green-600 text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mx-auto mb-6 shadow-lg">
                1
              </div>
              <h3 className="font-bold mb-3 text-slate-900 text-lg">Recibís un mensaje en WhatsApp</h3>
              <p className="text-slate-600 leading-relaxed">Tu cliente te escribe como siempre</p>
            </div>

            <div className="text-center">
              <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mx-auto mb-6 shadow-lg">
                2
              </div>
              <h3 className="font-bold mb-3 text-slate-900 text-lg">Lo pasás a la app en 2 toques</h3>
              <p className="text-slate-600 leading-relaxed">Compartís el mensaje directo a nuestra app</p>
            </div>

            <div className="text-center">
              <div className="bg-gradient-to-r from-purple-500 to-purple-600 text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mx-auto mb-6 shadow-lg">
                3
              </div>
              <h3 className="font-bold mb-3 text-slate-900 text-lg">La app guarda el registro</h3>
              <p className="text-slate-600 leading-relaxed">Y te arma un mensaje para tu cliente</p>
            </div>

            <div className="text-center">
              <div className="bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mx-auto mb-6 shadow-lg">
                4
              </div>
              <h3 className="font-bold mb-3 text-slate-900 text-lg">Seguís todo en un historial simple</h3>
              <p className="text-slate-600 leading-relaxed">Organizás y controlás todos tus pedidos</p>
            </div>
          </div>
        </div>
      </section>

      {/* Target Audience Section */}
      <section className="px-4 py-20 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-slate-900">Para quién es</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-8 border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 bg-gradient-to-br from-white to-slate-50">
              <CardContent className="pt-8 flex items-start space-x-6">
                <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center flex-shrink-0">
                  <Users className="h-8 w-8 text-green-600" />
                </div>
                <div>
                  <h3 className="font-bold mb-3 text-slate-900 text-lg">Vendedores independientes</h3>
                  <p className="text-slate-600 leading-relaxed">
                    Que manejan pedidos por WhatsApp y necesitan organizarse mejor
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="p-8 border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 bg-gradient-to-br from-white to-slate-50">
              <CardContent className="pt-8 flex items-start space-x-6">
                <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center flex-shrink-0">
                  <FileText className="h-8 w-8 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-bold mb-3 text-slate-900 text-lg">Profes que dan clases/talleres</h3>
                  <p className="text-slate-600 leading-relaxed">
                    Para gestionar inscripciones y comunicación con alumnos
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="p-8 border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 bg-gradient-to-br from-white to-slate-50">
              <CardContent className="pt-8 flex items-start space-x-6">
                <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center flex-shrink-0">
                  <Zap className="h-8 w-8 text-purple-600" />
                </div>
                <div>
                  <h3 className="font-bold mb-3 text-slate-900 text-lg">Técnicos y servicios postventa</h3>
                  <p className="text-slate-600 leading-relaxed">
                    Que necesitan llevar registro de reclamos y seguimientos
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="p-8 border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 bg-gradient-to-br from-white to-slate-50">
              <CardContent className="pt-8 flex items-start space-x-6">
                <div className="bg-orange-100 rounded-full w-16 h-16 flex items-center justify-center flex-shrink-0">
                  <MessageCircle className="h-8 w-8 text-orange-600" />
                </div>
                <div>
                  <h3 className="font-bold mb-3 text-slate-900 text-lg">Cualquier persona que atiende por WhatsApp</h3>
                  <p className="text-slate-600 leading-relaxed">
                    Y quiere profesionalizar su comunicación con clientes
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="px-4 py-20 bg-gradient-to-br from-green-600 via-green-700 to-blue-700 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full blur-xl"></div>
          <div className="absolute top-40 right-20 w-24 h-24 bg-white/10 rounded-full blur-lg"></div>
          <div className="absolute bottom-20 left-1/4 w-40 h-40 bg-white/5 rounded-full blur-2xl"></div>
          <div className="absolute bottom-10 right-10 w-20 h-20 bg-white/10 rounded-full blur-lg"></div>
        </div>

        <div className="max-w-5xl mx-auto text-center relative z-10">
          <Badge
            variant="secondary"
            className="mb-8 text-sm font-semibold px-4 py-2 bg-white/20 text-white border-white/30 shadow-sm backdrop-blur-sm"
          >
            🚀 Oportunidad limitada
          </Badge>

          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white text-balance leading-tight">
            Estamos lanzando en Argentina y buscamos{" "}
            <span className="text-yellow-300 drop-shadow-lg">100 testers iniciales</span>
          </h2>

          <p className="text-xl text-green-100 mb-12 text-pretty max-w-4xl mx-auto leading-relaxed">
            Si trabajás por WhatsApp, sumate gratis y ayudanos a construir la herramienta que te va a ahorrar horas de
            trabajo.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
            <div className="flex items-center text-green-100 bg-white/10 px-4 py-2 rounded-full backdrop-blur-sm">
              <CheckCircle className="h-5 w-5 text-yellow-300 mr-3" />
              <span className="font-medium">Acceso gratuito durante el piloto</span>
            </div>
            <div className="flex items-center text-green-100 bg-white/10 px-4 py-2 rounded-full backdrop-blur-sm">
              <CheckCircle className="h-5 w-5 text-yellow-300 mr-3" />
              <span className="font-medium">Influenciá el desarrollo del producto</span>
            </div>
            <div className="flex items-center text-green-100 bg-white/10 px-4 py-2 rounded-full backdrop-blur-sm">
              <CheckCircle className="h-5 w-5 text-yellow-300 mr-3" />
              <span className="font-medium">Soporte directo del equipo</span>
            </div>
          </div>

          <Button
            size="lg"
            className="text-xl px-16 py-8 bg-white text-green-700 hover:bg-gray-100 shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-200 rounded-2xl font-bold"
            onClick={() => window.open("https://forms.gle/du29vULq3tTBVLKq7", "_blank")}
          >
            Quiero ser tester gratis
            <ArrowRight className="ml-4 h-6 w-6" />
          </Button>

          <p className="text-green-200 mt-6 font-medium">
            Solo 100 lugares disponibles • Sin compromiso • Cancelás cuando quieras
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-4 py-12 bg-slate-900 border-t border-slate-800">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-slate-400 font-medium">© 2024 WhatsApp Business Helper • Hecho en Argentina 🇦🇷</p>
        </div>
      </footer>
    </div>
  )
}
