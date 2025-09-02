import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [selectedPost, setSelectedPost] = useState<number | null>(null);

  const posts = [
    {
      id: 1,
      title: "ВОИТАБЫЩА",
      subtitle: "Новое событие факультета",
      content: "Присоединяйтесь к нашему сообществу для обмена опытом и новыми идеями. Граффити-культура и академическая среда объединяются!",
      tag: "СОБЫТИЕ",
      gradient: "from-faculty-gray-concrete via-faculty-gray-steel to-faculty-gray-ash"
    },
    {
      id: 2,
      title: "SUBHEADING",
      subtitle: "Объявление от деканата",
      content: "Важная информация для всех студентов факультета. Следите за обновлениями в нашем сообществе.",
      tag: "ВАЖНО",
      gradient: "from-faculty-gray-slate via-faculty-yellow to-faculty-gray-smoke"
    },
    {
      id: 3,
      title: "ГРАФФИТИ ВОРКШОП",
      subtitle: "Творческая мастерская",
      content: "Изучаем основы стрит-арта и создаем уникальную визуальную айдентику нашего факультета.",
      tag: "ТВОРЧЕСТВО",
      gradient: "from-faculty-gray-charcoal via-faculty-purple to-faculty-gray-concrete"
    }
  ];

  return (
    <div className="min-h-screen bg-faculty-gray-charcoal relative overflow-hidden">
      {/* Graffiti Background Pattern */}
      <div className="absolute inset-0 opacity-15">
        <svg width="100%" height="100%" className="absolute">
          <defs>
            <pattern id="graffiti" patternUnits="userSpaceOnUse" width="200" height="200">
              <circle cx="50" cy="50" r="30" fill="#696969" opacity="0.4"/>
              <rect x="100" y="20" width="60" height="40" fill="#708090" opacity="0.5" transform="rotate(15)"/>
              <polygon points="150,100 170,140 130,140" fill="#4F4F4F" opacity="0.4"/>
              <path d="M20,150 Q50,120 80,150 T140,150" stroke="#B8B8B8" strokeWidth="3" fill="none"/>
              <rect x="10" y="180" width="40" height="15" fill="#808080" opacity="0.3"/>
              <circle cx="160" cy="60" r="20" fill="#36454F" opacity="0.3"/>
            </pattern>
            {/* Torn Paper Effect */}
            <clipPath id="tornPaper">
              <path d="M0,0 L300,0 L295,8 L305,12 L298,18 L310,22 L302,28 L315,32 L308,38 L320,42 L312,48 L300,50 L0,50 Z"/>
            </clipPath>
          </defs>
          <rect width="100%" height="100%" fill="url(#graffiti)"/>
        </svg>
      </div>

      {/* Floating Abstract Elements with Torn Paper */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-r from-faculty-gray-concrete to-faculty-gray-steel rounded-full opacity-30 animate-pulse"></div>
      <div className="absolute top-40 right-20 w-16 h-16 bg-faculty-gray-slate transform rotate-45 opacity-40"></div>
      <div className="absolute bottom-20 left-1/4 w-24 h-24 border-4 border-faculty-gray-ash rounded-full opacity-35"></div>
      
      {/* Torn Paper Overlays */}
      <div className="absolute top-32 right-10 w-32 h-16 bg-faculty-paper-torn opacity-80" style={{clipPath: 'polygon(0% 0%, 90% 0%, 95% 20%, 85% 35%, 92% 50%, 88% 70%, 95% 85%, 85% 100%, 0% 100%)'}}></div>
      <div className="absolute bottom-40 left-16 w-28 h-20 bg-faculty-paper-aged opacity-70" style={{clipPath: 'polygon(5% 0%, 100% 0%, 95% 15%, 100% 30%, 90% 45%, 95% 60%, 85% 75%, 90% 90%, 0% 100%, 0% 85%, 10% 70%, 5% 55%, 15% 40%, 10% 25%, 20% 10%)'}}></div>
      <div className="absolute top-1/2 right-1/3 w-20 h-12 bg-faculty-gray-smoke opacity-60" style={{clipPath: 'polygon(15% 0%, 85% 0%, 100% 30%, 80% 60%, 95% 100%, 0% 100%, 20% 70%, 0% 40%)'}}></div>

      {/* Header with Mascot */}
      <header className="relative z-10 py-8 px-6">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-6">
            <div className="w-20 h-20 rounded-full overflow-hidden bg-gradient-to-br from-faculty-gray-concrete to-faculty-gray-steel p-1 relative">
              <div className="absolute -top-1 -right-1 w-6 h-4 bg-faculty-paper-torn opacity-90" style={{clipPath: 'polygon(30% 0%, 100% 0%, 70% 100%, 0% 100%)'}}></div>
              <img 
                src="/img/416873c8-545e-4777-a931-e4408cfa6ddd.jpg" 
                alt="Faculty Mascot" 
                className="w-full h-full object-cover rounded-full"
              />
            </div>
            <div>
              <h1 className="text-4xl font-bold text-faculty-gray-ash">
                ФАКУЛЬТЕТСКОЕ СООБЩЕСТВО
              </h1>
              <p className="text-faculty-gray-concrete text-lg">Единая айдентика для всех постов</p>
            </div>
          </div>
          <nav className="flex items-center space-x-6 bg-faculty-gray-steel/20 backdrop-blur-sm rounded-full px-6 py-3">
            <a href="#" className="text-faculty-gray-smoke hover:text-faculty-yellow transition-colors">Главная</a>
            <a href="#" className="text-faculty-gray-smoke hover:text-faculty-yellow transition-colors">О нас</a>
            <a href="#" className="text-faculty-gray-smoke hover:text-faculty-yellow transition-colors">События</a>
            <a href="#" className="text-faculty-gray-smoke hover:text-faculty-yellow transition-colors">Форум</a>
            <a href="#" className="text-faculty-gray-smoke hover:text-faculty-yellow transition-colors">Контакты</a>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative z-10 py-12 px-6">
        <div className="max-w-6xl mx-auto">
          {/* Hero Section */}
          <section className="text-center mb-16">
            <div className="bg-gradient-to-r from-faculty-gray-concrete to-faculty-gray-steel p-1 rounded-3xl inline-block mb-6 relative">
              {/* Torn paper effect on hero */}
              <div className="absolute -top-2 -right-2 w-16 h-8 bg-faculty-paper-torn opacity-90" style={{clipPath: 'polygon(10% 0%, 100% 0%, 90% 40%, 100% 70%, 80% 100%, 0% 100%, 20% 60%, 0% 30%)'}}></div>
              <div className="bg-faculty-gray-charcoal px-12 py-6 rounded-3xl relative">
                <h2 className="text-6xl font-extrabold bg-gradient-to-r from-faculty-gray-ash via-faculty-yellow to-faculty-gray-smoke bg-clip-text text-transparent mb-4">
                  СТИЛЬ И ЕДИНСТВО
                </h2>
                <p className="text-faculty-gray-light text-xl max-w-3xl mx-auto">
                  Создаем уникальную визуальную айдентику факультетского сообщества с граффити-элементами и современным дизайном
                </p>
              </div>
            </div>
          </section>

          {/* Posts Grid */}
          <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {posts.map((post, index) => (
              <Card key={post.id} className="group bg-faculty-gray-steel/20 backdrop-blur-sm border border-faculty-gray-concrete/40 hover:border-faculty-gray-ash/70 transition-all duration-300 hover:scale-105 cursor-pointer relative">
                {/* Torn paper effects on cards */}
                {index === 0 && <div className="absolute -top-1 -left-1 w-12 h-6 bg-faculty-paper-aged opacity-85" style={{clipPath: 'polygon(20% 0%, 100% 0%, 80% 60%, 100% 100%, 0% 100%, 30% 40%)'}}></div>}
                {index === 1 && <div className="absolute -bottom-1 -right-1 w-10 h-8 bg-faculty-paper-torn opacity-80" style={{clipPath: 'polygon(0% 0%, 70% 0%, 100% 30%, 60% 70%, 80% 100%, 0% 100%)'}}></div>}
                {index === 2 && <div className="absolute top-2 -right-2 w-14 h-5 bg-faculty-gray-smoke opacity-90" style={{clipPath: 'polygon(15% 0%, 100% 0%, 85% 100%, 0% 100%, 25% 60%)'}}></div>}
                
                <CardContent className="p-0">
                  {/* Gradient Header with more gray tones */}
                  <div className={`bg-gradient-to-r ${post.gradient} p-6 text-center relative`}>
                    <Badge className="bg-faculty-gray-charcoal/90 text-faculty-gray-smoke mb-3">
                      {post.tag}
                    </Badge>
                    <h3 className="text-2xl font-black text-faculty-black mb-2" style={{fontFamily: 'Impact, Arial Black, sans-serif', textShadow: '2px 2px 0px rgba(184,184,184,0.8)'}}>
                      {post.title}
                    </h3>
                    <p className="text-faculty-gray-charcoal font-semibold">
                      {post.subtitle}
                    </p>
                  </div>
                  
                  {/* Content */}
                  <div className="p-6 bg-faculty-gray-steel/10">
                    <p className="text-faculty-gray-smoke/90 mb-6 leading-relaxed">
                      {post.content}
                    </p>
                    <div className="flex justify-between items-center">
                      <Button 
                        className="bg-faculty-gray-ash text-faculty-gray-charcoal hover:bg-faculty-gray-concrete font-bold rounded-full px-6"
                        onClick={() => setSelectedPost(post.id)}
                      >
                        ЧИТАТЬ БОЛЬШЕ
                      </Button>
                      <div className="flex space-x-2 text-faculty-gray-concrete">
                        <Icon name="Heart" size={20} className="hover:text-faculty-gray-ash cursor-pointer" />
                        <Icon name="MessageCircle" size={20} className="hover:text-faculty-gray-ash cursor-pointer" />
                        <Icon name="Share2" size={20} className="hover:text-faculty-gray-ash cursor-pointer" />
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </section>

          {/* Design Elements Showcase */}
          <section className="mb-16">
            <h3 className="text-3xl font-bold text-faculty-gray-smoke mb-8 text-center">
              ЭЛЕМЕНТЫ АЙДЕНТИКИ
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Color Palette */}
              <Card className="bg-faculty-gray-steel/10 border border-faculty-gray-concrete/40 p-6 relative">
                <div className="absolute -top-1 right-4 w-8 h-4 bg-faculty-paper-torn opacity-85" style={{clipPath: 'polygon(25% 0%, 100% 0%, 75% 100%, 0% 100%)'}}></div>
                <h4 className="text-faculty-gray-ash font-bold mb-4">ЦВЕТОВАЯ ПАЛИТРА</h4>
                <div className="flex flex-wrap gap-2">
                  <div className="w-6 h-6 bg-faculty-gray-concrete rounded-full border border-faculty-gray-ash"></div>
                  <div className="w-6 h-6 bg-faculty-gray-steel rounded-full border border-faculty-gray-ash"></div>
                  <div className="w-6 h-6 bg-faculty-gray-slate rounded-full border border-faculty-gray-ash"></div>
                  <div className="w-6 h-6 bg-faculty-gray-charcoal rounded-full border border-faculty-gray-ash"></div>
                  <div className="w-6 h-6 bg-faculty-yellow rounded-full border border-faculty-gray-ash"></div>
                  <div className="w-6 h-6 bg-faculty-purple rounded-full border border-faculty-gray-ash"></div>
                </div>
              </Card>

              {/* Typography */}
              <Card className="bg-faculty-gray-steel/10 border border-faculty-gray-concrete/40 p-6 relative">
                <div className="absolute top-1 -left-1 w-6 h-3 bg-faculty-paper-aged opacity-80" style={{clipPath: 'polygon(40% 0%, 100% 0%, 60% 100%, 0% 100%)'}}></div>
                <h4 className="text-faculty-gray-ash font-bold mb-4">ТИПОГРАФИКА</h4>
                <div className="text-faculty-gray-smoke">
                  <div className="text-2xl font-black mb-2" style={{fontFamily: 'Impact, Arial Black, sans-serif'}}>ГРАФФИТИ</div>
                  <div className="text-sm">Body Text</div>
                </div>
              </Card>

              {/* Icons */}
              <Card className="bg-faculty-gray-steel/10 border border-faculty-gray-concrete/40 p-6">
                <h4 className="text-faculty-gray-ash font-bold mb-4">ИКОНКИ</h4>
                <div className="flex space-x-3 text-faculty-gray-smoke">
                  <Icon name="Users" size={24} />
                  <Icon name="Megaphone" size={24} />
                  <Icon name="Paintbrush" size={24} />
                  <Icon name="Zap" size={24} />
                </div>
              </Card>

              {/* Gradient Sample */}
              <Card className="bg-faculty-gray-steel/10 border border-faculty-gray-concrete/40 p-6 relative">
                <div className="absolute -bottom-1 left-2 w-10 h-4 bg-faculty-gray-smoke opacity-70" style={{clipPath: 'polygon(20% 0%, 100% 0%, 80% 100%, 0% 100%)'}}></div>
                <h4 className="text-faculty-gray-ash font-bold mb-4">ГРАДИЕНТЫ</h4>
                <div className="h-12 bg-gradient-to-r from-faculty-gray-concrete via-faculty-gray-steel to-faculty-gray-ash rounded-lg"></div>
              </Card>
            </div>
          </section>

          {/* Mascot Showcase */}
          <section className="text-center">
            <h3 className="text-3xl font-bold text-faculty-gray-smoke mb-8">
              НАШ МАСКОТ
            </h3>
            <div className="bg-gradient-to-r from-faculty-gray-concrete to-faculty-gray-steel p-1 rounded-3xl inline-block relative">
              {/* Multiple torn paper effects around mascot */}
              <div className="absolute -top-3 -left-3 w-20 h-12 bg-faculty-paper-aged opacity-80" style={{clipPath: 'polygon(15% 0%, 85% 0%, 100% 25%, 90% 50%, 100% 75%, 70% 100%, 0% 100%, 10% 75%, 0% 50%, 20% 25%)'}}></div>
              <div className="absolute -bottom-2 -right-4 w-16 h-10 bg-faculty-paper-torn opacity-75" style={{clipPath: 'polygon(20% 0%, 100% 0%, 80% 30%, 100% 60%, 75% 100%, 0% 100%, 25% 70%, 0% 40%)'}}></div>
              <div className="bg-faculty-gray-charcoal p-8 rounded-3xl relative">
                <div className="absolute top-4 right-6 w-12 h-6 bg-faculty-gray-smoke opacity-60" style={{clipPath: 'polygon(30% 0%, 100% 0%, 70% 100%, 0% 100%)'}}></div>
                <img 
                  src="/img/416873c8-545e-4777-a931-e4408cfa6ddd.jpg" 
                  alt="Faculty Mascot" 
                  className="w-48 h-48 object-cover rounded-full mx-auto mb-6 border-4 border-faculty-gray-concrete"
                />
                <p className="text-faculty-gray-smoke max-w-2xl mx-auto text-lg">
                  Персонаж объединяет в себе дух молодежной культуры граффити и академическую среду, 
                  представляя наше сообщество во всех визуальных материалах.
                </p>
              </div>
            </div>
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer className="relative z-10 py-8 px-6 mt-16 border-t border-faculty-gray-concrete/30">
        <div className="max-w-6xl mx-auto text-center relative">
          <div className="absolute -top-2 left-1/3 w-16 h-6 bg-faculty-paper-aged opacity-60" style={{clipPath: 'polygon(25% 0%, 100% 0%, 75% 100%, 0% 100%)'}}></div>
          <p className="text-faculty-gray-concrete">
            © 2024 Факультетское сообщество. Единство в стиле и творчестве.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;