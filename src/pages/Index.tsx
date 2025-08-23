import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Crown, Calendar, CheckSquare, Target, Star, Users, Clock, Download, Zap, TrendingUp, BarChart3, Globe, Play, Pause } from "lucide-react";

// ============================================================================
// COMPONENTI DI UTILITÀ
// ============================================================================

// Componente per i placeholder delle GIF - facilmente sostituibile con vere GIF
const GifPlaceholder = ({ 
  title, 
  description, 
  className = "" 
}: { 
  title: string; 
  description: string; 
  className?: string; 
}) => (
  <div className={`relative bg-gradient-to-br from-secondary to-secondary/50 rounded-lg p-6 border border-accent/20 overflow-hidden group hover:scale-105 transition-all duration-500 ${className}`}>
    {/* Effetto di movimento/animazione per simulare una GIF */}
    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-accent/10 to-transparent -skew-x-12 transform translate-x-[-100%] group-hover:translate-x-[300%] transition-transform duration-1000"></div>
    
    <div className="relative z-10 text-center">
      <div className="text-4xl mb-3 animate-pulse">{title}</div>
      <p className="text-sm text-muted-foreground">{description}</p>
      
      {/* Indicatore play per mostrare che è una preview video/gif */}
      <div className="absolute top-2 right-2 bg-accent/80 text-background rounded-full p-1 opacity-70 group-hover:opacity-100 transition-opacity">
        <Play className="h-3 w-3" />
      </div>
    </div>
  </div>
);

// Componente per le sezioni con animazioni hover
// MODIFICABILE: Durata animazioni, scale factor, effetti hover
const AnimatedSection = ({ 
  children, 
  className = "",
  style 
}: { 
  children: React.ReactNode; 
  className?: string;
  style?: React.CSSProperties;
}) => (
  <div 
    className={`transform transition-all duration-700 hover:scale-[1.02] ${className}`}
    style={style}
  >
    {children}
  </div>
);

