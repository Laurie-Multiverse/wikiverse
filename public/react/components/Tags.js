import React from "react";

export const Tags = ({ tags }) => {
  return (
    <i>
      {'   Tags: '}
      {tags.map((tag, idx) => (
        <span key={idx}>
          {idx ? ", " : ""}
          {tag.name}
        </span>
      ))}
    </i>
  );
};
