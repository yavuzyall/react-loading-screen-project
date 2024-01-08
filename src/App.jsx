import { useEffect, useState } from "react";
import Feed from "./components/feed/Feed";
import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import axios from "axios";

function App() {

  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const getUser = async () => {
      try {
        const res = await axios.get("/api/user/1");
        setUser(res.data);
      } catch (error) {
        console.error(error);
      }
      setIsLoading(false);
    };
    getUser();
  }, []);


  return (
    <div className="container">
      <Sidebar isLoading={isLoading}/>
      <div className="home">
        <Topbar isLoading={isLoading}/>
        <Feed />
      </div>
    </div>
  );
}

export default App;
