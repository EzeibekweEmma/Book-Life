import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";
import Books from "./pages/book/Books";
import ViewBook from "./pages/book/ViewBook";
import Layout from "./components/Layout";
import HostLayout from "./components/HostLayout";
import Host from "./pages/host/Dashboard";
import Income from "./pages/host/Income";
import HostBooks from "./pages/host/HostBooks";
import Reviews from "./pages/host/Reviews";
import HostBooksLayout from "./components/HostBooksLayout";
import Details from "./pages/host/Details";
import Photo from "./pages/host/Photo";
import Pricing from "./pages/host/Pricing";
import "./App.css";

function App() {
  // https://api.itbook.store/1.0/new
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="books" element={<Books />} />
          <Route path="books/:id" element={<ViewBook />} />
          <Route path="host" element={<HostLayout />}>
            <Route index element={<Host />} />
            <Route path="income" element={<Income />} />
            <Route path="books" element={<HostBooks />} />
            <Route path="books/:id" element={<HostBooksLayout />}>
            <Route index element={<Details />} />
            <Route path="pricing" element={<Pricing />} />
            <Route path="photos" element={<Photo />} />
            </Route>
            <Route path="reviews" element={<Reviews />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
