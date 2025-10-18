import React from "react";
import { Search, ArrowRight, Package } from "lucide-react";

const NoAppsFound = ({ searchTerm }) => {
  return (
    <div className="min-h-[60vh] flex items-center justify-center px-4 py-12">
      <div className="max-w-md w-full text-center">
        <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-200">
          {/* Graphic */}
          <div className="relative mb-8">
            <div className="w-24 h-24 mx-auto mb-4 bg-yellow-100 rounded-full flex items-center justify-center">
              <Package className="w-10 h-10 text-yellow-500" />
            </div>
          </div>

          {/* Message */}
          <h1 className="text-2xl font-bold text-gray-800 mb-3">
            No Apps Found
          </h1>

          <p className="text-gray-600 mb-6">
            {searchTerm ? (
              <>
                Sorry, we couldn't find any apps matching{" "}
                <span className="font-semibold text-blue-600">"{searchTerm}"</span>. 
                The app might not be available yet or you might have entered a different name.
              </>
            ) : (
              "No apps are currently available. Please check back later for new applications."
            )}
          </p>

          {/* Suggestions */}
          <div className="space-y-3 mb-6">
            <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide">
              Suggestions
            </h3>
            <ul className="text-sm text-gray-600 text-left space-y-2">
              <li className="flex items-start gap-2">
                <ArrowRight className="w-4 h-4 text-gray-400 mt-0.5 flex-shrink-0" />
                Check the spelling of your search term
              </li>
              <li className="flex items-start gap-2">
                <ArrowRight className="w-4 h-4 text-gray-400 mt-0.5 flex-shrink-0" />
                Try using more general keywords
              </li>
              <li className="flex items-start gap-2">
                <ArrowRight className="w-4 h-4 text-gray-400 mt-0.5 flex-shrink-0" />
                Browse all available apps
              </li>
            </ul>
          </div>

          {/* Action Buttons */}
          <div className="space-y-3">
            {searchTerm && (
              <button
                onClick={() => window.location.reload()}
                className="btn btn-outline w-full border-gray-300 text-gray-700 hover:bg-gray-50 flex items-center justify-center gap-2"
              >
                <Search className="w-4 h-4" />
                Clear Search & Show All Apps
              </button>
            )}
          </div>          
        </div>
      </div>
    </div>
  );
};

export default NoAppsFound;