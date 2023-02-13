import React, { useState, useEffect } from "react";
import axios from "axios";
import { io } from "socket.io-client";

const WorkList = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:3000/data").then((res) => {
      setData(res.data);
    }).catch(err => console.log(err))
  }, []);
  const sendMessage = () => {
    const socket = io("http://localhost:3000",  { transports: ['websocket', 'polling', 'flashsocket'] });
    socket.on("message", msg => console.log(msg))
    socket.emit('message', "hello , I am from client")
  }

  const production = (e) => {
    const woEle = e.target.parentNode;
    const selectWO = woEle.closest('div.card').getAttribute("id")
    for (let i in data) {
      if (data[i].wo === selectWO) {
        data[i].isProducing = !(data[i].isProducing);
        sendMessage()
        axios.post("http://localhost:3000/data/post", data[i]).then(res => {
          const newData = res.data[0];
          return;
        })
      }
    }
  }

  const dataEle = Array.isArray(data) && data.map((item, index) => {
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
          <div className="row">

            {item.isProducing ? (
              <button  type="button" onClick={(e) => production(e)} className="btn btn-outline-primary btn-md">
                In Production
              </button>
            ) : (
              <button type="button" onClick={(e) => production(e)} className="btn btn-outline-secondary btn-md">
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
