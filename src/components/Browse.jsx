import React, { useEffect } from "react";
import Header from "./Header";

const Browse = () => {
  useEffect(() => {
    document.title = "Netflix | Browse";
  }, []);

  return (
    <div>
      <Header />
    </div>
  );
};

export default Browse;
