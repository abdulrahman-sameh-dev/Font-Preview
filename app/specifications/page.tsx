import { CodeBlock } from "@/components/ui/code-block"

export default function Specifications() {
  return (
    <div className="p-8 max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold mb-8">Font Specifications & Usage</h1>
      
      <div className="space-y-8">
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Basic Usage</h2>
          <p className="text-lg text-muted-foreground">
            After installation, you can use the Eaalim font in your CSS by referencing it in the font-family property:
          </p>
          <CodeBlock
            language="css"
            code={`.your-element {
  font-family: 'eaalim-font', sans-serif;
}`}
          />
          <div className="mt-4 p-4 bg-muted rounded-lg">
            <p className="text-sm text-muted-foreground">
              💡 <strong>Tip:</strong> Always include a fallback font (like sans-serif) to ensure text remains readable if the custom font fails to load.
            </p>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Font Weights</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 bg-card rounded-lg">
              <h3 className="font-semibold mb-2">Regular</h3>
              <p className="text-muted-foreground" style={{ fontWeight: 400 }}>
                نص عربي للتجربة - Sample Text
              </p>
            </div>
            <div className="p-4 bg-card rounded-lg">
              <h3 className="font-semibold mb-2">Bold</h3>
              <p className="text-muted-foreground" style={{ fontWeight: 700 }}>
                نص عربي للتجربة - Sample Text
              </p>
            </div>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Technical Details</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 bg-card rounded-lg">
              <h3 className="font-semibold mb-2">Format Support</h3>
              <ul className="space-y-1 text-muted-foreground">
                <li>WOFF2 (Primary)</li>
                <li>WOFF (Legacy Support)</li>
                <li>TTF (Extended Compatibility)</li>
              </ul>
            </div>
            <div className="p-4 bg-card rounded-lg">
              <h3 className="font-semibold mb-2">Character Set</h3>
              <ul className="space-y-1 text-muted-foreground">
                <li>Latin Basic</li>
                <li>Latin Extended</li>
                <li>Numbers & Punctuation</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">OpenType Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 bg-card rounded-lg">
              <h3 className="font-semibold mb-2">Ligatures</h3>
              <p className="text-muted-foreground">Standard and discretionary ligatures for enhanced typography</p>
            </div>
            <div className="p-4 bg-card rounded-lg">
              <h3 className="font-semibold mb-2">Numerals</h3>
              <p className="text-muted-foreground">Proportional and tabular figures for flexible number formatting</p>
            </div>
            <div className="p-4 bg-card rounded-lg">
              <h3 className="font-semibold mb-2">Stylistic Sets</h3>
              <p className="text-muted-foreground">Multiple stylistic alternatives for creative typography</p>
            </div>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">File Sizes</h2>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left p-4">Format</th>
                  <th className="text-left p-4">Size</th>
                  <th className="text-left p-4">Support</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="p-4">WOFF2</td>
                  <td className="p-4">25KB</td>
                  <td className="p-4">Modern browsers</td>
                </tr>
                <tr className="border-b">
                  <td className="p-4">WOFF</td>
                  <td className="p-4">35KB</td>
                  <td className="p-4">Legacy browsers</td>
                </tr>
                <tr>
                  <td className="p-4">TTF</td>
                  <td className="p-4">45KB</td>
                  <td className="p-4">Extended support</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </div>
  );
}