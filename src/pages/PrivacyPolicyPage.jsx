import React from 'react';
import { ArrowLeft, Bold, Italic, Underline, List, ListOrdered, AlignLeft, AlignCenter, AlignRight, Upload } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function PrivacyPolicyPage() {
  const navigate = useNavigate();

  return (
    <div className="animate-in fade-in duration-500">
      <div className="bg-primary text-white rounded-t-2xl p-6 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <button 
            onClick={() => navigate(-1)}
            className="hover:bg-white/10 p-2 rounded-lg transition-colors border-none bg-transparent text-white"
          >
            <ArrowLeft size={24} />
          </button>
          <h2 className="text-2xl font-bold">Privacy Policy</h2>
        </div>
        <button className="bg-white text-primary px-8 py-2 rounded-lg font-bold hover:bg-slate-50 transition-colors border-none">
          Save
        </button>
      </div>
      
      <div className="bg-white rounded-b-2xl shadow-sm border border-slate-200 border-t-0 p-8">
        <div className="space-y-6">
          <div className="min-h-[400px] p-6 border border-slate-100 rounded-xl bg-slate-50/30 text-slate-600 leading-relaxed">
            lacus nulla eu netus pretium. Pellentesque scelerisque tellus nisl eu nisl sed senectus nunc.
            Porta sollicitudin vel elit varius nulla sit diam sed. Bibendum elit facilisi nulla viverra augue
            pellentesque gravida morbi.
            <br /><br />
            Diam pellentesque orci eget gravida cursus. Ut ut nulla sapien eget vitae at eget pretium.
            Tristique nibh ipsum iaculis quam. Vestibulum magna cursus facilisis adipiscing cras dui. Risus
            auctor faucibus orci tortor tristique elit. Sit tincidunt id felis malesuada placerat ultricies enim.
            Purus ut congue ornare id sed. Enim libero tincidunt facilisis non facilisis mattis praesent. Magna
            volutpat at cras urna adipiscing vitae velit enim volutpat. Ac tincidunt et sed dolor ipsum. Purus
            nunc turpis scelerisque pellentesque lectus mauris imperdiet. Turpis orci consectetur enim
            posuere faucibus praesent.
            <br /><br />
            Ut suscipit cursus id mauris. Accumsan egestas sit arcu sed. Feugiat tortor pharetra id ipsum
            elit diam viverra tortor. Mattis tincidunt eget ut nunc in. Mauris ipsum ut purus laoreet nisi eu
            viverra velit adipiscing. Diam sit cursus id semper sit. Urna morbi nisl est vel tincidunt. Egestas
          </div>

          <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-slate-100">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-slate-100 rounded-lg flex items-center justify-center text-slate-400">
                <Upload size={20} />
              </div>
              <div>
                <p className="text-sm font-semibold text-slate-800 leading-none">Upload your image</p>
                <p className="text-xs text-slate-400">jpg/png • Max. 5MB</p>
              </div>
              <button className="ml-2 bg-primary text-white px-4 py-1.5 rounded-lg text-sm font-medium border-none">
                Upload
              </button>
            </div>

            <div className="flex items-center gap-1 bg-slate-50 p-1 rounded-lg border border-slate-200">
              <div className="px-2 py-1 flex items-center gap-1 border-r border-slate-200">
                <span className="text-sm font-medium text-slate-600">12</span>
                <ArrowLeft size={12} className="-rotate-90 text-slate-400" />
              </div>
              <button className="p-1.5 hover:bg-white rounded transition-colors text-slate-600 border-none bg-transparent">
                <Bold size={18} />
              </button>
              <button className="p-1.5 hover:bg-white rounded transition-colors text-slate-600 border-none bg-transparent">
                <Italic size={18} />
              </button>
              <button className="p-1.5 hover:bg-white rounded transition-colors text-slate-600 border-none bg-transparent">
                <Underline size={18} />
              </button>
              <div className="w-px h-6 bg-slate-200 mx-1" />
              <button className="p-1.5 hover:bg-white rounded transition-colors text-slate-600 border-none bg-transparent">
                <AlignLeft size={18} />
              </button>
              <button className="p-1.5 hover:bg-white rounded transition-colors text-slate-600 border-none bg-transparent">
                <AlignCenter size={18} />
              </button>
              <button className="p-1.5 hover:bg-white rounded transition-colors text-slate-600 border-none bg-transparent">
                <AlignRight size={18} />
              </button>
              <div className="w-px h-6 bg-slate-200 mx-1" />
              <button className="p-1.5 hover:bg-white rounded transition-colors text-slate-600 border-none bg-transparent">
                <List size={18} />
              </button>
              <button className="p-1.5 hover:bg-white rounded transition-colors text-slate-600 border-none bg-transparent">
                <ListOrdered size={18} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
