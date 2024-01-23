// filename: src/components/Scorecard.js  
  
import React from 'react';  
import PropTypes from 'prop-types';  
  
const Scorecard = ({ projectName, status, issuesOpen, issuesClosed, progress }) => {  
  return (  
    <div className="scorecard">  
      <h3>{projectName}</h3>  
      <p>Status: {status}</p>  
      <p>Issues Open: {issuesOpen}</p>  
      <p>Issues Closed: {issuesClosed}</p>  
      <div className="progress-bar-container">  
        <div className="progress-bar" style={{ width: `${progress}%` }}>  
          {progress}%  
        </div>  
      </div>  
    </div>  
  );  
};  
  
Scorecard.propTypes = {  
  projectName: PropTypes.string.isRequired,  
  status: PropTypes.string.isRequired,  
  issuesOpen: PropTypes.number.isRequired,  
  issuesClosed: PropTypes.number.isRequired,  
  progress: PropTypes.number.isRequired  
};  
  
export default Scorecard;  