"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MessageCircle, FileText, Bell, Users, Zap, CheckCircle, ArrowRight } from "lucide-react"

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="px-4 py-16 md:py-24 max-w-4xl mx-auto text-center">
        <Badge variant="secondary" className="mb-6 text-sm font-medium">
          🇦🇷 Lanzamiento en Argentina
        </Badge>

        <h1 className="text-4xl md:text-6xl font-bold text-balance mb-6 text-foreground">
          Convierte cada mensaje de WhatsApp en un pedido o registro en <span className="text-primary">segundos</span>
        </h1>

        <p className="text-xl md:text-2xl text-muted-foreground mb-8 text-pretty max-w-3xl mx-auto">
          Una app pensada para vendedores y profesionales en Argentina que trabajan por WhatsApp.
        </p>

        <Button 
          size="lg" 
          className="text-lg px-8 py-6 bg-accent hover:bg-accent/90 text-accent-foreground"
          onClick={() => window.open('https://forms.gle/du29vULq3tTBVLKq7', '_blank')}
        >
          Quiero ser tester gratis
          <ArrowRight className="ml-2 h-5 w-5" />
        </Button>
      </section>

      {/* Problem Section */}
      <section className="px-4 py-16 bg-muted/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">¿Te pasa que...?</h2>

          <div className="grid md:grid-cols-3 gap-6">
            <Card className="text-center p-6">
              <CardContent className="pt-6">
                <MessageCircle className="h-12 w-12 text-destructive mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">Los pedidos quedan perdidos en el chat</h3>
                <p className="text-muted-foreground">Entre tantos mensajes, se te escapan pedidos importantes</p>
              </CardContent>
            </Card>

            <Card className="text-center p-6">
              <CardContent className="pt-6">
                <FileText className="h-12 w-12 text-destructive mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">Anotás todo a mano y perdés tiempo</h3>
                <p className="text-muted-foreground">Copiar datos manualmente te quita tiempo valioso</p>
              </CardContent>
            </Card>

            <Card className="text-center p-6">
              <CardContent className="pt-6">
                <Bell className="h-12 w-12 text-destructive mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">Te olvidás de enviar recordatorios</h3>
                <p className="text-muted-foreground">Sin sistema, se te pasan fechas y confirmaciones</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">Con nuestra app podés...</h2>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-6">
              <CardContent className="pt-6">
                <Zap className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-3">Registrar pedidos en 2 toques desde WhatsApp</h3>
                <p className="text-muted-foreground">Pasá cualquier mensaje a un pedido organizado al instante</p>
              </CardContent>
            </Card>

            <Card className="p-6">
              <CardContent className="pt-6">
                <MessageCircle className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-3">Generar un mensaje listo para enviar al cliente</h3>
                <p className="text-muted-foreground">
                  Sin que tu cliente instale nada, recibe confirmaciones profesionales
                </p>
              </CardContent>
            </Card>

            <Card className="p-6">
              <CardContent className="pt-6">
                <FileText className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-3">Tener historial simple de pedidos y reclamos</h3>
                <p className="text-muted-foreground">Todo organizado en un lugar, fácil de encontrar y revisar</p>
              </CardContent>
            </Card>

            <Card className="p-6">
              <CardContent className="pt-6">
                <Bell className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-3">Recibir recordatorios básicos</h3>
                <p className="text-muted-foreground">Para no olvidarte de nada importante nunca más</p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Button 
              size="lg" 
              className="text-lg px-8 py-6 bg-primary hover:bg-primary/90"
              onClick={() => window.open('https://forms.gle/du29vULq3tTBVLKq7', '_blank')}
            >
              Anotate al piloto gratis
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* How it Works Section */}
      <section className="px-4 py-16 bg-muted/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">Cómo funciona</h2>

          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="bg-primary text-primary-foreground rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="font-semibold mb-2">Recibís un mensaje en WhatsApp</h3>
              <p className="text-sm text-muted-foreground">Tu cliente te escribe como siempre</p>
            </div>

            <div className="text-center">
              <div className="bg-primary text-primary-foreground rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="font-semibold mb-2">Lo pasás a la app en 2 toques</h3>
              <p className="text-sm text-muted-foreground">Compartís el mensaje directo a nuestra app</p>
            </div>

            <div className="text-center">
              <div className="bg-primary text-primary-foreground rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="font-semibold mb-2">La app guarda el registro</h3>
              <p className="text-sm text-muted-foreground">Y te arma un mensaje para tu cliente</p>
            </div>

            <div className="text-center">
              <div className="bg-primary text-primary-foreground rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold mx-auto mb-4">
                4
              </div>
              <h3 className="font-semibold mb-2">Seguís todo en un historial simple</h3>
              <p className="text-sm text-muted-foreground">Organizás y controlás todos tus pedidos</p>
            </div>
          </div>
        </div>
      </section>

      {/* Target Audience Section */}
      <section className="px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">Para quién es</h2>

          <div className="grid md:grid-cols-2 gap-6">
            <Card className="p-6">
              <CardContent className="pt-6 flex items-start space-x-4">
                <Users className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold mb-2">Vendedores independientes</h3>
                  <p className="text-muted-foreground">
                    Que manejan pedidos por WhatsApp y necesitan organizarse mejor
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="p-6">
              <CardContent className="pt-6 flex items-start space-x-4">
                <FileText className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold mb-2">Profes que dan clases/talleres</h3>
                  <p className="text-muted-foreground">Para gestionar inscripciones y comunicación con alumnos</p>
                </div>
              </CardContent>
            </Card>

            <Card className="p-6">
              <CardContent className="pt-6 flex items-start space-x-4">
                <Zap className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold mb-2">Técnicos y servicios postventa</h3>
                  <p className="text-muted-foreground">Que necesitan llevar registro de reclamos y seguimientos</p>
                </div>
              </CardContent>
            </Card>

            <Card className="p-6">
              <CardContent className="pt-6 flex items-start space-x-4">
                <MessageCircle className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold mb-2">Cualquier persona que atiende por WhatsApp</h3>
                  <p className="text-muted-foreground">Y quiere profesionalizar su comunicación con clientes</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="px-4 py-16 bg-gradient-to-r from-primary/10 to-accent/10">
        <div className="max-w-4xl mx-auto text-center">
          <Badge variant="secondary" className="mb-6 text-sm font-medium">
            🚀 Oportunidad limitada
          </Badge>

          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground text-balance">
            Estamos lanzando en Argentina y buscamos <span className="text-accent">100 testers iniciales</span>
          </h2>

          <p className="text-xl text-muted-foreground mb-8 text-pretty max-w-3xl mx-auto">
            Si trabajás por WhatsApp, sumate gratis y ayudanos a construir la herramienta que te va a ahorrar horas de
            trabajo.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <div className="flex items-center text-sm text-muted-foreground">
              <CheckCircle className="h-4 w-4 text-primary mr-2" />
              Acceso gratuito durante el piloto
            </div>
            <div className="flex items-center text-sm text-muted-foreground">
              <CheckCircle className="h-4 w-4 text-primary mr-2" />
              Influenciá el desarrollo del producto
            </div>
            <div className="flex items-center text-sm text-muted-foreground">
              <CheckCircle className="h-4 w-4 text-primary mr-2" />
              Soporte directo del equipo
            </div>
          </div>

          <Button 
            size="lg" 
            className="text-lg px-12 py-6 bg-accent hover:bg-accent/90 text-accent-foreground"
            onClick={() => window.open('https://forms.gle/du29vULq3tTBVLKq7', '_blank')}
          >
            Quiero ser tester gratis
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>

          <p className="text-sm text-muted-foreground mt-4">
            Solo 100 lugares disponibles • Sin compromiso • Cancelás cuando quieras
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-4 py-8 border-t border-border">
        <div className="max-w-4xl mx-auto text-center text-sm text-muted-foreground">
          <p>© 2024 WhatsApp Business Helper • Hecho en Argentina 🇦🇷</p>
        </div>
      </footer>
    </div>
  )
}
