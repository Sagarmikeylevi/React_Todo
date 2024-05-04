import { RouterProvider, createBrowserRouter } from "react-router-dom";

import ErrorPage from "./pages/ErrorPage";
import Home from "./pages/Home";
import Category from "./pages/Category";
import TaskForm from "./pages/TaskForm";

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Home /> },
      {
        path: "create",
        children: [
          {
            path: "category",
            element: <Category />,
          },
          {
            path: "task-form/:link",
            element: <TaskForm />,
          },
        ],
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
