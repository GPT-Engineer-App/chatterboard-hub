import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const getImageUrl = (title) => {
  const defaultImage = "https://source.unsplash.com/random/800x600/?news";
  if (!title) return defaultImage;
  
  const lowercaseTitle = title.toLowerCase();
  if (lowercaseTitle.includes("sport")) return "https://source.unsplash.com/random/800x600/?sports";
  if (lowercaseTitle.includes("tech")) return "https://source.unsplash.com/random/800x600/?technology";
  if (lowercaseTitle.includes("health")) return "https://source.unsplash.com/random/800x600/?health";
  if (lowercaseTitle.includes("politics")) return "https://source.unsplash.com/random/800x600/?politics";
  if (lowercaseTitle.includes("entertainment")) return "https://source.unsplash.com/random/800x600/?entertainment";
  return defaultImage;
};

const NewsCard = ({ title, name, date, content, colour }) => {
  const imageUrl = getImageUrl(title);
  return (
    <Card className={`overflow-hidden transition-colors duration-300 text-white`} style={{ backgroundColor: colour }}>
      <img src={imageUrl} alt={title} className="w-full h-48 object-cover" />
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
