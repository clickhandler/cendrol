import React, { useEffect, useState } from "react";
import "../styles/GalleryCards.css";
import CustomizedDialogs from "../Pages/Modal";

const GalleryCard = () => {
  const [data, setData] = useState([]);
  const [cardcontent, setCardcontent] = useState({});
  const [loading, setLoading] = useState(false);
  const [contentloading, setContentLoading1] = useState(false);
  const [value, SetValue] = useState("");

  useEffect(() => {
    
    setLoading(true);
    fetch(`https://api.chucknorris.io/jokes/categories`)
      .then((res) => res.json())
      .then((res) => {
        setData(res);
        setLoading(false);
      })
      .catch((Err) => {});
  }, []);

  const showdata = (item) => {
    setContentLoading1(true);
    fetch(`https://api.chucknorris.io/jokes/random?category=${item}`)
      .then((res) => res.json())
      .then((res) => {
        setCardcontent(res);
        SetValue(item);
        setContentLoading1(false);
      })
      .catch((Err) => {});
  };

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  return (
    <>
      <CustomizedDialogs
        handleopen={open}
        handleclose={!open}
        content={cardcontent}
        onClick={() => showdata(value)}
        setTrigger={setOpen}
        loading={contentloading}
      />
      {loading ? (
        <div style={{ display: "flex", alignItems: "center", height: "100vh" }}>
          <img
            style={{ width: "200px", height: "auto", margin: "auto" }}
            src="https://media.tenor.com/On7kvXhzml4AAAAi/loading-gif.gif"
            alt="Loading"
          />
        </div>
      ) : (
        <div className="container" onClick={handleClickOpen}>
          {data &&
            data.map((item, index) => {
              return (
                <>
                  <div
                    className="content"
                    key={index}
                    onClick={() => showdata(item)}
                  >
                    <h1 style={{ color: "#1E3A8A" }}>
                      {item.charAt(0).toUpperCase() + item.slice(1)}
                    </h1>
                    <p style={{ color: "#6B21A8" }}>
                      Unlimited Jokes On{" "}
                      {item.charAt(0).toUpperCase() + item.slice(1)}
                    </p>
                  </div>
                </>
              );
            })}
        </div>
      )}
    </>
  );
};

export default GalleryCard;
