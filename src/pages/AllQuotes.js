import React from "react";
import QuoteList from "../components/quotes/QuoteList";

const DummyQuotes = [
  { id: "q1", author: "Max", text: "Learning React is fun!" },
  { id: "q2", author: "Maximilian", text: "Learning React is great!" },
];

const AllQuotes = () => {
  return <QuoteList quotes={DummyQuotes} />;
};

export default AllQuotes;
