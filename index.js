const element = (
  // Write your code here.
  <div className="congrats-card-bg">
    <h1 className="heading">Congratulations</h1>
    <div className="congrats-card">
      <img
        className="Profile"
        src="https://assets.ccbp.in/frontend/react-js/congrats-card-profile-img.png"
        alt="profile-photo"
      />
      <h1 className="name">Kiran V</h1>
      <p className="institute-name">Vishnu Institute of Computer Education and Technology, Bhimavaram</p>
      <img
        className="watch-img"
        src="https://assets.ccbp.in/frontend/react-js/congrats-card-watch-img.png"
        alt="Watch"
      />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
