import React, { useState } from "react";
import Header from "./components/Header";
import { v4 as uuidv4 } from "uuid";
import "./index.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import FeedbackData from "./data/FeedbackData";
import FeedBackList from "./components/FeedBackList";
import State from "./components/State";
import FeedbackForm from "./components/FeedbackForm";
import About from "./pages/About";
import AboutIconLink from "./components/AboutIconLink";
import Post from "./components/Post";
import { FeedbackProvider } from "./context/FeedBackContext";

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
    <FeedbackProvider>
      <Router>
        <Header />
        <div className="container">
          <Routes>
            <Route
              exact
              path="/"
              element={
                <>
                  <FeedbackForm addAnewFeedback={addFeedback} />
                  <State feedback={feedback} />
                  <FeedBackList
                    feedback={feedback}
                    handleDelete={deleteFeedback}
                  />
                </>
              }
            />
            <Route path="/about" element={<About />} />
            <Route path="/post/:id/:name/*" element={<Post />} />
          </Routes>
        </div>
        <AboutIconLink />
      </Router>
    </FeedbackProvider>
  );
}

export default App;
