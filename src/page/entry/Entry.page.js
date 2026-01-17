import React from "react";
import { Card } from "react-bootstrap";
import { Logincomp } from "../../component/login/Logincomp";
import "./entry.style.css";

export const Entry = () => {
  return (
    <div className="entry-page bg-info d-flex justify-content-center align-items-center">
      <Card className="form-box p-4">
        <Card.Body>
          <Logincomp />
        </Card.Body>
      </Card>
    </div>
  );
};
