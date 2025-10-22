import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";
import { useState } from "react";

const Index = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Спасибо за обращение! Я свяжусь с вами в ближайшее время.");
    setFormData({ name: "", phone: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-background">
      <nav className="fixed top-0 w-full bg-background/95 backdrop-blur-sm z-50 border-b border-sage/10">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-serif text-forest">Сергей Гуськов</h1>
          <div className="flex gap-6">
            <a href="#about" className="text-forest hover:text-sage transition-colors">Обо мне</a>
            <a href="#services" className="text-forest hover:text-sage transition-colors">Услуги</a>
            <a href="#contact" className="text-forest hover:text-sage transition-colors">Контакты</a>
          </div>
        </div>
      </nav>

      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center animate-fade-in">
            <h2 className="text-5xl md:text-6xl font-serif text-forest mb-6">
              Психологическая помощь
            </h2>
            <p className="text-xl text-forest/70 mb-8 max-w-2xl mx-auto leading-relaxed">
              Бережное сопровождение на пути к гармонии с собой и окружающим миром
            </p>
            <Button 
              size="lg" 
              className="bg-sage hover:bg-sage/90 text-white px-8 py-6 text-lg"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Записаться на консультацию
            </Button>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-mint/30">
        <div className="container mx-auto max-w-5xl">
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-sage/20 hover-scale animate-fade-in">
              <CardContent className="p-8 text-center">
                <div className="mb-4 flex justify-center">
                  <Icon name="Heart" size={48} className="text-sage" />
                </div>
                <h3 className="text-xl font-serif text-forest mb-3">Эмпатия</h3>
                <p className="text-forest/70">Глубокое понимание и принятие ваших переживаний</p>
              </CardContent>
            </Card>

            <Card className="border-sage/20 hover-scale animate-fade-in" style={{ animationDelay: '0.1s' }}>
              <CardContent className="p-8 text-center">
                <div className="mb-4 flex justify-center">
                  <Icon name="Shield" size={48} className="text-sage" />
                </div>
                <h3 className="text-xl font-serif text-forest mb-3">Безопасность</h3>
                <p className="text-forest/70">Конфиденциальное пространство для откровенного диалога</p>
              </CardContent>
            </Card>

            <Card className="border-sage/20 hover-scale animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <CardContent className="p-8 text-center">
                <div className="mb-4 flex justify-center">
                  <Icon name="Compass" size={48} className="text-sage" />
                </div>
                <h3 className="text-xl font-serif text-forest mb-3">Ориентиры</h3>
                <p className="text-forest/70">Помощь в поиске собственных решений и путей</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="about" className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl font-serif text-forest mb-12 text-center">Обо мне</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <div className="aspect-square bg-gradient-to-br from-sage/20 to-mint/40 rounded-2xl flex items-center justify-center">
                <Icon name="User" size={120} className="text-sage/40" />
              </div>
            </div>
            <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <h3 className="text-2xl font-serif text-forest mb-4">Гуськов Сергей Александрович</h3>
              <p className="text-forest/70 mb-6 leading-relaxed">
                Практикующий психолог с более чем 10-летним опытом работы. Моя миссия — создать безопасное пространство, где каждый человек может быть услышан и понят.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Icon name="GraduationCap" className="text-sage mt-1" size={20} />
                  <div>
                    <p className="font-semibold text-forest">Образование</p>
                    <p className="text-forest/70 text-sm">Московский государственный университет, факультет психологии</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="Award" className="text-sage mt-1" size={20} />
                  <div>
                    <p className="font-semibold text-forest">Сертификаты</p>
                    <p className="text-forest/70 text-sm">Когнитивно-поведенческая терапия, гештальт-подход, травма-ориентированная терапия</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="Users" className="text-sage mt-1" size={20} />
                  <div>
                    <p className="font-semibold text-forest">Опыт</p>
                    <p className="text-forest/70 text-sm">Более 2000 часов индивидуальных консультаций</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 px-4 bg-beige/40">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-4xl font-serif text-forest mb-12 text-center">Услуги</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="border-sage/20 animate-fade-in">
              <CardContent className="p-8">
                <Icon name="MessageCircle" className="text-sage mb-4" size={32} />
                <h3 className="text-xl font-serif text-forest mb-3">Индивидуальные консультации</h3>
                <p className="text-forest/70 mb-4">
                  Работа с тревожностью, депрессией, кризисными состояниями, личностными проблемами
                </p>
                <p className="text-sage font-semibold">5000 ₽ / 60 минут</p>
              </CardContent>
            </Card>

            <Card className="border-sage/20 animate-fade-in" style={{ animationDelay: '0.1s' }}>
              <CardContent className="p-8">
                <Icon name="HeartHandshake" className="text-sage mb-4" size={32} />
                <h3 className="text-xl font-serif text-forest mb-3">Семейная терапия</h3>
                <p className="text-forest/70 mb-4">
                  Улучшение коммуникации, разрешение конфликтов, укрепление отношений
                </p>
                <p className="text-sage font-semibold">7000 ₽ / 90 минут</p>
              </CardContent>
            </Card>

            <Card className="border-sage/20 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <CardContent className="p-8">
                <Icon name="Sparkles" className="text-sage mb-4" size={32} />
                <h3 className="text-xl font-serif text-forest mb-3">Работа с травмой</h3>
                <p className="text-forest/70 mb-4">
                  Исцеление от психологических травм, ПТСР, детских переживаний
                </p>
                <p className="text-sage font-semibold">6000 ₽ / 75 минут</p>
              </CardContent>
            </Card>

            <Card className="border-sage/20 animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <CardContent className="p-8">
                <Icon name="Briefcase" className="text-sage mb-4" size={32} />
                <h3 className="text-xl font-serif text-forest mb-3">Карьерное консультирование</h3>
                <p className="text-forest/70 mb-4">
                  Профессиональное самоопределение, выгорание, баланс работы и жизни
                </p>
                <p className="text-sage font-semibold">5500 ₽ / 60 минут</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 px-4">
        <div className="container mx-auto max-w-2xl">
          <h2 className="text-4xl font-serif text-forest mb-12 text-center">Записаться на консультацию</h2>
          <Card className="border-sage/20 animate-fade-in">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-forest mb-2 font-semibold">Ваше имя</label>
                  <Input
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Как к вам обращаться?"
                    className="border-sage/30 focus:border-sage"
                  />
                </div>
                <div>
                  <label className="block text-forest mb-2 font-semibold">Телефон</label>
                  <Input
                    required
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+7 (___) ___-__-__"
                    className="border-sage/30 focus:border-sage"
                  />
                </div>
                <div>
                  <label className="block text-forest mb-2 font-semibold">Сообщение</label>
                  <Textarea
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Кратко опишите, с чем вы хотели бы поработать..."
                    className="border-sage/30 focus:border-sage min-h-32"
                  />
                </div>
                <Button type="submit" className="w-full bg-sage hover:bg-sage/90 text-white py-6">
                  Отправить заявку
                </Button>
                <p className="text-sm text-forest/60 text-center">
                  Я свяжусь с вами в течение 24 часов для согласования времени встречи
                </p>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      <footer className="py-12 px-4 bg-forest text-white">
        <div className="container mx-auto max-w-5xl">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="font-serif text-xl mb-4">Контакты</h3>
              <div className="space-y-2 text-white/80">
                <p className="flex items-center gap-2">
                  <Icon name="Phone" size={16} />
                  +7 (999) 123-45-67
                </p>
                <p className="flex items-center gap-2">
                  <Icon name="Mail" size={16} />
                  s.guskov@example.com
                </p>
              </div>
            </div>
            <div>
              <h3 className="font-serif text-xl mb-4">График работы</h3>
              <div className="space-y-2 text-white/80">
                <p>Пн-Пт: 10:00 - 20:00</p>
                <p>Сб: 11:00 - 18:00</p>
                <p>Вс: выходной</p>
              </div>
            </div>
            <div>
              <h3 className="font-serif text-xl mb-4">Формат</h3>
              <div className="space-y-2 text-white/80">
                <p>Очные встречи (Москва)</p>
                <p>Онлайн-консультации</p>
                <p>Zoom, Skype, WhatsApp</p>
              </div>
            </div>
          </div>
          <div className="text-center text-white/60 text-sm border-t border-white/10 pt-8">
            © 2024 Гуськов Сергей Александрович. Психологическая помощь
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;