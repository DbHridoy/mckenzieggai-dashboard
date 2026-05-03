import React, { useState } from 'react';
import { 
  Plus, 
  ArrowLeft, 
  ArrowRight, 
  Brush, 
  Eraser, 
  Hand, 
  ZoomIn, 
  ZoomOut, 
  RotateCcw, 
  RotateCw, 
  X 
} from 'lucide-react';

export default function GuidedStepsPage() {
  const [activeStep, setActiveStep] = useState(1);
  const [brushSize, setBrushSize] = useState(24);
  const [intensity, setIntensity] = useState(65);

  const steps = [
    { id: 1, title: 'Step 1', subtitle: 'Prep & Prime' },
    { id: 2, title: 'Step 2', subtitle: 'Base Application' },
    { id: 3, title: 'Step 3', subtitle: 'Conceal & Correct' },
    { id: 4, title: 'Step 4', subtitle: 'Set & Bake' },
  ];

  return (
    <div className="animate-in fade-in duration-500 h-[calc(100vh-14rem)]">
      <div className="grid grid-cols-12 h-full gap-8">
        
        {/* Left Column: Steps Sequence */}
        <div className="col-span-3 bg-white rounded-3xl shadow-sm border border-slate-200 flex flex-col overflow-hidden">
          <div className="p-6 border-b border-slate-100 flex items-center justify-between">
            <h3 className="text-xl font-bold text-slate-800">Steps Sequence</h3>
            <button className="flex items-center gap-1 text-primary font-bold text-sm hover:underline border-none bg-transparent">
              <Plus size={16} /> Add Step
            </button>
          </div>
          <div className="flex-1 overflow-y-auto p-4 space-y-3">
            {steps.map((step) => (
              <button 
                key={step.id}
                onClick={() => setActiveStep(step.id)}
                className={`w-full p-4 rounded-2xl text-left transition-all border-none ${
                  activeStep === step.id 
                    ? 'bg-primary/10 border-2 border-primary !border-solid ring-1 ring-primary' 
                    : 'bg-slate-50 border border-transparent hover:bg-slate-100'
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className={`w-2 h-2 rounded-full ${activeStep === step.id ? 'bg-primary' : 'bg-slate-300'}`} />
                  <div>
                    <h4 className={`font-bold ${activeStep === step.id ? 'text-primary' : 'text-slate-700'}`}>{step.title}</h4>
                    <p className="text-xs text-slate-500 font-medium">{step.subtitle}</p>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Center Column: Interactive Workspace */}
        <div className="col-span-6 flex flex-col gap-6">
          <div className="flex-1 bg-white rounded-3xl shadow-sm border border-slate-200 relative overflow-hidden flex flex-col">
            {/* Toolbar */}
            <div className="absolute left-6 top-6 flex flex-col gap-3 z-10">
              <button className="p-3 bg-primary text-white rounded-xl shadow-lg border-none">
                <Brush size={24} />
              </button>
              <button className="p-3 bg-white text-slate-600 rounded-xl shadow-lg hover:bg-slate-50 transition-colors border-none">
                <Eraser size={24} />
              </button>
              <button className="p-3 bg-white text-slate-600 rounded-xl shadow-lg hover:bg-slate-50 transition-colors border-none">
                <Hand size={24} />
              </button>
            </div>

            {/* Image Area */}
            <div className="flex-1 flex items-center justify-center bg-slate-50 p-12">
              <div className="relative group">
                <img 
                  src="https://images.unsplash.com/photo-1512496015851-a90fb38ba796?q=80&w=800&auto=format&fit=crop" 
                  alt="Editor" 
                  className="max-h-[500px] rounded-2xl shadow-2xl"
                />
                {/* Simulated markup circle */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 border-4 border-dashed border-primary rounded-full bg-primary/10 backdrop-blur-sm" />
              </div>
            </div>

            {/* Bottom Controls */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-white/90 backdrop-blur-md px-6 py-3 rounded-2xl shadow-xl border border-slate-200 flex items-center gap-6">
              <div className="flex items-center gap-3 pr-6 border-r border-slate-200">
                <button className="text-slate-400 hover:text-primary transition-colors border-none bg-transparent"><ZoomOut size={20} /></button>
                <span className="text-sm font-bold text-slate-700 min-w-[40px] text-center">100%</span>
                <button className="text-slate-400 hover:text-primary transition-colors border-none bg-transparent"><ZoomIn size={20} /></button>
              </div>
              <div className="flex items-center gap-4">
                <button className="text-slate-400 hover:text-primary transition-colors border-none bg-transparent"><RotateCcw size={20} /></button>
                <button className="text-slate-400 hover:text-primary transition-colors border-none bg-transparent"><RotateCw size={20} /></button>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Step Instructions */}
        <div className="col-span-3 bg-white rounded-3xl shadow-sm border border-slate-200 p-8 flex flex-col gap-8">
          <div>
            <h3 className="text-xl font-bold text-slate-800 mb-6">Apply Loose Powder</h3>
            <div className="space-y-4">
              <label className="text-sm font-bold text-slate-600">Step Instructions</label>
              <div className="p-4 bg-slate-50 rounded-2xl text-sm text-slate-500 leading-relaxed font-medium">
                Gently press loose setting powder into the skin using a damp beauty sponge or a fluffy brush. Focus on areas where shine occurs naturally.
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="space-y-3">
              <label className="text-sm font-bold text-slate-600">Application Type</label>
              <div className="flex bg-slate-50 p-1 rounded-xl gap-1">
                <button className="flex-1 py-2 bg-white shadow-sm rounded-lg text-xs font-bold text-primary border-none">Light Set</button>
                <button className="flex-1 py-2 text-xs font-bold text-slate-400 hover:text-slate-600 border-none bg-transparent">Full Coverage</button>
              </div>
            </div>

            <div className="space-y-3">
              <label className="text-sm font-bold text-slate-600">Target Area</label>
              <div className="flex flex-wrap gap-2">
                <span className="flex items-center gap-1 bg-primary/10 px-3 py-1.5 rounded-full text-xs font-bold text-primary">
                  Under eyes <X size={12} />
                </span>
                <span className="flex items-center gap-1 bg-primary/10 px-3 py-1.5 rounded-full text-xs font-bold text-primary">
                  T-zone <X size={12} />
                </span>
                <button className="px-3 py-1.5 rounded-full border border-dashed border-slate-300 text-xs font-bold text-slate-400 flex items-center gap-1 hover:border-primary hover:text-primary transition-all bg-transparent">
                  <Plus size={12} /> Add Area
                </button>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex justify-between">
                <label className="text-sm font-bold text-slate-600">Powder Intensity</label>
                <span className="text-sm font-bold text-primary">{intensity}%</span>
              </div>
              <input 
                type="range" 
                value={intensity} 
                onChange={(e) => setIntensity(e.target.value)}
                className="w-full accent-primary" 
              />
            </div>

            <div className="space-y-4">
              <div className="flex justify-between">
                <label className="text-sm font-bold text-slate-600">Brush Size</label>
                <span className="text-sm font-bold text-primary">{brushSize}px</span>
              </div>
              <input 
                type="range" 
                value={brushSize} 
                onChange={(e) => setBrushSize(e.target.value)}
                className="w-full accent-primary" 
              />
            </div>
          </div>

          <div className="mt-auto flex gap-4 pt-4 border-t border-slate-100">
            <button className="flex-1 py-3 border border-slate-200 rounded-xl font-bold text-slate-500 hover:bg-slate-50 transition-colors bg-transparent">
              Back
            </button>
            <button className="flex-2 py-3 bg-primary text-white rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-primary/90 transition-colors border-none">
              Next Step <ArrowRight size={18} />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
