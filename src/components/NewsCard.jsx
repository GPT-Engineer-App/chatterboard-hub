import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const NewsCard = ({ title, image, name, date, content, colour }) => {
  const bgColor = {
    red: 'bg-red-100',
    blue: 'bg-blue-100',
    green: 'bg-green-100',
    yellow: 'bg-yellow-100',
    purple: 'bg-purple-100',
    pink: 'bg-pink-100',
    indigo: 'bg-indigo-100',
    gray: 'bg-gray-100',
  }[colour] || 'bg-gray-100';

  return (
    <Card className={`overflow-hidden ${bgColor}`}>
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
