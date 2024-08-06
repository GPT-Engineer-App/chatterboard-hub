import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const NewsCard = ({ title, image, name, date, content, colour }) => {
  return (
    <Card className={`overflow-hidden transition-colors duration-300`} style={{ backgroundColor: colour }}>
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <CardHeader>
        <CardTitle className="text-gray-800">{title || 'Untitled'}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-gray-600 mb-2">Author</p>
        <p className="font-semibold text-gray-800 mb-4">{name || 'Anonymous'}</p>
        <p className="text-sm text-gray-600 mb-2">Date</p>
        <p className="font-semibold text-gray-800 mb-4">{date}</p>
        <p className="text-sm text-gray-600 mb-2">Content</p>
        <p className="text-gray-700 mb-4">{content}</p>
      </CardContent>
    </Card>
  );
};

export default NewsCard;
