"use client";

import { useState } from 'react';
import { Input } from "@/components/ui/input";
import { Slider } from "@/components/ui/slider";
import React from 'react';


export default function Demo() {
  const [testText, setTestText] = useState("Welcome to Eaalim Font");
  const [fontSize, setFontSize] = useState([32]);

  return (
    <div className="p-8 max-w-7xl mx-auto">
      {/* <div style={{ fontFamily: 'eaalim-font', fontSize: `${fontSize}px` }}>
        <h1 className="text-3xl font-bold mb-8">Font Demo</h1>
        <p>{testText}</p>
      </div> */}
      
      <div className="space-y-8">
        <div className="space-y-4">
          <div className="flex flex-col space-y-2">
            <label className="text-sm font-medium">Test Text</label>
            <Input
              value={testText}
              onChange={(e) => setTestText(e.target.value)}
              placeholder="Enter text to preview"
              className="max-w-2xl"
            />
          </div>
          
          <div className="flex flex-col space-y-2">
            <label className="text-sm font-medium">Font Size: {fontSize}px</label>
            <Slider
              value={fontSize}
              onValueChange={setFontSize}
              min={12}
              max={120}
              step={1}
              className="max-w-2xl"
            />
          </div>

          <div className="p-8 bg-card eaalim-font rounded-lg border">
            <p style={{ 
              fontSize: `${fontSize}px`,
              fontFamily: 'eaalim-font',
            }}>
              {testText}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}