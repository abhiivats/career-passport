import Image from "next/image";
import frontImage from "../../images/frontImage.jpg";
import React from "react";
import "./Front.css";

const Front = () => {
  return (
    <>
      <div className="frontImage">
        <h1 className="content">
          Team JP is dedicated to connecting talented individuals from diverse
          backgrounds with promising employment opportunities in Poland. As a
          subsidiary of Poland Jobs Sp.z.o.o., one of the largest payroll
          outsourcing firms in the country, we have established ourselves as a
          trusted name in the industry. Our primary mission is to bridge the gap
          between job seekers and employers, making the process seamless and
          efficient
        </h1>
      </div>
    </>
  );
};

export default Front;
