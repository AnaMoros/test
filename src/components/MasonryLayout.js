import React from "react";
import PropTypes from "prop-types";
import Notes from "./Notes";

const sampleNotes = [
  {
    title: "title 1",
    content:
      "blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah",
  },
  {
    title: "title 2",
    content:
      "blah blah blah blah blah blah blah blah blah blah blah blah blah blah",
  },
  { title: "title 3", content: "blah blah blah blah blah blah blah" },
  {
    title: "title 4",
    content:
      "blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah",
  },
  { title: "title 5", content: "blah blah blah blah blah blah blah" },
  {
    title: "title 6",
    content:
      "blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah",
  },
  { title: "title 7", content: "blah blah blah blah blah blah blah" },
  { title: "title 8", content: "blah blah blah blah blah blah blah" },
];

const MasonryLayout = (props) => {
  const columnWrapper = {};
  const result = [];

  // create columns
  for (let i = 0; i < props.columns; i++) {
    columnWrapper[`column${i}`] = [];
  }

  // divide children into columns
  for (let i = 0; i < sampleNotes.length; i++) {
    const columnIndex = i % props.columns;
    const { title, content } = sampleNotes[i];

    columnWrapper[`column${columnIndex}`].push(
      <Notes key={i} margin={props.gap} title={title} content={content} />
    );
  }

  // wrap children in each column with a div
  for (let i = 0; i < props.columns; i++) {
    result.push(
      <article
        key={i}
        style={{
          marginLeft: `${i > 0 ? props.gap : 0}px`,
          flex: 1,
        }}
      >
        {columnWrapper[`column${i}`]}
      </article>
    );
  }

  return <section style={{ display: "flex" }}>{result}</section>;
};

MasonryLayout.propTypes = {
  columns: PropTypes.number.isRequired,
  gap: PropTypes.number.isRequired,
  // children: PropTypes.arrayOf(PropTypes.element),
};

MasonryLayout.defaultProps = {
  columns: 2,
  gap: 20,
};

export default MasonryLayout;
