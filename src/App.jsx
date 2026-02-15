import { BrowserRouter, Routes, Route } from "react-router-dom";
import RootLayout from "./layouts/RootLayout";
import Home from "./pages/Home"; // Import your new page
import ErrorPage from "./pages/ErrorPage";
import POS from "./pages/POS";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RootLayout />}>
          <Route index element={<Home />} />
          <Route path="/pos" element={<POS />} />
        </Route>
        {/* Specific Error Routes */}
        <Route path="/unauthorized" element={<ErrorPage code="401" />} />
        <Route path="/server-error" element={<ErrorPage code="500" />} />

        {/* 404 Catch-all */}
        <Route path="*" element={<ErrorPage code="404" />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;