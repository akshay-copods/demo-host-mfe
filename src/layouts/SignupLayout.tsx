import React from "react";

const SignupLayout = ({
  header,
  signup,
}: {
  header: React.ReactNode;
  signup: React.ReactNode;
}) => {
  return (
    <>
      {header ? (
        header
      ) : (
        <div className="h-full w-full bg-gray-100 border-2 flex justify-center items-center">
          This is skeleton
        </div>
      )}
      {signup ? (
        signup
      ) : (
        <div className="h-full w-full bg-gray-100 border-2 flex justify-center items-center">
          This is skeleton
        </div>
      )}
    </>
  );
};

export default SignupLayout;
