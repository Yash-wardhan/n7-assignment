import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function LandingLayout({ children }) {
  return (
    <>
      <Navbar />
      <main className="flex-1 w-full flex flex-col bg-transparent">{children}</main>
      <Footer />
    </>
  );
}
