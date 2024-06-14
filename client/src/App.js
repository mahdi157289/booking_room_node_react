import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import CategoryPage from "./pages/CategoryPage";
import CreateListing from "./pages/CreateListing";
import HomePage from "./pages/HomePages";
import ListingDetails from "./pages/ListingDetails";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import TripList from "./pages/TripList";
import WishList from "./pages/WishList";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/create-listing" element={<CreateListing />} />
          <Route path="/properties/category/:category" element={<CategoryPage />} />
          <Route path="/properties/:listingId" element={<ListingDetails />} />
          <Route path="/properties/category/:category" element={<CategoryPage />} />
          <Route path="/:userId/trips" element={<TripList />} />
          <Route path="/:userId/wishList" element={<WishList />} />
          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;