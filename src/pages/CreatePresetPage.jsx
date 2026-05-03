import React, { useState } from 'react';
import { Search, ZoomIn, Maximize2, Check, X, Upload, ChevronDown, Sparkles } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function CreatePresetPage() {
  const navigate = useNavigate();
  const [selectedLipColor, setSelectedLipColor] = useState('#EF4444');
  const [category, setCategory] = useState('Full Face');

  const lipColors = ['#F87171', '#F472B6', '#A78BFA', '#9CA3AF', '#D97706', '#EA580C'];

  return (
    <div className="animate-in fade-in duration-500 pb-12">
      {/* Header Bar */}
      <div className="bg-[#4F378B] text-white rounded-t-2xl p-6 flex items-center justify-between">
        <h2 className="text-3xl font-bold">Create Presets</h2>
        <div className="flex gap-4">
          <button 
            onClick={() => navigate(-1)}
            className="px-8 py-2 border border-white rounded-lg font-bold hover:bg-white/10 transition-colors bg-transparent text-white"
          >
            Cancel
          </button>
          <button className="px-8 py-2 bg-white text-[#4F378B] rounded-lg font-bold hover:bg-slate-50 transition-colors border-none flex items-center gap-2">
            <Upload size={18} /> Publish
          </button>
        </div>
      </div>

      <div className="bg-white rounded-b-2xl shadow-sm border border-slate-200 border-t-0 p-8">
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-10">
          
          {/* Left Column: Basic Details */}
          <div className="xl:col-span-5 space-y-10">
            <div className="space-y-6">
              <div className="flex items-center gap-2 mb-2">
                <h3 className="text-xl font-bold text-slate-800">Basic Details</h3>
              </div>
              <div className="w-full h-px bg-slate-100 mb-8" />
              
              <div className="space-y-3">
                <label className="text-base font-bold text-slate-700">Preset Name</label>
                <input 
                  type="text" 
                  placeholder="e.g., Midnight Glamour"
                  className="w-full px-6 py-4 rounded-2xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary/20 bg-slate-50/30 font-medium"
                />
              </div>

              <div className="space-y-3">
                <label className="text-base font-bold text-slate-700">Category</label>
                <div className="flex flex-wrap gap-3">
                  {['Full Face', 'Lips Only', 'Eyes Only'].map((cat) => (
                    <button 
                      key={cat}
                      onClick={() => setCategory(cat)}
                      className={`px-8 py-3 rounded-full text-sm font-bold border-none transition-all ${
                        category === cat 
                          ? 'bg-primary text-white shadow-lg shadow-primary/20 scale-105' 
                          : 'bg-white border-2 border-slate-100 text-slate-500 hover:bg-slate-50 !border-solid'
                      }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </div>

              <div className="space-y-3">
                <label className="text-base font-bold text-slate-700">Description</label>
                <textarea 
                  rows={5}
                  placeholder="Describe the look and feel of this preset..."
                  className="w-full px-6 py-4 rounded-2xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary/20 bg-slate-50/30 resize-none font-medium"
                />
              </div>

              <div className="space-y-3">
                <label className="text-base font-bold text-slate-700">Tags</label>
                <div className="flex items-center gap-2 px-6 py-4 rounded-2xl border border-slate-200 bg-slate-50/30">
                  <span className="flex items-center gap-2 bg-slate-200 px-4 py-2 rounded-xl text-sm font-bold text-slate-600">
                    Evening <X size={16} className="cursor-pointer text-slate-400 hover:text-slate-600" />
                  </span>
                  <input 
                    type="text" 
                    placeholder="Add tag..."
                    className="flex-1 bg-transparent focus:outline-none text-sm font-medium"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Preview & Detailed Settings */}
          <div className="xl:col-span-7 space-y-10">
            {/* Live Preview Card */}
            <div className="bg-white rounded-3xl border border-slate-100 shadow-xl shadow-slate-100/50 p-6">
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-primary/10 rounded-xl text-primary">
                    <Sparkles size={22} />
                  </div>
                  <h3 className="text-xl font-bold text-slate-800">Live Preview</h3>
                </div>
                <div className="flex items-center gap-3 px-4 py-2 bg-slate-50 rounded-xl border border-slate-100">
                  <span className="text-sm font-bold text-slate-500">Model:</span>
                  <select className="bg-transparent text-sm font-bold text-slate-800 focus:outline-none cursor-pointer">
                    <option>Model A (Light)</option>
                    <option>Model B (Medium)</option>
                    <option>Model C (Dark)</option>
                  </select>
                  <ChevronDown size={16} className="text-slate-400" />
                </div>
              </div>

              <div className="relative rounded-3xl overflow-hidden aspect-[16/10] bg-slate-100 group shadow-inner">
                <img 
                  src="https://images.unsplash.com/photo-1596704017254-9b121068fb31?q=80&w=1200&auto=format&fit=crop" 
                  alt="Live Preview" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute bottom-8 left-8 flex gap-3">
                  <button className="p-4 bg-white/90 backdrop-blur-md rounded-2xl shadow-xl text-slate-700 hover:bg-white transition-all hover:scale-110 border-none">
                    <ZoomIn size={24} />
                  </button>
                  <button className="p-4 bg-white/90 backdrop-blur-md rounded-2xl shadow-xl text-slate-700 hover:bg-white transition-all hover:scale-110 border-none">
                    <Maximize2 size={24} />
                  </button>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Lip Settings */}
              <div className="bg-white rounded-3xl border border-slate-100 shadow-xl shadow-slate-100/50 p-8">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-10 h-10 rounded-full bg-pink-100 flex items-center justify-center text-pink-500 shadow-inner">
                    <div className="w-4 h-4 rounded-full bg-current" />
                  </div>
                  <h4 className="text-xl font-bold text-slate-800">Lip Settings</h4>
                </div>

                <div className="space-y-8">
                  <div className="flex items-center justify-between">
                    <span className="text-base font-bold text-slate-600">Primary Color</span>
                    <button className="text-sm font-bold text-primary hover:underline border-none bg-transparent">Custom HEX</button>
                  </div>
                  <div className="flex flex-wrap gap-3">
                    {lipColors.map((color) => (
                      <button 
                        key={color}
                        onClick={() => setSelectedLipColor(color)}
                        className={`w-10 h-10 rounded-full transition-all hover:scale-110 border-none shadow-md ${
                          selectedLipColor === color ? 'ring-4 ring-primary/20 ring-offset-4 scale-110' : ''
                        }`}
                        style={{ backgroundColor: color }}
                      />
                    ))}
                  </div>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-base font-bold text-slate-600">Opacity & Gloss</span>
                      <span className="text-base font-bold text-primary">85%</span>
                    </div>
                    <div className="h-3 bg-slate-100 rounded-full overflow-hidden shadow-inner p-0.5">
                      <div className="h-full bg-primary rounded-full transition-all duration-500 w-[85%]" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Eye Settings */}
              <div className="bg-white rounded-3xl border border-slate-100 shadow-xl shadow-slate-100/50 p-8">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-500 shadow-inner">
                    <div className="w-4 h-4 rounded-full bg-current" />
                  </div>
                  <h4 className="text-xl font-bold text-slate-800">Eye Settings</h4>
                </div>

                <div className="space-y-8">
                  <div className="space-y-3">
                    <label className="text-base font-bold text-slate-600">Eyeliner Style</label>
                    <div className="relative">
                      <select className="w-full px-6 py-4 rounded-2xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary/20 bg-slate-50/30 font-medium appearance-none cursor-pointer">
                        <option>Classic Wing</option>
                        <option>Cat Eye</option>
                        <option>Smokey</option>
                      </select>
                      <ChevronDown size={20} className="absolute right-6 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
                    </div>
                  </div>

                  <div className="space-y-4">
                    <label className="text-base font-bold text-slate-600">Eyeshadow Palette</label>
                    <div className="grid grid-cols-2 gap-4">
                      {/* Palette 1 */}
                      <div className="flex rounded-xl overflow-hidden border-2 border-slate-100 h-10 cursor-pointer hover:border-primary transition-all shadow-sm">
                        <div className="flex-1 bg-[#DED0C1]" />
                        <div className="flex-1 bg-[#C9B8A9]" />
                        <div className="flex-1 bg-[#8B735B]" />
                      </div>
                      {/* Palette 2 - Selected */}
                      <div className="flex rounded-xl overflow-hidden border-2 border-primary h-10 cursor-pointer shadow-lg shadow-primary/10">
                        <div className="flex-1 bg-[#FEE2E2]" />
                        <div className="flex-1 bg-[#FBCFE8]" />
                        <div className="flex-1 bg-[#F472B6]" />
                      </div>
                    </div>
                  </div>

                  <label className="flex items-center gap-4 cursor-pointer group pt-2">
                    <div className="w-6 h-6 rounded-lg border-2 border-slate-200 flex items-center justify-center group-hover:border-primary transition-all bg-white shadow-sm overflow-hidden">
                      <div className="w-full h-full bg-primary flex items-center justify-center opacity-100 transition-opacity">
                        <Check size={16} className="text-white" strokeWidth={3} />
                      </div>
                    </div>
                    <span className="text-base font-bold text-slate-600">Enable Mascara</span>
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
