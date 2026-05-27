import Navbar from "@/app/(landing)/layoutjs/Navbar";
import Footer from "@/app/(landing)/layoutjs/Footer";

export default function LandingLayout({ children }) {
  return (
    <>
      <Navbar />
      <main className="flex-1 w-full flex flex-col bg-transparent">{children}</main>
      <Footer />
    </>
  );
}