const Index = () => {
  // ============================================================================
  // HANDLERS - Gestione eventi e azioni utente
  // ============================================================================
  
  // Handler per l'acquisto - reindirizza al link Stripe
  // MODIFICABILE: Cambia questo link se cambi il prodotto o la piattaforma di pagamento
  const handlePurchase = () => {
    window.open('https://buy.stripe.com/28EeVc4cubz14KodFC1ZS00', '_blank');
  };

  // Handler per smooth scroll alle sezioni (opzionale)
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-secondary">
      {/* ============================================================================ */}
      {/* HEADER - Barra di navigazione superiore */}
      {/* MODIFICABILE: Logo, nome del brand, badge promozionale */}
      {/* ============================================================================ */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-background/80 border-b border-accent/10">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          {/* Logo e nome brand - MODIFICABILE */}
          <div className="flex items-center gap-2 hover:scale-105 transition-transform cursor-pointer">
            <Crown className="h-6 w-6 md:h-8 md:w-8 text-accent animate-pulse" />
            <span className="text-lg md:text-xl font-bold text-foreground">SCACCHI MENTALI</span>
          </div>
          
          {/* Badge offerta - MODIFICABILE: testo, colori, scadenza */}
          <Badge 
            variant="outline" 
            className="bg-accent/10 text-accent border-accent animate-bounce text-xs md:text-sm px-2 md:px-3"
          >
            Offerta Limitata
          </Badge>
        </div>
      </header>

      {/* ============================================================================ */}
      {/* HERO SECTION - Sezione principale con titolo e CTA */}
      {/* MODIFICABILE: Titolo, sottotitolo, descrizione, badge */}
      {/* ============================================================================ */}
      <section className="container mx-auto px-4 py-8 md:py-16 text-center">
        {/* Badge prodotto esclusivo - MODIFICABILE */}
        <AnimatedSection>
          <Badge className="mb-4 md:mb-6 bg-accent/20 text-accent border-accent animate-fade-in" variant="outline">
            🔥 Prodotto Digitale Esclusivo
          </Badge>
        </AnimatedSection>
        
        {/* Titolo principale - MODIFICABILE */}
        <AnimatedSection className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold mb-4 text-foreground leading-tight">
            Scacchiera del Tempo
          </h1>
        </AnimatedSection>
        
        {/* Sottotitolo con evidenziazione - MODIFICABILE */}
        <AnimatedSection className="animate-fade-in" style={{ animationDelay: '0.4s' }}>
          <p className="text-lg sm:text-xl md:text-2xl mb-2 text-muted-foreground">
            La Tua Strategia per una <span className="text-accent font-bold bg-accent/10 px-2 py-1 rounded">Vita da Dio</span>
          </p>
        </AnimatedSection>
        
        {/* Descrizione dettagliata - MODIFICABILE */}
        <AnimatedSection className="animate-fade-in" style={{ animationDelay: '0.6s' }}>
          <p className="text-base md:text-lg mb-6 md:mb-8 text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Trasforma ogni giornata in una mossa vincente. Il sistema di gestione del tempo 
            che combina la strategia degli scacchi con la crescita personale.
          </p>
        </AnimatedSection>

        {/* ============================================================================ */}
        {/* SOCIAL PROOF - Recensioni e numero utenti */}
        {/* MODIFICABILE: Valutazione, numero recensioni, numero utenti */}
        {/* ============================================================================ */}
        <AnimatedSection className="animate-fade-in" style={{ animationDelay: '0.8s' }}>
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center items-center mb-6 md:mb-8">
            {/* Valutazioni - MODIFICABILE: cambia rating e numero recensioni */}
            <div className="flex items-center gap-2 bg-secondary/50 px-3 md:px-4 py-2 rounded-full hover:bg-secondary/70 transition-colors cursor-pointer transform hover:scale-105 duration-300">
              <Star className="h-4 w-4 md:h-5 md:w-5 text-accent fill-accent animate-pulse" />
              <span className="font-semibold text-sm md:text-base">4.9/5</span>
              <span className="text-muted-foreground text-sm md:text-base">(2.021 utenti)</span>
            </div>
            
            {/* Numero utenti totali - MODIFICABILE */}
            <div className="flex items-center gap-2 bg-secondary/50 px-3 md:px-4 py-2 rounded-full hover:bg-secondary/70 transition-colors cursor-pointer transform hover:scale-105 duration-300">
              <Users className="h-4 w-4 md:h-5 md:w-5 text-accent" />
              <span className="text-muted-foreground text-sm md:text-base">👥 Oltre 2.000 persone hanno già iniziato</span>
            </div>
          </div>
        </AnimatedSection>

        {/* ============================================================================ */}
        {/* PRICING CARD - Card principale con prezzo e CTA */}
        {/* MODIFICABILE: Prezzo originale, prezzo scontato, testo CTA, scadenza */}
        {/* ============================================================================ */}
        <AnimatedSection className="animate-scale-in" style={{ animationDelay: '1s' }}>
          <Card className="max-w-sm md:max-w-md mx-auto mb-6 md:mb-8 bg-gradient-to-br from-card to-secondary border-accent/20 shadow-2xl hover:shadow-accent/20 transition-all duration-500 transform hover:scale-105">
            <CardContent className="p-4 md:p-6">
              {/* Header con timer - MODIFICABILE */}
              <div className="flex items-center justify-center gap-2 mb-4">
                <Clock className="h-4 w-4 md:h-5 md:w-5 text-accent animate-pulse" />
                <span className="text-accent font-semibold text-sm md:text-base">Offerta Early Adopters</span>
              </div>
              
              {/* Prezzi - MODIFICABILE: prezzi, valuta */}
              <div className="flex items-center justify-center gap-2 md:gap-3 mb-2">
                <span className="text-xl md:text-2xl text-muted-foreground line-through">19,99€</span>
                <span className="text-3xl md:text-4xl font-bold text-accent bg-accent/10 px-2 py-1 rounded">9,99€</span>
              </div>
              
              {/* Urgenza - MODIFICABILE: testo scadenza */}
              <p className="text-xs md:text-sm text-muted-foreground mb-4 animate-pulse">Scade tra pochi giorni!</p>
              
              {/* CTA principale - MODIFICABILE: testo, link Stripe */}
              <Button 
                onClick={handlePurchase}
                variant="premium" 
                size="lg" 
                className="w-full text-sm md:text-lg py-4 md:py-6 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-accent/30"
              >
                🏆 Ottieni la Tua Scacchiera del Tempo →
              </Button>
            </CardContent>
          </Card>
        </AnimatedSection>

        {/* ============================================================================ */}
        {/* PREVIEW GIF SECTION - Anteprime del prodotto */}
        {/* MODIFICABILE: Sostituisci con vere GIF o screenshot */}
        {/* ============================================================================ */}
        <AnimatedSection className="animate-fade-in" style={{ animationDelay: '1.2s' }}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto mb-8">
            <GifPlaceholder 
              title="📱" 
              description="Anteprima Mobile - Usa ovunque" 
              className="h-32 md:h-40"
            />
            <GifPlaceholder 
              title="💻" 
              description="Interfaccia Desktop - Completa" 
              className="h-32 md:h-40"
            />
            <GifPlaceholder 
              title="📊" 
              description="Tracking Obiettivi - Automatico" 
              className="h-32 md:h-40"
            />
          </div>
        </AnimatedSection>
      </section>

      {/* WHY Section */}
      <section className="py-16 bg-gradient-to-br from-background to-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="text-6xl mb-4">🤔</div>
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-accent">WHY?</h2>
            <h3 className="text-2xl md:text-3xl font-bold mb-8 text-foreground">
              To-Do List & Routine Tracker
              <br />
              <span className="text-accent">Perché Ti Servono?</span>
            </h3>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="mb-8 bg-accent text-background border-0">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-background text-accent rounded-full px-3 py-1 font-bold">POINT 01</div>
                </div>
                <h3 className="text-2xl font-bold mb-4">Bassa Produttività e Gestione delle Priorità</h3>
                <p className="text-lg leading-relaxed">
                  Hai provato molti metodi ma ti senti ancora sopraffatto? 
                  Senza un sistema chiaro, le tue energie si disperdono e 
                  finisci per procrastinare sui compiti più importanti. 
                  È ora di cambiare approccio.
                </p>
              </CardContent>
            </Card>

            <div className="text-center mb-8">
              <div className="bg-card rounded-2xl p-6 max-w-2xl mx-auto">
                <p className="text-lg text-muted-foreground mb-4">
                  Esempio: Sistema di Priorità Confuse che Usiamo Normalmente
                </p>
                <div className="bg-secondary/50 rounded-lg p-4">
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="text-left space-y-2">
                      <div className="text-red-400">• Email urgenti (ma non importanti)</div>
                      <div className="text-yellow-400">• Meeting spontanei</div>
                      <div className="text-blue-400">• Notifiche social</div>
                      <div className="text-green-400">• Compiti dell'ultimo minuto</div>
                    </div>
                    <div className="text-left space-y-2">
                      <div className="text-muted-foreground">→ Stress continuo</div>
                      <div className="text-muted-foreground">→ Obiettivi rimandati</div>
                      <div className="text-muted-foreground">→ Sensazione di fallimento</div>
                      <div className="text-muted-foreground">→ Giorni che si ripetono</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center mb-8">
              <p className="text-lg text-muted-foreground mb-4">
                Ma con il sistema giusto, puoi trasformare questa confusione in una strategia vincente.
              </p>
            </div>

            <Card className="mb-8 bg-accent text-background border-0">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-background text-accent rounded-full px-3 py-1 font-bold">POINT 02</div>
                </div>
                <h3 className="text-2xl font-bold mb-4">Obiettivi Vaghi & Tracking Inefficace</h3>
                <p className="text-lg leading-relaxed">
                  Sapere cosa vuoi fare è solo metà del lavoro. Il vero successo 
                  arriva quando misuri i progressi e adatti la strategia. 
                  Senza un sistema di tracking, anche gli obiettivi migliori 
                  rimangono solo buone intenzioni.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Problem Identification */}
      <section className="py-16 bg-accent text-background">
        <div className="container mx-auto px-4 text-center">
          <div className="text-6xl mb-6">👤</div>
          <h2 className="text-2xl md:text-3xl font-bold mb-8">
            Studenti, Lavoratori, Imprenditori
            <br />
            <span className="text-4xl">#Gestire le Liste</span>
            <br />
            È Davvero Così Semplice?
          </h2>

          <div className="max-w-2xl mx-auto space-y-4 mb-8">
            <div className="bg-background/20 rounded-full px-6 py-4 text-left">
              <span className="text-background/80">💭</span> "Oggi sono stato davvero produttivo?"
            </div>
            <div className="bg-background/20 rounded-full px-6 py-4 text-left">
              <span className="text-background/80">💭</span> "Perché ho fatto tutto quello che non era importante?"
            </div>
            <div className="bg-background/20 rounded-full px-6 py-4 text-left">
              <span className="text-background/80">💭</span> "La settimana scorsa... cosa ho fatto di concreto?"
            </div>
            <div className="bg-background/20 rounded-full px-6 py-4 text-left">
              <span className="text-background/80">💭</span> "Gestire tutto è davvero così difficile."
            </div>
          </div>

          <div className="text-3xl mb-4">👥</div>
          <p className="text-xl mb-8">
            Ti suona familiare questa gestione del tempo?
          </p>

          <div className="text-4xl mb-4">💡</div>
          <div className="text-3xl font-bold">
            È il momento di provare
            <br />
            <span className="text-4xl">La Scacchiera del Tempo!</span>
          </div>
        </div>
      </section>

      {/* WHAT Section */}
      <section className="py-16 bg-gradient-to-br from-background to-card">
        <div className="container mx-auto px-4 text-center">
          <div className="text-6xl mb-6">👤</div>
          <h2 className="text-3xl md:text-5xl font-bold mb-8 text-accent">WHAT?</h2>
          <h3 className="text-2xl md:text-3xl font-bold mb-12 text-foreground">
            La Scacchiera del Tempo
            <br />
            Cos'è Esattamente? 👀
          </h3>

          <div className="max-w-4xl mx-auto mb-12">
            <Card className="bg-accent text-background border-0 mb-8">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-background text-accent rounded-full px-3 py-1 font-bold">POINT 01</div>
                </div>
                <h3 className="text-2xl font-bold mb-4">
                  Google Spreadsheet Gratuito
                  <br />
                  Pronto, Dove, Quando Vuoi! 📱
                </h3>
                <p className="text-lg leading-relaxed">
                  Non servono app costose o abbonamenti mensili. 
                  Il nostro sistema funziona su Google Spreadsheet: 
                  accessibile ovunque, sempre sincronizzato. 
                  Basta avere Google e sei pronto!
                </p>
              </CardContent>
            </Card>

            <div className="text-center mb-8">
              <div className="bg-background/90 rounded-2xl p-6 border border-accent/20">
                <h4 className="text-lg font-bold mb-4 text-foreground">PC/DESKTOP</h4>
                <div className="bg-secondary/30 rounded-lg p-4 mb-4">
                  <div className="bg-card rounded p-4 h-32 flex items-center justify-center border">
                    <div className="text-center">
                      <div className="text-4xl mb-2">💻</div>
                      <p className="text-sm text-muted-foreground">Interfaccia Desktop Completa</p>
                    </div>
                  </div>
                </div>
                <h4 className="text-lg font-bold mb-4 text-foreground">MOBILE, TABLET, IPAD ANCHE!</h4>
                <div className="flex justify-center gap-4">
                  <div className="bg-card rounded p-4 w-20 h-32 flex flex-col items-center justify-center border">
                    <div className="text-2xl mb-2">📱</div>
                    <p className="text-xs text-muted-foreground">Mobile</p>
                  </div>
                  <div className="bg-card rounded p-4 w-24 h-32 flex flex-col items-center justify-center border">
                    <div className="text-2xl mb-2">📲</div>
                    <p className="text-xs text-muted-foreground">Tablet</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center mb-8">
              <div className="bg-card rounded-2xl p-6 border border-accent/20">
                <div className="text-4xl mb-4">📊</div>
                <h4 className="text-lg font-bold mb-2 text-foreground">
                  Google Spreadsheet Per
                  <br />
                  Modificare, Stampare, Salvare
                </h4>
              </div>
            </div>

            <Card className="bg-accent text-background border-0">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-background text-accent rounded-full px-3 py-1 font-bold">POINT 02</div>
                </div>
                <h3 className="text-2xl font-bold mb-4">
                  Vuoi Impostare Tempo e Obiettivi per
                  <br />
                  12 Mesi? Il Calendario 
                  <br />
                  Habit Tracker è Automatico! 💡
                </h3>
                <p className="text-lg leading-relaxed">
                  La Scacchiera gestisce automaticamente i tuoi obiettivi mensili. 
                  Imposta le tue priorità e gli obiettivi desiderati, 
                  e il calendario di 12 mesi si aggiorna da solo. 
                  Vuoi che tutto questo sia integrato per te!
                </p>
              </CardContent>
            </Card>

            <div className="text-center mt-8">
              <h4 className="text-xl font-bold mb-4 text-foreground">
                Il Tuo Tempo e Obiettivi Impostati
              </h4>
              <p className="text-muted-foreground mb-4">
                Scegli liberamente i tuoi obiettivi dalla settimana/mese preferiti e 
                <br />
                usa il calendario di 12 mesi per creare il miglior habit tracker!
              </p>
              <div className="bg-card rounded-2xl p-6 border border-accent/20">
                <div className="bg-secondary/30 rounded-lg p-4">
                  <div className="text-center text-foreground font-bold mb-2">2025년 1월 - 2025년 12월 캘린더</div>
                  <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(3, 1fr)',
                    gap: '8px',
                    fontSize: '12px'
                  }}>
                    {['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'].map((month, i) => (
                      <div key={month} className="bg-accent text-background p-2 rounded text-center">
                        <div className="font-bold">{month}</div>
                        <div className="text-xs">Goal: {85 + i}%</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-8">
          <div className="text-6xl mb-4">📝</div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            La Gestione delle Priorità, la Mossa Perfetta
            <br />
            È Quella Giusta per Te
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Ma come si distingue dal sistema tradizionale? 
            <br />
            Scopri i risultati concreti e i moduli avanzati.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* FEATURE CARDS - Ogni card rappresenta una funzionalità */}
          {/* MODIFICABILE: Icone, titoli, descrizioni */}
          <AnimatedSection>
            <Card className="bg-card/50 backdrop-blur-sm border-accent/10 hover:border-accent/30 transition-all duration-500 hover:shadow-lg hover:shadow-accent/20 transform hover:scale-105 group">
              <CardContent className="p-4 md:p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Target className="h-6 w-6 md:h-8 md:w-8 text-accent group-hover:animate-pulse transition-all" />
                  <h3 className="text-lg md:text-xl font-semibold">Sistema "Vita da Dio"</h3>
                </div>
                <p className="text-muted-foreground text-sm md:text-base">
                  Pianifica i tuoi obiettivi più importanti con la strategia del Re.
                </p>
                {/* Preview GIF placeholder per questa feature */}
                <div className="mt-4">
                  <GifPlaceholder 
                    title="🎯" 
                    description="Demo: Sistema Vita da Dio" 
                    className="h-20"
                  />
                </div>
              </CardContent>
            </Card>
          </AnimatedSection>

          <AnimatedSection style={{ animationDelay: '0.1s' }}>
            <Card className="bg-card/50 backdrop-blur-sm border-accent/10 hover:border-accent/30 transition-all duration-500 hover:shadow-lg hover:shadow-accent/20 transform hover:scale-105 group">
              <CardContent className="p-4 md:p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Calendar className="h-6 w-6 md:h-8 md:w-8 text-accent group-hover:animate-pulse transition-all" />
                  <h3 className="text-lg md:text-xl font-semibold">Calendario 12 Mesi</h3>
                </div>
                <p className="text-muted-foreground text-sm md:text-base">
                  Visione strategica a lungo termine per i tuoi progetti.
                </p>
                <div className="mt-4">
                  <GifPlaceholder 
                    title="📅" 
                    description="Demo: Calendario 2025" 
                    className="h-20"
                  />
                </div>
              </CardContent>
            </Card>
          </AnimatedSection>

          <AnimatedSection style={{ animationDelay: '0.2s' }}>
            <Card className="bg-card/50 backdrop-blur-sm border-accent/10 hover:border-accent/30 transition-all duration-500 hover:shadow-lg hover:shadow-accent/20 transform hover:scale-105 group">
              <CardContent className="p-4 md:p-6">
                <div className="flex items-center gap-3 mb-4">
                  <CheckSquare className="h-6 w-6 md:h-8 md:w-8 text-accent group-hover:animate-pulse transition-all" />
                  <h3 className="text-lg md:text-xl font-semibold">Lista Strategica</h3>
                </div>
                <p className="text-muted-foreground text-sm md:text-base">
                  Organizza le tue azioni quotidiane come mosse vincenti.
                </p>
                <div className="mt-4">
                  <GifPlaceholder 
                    title="✅" 
                    description="Demo: Liste Strategiche" 
                    className="h-20"
                  />
                </div>
              </CardContent>
            </Card>
          </AnimatedSection>

          <AnimatedSection style={{ animationDelay: '0.3s' }}>
            <Card className="bg-card/50 backdrop-blur-sm border-accent/10 hover:border-accent/30 transition-all duration-500 hover:shadow-lg hover:shadow-accent/20 transform hover:scale-105 group">
              <CardContent className="p-4 md:p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Crown className="h-6 w-6 md:h-8 md:w-8 text-accent group-hover:animate-pulse transition-all" />
                  <h3 className="text-lg md:text-xl font-semibold">Sezioni C1-C12</h3>
                </div>
                <p className="text-muted-foreground text-sm md:text-base">
                  12 aree di focus per una crescita completa e bilanciata.
                </p>
                <div className="mt-4">
                  <GifPlaceholder 
                    title="♔" 
                    description="Demo: 12 Sezioni Focus" 
                    className="h-20"
                  />
                </div>
              </CardContent>
            </Card>
          </AnimatedSection>

          <AnimatedSection style={{ animationDelay: '0.4s' }}>
            <Card className="bg-card/50 backdrop-blur-sm border-accent/10 hover:border-accent/30 transition-all duration-500 hover:shadow-lg hover:shadow-accent/20 transform hover:scale-105 group">
              <CardContent className="p-4 md:p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Zap className="h-6 w-6 md:h-8 md:w-8 text-accent group-hover:animate-pulse transition-all" />
                  <h3 className="text-lg md:text-xl font-semibold">Moduli H1-H12</h3>
                </div>
                <p className="text-muted-foreground text-sm md:text-base">
                  Strategie avanzate per massimizzare la tua produttività.
                </p>
                <div className="mt-4">
                  <GifPlaceholder 
                    title="⚡" 
                    description="Demo: Moduli Avanzati" 
                    className="h-20"
                  />
                </div>
              </CardContent>
            </Card>
          </AnimatedSection>

          <AnimatedSection style={{ animationDelay: '0.5s' }}>
            <Card className="bg-card/50 backdrop-blur-sm border-accent/10 hover:border-accent/30 transition-all duration-500 hover:shadow-lg hover:shadow-accent/20 transform hover:scale-105 group">
              <CardContent className="p-4 md:p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Download className="h-6 w-6 md:h-8 md:w-8 text-accent group-hover:animate-pulse transition-all" />
                  <h3 className="text-lg md:text-xl font-semibold">File Excel Pronto</h3>
                </div>
                <p className="text-muted-foreground text-sm md:text-base">
                  Scarica e inizia subito, compatibile con Excel e Google Sheets.
                </p>
                <div className="mt-4">
                  <GifPlaceholder 
                    title="📥" 
                    description="Demo: Download Immediato" 
                    className="h-20"
                  />
                </div>
              </CardContent>
            </Card>
          </AnimatedSection>

        </div>
      </section>

      {/* Advanced Features */}
      <section className="py-16 bg-gradient-to-br from-secondary to-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Card className="bg-accent text-background border-0 max-w-4xl mx-auto">
              <CardContent className="p-8">
                <div className="flex items-center justify-center gap-3 mb-4">
                  <div className="bg-background text-accent rounded-full px-3 py-1 font-bold">POINT 03</div>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold mb-4">
                  Oltre 15 Habit Tracker + Grafici
                  <br />
                  10 Template Interni per Costruire il Tuo
                </h3>
                <p className="text-lg leading-relaxed">
                  Il Calendario e Habit Tracker hanno oltre 15 tracker automatici per 
                  la tua crescita oraria e controllo degli obiettivi. 
                  È stato creato per essere semplice da usare.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="max-w-4xl mx-auto text-center">
            <h4 className="text-xl font-bold mb-6 text-foreground">
              Tracking Settimanale dei Tuoi Obiettivi
            </h4>
            <div className="bg-card rounded-2xl p-6 border border-accent/20 mb-8">
              <div className="bg-secondary/30 rounded-lg p-4">
                <div className="text-center text-foreground font-bold mb-4">2025년 7월</div>
                <div className="grid grid-cols-7 gap-2 text-xs">
                  <div className="font-bold text-accent">WEEK GOAL</div>
                  <div className="font-bold">SUN</div>
                  <div className="font-bold">MON</div>
                  <div className="font-bold">TUE</div>
                  <div className="font-bold">WED</div>
                  <div className="font-bold">THU</div>
                  <div className="font-bold">FRI</div>
                  
                  {/* Week 1 */}
                  <div className="bg-accent text-background p-2 rounded">82%</div>
                  <div className="p-2">1</div>
                  <div className="p-2">2</div>
                  <div className="p-2">3</div>
                  <div className="p-2">4</div>
                  <div className="p-2">5</div>
                  <div className="p-2">6</div>
                  
                  {/* Week 2 */}
                  <div className="bg-accent text-background p-2 rounded">85%</div>
                  <div className="p-2">7</div>
                  <div className="p-2">8</div>
                  <div className="p-2">9</div>
                  <div className="p-2">10</div>
                  <div className="p-2">11</div>
                  <div className="p-2">12</div>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="bg-card rounded-2xl p-6 border border-accent/20">
                <div className="text-6xl mb-4">📋</div>
                <h4 className="text-lg font-bold mb-2 text-foreground">Prima</h4>
                <p className="text-muted-foreground text-sm">
                  Lista confusa e senza priorità
                  <br />
                  Non sai mai se stai progredendo
                </p>
              </div>
              <div className="bg-accent text-background rounded-2xl p-6">
                <div className="text-6xl mb-4">📊</div>
                <h4 className="text-lg font-bold mb-2">Adesso</h4>
                <p className="text-sm">
                  Sistema strategico con metriche chiare
                  <br />
                  Vedi i progressi in tempo reale
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HOW Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 text-center">
          <div className="text-6xl mb-6">👤</div>
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-foreground">
            "Ora che ho la gestione delle liste, come faccio...
            <br />
            Ma le liste sono solo all'inizio!"
          </h2>

          <div className="max-w-2xl mx-auto mb-12">
            <p className="text-lg text-muted-foreground mb-8">
              Per raggiungere i tuoi obiettivi a lungo termine
              <br />
              hai bisogno di un sistema di gestione completo.
            </p>
            
            <div className="bg-accent text-background rounded-2xl p-6 mb-8">
              <h3 className="text-2xl font-bold mb-4">
                Il Habit Tracker è pronto in un attimo!
                <br />
                È tutto preparato per te!
              </h3>
            </div>
          </div>

          <div className="text-6xl mb-6">👤</div>
          <h2 className="text-3xl md:text-5xl font-bold mb-8 text-accent">HOW?</h2>
          <h3 className="text-2xl md:text-3xl font-bold mb-12 text-foreground">
            Oggi la gestione delle priorità è diventata complicata
            <br />
            <span className="text-muted-foreground">👀</span> Come faccio a non perdere il focus e 
            <br />
            continuare senza fermarmi?
          </h3>

          <div className="max-w-2xl mx-auto mb-12">
            <p className="text-lg text-muted-foreground mb-8">
              Come faccio a gestire tutto questo?
              <br />
              Con l'Habit Tracker
              <br />
              <span className="text-accent font-bold">integrato con la Scacchiera del Tempo</span>
              <br />
              Puoi iniziare subito!
            </p>
          </div>
        </div>
      </section>

      {/* POINT 04 - Final Benefits */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <div className="bg-background text-foreground p-8 mb-8">
              <p className="text-lg text-muted-foreground mb-4">
                La Scacchiera del Tempo rende semplice ciò che prima era complesso.
                <br />
                Non è solo un'analisi motivazionale del momento.
              </p>
              <p className="text-lg text-muted-foreground">
                Ti permette di vedere ogni settimana, mese, giornata in cui
                <br />
                puoi verificare i tuoi progressi step by step.
              </p>
            </div>

            <Card className="bg-accent text-background border-0 max-w-4xl mx-auto mb-8">
              <CardContent className="p-8">
                <div className="flex items-center justify-center gap-3 mb-4">
                  <div className="bg-background text-accent rounded-full px-3 py-1 font-bold">POINT 04</div>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold mb-4">
                  Un Solo Obiettivo alla Volta! 😊
                  <br />
                  I 12 Mesi di Obiettivi e Pianificazione Hanno Senso
                  <br />
                  Solo se Li Fai Uno alla Volta Sistematicamente!
                </h3>
                <p className="text-lg leading-relaxed">
                  Il Calendario e l'Habit Tracker lavorano insieme
                  per aiutarti a vedere i progressi reali per tutto l'anno.
                </p>
              </CardContent>
            </Card>

            <div className="text-center mb-8">
              <div className="bg-card rounded-2xl p-6 border border-accent/20">
                <div className="bg-secondary/30 rounded-lg p-4">
                  <div className="text-center text-foreground font-bold mb-4">2025년 1월 - 2025년 12월 캘린더</div>
                  <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(4, 1fr)',
                    gap: '8px',
                    fontSize: '12px'
                  }}>
                    {['Q1', 'Q2', 'Q3', 'Q4'].map((quarter, i) => (
                      <div key={quarter} className="space-y-2">
                        <div className="bg-accent text-background p-3 rounded font-bold">
                          {quarter}
                        </div>
                        <div className="bg-accent/20 p-2 rounded text-xs">
                          Obiettivo: {['Salute', 'Carriera', 'Relazioni', 'Crescita'][i]}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="bg-card rounded-2xl p-6 border border-accent/20">
                <div className="text-6xl mb-4">📋</div>
                <h4 className="text-lg font-bold mb-2 text-foreground">Prima</h4>
                <p className="text-muted-foreground text-sm">
                  Piani vaghi, senza tracking
                  <br />
                  Non sai se stai davvero migliorando
                </p>
              </div>
              <div className="bg-accent text-background rounded-2xl p-6">
                <div className="text-6xl mb-4">📊</div>
                <h4 className="text-lg font-bold mb-2">Con la Scacchiera</h4>
                <p className="text-sm">
                  Sistema integrato e automatico
                  <br />
                  Vedi ogni progresso, ogni giorno
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final Setup Section */}
      <section className="py-16 bg-accent text-background">
        <div className="container mx-auto px-4 text-center">
          <Card className="bg-background text-foreground border-0 max-w-4xl mx-auto mb-8">
            <CardContent className="p-8">
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="bg-accent text-background rounded-full px-3 py-1 font-bold">POINT 01</div>
              </div>
              <h3 className="text-2xl font-bold mb-4">
                Definisci Obiettivi e Categorie, poi
                <br />
                Inizia la Gestione delle Priorità Questo Mese! ✅
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Il Calendario funziona insieme ai tuoi obiettivi mensili e annuali.
                Quando definisci le categorie che ti interessano,
                l'Habit Tracker di 12 mesi è pronto!
              </p>
            </CardContent>
          </Card>

          <div className="mb-8">
            <h4 className="text-2xl font-bold mb-4">Vuoi Definire le Categorie dei Tuoi Obiettivi</h4>
            <div className="bg-background/90 rounded-2xl p-6 text-foreground max-w-2xl mx-auto">
              <div className="bg-secondary/30 rounded-lg p-4">
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="space-y-2">
                    <div className="bg-accent text-background p-2 rounded">🏋️ Obiettivi Fisici</div>
                    <div className="bg-blue-500 text-white p-2 rounded">💼 Crescita Professionale</div>
                    <div className="bg-green-500 text-white p-2 rounded">❤️ Relazioni</div>
                  </div>
                  <div className="space-y-2">
                    <div className="bg-purple-500 text-white p-2 rounded">🧠 Apprendimento</div>
                    <div className="bg-orange-500 text-white p-2 rounded">💰 Finanze</div>
                    <div className="bg-pink-500 text-white p-2 rounded">🎨 Creatività</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mb-8">
            <h4 className="text-2xl font-bold mb-4">Seleziona le Tue Priorità e Crea Habit Tracker!</h4>
            <div className="bg-background/90 rounded-2xl p-6 text-foreground max-w-3xl mx-auto">
              <div className="bg-secondary/30 rounded-lg p-4">
                <div className="text-center text-foreground font-bold mb-4">2025년 1월</div>
                <div className="grid grid-cols-1 gap-2 text-sm">
                  <div className="bg-accent/20 p-3 rounded flex justify-between items-center">
                    <span>🏃‍♂️ Corri 3 volte a settimana</span>
                    <div className="flex gap-1">
                      {[1,2,3,4,5].map(i => (
                        <div key={i} className={`w-4 h-4 rounded ${i <= 3 ? 'bg-accent' : 'bg-gray-300'}`}></div>
                      ))}
                    </div>
                  </div>
                  <div className="bg-accent/20 p-3 rounded flex justify-between items-center">
                    <span>📚 Leggi 30 minuti al giorno</span>
                    <div className="flex gap-1">
                      {[1,2,3,4,5].map(i => (
                        <div key={i} className={`w-4 h-4 rounded ${i <= 4 ? 'bg-accent' : 'bg-gray-300'}`}></div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
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
          © 2025 Scacchi Mentali. Trasforma ogni giornata in una strategia vincente.
        </p>
      </footer>
    </div>
  );
};

export default Index;