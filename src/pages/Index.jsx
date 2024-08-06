import { useState, useCallback } from 'react';
import { Search } from 'lucide-react';
import NewsCard from '../components/NewsCard';
import { useBulletinNotes } from '../integrations/supabase';

const Index = () => {
  const [filter, setFilter] = useState('');
  const { data: bulletinNotes, isLoading, isError } = useBulletinNotes();
  const [notes, setNotes] = useState([]);

  useState(() => {
    if (bulletinNotes) {
      setNotes(bulletinNotes);
    }
  }, [bulletinNotes]);

  const filteredNotes = notes.filter(note =>
    note.heading?.toLowerCase().includes(filter.toLowerCase()) ||
    note.note?.toLowerCase().includes(filter.toLowerCase())
  );

  const handleDragStart = (e, id) => {
    e.dataTransfer.setData('text/plain', id);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = useCallback((e, targetId) => {
    e.preventDefault();
    const draggedId = e.dataTransfer.getData('text');
    const draggedIndex = notes.findIndex(note => note.id === parseInt(draggedId));
    const targetIndex = notes.findIndex(note => note.id === targetId);

    if (draggedIndex === targetIndex) return;

    const newNotes = [...notes];
    const [reorderedItem] = newNotes.splice(draggedIndex, 1);
    newNotes.splice(targetIndex, 0, reorderedItem);

    setNotes(newNotes);
  }, [notes]);

  if (isLoading) return <div className="text-center mt-8">Loading...</div>;
  if (isError) return <div className="text-center mt-8 text-red-500">Error loading bulletin notes</div>;

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-6xl mx-auto">
        <header className="flex items-center justify-between mb-8">
          <h1 className="text-2xl font-bold text-gray-800">Bulletin Board</h1>
          <div className="relative">
            <input
              type="text"
              placeholder="Filter"
              className="pl-8 pr-4 py-2 border rounded-md bg-white text-gray-700"
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
              id={note.id}
              title={note.heading}
              image="/placeholder.svg"
              name={note.author}
              date={new Date(note.created_at).toLocaleDateString()}
              content={note.note}
              colour={note.colour}
              onDragStart={handleDragStart}
              onDragOver={handleDragOver}
              onDrop={handleDrop}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Index;
