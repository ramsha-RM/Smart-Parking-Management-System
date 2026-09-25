import React, { useEffect, useState } from "react";
import { Menu } from "lucide-react";
import SearchInput from "./common/SearchInput";
import "./navbar.css"
export default function Navbar({ onToggleSidebar }) {
  const [query, setQuery] = useState("");
  const [now, setNow] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setNow(new Date()), 30000);
    return () => clearInterval(timer);
  }, []);

  const time = now.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });

  return (
    <header className="navbar">
      <button className="navbar__toggle" onClick={onToggleSidebar} aria-label="Toggle sidebar">
        <Menu size={18} />
      </button>

      <div className="navbar__brand">
        <span className="navbar__mark">P</span>
        {/* <span>Gatehouse</span> */}
        <span>ParkingSlot</span>
      </div>

      {/* <div className="navbar__search">
        <SearchInput value={query} onChange={setQuery} placeholder="Search a plate number" />
      </div> */}

      <div className="navbar__status">
        <span className="navbar__pulse" />
        Live &middot; {time}
      </div>
    </header>
  );
}
