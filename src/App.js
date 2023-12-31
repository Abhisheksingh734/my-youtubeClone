import "./App.css";
import Head from "./components/Head";
import Body from "./components/Body";
import { Provider } from "react-redux";
import store from "./utils/store";
import MainContainer from "./components/MainContainer";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import WatchPage from "./components/WatchPage";
import Demo from "./components/Demo";
import { initializeTheme } from "./utils/appSlice";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
    children: [
      {
        path: "/",
        element: <MainContainer />,
      },
      {
        path: "/watchpage",
        element: <WatchPage />,
      },
      {
        path: "/demo",
        element: <Demo />,
      },
    ],
  },
]);

function App() {
  store.dispatch(initializeTheme());
  return (
    <Provider store={store}>
      <div className="App">
        <Head />
        <RouterProvider router={appRouter} />
        {/**
         *
         * Head
         * Body
         *   SideBar
         *     -MenuItems
         *   MainContainer
         *     -ButtonsList
         *     -videoContainer
         *        -videoCard
         *
         */}
      </div>
    </Provider>
  );
}

export default App;
