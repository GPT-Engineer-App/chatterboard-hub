import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const NewsCard = ({ title, image, name, date, content, colour }) => {
  return (
    <Card className={`overflow-hidden transition-colors duration-300 text-white`} style={{ backgroundColor: colour }}>
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
