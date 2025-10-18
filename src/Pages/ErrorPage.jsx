import React from "react";
import { useRouteError, Link } from "react-router";
import NavBar from "../Components/NavBar";
import Footer from "../Components/Footer";
import { AlertTriangle, RefreshCw } from "lucide-react";

const ErrorPage = () => {
  const error = useRouteError();
  return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex flex-col">
        <NavBar />

        <main className="flex-1 flex items-center justify-center px-4 py-12">
          <div className="max-w-md w-full text-center">
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-200">
              {/* Error Icon */}
              <div className="w-20 h-20 mx-auto mb-6 bg-red-100 rounded-full flex items-center justify-center">
                <AlertTriangle className="w-10 h-10 text-red-500" />
              </div>

              {/* Error Title */}
              <h1 className="text-2xl font-bold text-gray-800 mb-3">
                Oops! Something went wrong
              </h1>

              {/* Error Message */}
              <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
                <p className="text-red-700 text-sm font-medium">
                  {error?.statusText ||
                    error?.message ||
                    "An unexpected error occurred"}
                </p>
                {error?.status && (
                  <p className="text-red-600 text-xs mt-1">
                    Error Code: {error.status}
                  </p>
                )}
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Link to="/">
                  <button className="btn btn-primary bg-gradient-to-r from-blue-600 to-purple-600 text-white border-none hover:from-blue-700 hover:to-purple-700 flex items-center gap-2">
                    <Home className="w-4 h-4" />
                    Back to Home
                  </button>
                </Link>

                <button
                  onClick={() => window.location.reload()}
                  className="btn btn-outline border-gray-300 text-gray-700 hover:bg-gray-50 flex items-center gap-2"
                >
                  <RefreshCw className="w-4 h-4" />
                  Try Again
                </button>
              </div>

              {/* Support Info */}
              <div className="mt-6 pt-6 border-t border-gray-200">
                <p className="text-gray-500 text-sm">
                  If the problem persists, please{" "}
                  <a
                    href="mailto:support@hero.com"
                    className="text-blue-600 hover:underline"
                  >
                    contact support
                  </a>
                </p>
              </div>
            </div>
          </div>
        </main>

        <Footer />
      </div>
  );
};

export default ErrorPage;
