import React from "react";
import QuoteList from "../components/quotes/QuoteList";

const DummyQuotes = [
  { id: "Quote 1", author: "Kev", text: "Learning React is fun!" },
  { id: "Quote 2", author: "Kevin", text: "Learning React is great!" },
];

const AllQuotes = () => {
  return <QuoteList quotes={DummyQuotes} />;
};

export default AllQuotes;
