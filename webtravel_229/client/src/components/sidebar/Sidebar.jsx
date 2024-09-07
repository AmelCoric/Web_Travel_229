import axios from "axios";
import { useEffect, useState } from "react";
import "./sidebar.css";

export default function Sidebar() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const getCategories = async () => {
      const res = await axios.get("/categories");
      setCategories(res.data);
    };
    getCategories();
  }, []);

  return (
    <div className="sidebar">
     
    </div>
  );
}
