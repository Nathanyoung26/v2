import { PlayIcon } from '@heroicons/react/24/solid';

const songs = [
  {
    title: 'Twinkle Twinkle',
    category: 'Lullaby • Bedtime',
    image: 'https://images.unsplash.com/photo-1618506557292-ec1862b3c506?w=400&auto=format&fit=crop&q=60'
  },
  {
    title: 'ABC Song',
    category: 'Educational • English',
    image: 'https://images.unsplash.com/photo-1606092195730-5d7b9af1efc5?w=400&auto=format&fit=crop&q=60'
  },
  {
    title: 'Old MacDonald',
    category: 'Interactive • Animals',
    image: 'https://images.unsplash.com/photo-1596568960638-96243e4b3b21?w=400&auto=format&fit=crop&q=60'
  },
  {
    title: 'Itsy Bitsy Spider',
    category: 'Action Songs • Fun',
    image: 'https://images.unsplash.com/photo-1633526544365-a98d534c9201?w=400&auto=format&fit=crop&q=60'
  },
  {
    title: 'Wheels on the Bus',
    category: 'Action Songs • Travel',
    image: 'https://images.unsplash.com/photo-1569927366590-f1e0c0327832?w=400&auto=format&fit=crop&q=60'
  },
  {
    title: 'Baby Shark',
    category: 'Popular • Dance',
    image: 'https://images.unsplash.com/photo-1561574765-e9836663193b?w=400&auto=format&fit=crop&q=60'
  }
];

export default function ContinueListening() {
  return (
    <section className="mb-8">
      <h2 className="text-xl font-semibold text-white mb-4">Continue Listening</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {songs.map((song) => (
          <div key={song.title} className="bg-zinc-800/40 rounded-lg p-3 hover:bg-zinc-800/80 transition-colors cursor-pointer group">
            <div className="relative">
              <img 
                src={song.image} 
                alt={song.title}
                className="aspect-square object-cover rounded-md mb-3"
              />
              <button className="absolute bottom-2 right-2 w-10 h-10 bg-green-500 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <PlayIcon className="w-5 h-5 text-white" />
              </button>
            </div>
            <p className="font-medium text-white text-sm">{song.title}</p>
            <p className="text-zinc-400 text-xs mt-1">{song.category}</p>
          </div>
        ))}
      </div>
    </section>
  );
}