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
      gradient: "from-faculty-yellow via-faculty-purple to-faculty-purple-light"
    },
    {
      id: 2,
      title: "SUBHEADING",
      subtitle: "Объявление от деканата",
      content: "Важная информация для всех студентов факультета. Следите за обновлениями в нашем сообществе.",
      tag: "ВАЖНО",
      gradient: "from-faculty-purple via-faculty-yellow to-faculty-purple-light"
    },
    {
      id: 3,
      title: "ГРАФФИТИ ВОРКШОП",
      subtitle: "Творческая мастерская",
      content: "Изучаем основы стрит-арта и создаем уникальную визуальную айдентику нашего факультета.",
      tag: "ТВОРЧЕСТВО",
      gradient: "from-faculty-gray via-faculty-purple to-faculty-yellow"
    }
  ];

  return (
    <div className="min-h-screen bg-faculty-black relative overflow-hidden">
      {/* Graffiti Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <svg width="100%" height="100%" className="absolute">
          <defs>
            <pattern id="graffiti" patternUnits="userSpaceOnUse" width="200" height="200">
              <circle cx="50" cy="50" r="30" fill="#FFDD00" opacity="0.3"/>
              <rect x="100" y="20" width="60" height="40" fill="#8A2BE2" opacity="0.4" transform="rotate(15)"/>
              <polygon points="150,100 170,140 130,140" fill="#808080" opacity="0.3"/>
              <path d="M20,150 Q50,120 80,150 T140,150" stroke="#FFDD00" strokeWidth="3" fill="none"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#graffiti)"/>
        </svg>
      </div>

      {/* Floating Abstract Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-r from-faculty-yellow to-faculty-purple rounded-full opacity-20 animate-pulse"></div>
      <div className="absolute top-40 right-20 w-16 h-16 bg-faculty-gray transform rotate-45 opacity-30"></div>
      <div className="absolute bottom-20 left-1/4 w-24 h-24 border-4 border-faculty-purple-light rounded-full opacity-25"></div>

      {/* Header with Mascot */}
      <header className="relative z-10 py-8 px-6">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-6">
            <div className="w-20 h-20 rounded-full overflow-hidden bg-gradient-to-br from-faculty-yellow to-faculty-purple p-1">
              <img 
                src="/img/416873c8-545e-4777-a931-e4408cfa6ddd.jpg" 
                alt="Faculty Mascot" 
                className="w-full h-full object-cover rounded-full"
              />
            </div>
            <div>
              <h1 className="text-4xl font-bold text-faculty-yellow">
                ФАКУЛЬТЕТСКОЕ СООБЩЕСТВО
              </h1>
              <p className="text-faculty-gray text-lg">Единая айдентика для всех постов</p>
            </div>
          </div>
          <nav className="flex items-center space-x-6 bg-faculty-white/10 backdrop-blur-sm rounded-full px-6 py-3">
            <a href="#" className="text-faculty-white hover:text-faculty-yellow transition-colors">Главная</a>
            <a href="#" className="text-faculty-white hover:text-faculty-yellow transition-colors">О нас</a>
            <a href="#" className="text-faculty-white hover:text-faculty-yellow transition-colors">События</a>
            <a href="#" className="text-faculty-white hover:text-faculty-yellow transition-colors">Форум</a>
            <a href="#" className="text-faculty-white hover:text-faculty-yellow transition-colors">Контакты</a>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative z-10 py-12 px-6">
        <div className="max-w-6xl mx-auto">
          {/* Hero Section */}
          <section className="text-center mb-16">
            <div className="bg-gradient-to-r from-faculty-yellow to-faculty-purple p-1 rounded-3xl inline-block mb-6">
              <div className="bg-faculty-black px-12 py-6 rounded-3xl">
                <h2 className="text-6xl font-extrabold bg-gradient-to-r from-faculty-yellow via-faculty-purple to-faculty-purple-light bg-clip-text text-transparent mb-4">
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
            {posts.map((post) => (
              <Card key={post.id} className="group bg-faculty-white/5 backdrop-blur-sm border border-faculty-gray/30 hover:border-faculty-yellow/50 transition-all duration-300 hover:scale-105 cursor-pointer">
                <CardContent className="p-0">
                  {/* Gradient Header */}
                  <div className={`bg-gradient-to-r ${post.gradient} p-6 text-center`}>
                    <Badge className="bg-faculty-black/80 text-faculty-white mb-3">
                      {post.tag}
                    </Badge>
                    <h3 className="text-2xl font-black text-faculty-black mb-2" style={{fontFamily: 'Impact, Arial Black, sans-serif', textShadow: '2px 2px 0px rgba(255,255,255,0.8)'}}>
                      {post.title}
                    </h3>
                    <p className="text-faculty-black font-semibold">
                      {post.subtitle}
                    </p>
                  </div>
                  
                  {/* Content */}
                  <div className="p-6">
                    <p className="text-faculty-white/90 mb-6 leading-relaxed">
                      {post.content}
                    </p>
                    <div className="flex justify-between items-center">
                      <Button 
                        className="bg-faculty-yellow text-faculty-black hover:bg-faculty-yellow/80 font-bold rounded-full px-6"
                        onClick={() => setSelectedPost(post.id)}
                      >
                        ЧИТАТЬ БОЛЬШЕ
                      </Button>
                      <div className="flex space-x-2 text-faculty-gray">
                        <Icon name="Heart" size={20} className="hover:text-faculty-purple cursor-pointer" />
                        <Icon name="MessageCircle" size={20} className="hover:text-faculty-purple cursor-pointer" />
                        <Icon name="Share2" size={20} className="hover:text-faculty-purple cursor-pointer" />
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </section>

          {/* Design Elements Showcase */}
          <section className="mb-16">
            <h3 className="text-3xl font-bold text-faculty-white mb-8 text-center">
              ЭЛЕМЕНТЫ АЙДЕНТИКИ
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Color Palette */}
              <Card className="bg-faculty-white/5 border border-faculty-gray/30 p-6">
                <h4 className="text-faculty-yellow font-bold mb-4">ЦВЕТОВАЯ ПАЛИТРА</h4>
                <div className="flex flex-wrap gap-3">
                  <div className="w-8 h-8 bg-faculty-yellow rounded-full border-2 border-faculty-white/20"></div>
                  <div className="w-8 h-8 bg-faculty-purple rounded-full border-2 border-faculty-white/20"></div>
                  <div className="w-8 h-8 bg-faculty-gray rounded-full border-2 border-faculty-white/20"></div>
                  <div className="w-8 h-8 bg-faculty-white rounded-full border-2 border-faculty-gray"></div>
                </div>
              </Card>

              {/* Typography */}
              <Card className="bg-faculty-white/5 border border-faculty-gray/30 p-6">
                <h4 className="text-faculty-yellow font-bold mb-4">ТИПОГРАФИКА</h4>
                <div className="text-faculty-white">
                  <div className="text-2xl font-black mb-2" style={{fontFamily: 'Impact, Arial Black, sans-serif'}}>ГРАФФИТИ</div>
                  <div className="text-sm">Body Text</div>
                </div>
              </Card>

              {/* Icons */}
              <Card className="bg-faculty-white/5 border border-faculty-gray/30 p-6">
                <h4 className="text-faculty-yellow font-bold mb-4">ИКОНКИ</h4>
                <div className="flex space-x-3 text-faculty-white">
                  <Icon name="Users" size={24} />
                  <Icon name="Megaphone" size={24} />
                  <Icon name="Paintbrush" size={24} />
                  <Icon name="Zap" size={24} />
                </div>
              </Card>

              {/* Gradient Sample */}
              <Card className="bg-faculty-white/5 border border-faculty-gray/30 p-6">
                <h4 className="text-faculty-yellow font-bold mb-4">ГРАДИЕНТЫ</h4>
                <div className="h-12 bg-gradient-to-r from-faculty-yellow via-faculty-purple to-faculty-purple-light rounded-lg"></div>
              </Card>
            </div>
          </section>

          {/* Mascot Showcase */}
          <section className="text-center">
            <h3 className="text-3xl font-bold text-faculty-white mb-8">
              НАШ МАСКОТ
            </h3>
            <div className="bg-gradient-to-r from-faculty-yellow to-faculty-purple p-1 rounded-3xl inline-block">
              <div className="bg-faculty-black p-8 rounded-3xl">
                <img 
                  src="/img/416873c8-545e-4777-a931-e4408cfa6ddd.jpg" 
                  alt="Faculty Mascot" 
                  className="w-48 h-48 object-cover rounded-full mx-auto mb-6"
                />
                <p className="text-faculty-white max-w-2xl mx-auto text-lg">
                  Персонаж объединяет в себе дух молодежной культуры граффити и академическую среду, 
                  представляя наше сообщество во всех визуальных материалах.
                </p>
              </div>
            </div>
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer className="relative z-10 py-8 px-6 mt-16 border-t border-faculty-gray/30">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-faculty-gray">
            © 2024 Факультетское сообщество. Единство в стиле и творчестве.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;