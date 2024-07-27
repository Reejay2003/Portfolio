import Image from "next/image";
import HeroSection from "./components/HeroSection";
import Nav from "./components/Nav";
import About from "./components/About";
import Work from "./components/Work";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col mx-auto px-6 py-6 ">
      <Nav />
      <section id="hero"><HeroSection /></section>
      <section id="about"><About /></section>
      <section id="projects"><Work /></section>
      <section id="contact"><Contact /></section>
    </main>
  );
}
