import React from "react";
import { Spinner } from "react-bootstrap";
import styles from "../styles/Asset.module.css";

const Asset = ({ spinner, src, message, width }) => {
  return (
    <div className={`${styles.Asset} p-4`}>
      {spinner && <Spinner animation="border" />}
      {src && <img width={width} src={src} alt={message} />}
      {message && <p className="mt-4">{message}</p>}
      {/* alle 3 Komponenten werden nur gerendert wenn es sie gibt */}
    </div>
  );
};

export default Asset;