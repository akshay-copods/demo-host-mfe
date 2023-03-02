import React from "react";

interface WorkflowProps {
  header?: React.ReactNode;
  workflow?: React.ReactNode;
  signupBuilder?: React.ReactNode;
}

const WorkflowLayout = ({ header, signupBuilder, workflow }: WorkflowProps) => {
  return (
    <>
      {header ? (
        header
      ) : (
        <div className="h-14 w-full bg-gray-100 border-2 flex items-center px-5 py-4">
          Header
        </div>
      )}

      <div className="flex w-full h-full bg-red-300">
        <div className="w-1/4 h-full bg-gray-300 justify-center items-center flex">
          Workflow Module
        </div>
        <div className="w-3/4 h-full bg-gray-200">
          {signupBuilder ? (
            signupBuilder
          ) : (
            <div className="h-full w-full bg-gray-100 border-2 flex justify-center items-center">
              This is signup builder skeleton
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default WorkflowLayout;
