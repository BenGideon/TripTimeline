"use client";

import Link from "next/link";
import { useAuth } from "@/components/AuthProvider";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
  const { user, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading && user) {
      router.push("/dashboard");
    }
  }, [user, loading, router]);
  return (
    <div className="min-h-screen flex flex-col bg-bg">
      {/* Navigation */}
      <nav className="glass sticky top-0 z-50 px-6 py-4 border-b border-secondary border-opacity-20">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-2xl font-bold travel-gradient bg-clip-text text-transparent">
            ✈️ TripTimeline
          </div>
          <div className="space-x-4">
            <Link
              href="/auth/login"
              className="text-primary hover:text-secondary transition-colors font-medium"
            >
              Sign In
            </Link>
            <Link
              href="/auth/signup"
              className="glass text-primary px-4 py-2 rounded-full hover:bg-accent hover:bg-opacity-20 transition-all font-medium"
            >
              Get Started
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative travel-gradient text-white py-32 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-10 w-72 h-72 bg-white rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-accent rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-secondary rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-4000"></div>
        </div>

        <div className="container mx-auto px-6 text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-6xl md:text-7xl font-bold mb-8 text-white leading-tight">
              Plan Your Perfect Trip
            </h1>
            <p className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto text-white/90 leading-relaxed">
              Create stunning travel itineraries with our intuitive timeline
              interface. Organize activities, track expenses, and never miss a
              moment of your adventure.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                href="/auth/signup"
                className="group btn-primary px-10 py-4 rounded-full font-bold text-lg hover:bg-opacity-90 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center gap-2"
              >
                Start Planning Free
                <svg
                  className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </Link>
              <Link
                href="#features"
                className="group glass px-10 py-4 rounded-full font-bold text-lg hover:bg-accent hover:bg-opacity-20 transition-all duration-300 flex items-center gap-2 text-primary"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1.5a1.5 1.5 0 011.5 1.5V13a1.5 1.5 0 01-3 0M15 10h1.5a1.5 1.5 0 011.5 1.5V13a1.5 1.5 0 01-3 0"
                  />
                </svg>
                Watch Demo
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 bg-bg">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold text-primary mb-6">
              Why Choose TripTimeline?
            </h2>
            <p className="text-xl text-secondary max-w-3xl mx-auto">
              Experience the future of travel planning with our innovative
              features designed to make your journey unforgettable.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {/* Feature 1 */}
            <div className="group relative glass p-8 rounded-xl shadow-md hover:shadow-lg transition-all duration-500 transform hover:-translate-y-2">
              <div className="absolute inset-0 bg-secondary bg-opacity-5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center text-white text-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  📅
                </div>
                <h3 className="text-2xl font-bold text-primary mb-4">
                  Visual Timeline
                </h3>
                <p className="text-secondary leading-relaxed mb-6">
                  See your entire trip at a glance with our intuitive timeline
                  view. Drag and drop to rearrange activities effortlessly.
                </p>
                <div className="flex items-center text-primary font-semibold group-hover:text-secondary">
                  Learn more
                  <svg
                    className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="group relative glass p-8 rounded-xl shadow-md hover:shadow-lg transition-all duration-500 transform hover:-translate-y-2">
              <div className="absolute inset-0 bg-accent bg-opacity-5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-secondary to-accent rounded-xl flex items-center justify-center text-white text-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  🧳
                </div>
                <h3 className="text-2xl font-bold text-primary mb-4">
                  Smart Packing
                </h3>
                <p className="text-secondary leading-relaxed mb-6">
                  Never forget essentials with our intelligent packing lists.
                  Get AI-powered suggestions based on your destination and
                  activities.
                </p>
                <div className="flex items-center text-primary font-semibold group-hover:text-secondary">
                  Learn more
                  <svg
                    className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="group relative glass p-8 rounded-xl shadow-md hover:shadow-lg transition-all duration-500 transform hover:-translate-y-2">
              <div className="absolute inset-0 bg-primary bg-opacity-5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center text-white text-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  🤖
                </div>
                <h3 className="text-2xl font-bold text-primary mb-4">
                  AI-Powered
                </h3>
                <p className="text-secondary leading-relaxed mb-6">
                  Let our advanced AI help you create the perfect itinerary,
                  optimize routes, and discover hidden gems at your destination.
                </p>
                <div className="flex items-center text-primary font-semibold group-hover:text-secondary">
                  Learn more
                  <svg
                    className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 travel-gradient overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-10 left-1/4 w-32 h-32 bg-white rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
          <div className="absolute bottom-10 right-1/4 w-32 h-32 bg-accent rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-2000"></div>
        </div>

        <div className="container mx-auto px-6 text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-5xl font-bold text-white mb-8">
              Ready to Plan Your Next Adventure?
            </h2>
            <p className="text-xl text-white/80 mb-12 max-w-3xl mx-auto leading-relaxed">
              Join thousands of travelers who use TripTimeline to create
              unforgettable journeys. Start planning your dream trip today -
              completely free!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                href="/auth/signup"
                className="group btn-primary px-12 py-5 rounded-full font-bold text-xl hover:bg-opacity-90 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center gap-3"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                  />
                </svg>
                Create Your First Trip - Free!
                <svg
                  className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </Link>
            </div>
            <p className="text-white/70 text-sm mt-6">
              No credit card required • Free forever
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
