import { useState } from "react";

function Accordion() {
  const [isExpanded, setIsExpanded] = useState(false);
  const buttonLabel = isExpanded ? "Hide" : "Show";
  return (
    <div>
      <h2>Title</h2>
      <div>
        <p>I am some content that is always visible!</p>
      </div>
      {isExpanded && (
        <div>
          <p>I am some content that lives inside this accordion!</p>
        </div>
      )}
      <button onClick={() => setIsExpanded(!isExpanded)}>{buttonLabel}</button>
    </div>
  );
}

export default Accordion;
