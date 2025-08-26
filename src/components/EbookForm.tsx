import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";

export function EbookForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      toast({
        title: "Sucesso!",
        description: "E-book enviado para seu email. Verifique sua caixa de entrada.",
      });
      setFormData({ name: "", email: "", phone: "" });
    } catch (error) {
      toast({
        title: "Erro",
        description: "Algo deu errado. Tente novamente.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 w-full max-w-md">
      <div>
        <Input
          type="text"
          name="name"
          placeholder="Seu nome completo"
          value={formData.name}
          onChange={handleChange}
          required
          className="h-12"
        />
      </div>
      <div>
        <Input
          type="email"
          name="email"
          placeholder="Seu melhor email"
          value={formData.email}
          onChange={handleChange}
          required
          className="h-12"
        />
      </div>
      <div>
        <Input
          type="tel"
          name="phone"
          placeholder="Seu WhatsApp (opcional)"
          value={formData.phone}
          onChange={handleChange}
          className="h-12"
        />
      </div>
      <Button
        type="submit"
        variant="hero"
        size="lg"
        disabled={isSubmitting}
        className="w-full h-12"
      >
        {isSubmitting ? "Enviando..." : "BAIXAR E-BOOK GRATUITO"}
      </Button>
      <p className="text-xs text-muted-foreground text-center">
        Ao clicar no botão, você concorda em receber comunicações da Luma Ensino.
      </p>
    </form>
  );
}