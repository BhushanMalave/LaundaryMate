import React from "react";
import { Breadcrumbs, Link, Typography } from "@mui/material";
import "./BreadCrumb.css";

export default function BreadCrumb({ title, children }) {
  return (
    <div className="bread-crumb-container">
      <Breadcrumbs aria-label="breadcrumb">
        <Link
          underline="none"
          color="#0074BC"
          href="/"
          className="bread-crumb-link"
        >
          Dashboard
        </Link>
        {children}
        <Typography className="page-title">{title}</Typography>
      </Breadcrumbs>
    </div>
  );
}
