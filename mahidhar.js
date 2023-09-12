import React, { useState, useEffect } from "react";
import TodoRemaining from "../TodoRemaining/TodoRemaining";
import TodoDone from "../TodoDone/TodoDone";
import { DoneTodoProvider } from "../Context/DoneTodoContext";

const TodoDisplay = () => {
  const [isPreview, setIsPreview] = useState(true);

  if (isPreview) {
    return (
      <div>
        <DoneTodoProvider>
          <TodoRemaining />
        </DoneTodoProvider>
      </div>
    );
  } else {
    return (
      <DoneTodoProvider>
        <TodoDone />
      </DoneTodoProvider>
    );
  }
};

export default TodoDisplay;