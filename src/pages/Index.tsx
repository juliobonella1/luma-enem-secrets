import { Header } from "@/components/Header";
import { EbookForm } from "@/components/EbookForm";
import { TestimonialCard } from "@/components/TestimonialCard";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckCircle, Download, Users, Trophy, Clock, Star } from "lucide-react";
import heroImage from "@/assets/hero-enem.jpg";
import ebookCover from "@/assets/ebook-cover.png";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-hero overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative container mx-auto px-4 py-12 lg:py-20">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="text-white order-2 lg:order-1">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 lg:mb-6 leading-tight">
                O que não te revelaram sobre o{" "}
                <span className="text-secondary">ENEM</span>
              </h1>
              <p className="text-lg sm:text-xl lg:text-2xl mb-6 lg:mb-8 text-white/90 leading-relaxed">
                Descubra os segredos que os melhores estudantes usam para conseguir notas altas no ENEM
              </p>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 sm:p-6 mb-6 lg:mb-8">
                <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">🎯 Neste e-book você vai descobrir:</h3>
                <ul className="space-y-2 text-sm sm:text-base">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-secondary" />
                    <span>Estratégias que nunca te contaram</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-secondary" />
                    <span>Como organizar seus estudos de forma eficiente</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-secondary" />
                    <span>Técnicas de resolução de questões</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-secondary" />
                    <span>Mindset dos aprovados</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="flex justify-center order-1 lg:order-2">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 sm:p-6 lg:p-8 w-full max-w-md mx-auto">
                <div className="text-center mb-4 sm:mb-6">
                  <img 
                    src={ebookCover} 
                    alt="E-book Cover" 
                    className="w-32 h-42 sm:w-40 sm:h-52 lg:w-48 lg:h-64 mx-auto mb-3 sm:mb-4 rounded-lg shadow-lg object-cover" 
                  />
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
                    Download Gratuito
                  </h3>
                  <p className="text-sm sm:text-base text-white/80">
                    Preencha os dados abaixo e receba o e-book no seu email
                  </p>
                </div>
                <EbookForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4">
              Por que este e-book é diferente?
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto px-4">
              Criado pela Luma Ensino, com base em nossa experiência de mais de 105.000 aulas online
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            <Card className="p-6 lg:p-8 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4">Experiência Comprovada</h3>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                Mais de 105.000 aulas ministradas e centenas de aprovações em universidades públicas
              </p>
            </Card>
            
            <Card className="p-6 lg:p-8 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-gradient-secondary rounded-full flex items-center justify-center mx-auto mb-6">
                <Trophy className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4">Métodos Exclusivos</h3>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                Técnicas desenvolvidas especificamente para o ENEM, testadas e aprovadas por nossos alunos
              </p>
            </Card>
            
            <Card className="p-6 lg:p-8 text-center hover:shadow-lg transition-shadow sm:col-span-2 lg:col-span-1">
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6">
                <Clock className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4">Resultados Rápidos</h3>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                Estratégias que você pode aplicar imediatamente e ver resultados já nos próximos simulados
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4">
              O que nossos alunos dizem
            </h2>
            <div className="flex items-center justify-center gap-1 mb-4 sm:mb-6">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 sm:w-6 sm:h-6 fill-secondary text-secondary" />
              ))}
              <span className="ml-2 text-base sm:text-lg font-semibold">4.9/5 - Mais de 1000 avaliações</span>
            </div>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            <TestimonialCard
              name="Ana Carolina"
              role="Aprovada em Medicina - UFMG"
              content="As estratégias da Luma Ensino foram fundamentais para minha aprovação. O material é objetivo e realmente funciona!"
            />
            <TestimonialCard
              name="Pedro Silva"
              role="Aprovado em Engenharia - USP"
              content="Consegui aumentar minha nota em 200 pontos em apenas 3 meses seguindo os métodos apresentados."
            />
            <TestimonialCard
              name="Mariana Costa"
              role="Aprovada em Direito - UFRJ"
              content="O e-book revelou técnicas que nenhum cursinho havia me ensinado. Recomendo para todos os vestibulandos!"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-hero">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto text-white">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6">
              Não perca esta oportunidade!
            </h2>
            <p className="text-lg sm:text-xl mb-6 sm:mb-8 px-4">
              Download 100% gratuito. Sem pegadinhas, sem vendas escondidas.
            </p>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 sm:p-6 lg:p-8 inline-block max-w-md mx-auto w-full">
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-4">
                <Download className="w-6 h-6 sm:w-8 sm:h-8 text-secondary" />
                <span className="text-xl sm:text-2xl font-bold">ACESSO IMEDIATO</span>
              </div>
              <p className="mb-4 sm:mb-6 text-sm sm:text-base px-2">
                Faça o download agora e comece a estudar com as estratégias dos aprovados
              </p>
              <Button 
                variant="hero" 
                size="lg" 
                className="text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 h-auto w-full sm:w-auto"
                onClick={() => document.querySelector('form')?.scrollIntoView({ behavior: 'smooth' })}
              >
                QUERO MEU E-BOOK GRATUITO
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-8 sm:py-12">
        <div className="container mx-auto px-4 text-center">
          <p className="text-base sm:text-lg mb-3 sm:mb-4 px-4">
            © 2024 Luma Ensino - Todos os direitos reservados
          </p>
          <p className="text-primary-foreground/80 text-sm sm:text-base px-4">
            Facilitamos sua jornada educativa com aulas online personalizadas
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
