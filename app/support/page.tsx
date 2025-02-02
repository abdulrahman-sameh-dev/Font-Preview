import Link from "next/link";

export default function Support() {
  return (
    <div className="p-8 max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold mb-8">Support</h1>
      
      <div className="space-y-8">
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Frequently Asked Questions</h2>
          <div className="space-y-4">
            <div className="p-4 bg-card rounded-lg">
              <h3 className="font-semibold mb-2">How do I install the font?</h3>
              <p className="text-muted-foreground">
                Please refer to our detailed installation guide in the Installation section.
              </p>
            </div>
            <div className="p-4 bg-card rounded-lg">
              <h3 className="font-semibold mb-2">Which browsers are supported?</h3>
              <p className="text-muted-foreground">
                Our font is compatible with all modern browsers including Chrome, Firefox, Safari, and Edge.
              </p>
            </div>
            <div className="p-4 bg-card rounded-lg">
              <h3 className="font-semibold mb-2">Can I use the font in commercial projects?</h3>
              <p className="text-muted-foreground">
                Yes, the font is licensed for both personal and commercial use under our standard license.
              </p>
            </div>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Contact Support</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 bg-card rounded-lg">
              <h3 className="font-semibold mb-2">Email Support</h3>
              <p className="text-muted-foreground">
                For technical issues and general inquiries: <span><Link href="eaalim@gmail.com" >eaalim@gmail.com</Link></span>
              </p>
            </div>
            <div className="p-4 bg-card rounded-lg">
              <h3 className="font-semibold mb-2">Documentation</h3>
              <p className="text-muted-foreground">
                Browse our comprehensive documentation for detailed information and guides.
              </p>
            </div>
          </div>
        </section>

        {/* <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Resources</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 bg-card rounded-lg">
              <h3 className="font-semibold mb-2 ">Documentation</h3>
              <p className="text-muted-foreground">
                Comprehensive guides and examples
              </p>
            </div>
            <div className="p-4 bg-card rounded-lg">
              <h3 className="font-semibold mb-2">GitHub</h3>
              <p className="text-muted-foreground">
                Report issues and contribute
              </p>
            </div>
            <div className="p-4 bg-card rounded-lg">
              <h3 className="font-semibold mb-2">Community</h3>
              <p className="text-muted-foreground">
                Join our community forum
              </p>
            </div>
          </div>
        </section> */}
      </div>
    </div>
  );
}