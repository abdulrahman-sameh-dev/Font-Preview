import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen w-full">
      {/* Hero Section */}
      <div className="relative h-[40vh] bg-gradient-to-r from-primary/10 to-primary/5 flex items-center justify-center">
        <div className="text-center space-y-4 !p-8">
          <h1 className="text-4xl md:text-6xl max-sm:text-3xl font-bold tracking-tight max-sm:font-semibold">
            welcome to
            <br />
            Eaalim 
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto max-sm:ml-0 max-sm:mr-auto ">
            A beautiful and versatile font designed for modern applications. 
            Perfect for both headlines and body text.
          </p>
          <div className="flex items-center justify-center gap-4 mt-8">
            <Link 
              href="/demo" 
              className="px-6 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors max-sm:px-4"
            >
              Try Demo
            </Link>
            <Link 
              href="/download" 
              className="px-6 py-2 bg-secondary text-secondary-foreground rounded-md hover:bg-secondary/90 transition-colors max-sm:px-4"
            >
              Download Font
            </Link>
          </div>
        </div>
      </div>

      {/* Features Grid */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 bg-card rounded-lg border">
            <h3 className="text-xl font-semibold mb-2">Beautiful Design</h3>
            <p className="text-muted-foreground">
              Crafted with attention to detail for maximum readability and aesthetic appeal.
            </p>
          </div>
          <div className="p-6 bg-card rounded-lg border">
            <h3 className="text-xl font-semibold mb-2">Versatile Usage</h3>
            <p className="text-muted-foreground">
              Perfect for both digital and print media, from websites to branding materials.
            </p>
          </div>
          <div className="p-6 bg-card rounded-lg border">
            <h3 className="text-xl font-semibold mb-2">Easy Integration</h3>
            <p className="text-muted-foreground">
              Simple to implement with comprehensive documentation and examples.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}