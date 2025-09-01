import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import axios, { Axios } from "axios";

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
      await axios.post(
        "https://n8n-luma-n8n-teste.5ucjhf.easypanel.host/webhook/ec176c96-bcee-4546-8535-dd3fd5793529",
        formData
      );
      toast({
        title: "Sucesso!",
        description:
          "E-book enviado para seu email. Verifique sua caixa de entrada.",
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
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-3 sm:space-y-4 w-full max-w-xs sm:max-w-md"
    >
      <div>
        <Input
          type="text"
          name="name"
          placeholder="Seu nome completo"
          value={formData.name}
          onChange={handleChange}
          required
          className="h-10 sm:h-11 md:h-12 text-sm sm:text-base bg-white/90 border-white/20 text-gray-900 placeholder:text-gray-600 focus:bg-white"
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
          className="h-10 sm:h-11 md:h-12 text-sm sm:text-base bg-white/90 border-white/20 text-gray-900 placeholder:text-gray-600 focus:bg-white"
        />
      </div>
      <div>
        <Input
          type="tel"
          name="phone"
          placeholder="Seu WhatsApp (opcional)"
          value={formData.phone}
          onChange={handleChange}
          className="h-10 sm:h-11 md:h-12 text-sm sm:text-base bg-white/90 border-white/20 text-gray-900 placeholder:text-gray-600 focus:bg-white"
        />
      </div>
      <Button
        type="submit"
        variant="hero"
        size="lg"
        disabled={isSubmitting}
        className="w-full h-10 sm:h-11 md:h-12 text-xs sm:text-sm md:text-base font-bold"
      >
        {isSubmitting ? "Enviando..." : "BAIXAR E-BOOK GRATUITO"}
      </Button>
      <p className="text-xs text-muted-foreground text-center leading-relaxed px-2">
        Ao clicar no botão, você concorda em receber comunicações da Luma
        Ensino.
      </p>
    </form>
  );
}
