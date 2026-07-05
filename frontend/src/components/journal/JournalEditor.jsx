import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faBold, 
  faItalic, 
  faUnderline, 
  faHeading, 
  faListUl, 
  faListOl, 
  faCheckSquare, 
  faQuoteRight, 
  faImage, 
  faMicrophone,
  faLocationDot,
  faSmile
} from '@fortawesome/free-solid-svg-icons';

export default function JournalEditor() {
  const [content, setContent] = useState('');

  return (
    <div className="bg-card border border-border rounded-[24px] shadow-sm flex flex-col h-full overflow-hidden min-h-[600px]">
      
      {/* Editor Header Info */}
      <div className="p-6 pb-4 flex justify-between items-end border-b border-gray-100 dark:border-gray-800">
        <div>
          <div className="text-sm text-muted font-medium mb-1 flex items-center gap-2">
            <span>{new Date().toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' })}</span>
            <span className="w-1 h-1 rounded-full bg-gray-300"></span>
            <span className="text-green-500 flex items-center gap-1"><FontAwesomeIcon icon={faSmile} /> Happy</span>
          </div>
          <input 
            type="text" 
            placeholder="Journal Title..." 
            className="text-2xl font-bold text-foreground bg-transparent border-none outline-none w-full placeholder-gray-300 dark:placeholder-gray-600"
            defaultValue="Morning Reflection"
          />
        </div>
        <div className="text-xs text-muted font-medium flex items-center gap-3 pb-1">
          <span>{content.split(/\s+/).filter(w => w.length > 0).length} words</span>
          <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-green-500 inline-block animate-pulse"></span> Saved</span>
        </div>
      </div>

      {/* Formatting Toolbar */}
      <div className="px-4 py-2 border-b border-border bg-gray-50/50 dark:bg-gray-900/20 flex flex-wrap gap-1 items-center overflow-x-auto">
        <button className="w-8 h-8 rounded hover:bg-gray-200 dark:hover:bg-gray-700 text-foreground transition-colors flex items-center justify-center" title="Bold">
          <FontAwesomeIcon icon={faBold} />
        </button>
        <button className="w-8 h-8 rounded hover:bg-gray-200 dark:hover:bg-gray-700 text-foreground transition-colors flex items-center justify-center" title="Italic">
          <FontAwesomeIcon icon={faItalic} />
        </button>
        <button className="w-8 h-8 rounded hover:bg-gray-200 dark:hover:bg-gray-700 text-foreground transition-colors flex items-center justify-center" title="Underline">
          <FontAwesomeIcon icon={faUnderline} />
        </button>
        <div className="w-px h-5 bg-border mx-1"></div>
        <button className="w-8 h-8 rounded hover:bg-gray-200 dark:hover:bg-gray-700 text-foreground transition-colors flex items-center justify-center" title="Heading">
          <FontAwesomeIcon icon={faHeading} />
        </button>
        <button className="w-8 h-8 rounded hover:bg-gray-200 dark:hover:bg-gray-700 text-foreground transition-colors flex items-center justify-center" title="Bullet List">
          <FontAwesomeIcon icon={faListUl} />
        </button>
        <button className="w-8 h-8 rounded hover:bg-gray-200 dark:hover:bg-gray-700 text-foreground transition-colors flex items-center justify-center" title="Numbered List">
          <FontAwesomeIcon icon={faListOl} />
        </button>
        <button className="w-8 h-8 rounded hover:bg-gray-200 dark:hover:bg-gray-700 text-foreground transition-colors flex items-center justify-center" title="Checklist">
          <FontAwesomeIcon icon={faCheckSquare} />
        </button>
        <button className="w-8 h-8 rounded hover:bg-gray-200 dark:hover:bg-gray-700 text-foreground transition-colors flex items-center justify-center" title="Quote">
          <FontAwesomeIcon icon={faQuoteRight} />
        </button>
        <div className="w-px h-5 bg-border mx-1"></div>
        <button className="w-8 h-8 rounded hover:bg-gray-200 dark:hover:bg-gray-700 text-foreground transition-colors flex items-center justify-center" title="Add Image">
          <FontAwesomeIcon icon={faImage} />
        </button>
        <button className="w-8 h-8 rounded hover:bg-gray-200 dark:hover:bg-gray-700 text-foreground transition-colors flex items-center justify-center" title="Record Audio">
          <FontAwesomeIcon icon={faMicrophone} />
        </button>
        <button className="w-8 h-8 rounded hover:bg-gray-200 dark:hover:bg-gray-700 text-foreground transition-colors flex items-center justify-center" title="Add Location">
          <FontAwesomeIcon icon={faLocationDot} />
        </button>
      </div>

      {/* Writing Area */}
      <div className="flex-1 p-6">
        <textarea 
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="What's on your mind today?"
          className="w-full h-full bg-transparent border-none outline-none resize-none text-[16px] leading-[1.8] text-foreground placeholder-gray-400 dark:placeholder-gray-500"
        ></textarea>
      </div>
      
    </div>
  );
}
