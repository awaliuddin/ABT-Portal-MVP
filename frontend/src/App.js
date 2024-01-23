import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import Scorecard from './components/Scorecard'; // Add this line

function App() {
  // Example project data  
  const projectData = {
    projectName: 'Project Phoenix',
    status: 'In Progress',
    issuesOpen: 5,
    issuesClosed: 15,
    progress: 75
  };  
  
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        {/* Additional routes and components will go here */}
        <div className="App">
          <Scorecard
            projectName={projectData.projectName}
            status={projectData.status}
            issuesOpen={projectData.issuesOpen}
            issuesClosed={projectData.issuesClosed}
            progress={projectData.progress}
          />
          {/* Other components */}
        </div> 
      </Routes>
    </Router>
  );
}

export default App;