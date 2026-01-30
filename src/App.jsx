import { Hero } from "./app/components/Hero";
import { Navigation } from "./app/components/Navigation";
import { Projects } from "./app/components/Projects";
import { About } from "./app/components/About";
import { Contact } from "./app/components/Contact";
// import { Background } from "./app/components/Background";
import { FloatingPixels } from "./app/components/FloatingPixels";
// import { Score } from "./app/components/Score";
import { PowerUps } from "./app/components/PowerUps";

export default function App() {
  return (
    <div className="size-full bg-[#5C94FC] overflow-x-hidden">
      <FloatingPixels />
      {/* <Background /> */}
      {/* <Score /> */}
      <PowerUps />
      <Navigation />
      <main>
        <Hero />  
        <Projects />
        <About />
        <Contact />
      </main>
    </div>
  );
}