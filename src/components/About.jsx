import { useState } from "react";

export default function About() {
  const [myStyle, setMyStyle] = useState({
    color: "black",
    backgroundColor: "white",
  });

  const [btntext, setBtnText] = useState("Enable Dark Mode");

  const toggleStyle = () => {
    if (myStyle.color === "black") {
      setMyStyle({
        color: "white",
        backgroundColor: "black",
        border: "1px solid white",
      });
      setBtnText("Enable Light Mode");
    } else {
      setMyStyle({
        color: "black",
        backgroundColor: "white",
      });
      setBtnText("Enable Dark Mode");
    }
  };

  return (
    <div className="container" style={myStyle}>
      <h1 className="my-2">About TextUtils</h1>
      <div className="accordion" id="accordionExample">
        {/* App Information */}
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button"
              style={myStyle}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              What is TextUtils?
            </button>
          </h2>
          <div
            style={myStyle}
            id="collapseOne"
            className="accordion-collapse collapse show"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <strong>TextUtils is a powerful text processing tool</strong>{" "}
              designed to help users manipulate and format text efficiently.
              Whether you need to convert text to uppercase, remove extra
              spaces, or enhance readability with dark mode, TextUtils offers a
              **simple and intuitive** way to handle text-related tasks.
            </div>
          </div>
        </div>

        {/* Features */}
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              style={myStyle}
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              Key Features
            </button>
          </h2>
          <div
            id="collapseTwo"
            style={myStyle}
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <ul>
                <li>
                  <strong>Text Transformation:</strong> Convert text to
                  uppercase, lowercase, or capitalize sentences effortlessly.
                </li>
                <li>
                  <strong>Whitespace Optimization:</strong> Remove unnecessary
                  spaces for cleaner text.
                </li>
                <li>
                  <strong>Copy Functionality:</strong> Quickly copy formatted
                  text with a single click.
                </li>
                <li>
                  <strong>Dark Mode Support:</strong> Enhance readability and
                  reduce eye strain with an easy toggle.
                </li>
                <li>
                  <strong>Clear chat Support:</strong> Instantly clears all text
                  from the input field, ensuring a quick reset for new input.
                </li>
                <li>
                  <strong>Instant Alerts:</strong> Get real-time notifications
                  for actions performed.
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Purpose */}
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              style={myStyle}
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              Why Use TextUtils?
            </button>
          </h2>
          <div
            id="collapseThree"
            style={myStyle}
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              TextUtils is designed for{" "}
              <i>writers, students, developers, and professionals</i> who need a
              fast, lightweight, and user-friendly tool for handling text
              formatting.
              <br />
              <br />
              Unlike traditional text editors, TextUtils focuses on{" "}
              <i>speed, efficiency, and ease of use</i>, making it an essential
              tool for quick text modifications without distractions.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
