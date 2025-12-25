// components/common/NavBar.tsx
import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import Button from "@/components/Button/Button";

interface NavLink {
    id: number;
    name: string;
    href: string;
}

const navLinks: NavLink[] = [
    { id: 1, name: "Home", href: "#home" },
    { id: 2, name: "Features", href: "#about" },
    { id: 3, name: "Pricing", href: "#pricing" },
    { id: 4, name: "Contact", href: "#contact" }
];

const NavBar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const handleNavClick = (href: string) => {
        setIsMenuOpen(false);
        const element = document.querySelector(href);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <nav
            className={`fixed top-0 z-50 w-full transition-all duration-300 ${
                isScrolled || isMenuOpen
                    ? "bg-white/95 backdrop-blur-sm shadow-lg"
                    : "bg-white/95 backdrop-blur-sm md:bg-transparent"
            }`}
        >
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex h-20 items-center justify-between">
                    {/* Logo */}
                    <div className="flex-shrink-0">
                        <Link
                            href="/"
                            className="flex items-center cursor-pointer"
                            onClick={() => handleNavClick("#home")}
                        >
                            <span
                                className="font-logo font-bold text-3xl
                                uppercase text-primary text-stroke
                                transition-all duration-300"
                            >
                                Productify
                            </span>
                        </Link>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex flex-1 justify-center">
                        <div className="flex space-x-8">
                            {navLinks.map(link => (
                                <button
                                    key={link.id}
                                    onClick={() => handleNavClick(link.href)}
                                    className={`px-3 py-2 text-md font-semibold transition-all duration-200 ${
                                        isScrolled
                                            ? "text-gray-900 hover:text-primary"
                                            : "text-gray-700 hover:text-secondary"
                                    }`}
                                >
                                    {link.name}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Desktop CTA Buttons */}
                    <div className="hidden md:flex items-center space-x-4">
                        <Link href="/login">
                            <Button
                                variant={isScrolled ? "outline" : "white"}
                                size="sm"
                                className={
                                    !isScrolled
                                        ? "border-white/30 text-secondary hover:bg-white/10 bg-transparent"
                                        : ""
                                }
                            >
                                Sign In
                            </Button>
                        </Link>
                        <Link href="/register">
                            <Button
                                variant={isScrolled ? "primary" : "secondary"}
                                size="sm"
                            >
                                Get Started
                            </Button>
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="flex md:hidden">
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="inline-flex items-center justify-center p-3 rounded-lg text-gray-900 hover:bg-gray-100 transition-all"
                            aria-label="Toggle menu"
                        >
                            {isMenuOpen ? (
                                <X className="h-6 w-6" />
                            ) : (
                                <Menu className="h-6 w-6" />
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <div
                className={`md:hidden transition-all duration-300 ease-in-out ${
                    isMenuOpen
                        ? "max-h-[500px] opacity-100 translate-y-0"
                        : "max-h-0 opacity-0 -translate-y-4 pointer-events-none overflow-hidden"
                } bg-white shadow-lg`}
            >
                <div className="px-4 pt-2 pb-4 space-y-1">
                    {navLinks.map(link => (
                        <button
                            key={link.id}
                            onClick={() => handleNavClick(link.href)}
                            className="block w-full text-left rounded-lg px-4 py-3 text-base font-medium text-gray-900 hover:bg-gray-100 hover:text-primary transition-colors"
                        >
                            {link.name}
                        </button>
                    ))}

                    <div className="pt-4 space-y-3 px-4">
                        <Link
                            href="/signin"
                            className="block"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            <Button
                                variant="outline"
                                fullWidth
                                className="border-gray-300 text-gray-900 hover:border-gray-400"
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
