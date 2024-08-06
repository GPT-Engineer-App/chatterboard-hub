import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const NewsCard = ({ title, image, name, date, content, colour }) => {
  const getContrastColor = (hexColor) => {
    // Convert hex to RGB
    const r = parseInt(hexColor.slice(1, 3), 16);
    const g = parseInt(hexColor.slice(3, 5), 16);
    const b = parseInt(hexColor.slice(5, 7), 16);
    
    // Calculate luminance
    const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
    
    // Return black for light colors, white for dark colors
    return luminance > 0.5 ? 'text-gray-800' : 'text-white';
  };

  const textColorClass = getContrastColor(colour);

  return (
    <Card className={`overflow-hidden transition-colors duration-300 ${textColorClass}`} style={{ backgroundColor: colour }}>
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
