import React from "react";
import { findByLabelText } from "@testing-library/dom";
import { Link, Route } from "react-router-dom";
import MacBookPro from "./macbookpro";

export const Mac = () => {
  return (
    <div>
      <ul>
        <Link to={`/Mac/MacBook-Air`}>MacBook Air</Link>
        <Link to={`/Mac/MacBook-Pro-13"`}>MacBook Pro 13"</Link>
        <Link to={`/Mac/MacBook-Pro-16"`}>MacBook Pro 16"</Link>
        <Link to={`/Mac/Mac`}>Mac</Link>
        <Link to={`/Mac/Mac-Pro`}>Mac Pro</Link>
        <Link to={`/Mac/Mac-Mini`}>Mac Mini</Link>
      </ul>
    </div>
  );
};
