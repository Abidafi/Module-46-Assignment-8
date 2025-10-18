import React from "react";
import { Link } from "react-router";
import NavBar from "../Components/NavBar";
import Footer from "../Components/Footer";
import { Home, Search, ArrowRight } from "lucide-react";

const NotFoundPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex flex-col">
      <NavBar />

      <main className="flex-1 flex items-center justify-center px-4 py-12">
        <div className="max-w-lg w-full text-center">
          <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-200">
            {/* 404 Graphic */}
            <div className="relative mb-8">
              <div className="text-8xl font-bold text-gray-300 mb-2">404</div>
              <div className="w-24 h-24 mx-auto mb-4 bg-purple-100 rounded-full flex items-center justify-center">
                <Search className="w-10 h-10 text-purple-500" />
              </div>
            </div>

            {/* Message */}
            <h1 className="text-3xl font-bold text-gray-800 mb-3">
              Page Not Found
            </h1>

            <p className="text-gray-600 mb-8 text-lg">
              Sorry, we couldn't find the page you're looking for. The page
              might have been moved, deleted, or you entered an incorrect URL.
            </p>

            {/* Quick Actions */}
            <div className="space-y-4 mb-8">
              <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide">
                Quick Links
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <Link
                  to="/apps"
                  className="group flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-gray-600" />
                </Link>

                <Link
                  to="/installation"
                  className="group flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-gray-600" />
                </Link>
              </div>
            </div>

            {/* Main Action Button */}
            <Link to="/">
              <button className="btn btn-lg w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white border-none hover:from-blue-700 hover:to-purple-700 flex items-center justify-center gap-2">
                <Home className="w-5 h-5" />
                Back to Homepage
              </button>
            </Link>

            {/* Support */}
            <div className="mt-6 pt-6 border-t border-gray-200">
              <p className="text-gray-500 text-sm">
                Need help?{" "}
                <a
                  href="mailto:support@hero.com"
                  className="text-blue-600 hover:underline font-medium"
                >
                  Contact our support team
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

export default NotFoundPage;
