import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Plus, ChevronRight, ChevronLeft, Search, MoreVertical, 
  Layers, Clock, Wand2, MousePointer2, Eraser, Move, 
  ZoomIn, ZoomOut, RotateCcw, Undo2, Redo2, Grid3X3, Trash2
} from 'lucide-react';

const steps = [
  { id: 1, title: 'Step 1', subtitle: 'Prep & Prime' },
  { id: 2, title: 'Step 2', subtitle: 'Base Application' },
  { id: 3, title: 'Step 3', subtitle: 'Conceal & Correct' },
  { id: 4, title: 'Step 4', subtitle: 'Set & Bake' },
];

export default function CreateGuidedStepPage() {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);
  const [activeStepId, setActiveStepId] = useState(1);
  const [showEditor, setShowEditor] = useState(false);

  // Form State for Step 1
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    product: '',
    category: ''
  });

  const handleNext = () => {
    if (!showEditor) {
      setShowEditor(true);
    } else if (activeStepId < 4) {
      setActiveStepId(prev => prev + 1);
    } else {
      // Finalize logic
      navigate('/steps');
    }
  };

  const handleBack = () => {
    if (activeStepId > 1) {
      setActiveStepId(prev => prev - 1);
    } else {
      setShowEditor(false);
    }
  };

  if (!showEditor) {
    return (
      <div className="animate-in fade-in duration-500 max-w-4xl mx-auto py-10">
        <div className="bg-white rounded-[2rem] border border-slate-100 p-10 space-y-8 shadow-sm">
          <div className="space-y-2 text-center">
            <h2 className="text-3xl font-black text-slate-800">Create Guided Step</h2>
            <p className="text-slate-400 font-medium">Define the core details of your new makeup tutorial flow.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
            <div className="space-y-2">
              <label className="text-sm font-bold text-slate-500 ml-1">Guide Title</label>
              <input 
                type="text" 
                placeholder="e.g. Natural Glow Daily Routine"
                className="w-full px-6 py-4 rounded-2xl bg-slate-50 border-none focus:ring-2 focus:ring-primary/20 transition-all font-medium"
                value={formData.title}
                onChange={(e) => setFormData({...formData, title: e.target.value})}
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-bold text-slate-500 ml-1">Category</label>
              <select 
                className="w-full px-6 py-4 rounded-2xl bg-slate-50 border-none focus:ring-2 focus:ring-primary/20 transition-all font-medium appearance-none"
                value={formData.category}
                onChange={(e) => setFormData({...formData, category: e.target.value})}
              >
                <option value="">Select Category</option>
                <option value="natural">Natural</option>
                <option value="glam">Glam</option>
                <option value="bridal">Bridal</option>
              </select>
            </div>
            <div className="space-y-2 md:col-span-2">
              <label className="text-sm font-bold text-slate-500 ml-1">Associated Product</label>
              <div className="relative">
                <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
                <input 
                  type="text" 
                  placeholder="Search and select a product..."
                  className="w-full pl-14 pr-6 py-4 rounded-2xl bg-slate-50 border-none focus:ring-2 focus:ring-primary/20 transition-all font-medium"
                  value={formData.product}
                  onChange={(e) => setFormData({...formData, product: e.target.value})}
                />
              </div>
            </div>
            <div className="space-y-2 md:col-span-2">
              <label className="text-sm font-bold text-slate-500 ml-1">Short Description</label>
              <textarea 
                placeholder="Briefly describe what this guided flow achieves..."
                rows={4}
                className="w-full px-6 py-4 rounded-2xl bg-slate-50 border-none focus:ring-2 focus:ring-primary/20 transition-all font-medium resize-none"
                value={formData.description}
                onChange={(e) => setFormData({...formData, description: e.target.value})}
              />
            </div>
          </div>

          <div className="flex justify-end pt-6">
            <button 
              onClick={handleNext}
              className="bg-primary text-white px-10 py-4 rounded-2xl font-bold hover:bg-primary/90 transition-all shadow-lg shadow-primary/20 flex items-center gap-2 border-none"
            >
              Continue to Editor <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="animate-in slide-in-from-bottom-4 duration-500 h-[calc(100vh-140px)] flex gap-6">
      {/* Left Sidebar: Steps Sequence */}
      <div className="w-80 bg-white rounded-[2rem] p-6 border border-slate-100 flex flex-col shadow-sm">
        <div className="flex justify-between items-center mb-8">
          <h3 className="font-black text-slate-800 tracking-tight">Steps Sequence</h3>
          <button className="text-primary font-bold text-xs flex items-center gap-1 hover:bg-primary/5 px-2 py-1 rounded-lg transition-colors border-none bg-transparent">
            <Plus size={14} /> Add Step
          </button>
        </div>

        <div className="space-y-4 flex-1 overflow-y-auto pr-2 custom-scrollbar">
          {steps.map((step) => (
            <div 
              key={step.id}
              onClick={() => setActiveStepId(step.id)}
              className={`p-5 rounded-2xl border-2 transition-all cursor-pointer group relative ${
                activeStepId === step.id 
                ? 'border-primary bg-primary/5' 
                : 'border-slate-50 bg-slate-50/50 hover:border-slate-200'
              }`}
            >
              <div className="flex items-center gap-4">
                <div className="grid grid-cols-2 gap-0.5 opacity-20 group-hover:opacity-40 transition-opacity">
                  <div className="w-1 h-1 bg-slate-900 rounded-full"></div>
                  <div className="w-1 h-1 bg-slate-900 rounded-full"></div>
                  <div className="w-1 h-1 bg-slate-900 rounded-full"></div>
                  <div className="w-1 h-1 bg-slate-900 rounded-full"></div>
                </div>
                <div className="space-y-0.5">
                  <p className={`text-[10px] font-black uppercase tracking-widest ${activeStepId === step.id ? 'text-primary' : 'text-slate-400'}`}>
                    {step.title}
                  </p>
                  <p className={`text-sm font-bold ${activeStepId === step.id ? 'text-slate-800' : 'text-slate-500'}`}>
                    {step.subtitle}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Main Workspace */}
      <div className="flex-1 bg-white rounded-[2rem] border border-slate-100 relative overflow-hidden flex flex-col shadow-sm">
        {/* Workspace Badges */}
        <div className="absolute top-6 left-1/2 -translate-x-1/2 flex gap-3 z-10">
          <span className="bg-primary/10 text-primary text-[10px] font-black px-4 py-1.5 rounded-full uppercase tracking-widest backdrop-blur-md">
            {activeStepId === 2 ? '3D Workspace' : 'Interactive Map'}
          </span>
          <span className="bg-slate-900/5 text-slate-500 text-[10px] font-black px-4 py-1.5 rounded-full uppercase tracking-widest backdrop-blur-md border border-white/20">
            Active Mapping: High-Res
          </span>
        </div>

        {/* Comparison Header for Step 4 */}
        {activeStepId === 4 && (
          <div className="absolute top-20 left-0 right-0 px-10 flex justify-between z-10 pointer-events-none">
             <span className="bg-white/80 backdrop-blur text-slate-800 text-[10px] font-black px-4 py-1.5 rounded-full uppercase tracking-widest border border-slate-100">Powdered State</span>
             <span className="bg-primary text-white text-[10px] font-black px-4 py-1.5 rounded-full uppercase tracking-widest shadow-lg shadow-primary/20">Result</span>
          </div>
        )}

        {/* Image Display */}
        <div className="flex-1 flex items-center justify-center p-12 bg-[#F9F9FB] overflow-hidden relative">
          <div className="relative group cursor-crosshair max-h-full aspect-[4/5]">
            <img 
              src={activeStepId === 1 ? "https://images.unsplash.com/photo-1596704017254-9b121068fb31?w=800&q=80" : "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=800&q=80"} 
              className={`h-full w-full object-cover rounded-3xl shadow-2xl transition-all duration-700 ${activeStepId === 4 ? 'sepia-[0.2]' : ''}`}
              alt="Model"
            />
            
            {/* Visual Overlays / Markers */}
            {activeStepId === 1 && (
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-24 h-24 border-2 border-dashed border-primary rounded-full animate-pulse flex items-center justify-center bg-primary/10">
                   <div className="w-2 h-2 bg-primary rounded-full"></div>
                </div>
              </div>
            )}
            
            {activeStepId === 2 && (
              <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-[15%] left-1/2 -translate-x-1/2 w-[30%] h-[8%] bg-primary/20 border border-primary/40 backdrop-blur-[2px] rounded-lg"></div>
                <div className="absolute top-[25%] left-1/2 -translate-x-1/2 w-[6%] h-[25%] bg-primary/20 border border-primary/40 backdrop-blur-[2px] rounded-full"></div>
                <div className="absolute bottom-[20%] left-[20%] w-[20%] h-[15%] bg-primary/20 border border-primary/40 backdrop-blur-[2px] rounded-bl-[100px] transform rotate-[-15deg]"></div>
                <div className="absolute bottom-[20%] right-[20%] w-[20%] h-[15%] bg-primary/20 border border-primary/40 backdrop-blur-[2px] rounded-br-[100px] transform rotate-[15deg]"></div>
              </div>
            )}

            {activeStepId === 3 && (
              <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-[40%] left-[28%] w-[18%] h-[10%] bg-white/40 border border-white/60 blur-md rounded-full"></div>
                <div className="absolute top-[40%] right-[28%] w-[18%] h-[10%] bg-white/40 border border-white/60 blur-md rounded-full"></div>
              </div>
            )}

            {activeStepId === 4 && (
              <div className="absolute inset-y-0 left-1/2 w-1 bg-white z-20 shadow-xl cursor-ew-resize group">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-white rounded-full shadow-lg flex items-center justify-center">
                  <div className="flex gap-0.5">
                    <ChevronLeft size={10} className="text-slate-400" />
                    <ChevronRight size={10} className="text-slate-400" />
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Floating Controls */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 bg-white/80 backdrop-blur-xl border border-white p-2 rounded-2xl flex items-center gap-2 shadow-2xl shadow-slate-900/10">
          {activeStepId === 4 ? (
             <>
               <button className="p-3 bg-primary text-white rounded-xl shadow-lg shadow-primary/20 border-none"><Wand2 size={18} /></button>
               <button className="p-3 hover:bg-slate-50 text-slate-400 rounded-xl transition-colors border-none bg-transparent"><Grid3X3 size={18} /></button>
               <button className="p-3 hover:bg-slate-50 text-slate-400 rounded-xl transition-colors border-none bg-transparent"><Trash2 size={18} /></button>
               <div className="w-px h-6 bg-slate-200 mx-2"></div>
               <button className="p-3 hover:bg-slate-50 text-slate-400 rounded-xl transition-colors border-none bg-transparent"><ZoomIn size={18} /></button>
               <button className="p-3 hover:bg-slate-50 text-slate-400 rounded-xl transition-colors border-none bg-transparent"><Undo2 size={18} /></button>
             </>
          ) : (
            <>
              <div className="flex items-center gap-4 px-4 mr-2">
                <button className="text-slate-400 hover:text-primary transition-colors border-none bg-transparent"><ZoomOut size={18} /></button>
                <span className="text-[10px] font-black text-slate-800 uppercase tracking-widest min-w-[40px] text-center">100%</span>
                <button className="text-slate-400 hover:text-primary transition-colors border-none bg-transparent"><ZoomIn size={18} /></button>
              </div>
              <div className="w-px h-6 bg-slate-200"></div>
              <div className="flex items-center gap-1 px-2">
                <button className="p-3 hover:bg-slate-50 text-slate-400 rounded-xl transition-colors border-none bg-transparent"><Undo2 size={18} /></button>
                <button className="p-3 hover:bg-slate-50 text-slate-400 rounded-xl transition-colors border-none bg-transparent"><Redo2 size={18} /></button>
                <button className="p-3 hover:bg-slate-50 text-slate-400 rounded-xl transition-colors border-none bg-transparent"><RotateCcw size={18} /></button>
              </div>
            </>
          )}
        </div>

        {activeStepId === 3 && (
          <div className="absolute bottom-24 left-1/2 -translate-x-1/2 bg-white/90 backdrop-blur-md px-6 py-3 rounded-2xl border border-white shadow-xl flex items-center gap-10 whitespace-nowrap">
            <div className="flex flex-col items-center">
              <span className="text-primary text-[10px] font-black uppercase tracking-tighter">Under-Eye Zone</span>
            </div>
            <div className="w-px h-4 bg-slate-200"></div>
            <div className="flex flex-col items-center">
              <span className="text-slate-800 text-[10px] font-black uppercase tracking-tighter">4 Layers Applied</span>
            </div>
          </div>
        )}
      </div>

      {/* Right Panel: Configuration */}
      <div className="w-96 bg-white rounded-[2rem] p-8 border border-slate-100 flex flex-col shadow-sm">
        <div className="flex-1 overflow-y-auto pr-2 custom-scrollbar space-y-8">
          {activeStepId === 1 && (
            <>
              <div className="space-y-4">
                <h4 className="text-xl font-bold text-slate-800">Apply Loose Powder</h4>
                <div className="space-y-2">
                  <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Step Instructions</label>
                  <p className="text-xs font-medium text-slate-500 leading-relaxed bg-slate-50 p-4 rounded-2xl">
                    Gently press loose setting powder into the skin using a damp beauty sponge or a fluffy brush. Focus on areas where shine occurs naturally.
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Application Type</label>
                <div className="flex bg-slate-50 p-1.5 rounded-2xl gap-1">
                  <button className="flex-1 py-2 rounded-xl text-xs font-black bg-white shadow-sm text-primary border-none">Light Set</button>
                  <button className="flex-1 py-2 rounded-xl text-xs font-bold text-slate-400 hover:text-slate-600 transition-colors border-none bg-transparent">Full Coverage</button>
                </div>
              </div>

              <div className="space-y-4">
                <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Target Area</label>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1.5 bg-primary/5 text-primary rounded-lg text-[10px] font-black flex items-center gap-2 border border-primary/10">
                    Under eyes <Plus size={12} className="rotate-45" />
                  </span>
                  <span className="px-3 py-1.5 bg-primary/5 text-primary rounded-lg text-[10px] font-black flex items-center gap-2 border border-primary/10">
                    T-zone <Plus size={12} className="rotate-45" />
                  </span>
                  <button className="px-3 py-1.5 border border-dashed border-slate-200 text-slate-400 rounded-lg text-[10px] font-black hover:border-slate-300 transition-colors bg-transparent">
                    + Add Area
                  </button>
                </div>
              </div>

              <div className="space-y-6">
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Powder Intensity</label>
                    <span className="text-[10px] font-black text-primary">65%</span>
                  </div>
                  <input type="range" className="w-full accent-primary" />
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Brush Size</label>
                    <span className="text-[10px] font-black text-primary">24px</span>
                  </div>
                  <input type="range" className="w-full accent-primary" />
                </div>
              </div>
            </>
          )}

          {activeStepId === 2 && (
            <>
              <div className="space-y-2">
                <h4 className="text-xl font-bold text-slate-800">Bake Jawline & T-zone</h4>
                <p className="text-xs font-medium text-slate-400 leading-relaxed">
                  Fine-tune highlight definition and duration.
                </p>
              </div>

              <div className="space-y-4">
                <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Target Areas</label>
                <div className="space-y-2">
                  <div className="flex items-center gap-3 p-3 bg-primary text-white rounded-xl text-xs font-bold">
                    <MousePointer2 size={14} /> Jawline
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-primary text-white rounded-xl text-xs font-bold">
                    <MousePointer2 size={14} /> T-zone
                  </div>
                  <div className="flex gap-2 pt-2">
                    <button className="px-4 py-2 rounded-xl text-[10px] font-black text-slate-400 hover:text-slate-600 bg-slate-50 transition-colors border-none">Under-eye</button>
                    <button className="px-4 py-2 rounded-xl text-[10px] font-black text-slate-400 hover:text-slate-600 bg-slate-50 transition-colors border-none">Chin</button>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Application Mode</label>
                <div className="grid grid-cols-2 gap-2 bg-slate-50 p-1.5 rounded-2xl">
                  <button className="py-3 rounded-xl text-[10px] font-black bg-white shadow-sm text-primary leading-tight border-none">Contour<br/>Bake</button>
                  <button className="py-3 rounded-xl text-[10px] font-bold text-slate-400 leading-tight border-none bg-transparent">Oil Control<br/>Bake</button>
                </div>
              </div>

              <div className="space-y-6">
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Highlight Intensity</label>
                    <span className="text-[10px] font-black text-primary px-2 py-0.5 bg-primary/10 rounded-md">85%</span>
                  </div>
                  <input type="range" className="w-full accent-primary" />
                  <div className="flex justify-between text-[8px] font-black text-slate-300 uppercase tracking-widest">
                    <span>Soft Bloom</span>
                    <span>Sharp Definition</span>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Bake Duration</label>
                    <span className="text-[10px] font-black text-primary px-2 py-0.5 bg-primary/10 rounded-md">45 sec</span>
                  </div>
                  <input type="range" className="w-full accent-primary" />
                  <div className="flex justify-between text-[8px] font-black text-slate-300 uppercase tracking-widest">
                    <span>0s</span>
                    <span>30s</span>
                    <span>60s</span>
                  </div>
                </div>
              </div>
            </>
          )}

          {activeStepId === 3 && (
            <>
              <div className="space-y-2">
                <h4 className="text-xl font-bold text-slate-800">Bake Under Eyes</h4>
              </div>

              <div className="space-y-4">
                <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Target Area</label>
                <select className="w-full p-4 rounded-2xl bg-slate-50 border-none font-bold text-xs appearance-none">
                  <option>Under eyes</option>
                  <option>Chin</option>
                </select>
              </div>

              <div className="space-y-6">
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Bake Intensity</label>
                    <span className="text-[10px] font-black text-primary">85%</span>
                  </div>
                  <input type="range" className="w-full accent-primary" />
                  <div className="flex justify-between text-[8px] font-black text-slate-300 uppercase tracking-widest">
                    <span>Soft Focus</span>
                    <span>Heavy Bake</span>
                  </div>
                </div>

                <div className="flex justify-between items-center p-5 bg-slate-50 rounded-2xl">
                  <div className="space-y-1">
                    <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Bake Duration</span>
                  </div>
                  <div className="text-right">
                    <span className="text-xs font-black text-primary block leading-tight">Bake Time: 30 seconds</span>
                  </div>
                </div>
                <input type="range" className="w-full accent-primary" />
                <div className="flex justify-between text-[8px] font-black text-slate-300 uppercase tracking-widest px-1">
                  <span>0s</span>
                  <span>60s</span>
                </div>

                <div className="space-y-4 pt-2">
                  <div className="flex justify-between items-center">
                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Coverage Thickness</label>
                    <span className="text-xs font-black text-primary">Dense</span>
                  </div>
                  <div className="flex gap-2">
                    <button className="flex-1 py-3 rounded-xl border border-slate-100 text-[10px] font-black text-slate-400 hover:border-primary transition-all bg-transparent">Sheer</button>
                    <button className="flex-1 py-3 rounded-xl border border-slate-100 text-[10px] font-black text-slate-400 hover:border-primary transition-all bg-transparent">Medium</button>
                    <button className="flex-1 py-3 rounded-xl bg-primary text-white text-[10px] font-black shadow-lg shadow-primary/20 border-none">Dense</button>
                  </div>
                </div>
              </div>

              <div className="bg-primary p-6 rounded-3xl space-y-3 relative overflow-hidden">
                <div className="absolute top-[-10%] right-[-10%] w-24 h-24 bg-white/10 rounded-full blur-2xl"></div>
                <h5 className="text-white text-sm font-black tracking-tight">Editor Insight</h5>
                <p className="text-white/70 text-[10px] leading-relaxed font-medium">
                  Baking under eyes helps prevent concealer from creasing and provides a long-lasting, photo-ready finish. Aim for a 30-45 second duration for optimal "setting."
                </p>
              </div>
            </>
          )}

          {activeStepId === 4 && (
            <>
              <div className="space-y-2">
                <h4 className="text-xl font-bold text-slate-800">Dust Off Excess Powder</h4>
                <p className="text-[10px] font-medium text-slate-400 leading-relaxed">
                  Configure how the virtual brush removes baking powder to reveal the finish.
                </p>
              </div>

              <div className="space-y-4">
                <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Target Area</label>
                <div className="grid grid-cols-2 gap-2">
                  <button className="flex flex-col items-center gap-1 p-3 bg-primary/5 text-primary border-2 border-primary rounded-2xl">
                    <Layers size={16} /> <span className="text-[9px] font-black">Under eyes</span>
                  </button>
                  <button className="flex flex-col items-center gap-1 p-3 bg-slate-50 text-slate-400 border-2 border-transparent rounded-2xl hover:border-slate-200 transition-all">
                    <Move size={16} /> <span className="text-[9px] font-black">Jawline</span>
                  </button>
                  <button className="flex flex-col items-center gap-1 p-3 bg-slate-50 text-slate-400 border-2 border-transparent rounded-2xl hover:border-slate-200 transition-all">
                    <Layers size={16} /> <span className="text-[9px] font-black">Full Face</span>
                  </button>
                  <button className="flex flex-col items-center gap-1 p-3 bg-slate-50 text-slate-400 border-2 border-transparent rounded-2xl hover:border-slate-200 transition-all">
                    <MousePointer2 size={16} /> <span className="text-[9px] font-black">Custom</span>
                  </button>
                </div>
              </div>

              <div className="space-y-6">
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Removal Strength</label>
                    <span className="text-[10px] font-black text-primary">85%</span>
                  </div>
                  <input type="range" className="w-full accent-primary" />
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Brush Softness</label>
                    <span className="text-[10px] font-black text-primary">60%</span>
                  </div>
                  <input type="range" className="w-full accent-primary" />
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Blend Smoothness</label>
                    <span className="text-[10px] font-black text-primary">42%</span>
                  </div>
                  <input type="range" className="w-full accent-primary" />
                </div>
              </div>

              <div className="space-y-4">
                <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Finish Type</label>
                <div className="space-y-2">
                  <div className="flex items-center gap-3 p-4 bg-slate-50 rounded-2xl cursor-pointer hover:bg-slate-100 transition-all group">
                    <div className="w-4 h-4 rounded-full border-2 border-slate-200 group-hover:border-primary transition-colors"></div>
                    <span className="text-xs font-bold text-slate-600">Matte</span>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-primary/5 border border-primary/20 rounded-2xl cursor-pointer">
                    <div className="flex items-center gap-3">
                      <div className="w-4 h-4 rounded-full bg-primary flex items-center justify-center">
                        <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                      </div>
                      <span className="text-xs font-black text-primary">Natural</span>
                    </div>
                    <div className="w-4 h-4 rounded-full border-2 border-primary flex items-center justify-center">
                       <ChevronRight size={10} className="text-primary" />
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-4 bg-slate-50 rounded-2xl cursor-pointer hover:bg-slate-100 transition-all group">
                    <div className="w-4 h-4 rounded-full border-2 border-slate-200 group-hover:border-primary transition-colors"></div>
                    <span className="text-xs font-bold text-slate-600">Radiant</span>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>

        <div className="pt-8 flex gap-4">
          <button 
            onClick={handleBack}
            className="flex-1 py-4 rounded-2xl border border-slate-100 text-slate-400 font-bold text-sm hover:bg-slate-50 transition-all bg-transparent"
          >
            Back
          </button>
          <button 
            onClick={handleNext}
            className="flex-[2] py-4 rounded-2xl bg-primary text-white font-bold text-sm hover:bg-primary/90 transition-all shadow-lg shadow-primary/20 border-none"
          >
            {activeStepId === 4 ? 'Finalize Step 4' : 'Next Step'}
          </button>
        </div>
      </div>
    </div>
  );
}
