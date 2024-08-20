// NewsItem.tsx
interface NewsItemProps {
    title: string;
    description: string;
    imageUrl: string;
    backgroundColor: string;
  }
  
  const NewsItem: React.FC<NewsItemProps> = ({ title, description, imageUrl, backgroundColor }) => {
    return (
      <div className={`bg-${backgroundColor}-500 rounded-lg p-6`}>
        <h2 className="text-white text-xl font-bold mb-2">{title}</h2>
        <p className="text-white">{description}</p>
      </div>
    );
  };
  
  export default NewsItem;