import { useState } from 'react';
import { Search } from 'lucide-react';
import NewsCard from '../components/NewsCard';
import { useBulletinNotes } from '../integrations/supabase';

const Index = () => {
  const [filter, setFilter] = useState('');
  const { data: bulletinNotes, isLoading, isError } = useBulletinNotes();

  const filteredNotes = bulletinNotes?.filter(note =>
    note.heading?.toLowerCase().includes(filter.toLowerCase()) ||
    note.note?.toLowerCase().includes(filter.toLowerCase())
  ) || [];

  if (isLoading) return <div className="text-center mt-8">Loading...</div>;
  if (isError) return <div className="text-center mt-8 text-red-500">Error loading bulletin notes</div>;

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-6xl mx-auto">
        <header className="flex items-center justify-between mb-8">
          <h1 className="text-2xl font-bold">Bulletin Board</h1>
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
          {filteredNotes.map(note => (
            <NewsCard
              key={note.id}
              title={note.heading}
              image="/placeholder.svg"
              name={note.author}
              date={new Date(note.created_at).toLocaleDateString()}
              content={note.note}
              grade={note.colour}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Index;
