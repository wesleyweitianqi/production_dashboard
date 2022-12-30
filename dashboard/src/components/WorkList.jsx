import React, {useState, useEffect} from "react";
import axios from "axios";


const WorkList = () => {
  const [data, setData] =useState([])
  useEffect(()=> {
    axios.get("http://localhost:3000/data").then((res) => {
      setData(res.data);
    });
  }, [data])
   const dataEle = data.map((item) => {
    return (
      <div
      key={item.wo}
        className="card border-primary mb-3"
        style={{ maxWidth: "18rem", margin: "1rem auto" }}
      >
        <div className="card-header">{item.wo}</div>
        <div className="card-body text-primary">
          <h5 className="card-title">{item.catalog}</h5>
          <p className="card-text">{item.description}</p>
        </div>
      </div>
    );
  });

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-8">{data ? dataEle : "isLoading"}</div>
      </div>
    </div>
  );
};

export default WorkList;
