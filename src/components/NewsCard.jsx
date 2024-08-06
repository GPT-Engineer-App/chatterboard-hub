import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const NewsCard = ({ title, image, name, date, content, grade }) => {
  return (
    <Card className="overflow-hidden">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <CardHeader>
        <CardTitle>{title || 'Untitled'}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-gray-600 mb-2">Author</p>
        <p className="font-semibold mb-4">{name || 'Anonymous'}</p>
        <p className="text-sm text-gray-600 mb-2">Date</p>
        <p className="font-semibold mb-4">{date}</p>
        <p className="text-sm text-gray-600 mb-2">Content</p>
        <p className="mb-4">{content}</p>
        <p className="text-sm text-gray-600 mb-2">Color</p>
        <Badge variant="secondary" style={{ backgroundColor: grade }}>{grade}</Badge>
      </CardContent>
    </Card>
  );
};

export default NewsCard;
