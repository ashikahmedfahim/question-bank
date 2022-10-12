import './App.css';
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Main from './layouts/Main/Main';
import Home from './pages/HomePage/HomePage';
import BlogPage from './pages/BlogPage/BlogPage';
import SingleQuiz from './pages/SingleQuiz/SingleQuiz';
import ErrorPage from './pages/ErrorPage/ErrorPage';
import Statistics from './pages/Statistics/Statistics';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: async () => {
          return fetch('https://openapi.programming-hero.com/api/quiz');
        },
      },
      {
        path: "/blogs",
        element: <BlogPage />
      },
      {
        path: "/blogs/:id",
        element: <SingleQuiz />,
        loader: async ({ params }) => {
          return fetch(`https://openapi.programming-hero.com/api/quiz/${params.id}`);
        },
      },
      {
        path: "/statistics",
        element: <Statistics />,
        loader: async () => {
          return fetch('https://openapi.programming-hero.com/api/quiz');
        },
      },
      {
        path: '*',
        element: <ErrorPage />
      }
    ]
  },
]);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
