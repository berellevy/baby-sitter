import React from 'react';

const ApprovalNotice = ({approved}) => {
  return (
    <>
      {
        approved
          ? null
          : <div className="warning border-box">
            <h3>
              Notice!
            </h3>
            <p>
              You must be approved by an admin,
              until you are approved, you won't appear in search results
            </p>
          </div>
      }
      
    </>
  );
}

export default ApprovalNotice;
