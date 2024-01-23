// filename: src/components/ProjectScorecard.js  

import React from 'react';

const ProjectScorecard = ({ project }) => {
  // Placeholder data structure for a project  
  // Replace with actual data from your backend  
  const placeholderProject = {
    name: 'Sample Project',
    status: 'In Progress',
    issuesOpen: 5,
    issuesClosed: 10,
    progress: 50 // percentage  
  };

  // Use 'project' prop if provided, otherwise use placeholder data  
  const currentProject = project || placeholderProject;

  return (
    <div className="project-scorecard">
      <h2>{currentProject.name}</h2>
      <p>Status: {currentProject.status}</p>
      <p>Open Issues: {currentProject.issuesOpen}</p>
      <p>Closed Issues: {currentProject.issuesClosed}</p>
      <p>Progress: {currentProject.progress}%</p>
      {/* Additional project details and visualizations */}
    </div>
  );
};

export default ProjectScorecard;  