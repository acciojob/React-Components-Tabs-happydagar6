import React from 'react';

const App = () => {
  return (
    <div>
      {/* Global component with className 'tabs' */}
      <div className="tabs">
        {/* Each tab with className 'tab' and specific id */}
        <div className="tab" id="Home-tab">
          Home
        </div>
        <div className="tab" id="About-tab">
          About
        </div>
        <div className="tab" id="Features-tab">
          Features
        </div>
      </div>

      {/* Viewport with className 'viewport' and specific text */}
      <div className="viewport">
        Pages Go Here
      </div>
    </div>
  );
};

export default App;