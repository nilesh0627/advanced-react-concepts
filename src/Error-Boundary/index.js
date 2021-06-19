import React from "react";
import Chat from "./Chat";
import News from "./News";
import ErrorBoundary from "./ErrorBoundary";

// If the application is crashing in the development environment, it is expected behavior so that a developer can fix the issue.
// ErrorBoundaries are supposed to work without crashes only in the production environment.
function index() {
  return (
    <>
      <h2>Error Boundary Concept</h2>
      <ErrorBoundary>
        <News />
      </ErrorBoundary>

      <hr />
      <hr />
      <ErrorBoundary>
        <Chat />
      </ErrorBoundary>
    </>
  );
}

export default index;
