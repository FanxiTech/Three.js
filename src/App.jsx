import {
  BrowserRouter as Router,
  useRoutes,
} from "react-router-dom";
import "./App.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useEffect } from "react";
import { useCookies } from "react-cookie";

import MeetingRoom from "./MeetingRoom";

const queryClient = new QueryClient();

const App = () => {
  const [cookies, removeCookie] = useCookies([]);

  useEffect(() => {
    function fixHeight() {
      // 1vh = 1% 的視窗高度
      let vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty("--vh", `${vh}px`);

      window.addEventListener("resize", () => {
        let vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty("--vh", `${vh}px`);
      });
    }
    fixHeight();
    for (const key in cookies) {
      removeCookie(key);
    }

    // 返回一個函數以移除事件監聽
    return () => {
      window.removeEventListener("resize", fixHeight);
    };
  }, []);
  return <Content />;
};
export default App;

const Content = () => {
  return (
    <div className="App font-Baloo">
      <Router>
        <QueryClientProvider client={queryClient}>
          <ContentByRoute />
        </QueryClientProvider>
      </Router>
    </div>
  );
};


const ContentByRoute = () => {
  let routes = useRoutes([
    {
      path: "/",
      element: <MeetingRoom />,
    }
  ]);

  return routes;
};
