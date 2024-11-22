import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { HomeIcon, MagnifyingGlassIcon, AcademicCapIcon, UserGroupIcon, BookmarkIcon } from '@heroicons/react/24/outline';
import HomePage from './pages/HomePage';
import SearchPage from './pages/SearchPage';
import LearnPage from './pages/LearnPage';
import CommunityPage from './pages/CommunityPage';

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-zinc-900">
        <header className="bg-transparent text-white p-4">
          <h1 className="text-2xl font-bold">Lullaby</h1>
        </header>
        
        <main className="pb-20">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/search" element={<SearchPage />} />
            <Route path="/learn" element={<LearnPage />} />
            <Route path="/community" element={<CommunityPage />} />
            <Route path="/library" element={<div className="p-4 text-white">Library Page</div>} />
          </Routes>
        </main>

        <nav className="fixed bottom-0 left-0 right-0 bg-zinc-900 border-t border-zinc-800">
          <div className="flex justify-around p-4">
            <Link to="/" className="flex flex-col items-center text-zinc-400 hover:text-white transition-colors">
              <HomeIcon className="h-6 w-6" />
              <span className="text-xs mt-1">Home</span>
            </Link>
            <Link to="/search" className="flex flex-col items-center text-zinc-400 hover:text-white transition-colors">
              <MagnifyingGlassIcon className="h-6 w-6" />
              <span className="text-xs mt-1">Search</span>
            </Link>
            <Link to="/learn" className="flex flex-col items-center text-zinc-400 hover:text-white transition-colors">
              <AcademicCapIcon className="h-6 w-6" />
              <span className="text-xs mt-1">Learn</span>
            </Link>
            <Link to="/community" className="flex flex-col items-center text-zinc-400 hover:text-white transition-colors">
              <UserGroupIcon className="h-6 w-6" />
              <span className="text-xs mt-1">Community</span>
            </Link>
            <Link to="/library" className="flex flex-col items-center text-zinc-400 hover:text-white transition-colors">
              <BookmarkIcon className="h-6 w-6" />
              <span className="text-xs mt-1">Library</span>
            </Link>
          </div>
        </nav>
      </div>
    </BrowserRouter>
  );
}

export default App;