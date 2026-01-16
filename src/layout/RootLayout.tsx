import { Outlet } from "react-router";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useEffect } from "react";

export default function RootLayout() {
  useEffect(() => {
    // Current version - eita apni manually change korben update anle
    const LATEST_VERSION = "1.205";
    const currentVersion = localStorage.getItem("app_version");

    if (currentVersion !== LATEST_VERSION) {
      localStorage.setItem("app_version", LATEST_VERSION);
      // Cache clear kore hard reload deya
      window.location.reload();
    }
  }, []);
  return (
    <main className="min-h-screen bg-[#fafafa] text-gray-900  selection:bg-green-100">
      {/* Header */}
      <Navbar />

      <Outlet />

      {/* footer */}
      <Footer />
    </main>
  );
}
