import React from "react";
import { Box } from "@mui/material";

const Comment = ({ comments }) => {
  return (
    <>
      {comments.map((item, index) => {
        return (
          <div
            key={index}
            style={{
              display: "flex",
              alignItems: "center",
              cursor: "pointer",
              gap: "15px",
            }}
          >
            <div
              style={{
                width: "50px",
                height: "50px",
                borderRadius: "50%",
                border: "2px solid #000",
                overflow: "hidden",
              }}
            >
              <img
                src={item.userImg} // Replace with the actual profile image source
                alt="Profile"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  cursor: "pointer",
                }}
                // onClick={handleNameClick}
              />
            </div>
            <div>
              <p
                style={{
                  fontSize: "14px",
                  cursor: "pointer",
                  display: "block",
                  margin: "0px",
                }}
                // onClick={handleNameClick}
              >
                {item.userName}
              </p>
              <p
                style={{
                  fontSize: "12px",
                  color: "#6e6b6a",
                  cursor: "pointer",
                  margin: "0px",
                }}
              >
                {item.comment}
              </p>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Comment;
