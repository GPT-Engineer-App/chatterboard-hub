import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useRef, useEffect, useState } from 'react';

const NewsCard = ({ title, image, name, date, content, colour }) => {
  const [textColorClass, setTextColorClass] = useState('text-gray-800');
  const cardRef = useRef(null);

  useEffect(() => {
    const getContrastColor = (backgroundColor) => {
      const rgb = backgroundColor.match(/\d+/g);
      if (rgb) {
        const [r, g, b] = rgb.map(Number);
        const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
        return luminance > 0.5 ? 'text-gray-800' : 'text-white';
      }
      return 'text-gray-800'; // Default to dark text if color parsing fails
    };

    if (cardRef.current) {
      const computedStyle = window.getComputedStyle(cardRef.current);
      const backgroundColor = computedStyle.backgroundColor;
      setTextColorClass(getContrastColor(backgroundColor));
    }
  }, [colour]);

  return (
    <Card ref={cardRef} className={`overflow-hidden transition-colors duration-300 ${textColorClass}`} style={{ backgroundColor: colour }}>
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <CardHeader>
        <CardTitle>{title || 'Untitled'}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm opacity-80 mb-2">Author</p>
        <p className="font-semibold mb-4">{name || 'Anonymous'}</p>
        <p className="text-sm opacity-80 mb-2">Date</p>
        <p className="font-semibold mb-4">{date}</p>
        <p className="text-sm opacity-80 mb-2">Content</p>
        <p className="mb-4">{content}</p>
      </CardContent>
    </Card>
  );
};

export default NewsCard;
