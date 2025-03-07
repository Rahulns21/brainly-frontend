import { Dashboard } from "./pages/Dashboard"
import { Signin } from "./pages/Signin"
import { Signup } from "./pages/Signup"
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return <BrowserRouter>
    <Routes>
      <Route path="/signup" element={<Signup />} />
      <Route path="/signin" element={<Signin />} />
      <Route path="/dashboard" element={<Dashboard />} />

      {/* Optional: Catch-all route for 404 */}
      <Route path="*" element={<div className="flex justify-center 
      items-center h-screen font-bold">
        404 - Page Not Found
      </div>} />

    </Routes>
  </BrowserRouter>
}

export default App