import React from "react";
import { ErrorBoundary } from "react-error-boundary";

const Layout = ({
  header,
  workflow,
  signup,
}: {
  header?: React.ReactNode;
  workflow?: React.ReactNode;
  signup?: React.ReactNode;
}) => {
  return (
    <div className="flex flex-col h-screen border">
      <div>
        <React.Suspense fallback={<h1>loading...</h1>}>
          <ErrorBoundary
            fallback={
              <div className="h-full w-full bg-gray-100 border-2 flex justify-center items-center">
                This is skeleton
              </div>
            }
          >
            {header ? (
              header
            ) : (
              <div className="h-full w-full bg-gray-100 border-2 flex justify-center items-center">
                This is skeleton
              </div>
            )}
          </ErrorBoundary>
        </React.Suspense>
      </div>
      <div id="content" className="flex h-full border">
        <div className="border">
          <React.Suspense fallback={<h1>loading...</h1>}>
            <ErrorBoundary
              fallback={
                <div className="h-full w-full bg-gray-100 border-2 flex justify-center items-center">
                  This is skeleton
                </div>
              }
            >
              {workflow ? (
                workflow
              ) : (
                <div className="h-full w-full bg-gray-100 border-2 flex justify-center items-center">
                  This is skeleton
                </div>
              )}
            </ErrorBoundary>
          </React.Suspense>
        </div>
        <div className="flex-1 border">
          <React.Suspense fallback={<h1>loading...</h1>}>
            <ErrorBoundary
              fallback={
                <div className="h-full w-full bg-gray-100 border-2 flex justify-center items-center">
                  This is skeleton
                </div>
              }
            >
              {signup ? (
                signup
              ) : (
                <div className="h-full w-full bg-gray-100 border-2 flex justify-center items-center">
                  This is skeleton
                </div>
              )}
            </ErrorBoundary>
          </React.Suspense>
        </div>
      </div>
    </div>
  );
};

export default Layout;
