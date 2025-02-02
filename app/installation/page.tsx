import { CodeBlock } from "@/components/ui/code-block"

export default function Installation() {
  return (
    <div className="container max-w-4xl mx-auto px-4 py-6 md:py-8">
      <h1 className="text-2xl md:text-3xl font-bold mb-6 md:mb-8">Installation Guide</h1>
      
      <div className="space-y-6 md:space-y-8">
        <section className="space-y-3 md:space-y-4">
          <h2 className="text-xl md:text-2xl font-semibold">1. Using CSS</h2>
          <p className="text-sm md:text-base text-muted-foreground">
            Add the following CSS to your project to use the Eaalim font:
          </p>
          <CodeBlock
            language="css"
            className="w-full"
            code={`@font-face {
  font-family: 'eaalim-font';
  src: url('/fonts/eaalim-font.otf') format('opentype');
  font-weight: normal;
  font-style: normal;
  font-display: swap;
}`}
          />
        </section>

        <section className="space-y-3 md:space-y-4">
          <h2 className="text-xl md:text-2xl font-semibold">2. Using CDN</h2>
          <p className="text-sm md:text-base text-muted-foreground">
            Add the following link tag to your HTML:
          </p>
          <CodeBlock
            language="html"
            className="w-full"
            code={`<link href="https://cdn.example.com/fonts/eaalim-font.css" rel="stylesheet" />`}
          />
        </section>

        <section className="space-y-3 md:space-y-4">
          <h2 className="text-xl md:text-2xl font-semibold">3. Using Package Manager</h2>
          <p className="text-sm md:text-base text-muted-foreground">
            Install using npm or yarn:
          </p>
          <CodeBlock
            className="w-full"
            code="npm install eaalim-font"
          />
          <CodeBlock
            className="w-full"
            code="yarn add eaalim-font"
          />
        </section>

        <section className="space-y-3 md:space-y-4">
          <h2 className="text-xl md:text-2xl font-semibold">4. Usage</h2>
          <p className="text-sm md:text-base text-muted-foreground">
            After installation, you can use the font in your CSS:
          </p>
          <CodeBlock
            language="css"
            className="w-full"
            code={`.your-element {
  font-family: 'eaalim-font', sans-serif;
}`}
          />
        </section>
      </div>
    </div>
  )
}