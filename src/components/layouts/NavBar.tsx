// components/common/NavBar.tsx
import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import Button from "@/components/Button/Button";

// Define TypeScript interface for nav links
interface NavLink {
    id: number;
    name: string;
    href: string;
}

// Updated navbar data (removed type property)
const navLinks: NavLink[] = [
    { id: 1, name: "Home", href: "#home" },
    { id: 2, name: "About", href: "#about" },
    { id: 3, name: "Pricing", href: "#pricing" },
    { id: 4, name: "Contact", href: "#contact" }
];

const NavBar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleNavClick = (href: string) => {
        setIsMenuOpen(false);

        // Handle anchor links (smooth scroll)
        const element = document.querySelector(href);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <nav className="sticky top-0 z-50 w-full bg-bgColor shadow-md font-sans">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-between">
                    {/* Logo - Left */}
                    <div className="flex-shrink-0">
                        <Link
                            href="/"
                            className="flex items-center cursor-pointer"
                            onClick={() => handleNavClick("#home")}
                        >
                            <div className="flex items-center">
                                <span
                                    className="font-logo font-bold text-3xl
                                uppercase text-stroke text-primary"
                                >
                                    Productify
                                </span>
                            </div>
                        </Link>
                    </div>

                    {/* Navigation Links - Center (Desktop) */}
                    <div className="hidden md:flex flex-1 justify-center">
                        <div className="flex space-x-8">
                            {navLinks.map(link => (
                                <button
                                    key={link.id}
                                    onClick={() => handleNavClick(link.href)}
                                    className="text-gray-700 hover:text-secondary px-3 py-2 text-sm font-medium transition-colors duration-200"
                                >
                                    {link.name}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* CTA Buttons - Right (Desktop) */}
                    <div className="hidden md:flex items-center space-x-4">
                        <Link href="/signin">
                            <Button
                                variant="outline"
                                size="sm"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Sign In
                            </Button>
                        </Link>
                        <Link href="/signup">
                            <Button
                                variant="primary"
                                size="sm"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Get Started
                            </Button>
                        </Link>
                    </div>

                    {/* Mobile menu button */}
                    <div className="flex md:hidden">
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="inline-flex items-center justify-center
                            p-2 rounded-md text-gray-700 hover:text-secondary hover:bg-gray-100 focus:outline-none
                            transition-colors"
                            aria-label="Toggle menu"
                            aria-expanded={isMenuOpen}
                        >
                            {isMenuOpen ? (
                                <X className="h-6 w-6" aria-hidden="true" />
                            ) : (
                                <Menu className="h-6 w-6" aria-hidden="true" />
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile menu (responsive) */}
            <div className={`md:hidden ${isMenuOpen ? "block" : "hidden"}`}>
                <div className="space-y-1 px-2 pb-3 pt-2 bg-white border-t shadow-lg">
                    {/* Mobile Navigation Links */}
                    {navLinks.map(link => (
                        <button
                            key={link.id}
                            onClick={() => handleNavClick(link.href)}
                            className="block w-full text-left rounded-lg px-3
                            py-2.5 text-base font-medium text-gray-700
                            hover:bg-gray-50 hover:text-secondary transition-colors"
                        >
                            {link.name}
                        </button>
                    ))}

                    {/* Mobile Auth Buttons */}
                    <div className="mt-4 pt-4 border-t space-y-2 px-3">
                        <Link
                            href="/signin"
                            className="block"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            <Button
                                variant="outline"
                                fullWidth
                                className="justify-start"
                            >
                                Sign In
                            </Button>
                        </Link>
                        <Link
                            href="/signup"
                            className="block"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            <Button variant="primary" fullWidth>
                                Get Started
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;
