import { CodeBlock } from "@/components/ui/code-block"

export default function Configuration() {
  return (
    <div className="p-8 max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold mb-8">Configuration Guide</h1>
      
      <div className="space-y-8">
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">CSS Configuration</h2>
          <p className="text-lg text-muted-foreground">
            Advanced configuration options for the Eaalim font:
          </p>
          <CodeBlock
            language="css"
            code={`/* Advanced font configuration */
@font-face {
  font-family: 'eaalim-font';
  src: url('/fonts/eaalim-font.otf') format('opentype');
  font-display: swap;
  font-weight: normal;
  font-style: normal;
}

/* Optional: Configure font-feature-settings for Arabic text */
.arabic-text {
  font-family: 'eaalim-font', sans-serif;
  font-feature-settings: "kern" 1, "liga" 1;
  text-rendering: optimizeLegibility;
}`}
          />
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Performance Optimization</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 bg-card rounded-lg">
              <h3 className="font-semibold mb-2">Preload Font</h3>
              <p className="text-sm text-muted-foreground mb-3">
                Add this to your HTML head to preload the font:
              </p>
              <CodeBlock
                language="html"
                code={`<link 
  rel="preload" 
  href="/fonts/eaalim-font.otf" 
  as="font" 
  type="font/opentype" 
  crossorigin
/>`}
              />
            </div>
            <div className="p-4 bg-card rounded-lg">
              <h3 className="font-semibold mb-2">Font Display Strategy</h3>
              <p className="text-muted-foreground mb-3">
                The font uses <code className="text-primary">font-display: swap</code> for optimal loading:
              </p>
              <ul className="list-disc list-inside text-sm text-muted-foreground space-y-2">
                <li>Shows fallback font immediately while loading</li>
                <li>Swaps to Eaalim font once loaded</li>
                <li>Prevents invisible text during loading</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Next.js Configuration</h2>
          <p className="text-lg text-muted-foreground">
            If you're using Next.js, optimize font loading with the next/font module:
          </p>
          <CodeBlock
            language="typescript"
            code={`import localFont from 'next/font/local'

const eaalimFont = localFont({
  src: './fonts/eaalim-font.otf',
  display: 'swap',
  variable: '--font-eaalim',
})

// Add to your root layout
<html lang="ar" className={eaalimFont.variable}>
  ...
</html>

// Use in your CSS
.arabic-text {
  font-family: var(--font-eaalim);
}`}
          />
        </section>

        <div className="mt-8 p-4 bg-muted rounded-lg">
          <p className="text-sm text-muted-foreground">
            💡 <strong>Tip:</strong> For optimal Arabic text rendering, consider using <code className="text-primary">text-rendering: optimizeLegibility</code> and enabling OpenType features like kerning and ligatures.
          </p>
        </div>
      </div>
    </div>
  )
}