import Header from "./components/header";
import Hero from "./components/hero";
import Features from "./components/features";
import Footer from "./components/footer";

export default function Page() {
  return (
    <main className="min-h-screen bg-[#fef7f1] text-black">
      <Header />
      <Hero />
      <Features />
      <Footer />
    </main>
  );
}
