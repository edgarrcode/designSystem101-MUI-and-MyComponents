export default function Navigation() {
  return (
    <nav className="w-full py-4 px-8 bg-foreground text-background">
      <ul className="flex gap-6">
        <li><a href="/" className="hover:underline">Home</a></li>
        <li><a href="/about" className="hover:underline">About</a></li>
        <li><a href="/contact" className="hover:underline">Contact</a></li>
      </ul>
    </nav>
  );
}
