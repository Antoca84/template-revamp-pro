import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Crown, Calendar, CheckSquare, Target, Star, Users, Clock, Download, Zap, TrendingUp, BarChart3, Globe } from "lucide-react";

const Index = () => {
  const handlePurchase = () => {
    window.open('https://buy.stripe.com/28EeVc4cubz14KodFC1ZS00', '_blank');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-secondary">
      {/* Header */}
      <header className="container mx-auto px-4 py-6 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Crown className="h-8 w-8 text-accent" />
          <span className="text-xl font-bold text-foreground">SCACCHI MENTALI</span>
        </div>
        <Badge variant="outline" className="bg-accent/10 text-accent border-accent">
          Offerta Limitata
        </Badge>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 text-center">
        <Badge className="mb-6 bg-accent/20 text-accent border-accent" variant="outline">
          🔥 Prodotto Digitale Esclusivo
        </Badge>
        
        <h1 className="text-4xl md:text-6xl font-bold mb-4 text-foreground">
          Scacchiera del Tempo
        </h1>
        
        <p className="text-xl md:text-2xl mb-2 text-muted-foreground">
          La Tua Strategia per una <span className="text-accent font-bold">Vita da Dio</span>
        </p>
        
        <p className="text-lg mb-8 text-muted-foreground max-w-2xl mx-auto">
          Trasforma ogni giornata in una mossa vincente. Il sistema di gestione del tempo 
          che combina la strategia degli scacchi con la crescita personale.
        </p>

        {/* Social Proof */}
        <div className="flex flex-col md:flex-row gap-4 justify-center items-center mb-8">
          <div className="flex items-center gap-2 bg-secondary/50 px-4 py-2 rounded-full">
            <Star className="h-5 w-5 text-accent fill-accent" />
            <span className="font-semibold">4.9/5</span>
            <span className="text-muted-foreground">(2.021 utenti)</span>
          </div>
          <div className="flex items-center gap-2 bg-secondary/50 px-4 py-2 rounded-full">
            <Users className="h-5 w-5 text-accent" />
            <span className="text-muted-foreground">👥 Oltre 2.000 persone hanno già iniziato</span>
          </div>
        </div>

        {/* Pricing Card */}
        <Card className="max-w-md mx-auto mb-8 bg-gradient-to-br from-card to-secondary border-accent/20 shadow-lg">
          <CardContent className="p-6">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Clock className="h-5 w-5 text-accent" />
              <span className="text-accent font-semibold">Offerta Early Adopters</span>
            </div>
            <div className="flex items-center justify-center gap-2 mb-2">
              <span className="text-2xl text-muted-foreground line-through">19,99€</span>
              <span className="text-4xl font-bold text-accent">9,99€</span>
            </div>
            <p className="text-sm text-muted-foreground mb-4">Scade tra pochi giorni!</p>
            <Button 
              onClick={handlePurchase}
              variant="premium" 
              size="lg" 
              className="w-full text-lg py-6"
            >
              🏆 Ottieni la Tua Scacchiera del Tempo →
            </Button>
          </CardContent>
        </Card>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-foreground">
          Cosa Include la Scacchiera del Tempo
        </h2>
        <p className="text-lg text-center mb-12 text-muted-foreground max-w-2xl mx-auto">
          Un sistema completo per trasformare la tua gestione del tempo in una strategia vincente
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card className="bg-card/50 backdrop-blur-sm border-accent/10 hover:border-accent/30 transition-all duration-300 hover:shadow-lg">
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <Target className="h-8 w-8 text-accent" />
                <h3 className="text-xl font-semibold">Sistema "Vita da Dio"</h3>
              </div>
              <p className="text-muted-foreground">
                Pianifica i tuoi obiettivi più importanti con la strategia del Re.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-card/50 backdrop-blur-sm border-accent/10 hover:border-accent/30 transition-all duration-300 hover:shadow-lg">
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <Calendar className="h-8 w-8 text-accent" />
                <h3 className="text-xl font-semibold">Calendario 12 Mesi</h3>
              </div>
              <p className="text-muted-foreground">
                Visione strategica a lungo termine per i tuoi progetti.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-card/50 backdrop-blur-sm border-accent/10 hover:border-accent/30 transition-all duration-300 hover:shadow-lg">
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <CheckSquare className="h-8 w-8 text-accent" />
                <h3 className="text-xl font-semibold">Lista Strategica</h3>
              </div>
              <p className="text-muted-foreground">
                Organizza le tue azioni quotidiane come mosse vincenti.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-card/50 backdrop-blur-sm border-accent/10 hover:border-accent/30 transition-all duration-300 hover:shadow-lg">
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <Crown className="h-8 w-8 text-accent" />
                <h3 className="text-xl font-semibold">Sezioni C1-C12</h3>
              </div>
              <p className="text-muted-foreground">
                12 aree di focus per una crescita completa e bilanciata.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-card/50 backdrop-blur-sm border-accent/10 hover:border-accent/30 transition-all duration-300 hover:shadow-lg">
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <Zap className="h-8 w-8 text-accent" />
                <h3 className="text-xl font-semibold">Moduli H1-H12</h3>
              </div>
              <p className="text-muted-foreground">
                Strategie avanzate per massimizzare la tua produttività.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-card/50 backdrop-blur-sm border-accent/10 hover:border-accent/30 transition-all duration-300 hover:shadow-lg">
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <Download className="h-8 w-8 text-accent" />
                <h3 className="text-xl font-semibold">File Excel Pronto</h3>
              </div>
              <p className="text-muted-foreground">
                Scarica e inizia subito, compatibile con Excel e Google Sheets.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">
          Perché Scegliere la Scacchiera del Tempo
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="bg-accent text-accent-foreground rounded-full p-2 mt-1">
                <TrendingUp className="h-5 w-5" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Strategia Comprovata</h3>
                <p className="text-muted-foreground">
                  Basata sui principi strategici degli scacchi applicati alla vita reale.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-accent text-accent-foreground rounded-full p-2 mt-1">
                <BarChart3 className="h-5 w-5" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Facile da Usare</h3>
                <p className="text-muted-foreground">
                  Interfaccia intuitiva che puoi personalizzare secondo le tue esigenze.
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="bg-accent text-accent-foreground rounded-full p-2 mt-1">
                <Zap className="h-5 w-5" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Risultati Immediati</h3>
                <p className="text-muted-foreground">
                  Inizia a vedere miglioramenti nella tua produttività dal primo giorno.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-accent text-accent-foreground rounded-full p-2 mt-1">
                <Globe className="h-5 w-5" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Supporto Completo</h3>
                <p className="text-muted-foreground">
                  Guida passo-passo e community di supporto per il tuo successo.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-16 text-center">
        <div className="bg-gradient-to-r from-card/50 to-secondary/50 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-accent/20">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            Trasforma la Tua Vita Oggi
          </h2>
          <p className="text-lg mb-8 text-muted-foreground max-w-2xl mx-auto">
            Non aspettare domani per iniziare a vivere strategicamente. 
            La tua "Vita da Dio" inizia con la prima mossa.
          </p>
          
          <div className="space-y-4">
            <Button 
              onClick={handlePurchase}
              variant="premium" 
              size="lg" 
              className="text-xl py-6 px-12"
            >
              🚀 Ottieni Accesso Immediato - Solo 9,99€
            </Button>
            <p className="text-sm text-muted-foreground">
              ⏰ Offerta valida per pochi giorni • Accesso immediato • Garanzia 30 giorni
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="container mx-auto px-4 py-8 text-center border-t border-border">
        <div className="flex items-center justify-center gap-2 mb-4">
          <Crown className="h-6 w-6 text-accent" />
          <span className="text-lg font-semibold text-foreground">Scacchi Mentali</span>
        </div>
        <p className="text-sm text-muted-foreground">
          © 2024 Scacchi Mentali. Trasforma ogni giornata in una strategia vincente.
        </p>
      </footer>
    </div>
  );
};

export default Index;