import React, { useState, useEffect } from "react";
import axios from "axios";


const WorkList = () => {
  const [data, setData] = useState([]);
  
  useEffect(() => {
    axios.get("http://localhost:5000/data").then((res) => {
      setData(res.data);
    }).catch(err=> console.log(err))
  }, []);

  const production = (e)=> {
    const woEle = e.target.parentNode;
    const selectWO = woEle.closest('div.card').getAttribute("id")
    for(let i in data) {
      if (data[i].wo === selectWO) {
        data[i].isProducing = !(data[i].isProducing);
        console.log(data[i].isProducing)
        axios.post("http://localhost:5000/data/post", data[i]).then(res => {
          const newData = res.data;
          console.log("🚀 ~ file: WorkList.jsx:22 ~ axios.post ~ newData", newData)
          setData([...data, newData])
        })
      }
    }
  }

  const dataEle = Array.isArray(data) && data.map((item,index) => {
    return (
      <div
        id={item.wo}
        key={index}
        className="card border-primary mb-3"
        style={{ maxWidth: "18rem", margin: "1rem auto" }}
      >
        <div className="card-header">{item.wo}</div>
        <div className="card-body text-primary">
          <h5 className="card-title">{item.catalog}</h5>
          <p className="card-text">{item.description}</p>
          <p className="card-text">
            {/* Require_date: {item.requiredDate !==null && item.requiredDate.substr(0, 10)} */}
          </p>
          <div>

          {item.isProducing ? (
            <button type="button" onClick={(e)=>production(e)} className="btn btn-outline-primary btn-md">
              In Production
            </button>
          ) : (
            <button type="button" onClick={(e)=>production(e)} className="btn btn-outline-secondary btn-md">
              Start Production
            </button>
          )}
          <button type="button" className="btn btn-outline-success btn-md">
              Finish
            </button>
          </div>
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
