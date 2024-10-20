import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import HomePage from "./pages/HomePage";
import {Stack } from "@mui/material";
import {Layout}  from "./components";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage /> ,
  
  },
{
path:"/contact",
  element:"Hello Contact",
}
]);

function App() {
  
  return (
    <Stack>
      <Layout />
      <RouterProvider router={router} />
    </Stack>
  );
}

export default App;
