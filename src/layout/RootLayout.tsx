
import { Outlet } from "react-router";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function RootLayout() {
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
