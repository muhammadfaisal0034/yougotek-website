import Link from "next/link";
import { Github, Linkedin, Mail, MapPin } from "lucide-react";

export function Footer() {
    return (
        <footer className="bg-background border-t border-white/10 py-12 px-6">
            <div className="mx-auto max-w-7xl flex flex-col md:flex-row justify-between items-center gap-6">
                <div className="flex flex-col gap-2">
                    <span className="text-2xl font-bold tracking-tight">
                        <span className="text-foreground">Muhammad</span>
                        <span className="text-accent"> Faisal</span>
                    </span>
                    <p className="text-muted-foreground text-sm max-w-xs">
                        Senior Full-Stack Engineer building scalable, secure, and high-performance web platforms.
                    </p>
                </div>

                <div className="flex flex-col gap-4 items-center md:items-end">
                    <div className="flex gap-4">
                        <Link
                            href="https://github.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-muted-foreground hover:text-accent transition-colors"
                        >
                            <Github size={20} />
                            <span className="sr-only">GitHub</span>
                        </Link>
                        <Link
                            href="https://linkedin.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-muted-foreground hover:text-accent transition-colors"
                        >
                            <Linkedin size={20} />
                            <span className="sr-only">LinkedIn</span>
                        </Link>
                        <Link
                            href="mailto:muhammadfaisal0034@gmail.com"
                            className="text-muted-foreground hover:text-accent transition-colors"
                        >
                            <Mail size={20} />
                            <span className="sr-only">Email</span>
                        </Link>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <MapPin size={16} />
                        <span>Riyadh, KSA</span>
                    </div>
                </div>
            </div>
            <div className="mx-auto max-w-7xl mt-8 pt-8 border-t border-white/5 text-center text-xs text-muted-foreground">
                © {new Date().getFullYear()} Muhammad Faisal. All rights reserved.
            </div>
        </footer>
    );
}
