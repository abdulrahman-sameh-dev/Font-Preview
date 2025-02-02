"use client";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Download, MoreHorizontal } from "lucide-react";

const otherFormats = [
  { name: "TTF Format", filename: "eaalim-font.ttf", type: "ttf" },
  { name: "WOFF Format", filename: "eaalim-font.woff", type: "woff" },
  { name: "WOFF2 Format", filename: "eaalim-font.woff2", type: "woff2" },
];

export default function DownloadPage() {
  const handleDownload = async (filename: string) => {
    try {
      const response = await fetch(`/theFont/${filename}`);
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
  
      const a = document.createElement("a");
      a.href = url;
      a.download = filename;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
  
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error("Failed to download the file:", error);
    }
  };

  return (
    <div className="container max-w-4xl mx-auto px-4 py-8 md:py-12">
      <h1 className="text-3xl md:text-4xl font-bold mb-6 md:mb-8">Download Eaalim Font</h1>
      
      <div className="space-y-8">
        <div className="p-6 bg-card rounded-lg border">
          <h2 className="text-xl md:text-2xl font-semibold mb-4">Download Options</h2>
          <p className="text-sm md:text-base text-muted-foreground mb-6">
            Download the recommended OTF format or choose another format from the menu.
          </p>
          
          <div className="flex gap-2 items-center">
            <Button 
              onClick={() => handleDownload("eaalim-font.otf")}
              className="flex-1 md:flex-none"
            >
              <Download className="mr-2 h-4 w-4" />
              Download OTF (Recommended)
            </Button>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="icon">
                  <MoreHorizontal className="h-4 w-4" />
                  <span className="sr-only">More formats</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-[200px]">
                {otherFormats.map((format) => (
                  <DropdownMenuItem
                    key={format.type}
                    onClick={() => handleDownload(format.filename)}
                    className="cursor-pointer"
                  >
                    <span>{format.name}</span>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>

        <div className="grid gap-4 text-sm md:text-base">
          <div className="p-4 bg-muted rounded-lg">
            <h3 className="font-semibold mb-2">💡 Recommended Format (OTF)</h3>
            <p className="text-muted-foreground">
              The OTF format is recommended for most users. It provides the best quality and compatibility with modern design software.
            </p>
          </div>
          
          <div className="p-4 bg-muted rounded-lg">
            <h3 className="font-semibold mb-2">🌐 Web Formats</h3>
            <p className="text-muted-foreground">
              For web projects, WOFF2 and WOFF formats are available in the format menu for optimal web performance.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
