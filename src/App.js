import React, { useState } from "react";
import Header from "./components/Header";
import { v4 as uuidv4 } from "uuid";
import "./index.css";

import FeedbackData from "./data/FeedbackData";
import FeedBackList from "./components/FeedBackList";
import State from "./components/State";
import FeedbackForm from "./components/FeedbackForm";
import About from "./pages/About";

function App() {
  const [feedback, setFeedBack] = useState(FeedbackData);
  const deleteFeedback = (id) => {
    if (window.confirm("Are you sure delete this?")) {
      setFeedBack(feedback.filter((item) => item.id !== id));
    }
  };
  const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4();
    setFeedBack([newFeedback, ...feedback]);
    // console.log(newFeedback);
  };
  return (
    <>
      <Header />
      <div className="container">
        <FeedbackForm addAnewFeedback={addFeedback} />
        <State feedback={feedback} />
        <FeedBackList feedback={feedback} handleDelete={deleteFeedback} />
        <About />
      </div>
    </>
  );
}

export default App;
