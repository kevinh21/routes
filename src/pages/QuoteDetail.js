import React from "react";
import { useParams, Route } from "react-router-dom";
import { Fragment } from "react/cjs/react.production.min";
import HighlightedQuote from "../components/quotes/HighlightedQuote";
import Comments from "../components/comments/Comments";

const DummyQuotes = [
  { id: "q1", author: "Kev", text: "Learning React is fun!" },
  { id: "q2", author: "Kevin", text: "Learning React is great!" },
];

const QuoteDetail = () => {
  const params = useParams();

  const quote = DummyQuotes.find((quote) => quote.id === params.quoteId);

  if (!quote) {
    return <p>No Quote Found!</p>;
  }

  console.log(quote);
  return (
    <Fragment>
      <HighlightedQuote text={quote.text} author={quote.author} />
      <Route path={`/quotes/${params.quoteId}/comments`}>
        <Comments />
      </Route>
    </Fragment>
  );
};

export default QuoteDetail;
