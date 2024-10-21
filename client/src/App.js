// import {
//   createBrowserRouter,
//   RouterProvider,
// } from "react-router-dom";
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { Contact, Home, Layout } from "./pages";


// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Layout /> ,
  
//   },
// {
// path:"/contact",
//   element: <Contact />,
// }
// ]);

function App() {
  return (
    // <Stack>
    //  <AppBar />
    //  <RouterProvider router={router} />
    // </Stack>
    <Router>
      <Routes>
        <Route path="/" element={<Layout><Home /></Layout>} />
        <Route path="/contact" element={<Layout><Contact /></Layout>} />
      </Routes>
    </Router>

  );
}

export default App;
