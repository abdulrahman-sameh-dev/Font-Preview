"use client";

import { useState } from 'react';
import { Input } from "@/components/ui/input";
import { Slider } from "@/components/ui/slider";
import React from 'react';

export default function Demo() {
  const [testText, setTestText] = useState("بِسۡمِ ٱللَّهِ ٱلرَّحۡمَٰنِ ٱلرَّحِيمِ");
  const [fontSize, setFontSize] = useState([32]);

  // التحقق مما إذا كان النص يحتوي على أحرف عربية
  const hasArabic = (text: string) => /[\u0600-\u06FF]/.test(text);

  return (
    <div className="p-8 max-w-7xl mx-auto">
      <div className="space-y-8">
        <div className="space-y-4">
          <div className="flex flex-col space-y-2">
            <label className="text-sm font-medium">Test Text</label>
            <Input
              value={testText}
              onChange={(e) => setTestText(e.target.value)}
              placeholder="Enter text to preview"
              className="max-w-2xl"
              dir={hasArabic(testText) ? "rtl" : "ltr"}
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

          <div className="p-8 bg-card rounded-lg border">
            <p style={{ 
              fontSize: `${fontSize}px`,
              fontFamily: "var(--font-eaalim)",
              lineHeight: 1.5,
              direction: hasArabic(testText) ? "rtl" : "ltr",
              textAlign: hasArabic(testText) ? "right" : "left"
            }}>
              {testText}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}