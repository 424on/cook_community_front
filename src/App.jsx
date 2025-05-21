import { BrowserRouter, Routes, Route } from 'react-router-dom';

// 페이지 컴포넌트 임포트
import MainPage from './pages/MainPage';
import DailyRecipes from './pages/DailyRecipes';
import ChallengeRecipes from './pages/ChallengeRecipes';
import CategoryRecipes from './pages/CategoryRecipes';
import TagRecommendations from './pages/TagRecommendations';
import MyPage from './pages/MyPage';
import FavoritesPage from './pages/FavoritesPage';
import PostRecipePage from './pages/PostRecipePage';
import RecipeDetail from './pages/RecipeDetail';
import LoginPage from './pages/LoginPage';
import NotFound from './pages/NotFound';

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path="/daily" element={<DailyRecipes />} />
                <Route path="/challenge" element={<ChallengeRecipes />} />
                <Route path="/categories/:categoryId" element={<CategoryRecipes />} />
                <Route path="/tags/:tagId" element={<TagRecommendations />} />
                <Route path="/my" element={<MyPage />} />
                <Route path="/favorites" element={<FavoritesPage />} />
                <Route path="/post" element={<PostRecipePage />} />
                <Route path="/recipes/:id" element={<RecipeDetail />} />
                <Route path="/login" element={<LoginPage />} />

                {/* 404 페이지 */}
                <Route path="*" element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    );
}