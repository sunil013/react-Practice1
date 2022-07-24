const element = (
  <div className="bgContainer">
    <h1 className="superHeading">Super Over League</h1>
    <div className="imgContainer">
      <Img
        className="images"
        src="https://assets.ccbp.in/frontend/react-js/rcb-img.png"
      />
      <Img
        className="images"
        src="https://assets.ccbp.in/frontend/react-js/csk-img.png"
      />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
