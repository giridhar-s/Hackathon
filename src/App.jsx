import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import CreateAndUpdateHackathon from "./pages/CreateAndUpdateHackathon";
import HackathonDetail from "./pages/HackathonDetail";
import { HackathonProvider } from "./context/HackathonContext";

// Define your routes
const router = createBrowserRouter([
 {
  path: "/",
  element: <Dashboard />,
 },
 {
  path: "/create",
  element: <CreateAndUpdateHackathon />,
 },
 {
  path: "/hackathon/:id",
  element: <HackathonDetail />,
 },
 {
  path: "/update/:id",
  element: <CreateAndUpdateHackathon />,
 },
]);

function App() {
 localStorage.removeItem("hackathons");

 return (
  <HackathonProvider>
   <RouterProvider router={router} />;
  </HackathonProvider>
 );
}

export default App;
