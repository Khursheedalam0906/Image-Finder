import "./App.css";
import Navbar from "./components/Navbar";
import BreadCrumb from "./components/BreadCrumb";
import Images from "./components/Images";
import { useEffect, useState } from "react";
import axios from "axios";
import SnackBar from "./components/SnackBar";

function App() {
  const [text, setText] = useState("");
  const [count, setCount] = useState(10);
  const [data, setData] = useState([]);
  const [open, setOpen] = useState(false);

  console.log(text);
  console.log(count);

  useEffect(() => {
    if (count < 3 || count > 200) {
      setOpen(true);
      return;
    }
    setOpen(false);
    const getData = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_API_URL}/?key=${process.env.REACT_APP_API_KEY}&q=${text}&image_type=photo&per_page=${count}&safe_search=true`
        );
        console.log(response.data.hits);
        setData(response.data.hits);
      } catch (error) {
        console.log(error.message);
      }
    };
    getData();
  }, [count, text]);

  return (
    <>
      <Navbar />
      <BreadCrumb setText={setText} setCount={setCount} />
      <Images data={data} />
      <SnackBar open={open} setOpen={setOpen} />
    </>
  );
}

export default App;
