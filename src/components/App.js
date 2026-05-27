import React from 'react';

const App = () => {
  return (
    <div>
      {/* Global component with className 'tabs' */}
      <div className="tabs">
        {/* Changed 'tab' to 'Tab' in the IDs to match Cypress strictly */}
        <div className="tab" id="Home-Tab">
          Home
        </div>
        <div className="tab" id="About-Tab">
          About
        </div>
        <div className="tab" id="Features-Tab">
          Features
        </div>
      </div>

      {/* Viewport with className 'viewport' */}
      <div className="viewport">
        Pages Go Here
      </div>
    </div>
  );
};

// Agar tumhari file ka naam Tabs.js hai, toh 'App' ki jagah 'Tabs' likh kar export karna
export default App;