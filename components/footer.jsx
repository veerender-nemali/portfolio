export default function Footer() {
    return (
        <footer className="bg-secondary border-t py-12">
            <div className="max-w-6xl mx-auto px-4">
                <div className="grid md:grid-cols-3 gap-8 mb-8">
                    <div>
                        <h3 className="text-lg font-semibold mb-4">About</h3>
                        <p className="text-muted-foreground">Full stack developer passionate about creating amazing web experiences.</p>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
                        <ul className="space-y-2 text-muted-foreground">
                            <li><a href="#home" className="hover:text-primary">Home</a></li>
                            <li><a href="#projects" className="hover:text-primary">Projects</a></li>
                            <li><a href="#contact" className="hover:text-primary">Contact</a></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Follow</h3>
                        <ul className="space-y-2 text-muted-foreground">
                            <li><a href="#" className="hover:text-primary">GitHub</a></li>
                            <li><a href="#" className="hover:text-primary">LinkedIn</a></li>
                            <li><a href="#" className="hover:text-primary">Twitter</a></li>
                        </ul>
                    </div>
                </div>
                <div className="border-t pt-8 text-center text-muted-foreground">
                    <p>&copy; 2024 Your Name. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
