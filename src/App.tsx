import { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ScriptForm from './components/ScriptForm';
import ScriptOutput from './components/ScriptOutput';
import Footer from './components/Footer';
import { generateScript } from './utils/scriptGenerator';
import type { ScriptConfig } from './types';

function App() {
  const [generatedScript, setGeneratedScript] = useState('');

  const handleGenerate = (config: ScriptConfig) => {
    const script = generateScript(config);
    setGeneratedScript(script);

    setTimeout(() => {
      const outputSection = document.querySelector('#output-section');
      if (outputSection) {
        outputSection.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  return (
    <div className="min-h-screen bg-slate-50">
      <Header />
      <Hero />
      <ScriptForm onGenerate={handleGenerate} />
      <div id="output-section">
        <ScriptOutput script={generatedScript} />
      </div>
      <Footer />
    </div>
  );
}

export default App;
