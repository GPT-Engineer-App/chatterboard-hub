import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const NewsCard = ({ title, image, name, date, content, grade }) => {
  return (
    <Card className="overflow-hidden">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-gray-600 mb-2">What's your name?</p>
        <p className="font-semibold mb-4">{name}</p>
        <p className="text-sm text-gray-600 mb-2">Date</p>
        <p className="font-semibold mb-4">{date}</p>
        <p className="text-sm text-gray-600 mb-2">News text</p>
        <p className="mb-4">{content}</p>
        <p className="text-sm text-gray-600 mb-2">Your grade</p>
        <Badge variant="secondary">{grade}</Badge>
      </CardContent>
    </Card>
  );
};

export default NewsCard;
