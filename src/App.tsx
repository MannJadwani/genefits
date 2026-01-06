import { Header } from './components/layout';
import { Hero } from './components/hero';
import { SmoothCursor, SmoothScroll } from './components/ui';
import { 
  SocialProof, 
  HowItWorks, 
  Benefits, 
  Features, 
  Trust, 
  WaitlistForm, 
  FAQ, 
  Footer 
} from './components/sections';

function App() {
  return (
    <SmoothScroll>
      <div className="min-h-screen bg-cream cursor-none">
        <SmoothCursor />
        <Header />
        <main>
          <Hero />
          <SocialProof />
          <HowItWorks />
          <Benefits />
          <Features />
          <Trust />
          <WaitlistForm />
          <FAQ />
        </main>
        <Footer />
      </div>
    </SmoothScroll>
  );
}

export default App;
