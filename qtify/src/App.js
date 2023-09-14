import { useEffect, useState } from "react";
import "./App.css";
import { fetchTopAlbums } from "./api/api";
import Hero from "./components/Hero/Hero";
import NavBar from "./components/NavBar/NavBar";
import Card from "./components/Card/Card";

function App() {
  const [topAlbumData, setTopAlbumData] = useState([]);

  const generateTopAlbumData = async () => {
    try {
      const data = await fetchTopAlbums();
      setTopAlbumData(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    generateTopAlbumData();
  }, []);

  return (
    <div className="App">
      <NavBar />
      <Hero />
      <div className="card-container">
        {topAlbumData.map((item) => {
          return <Card key={item.id} data={item} type="album" />;
        })}
      </div>
    </div>
  );
}

export default App;
