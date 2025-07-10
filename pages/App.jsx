import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';

const Profile = lazy(() => import('./pages/Profile'));

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Route lain */}
        <Route path="/" element={<Home />} />
        <Route path="/discover" element={<Discover />} />
        <Route path="/upload" element={<Upload />} />
        <Route path="/inbox" element={<Inbox />} />

        {/* ✅ Tambahkan ini */}
        <Route
          path="/profile"
          element={
            <Suspense fallback={<div>Loading Profil...</div>}>
              <Profile />
            </Suspense>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
