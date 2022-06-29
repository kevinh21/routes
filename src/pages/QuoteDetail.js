import React from "react";
import { useParams, Route } from "react-router-dom";
import { Fragment } from "react/cjs/react.production.min";
import Comments from "../components/comments/Comments";

const QuoteDetail = (props) => {
  const params = useParams();
  return (
    <Fragment>
      <h1> Quote Detail Page</h1>
      <p>{params.quoteId}</p>
      <Route path={`/quotes/${params.quoteId}/comments`}>
        <Comments />
      </Route>
    </Fragment>
  );
};

export default QuoteDetail;
