import { useState } from 'react';
import { Search } from 'lucide-react';
import NewsCard from '../components/NewsCard';

const newsData = [
  {
    id: 1,
    title: 'Basketball Team Wins Championship',
    image: 'https://images.unsplash.com/photo-1546519638-68e109498ffc?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    name: 'Emily Parker',
    date: '12-08-2024',
    content: 'The school basketball team won the state championship last night! Congratulations to all the players and coaches for their hard work and dedication.',
    grade: 'Second Grade'
  },
  {
    id: 2,
    title: 'New Library Books Available',
    image: 'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    name: 'Sam Lee',
    date: '24-08-2024',
    content: 'The library has received a new collection of books across various genres. Students are welcome to visit and check out the new arrivals.',
    grade: 'Third Grade'
  },
  {
    id: 3,
    title: 'School Hosts Annual Science Fair',
    image: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    name: 'Alex Johnson',
    date: '05-08-2024',
    content: 'Our school will be hosting its annual science fair next Friday. All students are encouraged to participate and showcase their projects!',
    grade: 'First Grade'
  },
];

const Index = () => {
  const [filter, setFilter] = useState('');

  const filteredNews = newsData.filter(news =>
    news.title.toLowerCase().includes(filter.toLowerCase()) ||
    news.content.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-6xl mx-auto">
        <header className="flex items-center justify-between mb-8">
          <h1 className="text-2xl font-bold">Daily News</h1>
          <div className="relative">
            <input
              type="text"
              placeholder="Filter"
              className="pl-8 pr-4 py-2 border rounded-md"
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
            />
            <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
          </div>
        </header>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredNews.map(news => (
            <NewsCard key={news.id} {...news} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Index;
