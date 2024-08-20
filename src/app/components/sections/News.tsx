import React, { useState, useEffect } from 'react';
import data from '../news.json'; // Asegúrate de ajustar la ruta a tu archivo JSON
import NewsItem from '../NewsItem';

interface NewsItem {
  title: string;
  description: string;
  imageUrl: string;
  backgroundColor: string; // Agregamos un campo para el color de fondo
}

const News: React.FC = () => {
  const [news, setNews] = useState<NewsItem[]>([]);

  useEffect(() => {
    setNews(data);
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Noticias Recientes</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {news.map((item, index) => (
          <NewsItem
            key={index}
            {...item}
            className={`bg-${item.backgroundColor}-500 rounded-lg p-6`} // Aplicamos el color de fondo
          />
        ))}
      </div>
    </div>
  );
};

export default News;