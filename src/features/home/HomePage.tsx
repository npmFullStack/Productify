import { useState, useEffect } from "react";
import Button from "@/components/Button/Button";
import {
    ShoppingCart,
    BarChart3,
    Package,
    Users,
    Shield,
    ArrowUp,
    Play,
    Check,
    CreditCard,
    Store,
    Building
} from "lucide-react";

// Import the background images
import homeBg from "@/assets/images/homeBg.png";
import dashboardImage from "@/assets/images/dashboardImage.png";

const HomePage = () => {
    const [showScrollTop, setShowScrollTop] = useState(false);
    const [contactForm, setContactForm] = useState({
        name: "",
        email: "",
        shop: "",
        message: ""
    });

    useEffect(() => {
        const handleScroll = () => {
            setShowScrollTop(window.scrollY > 300);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    const handleSubmit = () => {
        alert("Thank you for your interest! We will contact you soon.");
        setContactForm({ name: "", email: "", shop: "", message: "" });
    };

    const features = [
        {
            icon: <ShoppingCart className="w-6 h-6" />,
            title: "Fast Checkout",
            description: "Lightning-fast POS for quick sales"
        },
        {
            icon: <BarChart3 className="w-6 h-6" />,
            title: "Live Analytics",
            description: "Real-time insights for smart decisions"
        },
        {
            icon: <Package className="w-6 h-6" />,
            title: "Smart Inventory",
            description: "Track stock with auto alerts"
        },
        {
            icon: <Users className="w-6 h-6" />,
            title: "Team Management",
            description: "Control staff access easily"
        },
        {
            icon: <CreditCard className="w-6 h-6" />,
            title: "Multi-payment",
            description: "Accept cards, mobile pay & cash"
        },
        {
            icon: <Shield className="w-6 h-6" />,
            title: "Bank Security",
            description: "Your data stays protected"
        }
    ];

    const pricingPlans = [
        {
            name: "Starter",
            price: "0",
            period: "",
            features: [
                "1 shop account",
                "20 products max",
                "Basic POS features",
                "Sales reports",
                "Email support"
            ],
            popular: false
        },
        {
            name: "Pro",
            price: "29",
            period: "/month",
            features: [
                "10 shop accounts",
                "200 products each",
                "Advanced POS system",
                "Real-time analytics",
                "Priority support",
                "Custom branding",
                "API access"
            ],
            popular: true
        },
        {
            name: "Business",
            price: "79",
            period: "/month",
            features: [
                "Unlimited shops",
                "Unlimited products",
                "Everything in Pro",
                "Dedicated support",
                "Custom integrations",
                "Advanced security",
                "White-label option"
            ],
            popular: false
        }
    ];

    return (
        <div className="font-sans">
            {/* Hero Section */}
            <section
                id="home"
                className="min-h-screen relative overflow-hidden pt-16"
                style={{
                    backgroundImage: `linear-gradient(to bottom right, rgba(138, 0, 255, 0.9), rgba(76, 29, 149, 0.95)), url(${
                        homeBg.src || homeBg
                    })`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat"
                }}
            >
                <div className="absolute inset-0 overflow-hidden">
                    <div
                        className="absolute -top-40 -right-40 w-80 h-80
                    bg-purple-100/20 rounded-full mix-blend-multiply filter
                    blur-3xl opacity-30"
                    ></div>
                    <div
                        className="absolute -bottom-40 -left-40 w-80 h-80
                    bg-indigo-200/20 rounded-full mix-blend-multiply filter
                    blur-3xl opacity-30"
                    ></div>
                </div>

                <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 min-h-[calc(100vh-64px)] flex items-center">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        {/* Left Content */}
                        <div className="max-w-xl">
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                                Simplify Your Shop Management
                            </h1>

                            <p className="text-xl text-white/90 mb-8">
                                All-in-one POS system. Fast checkout, real-time
                                tracking, business growth.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 mb-8">
                                <Button
                                    variant="primary"
                                    size="lg"
                                    className="shadow-lg hover:shadow-xl"
                                >
                                    Start Free Trial
                                </Button>
                                <Button
                                    variant="secondary"
                                    size="lg"
                                    className="text-white hover:bg-secondary/90"
                                >
                                    <Play className="w-5 h-5 mr-2" />
                                    Watch Demo
                                </Button>
                            </div>
                        </div>

                        {/* Right - Dashboard Image */}
                        <div className="relative">
                            <div className="relative rounded-3xl overflow-hidden shadow-2xl transform hover:scale-[1.02] transition-transform duration-300 border border-white/10">
                                <img
                                    src={dashboardImage.src || dashboardImage}
                                    alt="Productify Dashboard"
                                    className="w-full h-auto rounded-3xl"
                                    onError={e => {
                                        e.currentTarget.src =
                                            "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80";
                                    }}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section
                id="about"
                className="py-24 bg-gradient-to-b from-gray-50 to-white"
            >
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                            Built for Modern Retail
                        </h2>
                        <p className="text-xl text-gray-600">
                            Everything you need to run your shop efficiently
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {features.map((feature, index) => (
                            <div
                                key={index}
                                className="group bg-white p-8 rounded-2xl border border-gray-100 hover:border-secondary/30 transition-all duration-300 hover:shadow-xl"
                            >
                                <div className="w-14 h-14 bg-secondary rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                    <div className="text-primary">
                                        {feature.icon}
                                    </div>
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                                    {feature.title}
                                </h3>
                                <p className="text-gray-600">
                                    {feature.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Pricing Section */}
            <section id="pricing" className="py-24 bg-secondary/20">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-2xl mx-auto mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                            Pricing That Grows With You
                        </h2>
                        <p className="text-xl text-gray-600">
                            Start free, upgrade as needed
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                        {pricingPlans.map((plan, index) => (
                            <div
                                key={index}
                                className={`relative rounded-3xl p-8 transition-all duration-300 ${
                                    plan.popular
                                        ? "bg-white border-2 border-primary shadow-2xl transform scale-105"
                                        : "bg-white border border-gray-200 hover:border-primary/30 hover:shadow-xl"
                                }`}
                            >
                                {plan.popular && (
                                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-primary text-white text-sm font-bold px-6 py-2 rounded-full shadow-lg">
                                        MOST POPULAR
                                    </div>
                                )}
                                <h3
                                    className={`text-2xl font-bold mb-4 ${
                                        plan.popular
                                            ? "text-primary"
                                            : "text-gray-900"
                                    }`}
                                >
                                    {plan.name}
                                </h3>
                                <div className="mb-8">
                                    <span className="text-5xl font-bold">
                                        ${plan.price}
                                    </span>
                                    <span
                                        className={`text-lg ml-2 ${
                                            plan.popular
                                                ? "text-primary/80"
                                                : "text-gray-500"
                                        }`}
                                    >
                                        {plan.period}
                                    </span>
                                </div>
                                <div className="mb-6 flex items-center gap-2">
                                    {plan.name === "Starter" ? (
                                        <>
                                            <Store className="w-5 h-5 text-gray-500" />
                                            <span className="text-gray-700 font-medium">
                                                1 Shop
                                            </span>
                                        </>
                                    ) : plan.name === "Pro" ? (
                                        <>
                                            <Building className="w-5 h-5 text-primary" />
                                            <span className="text-gray-700 font-medium">
                                                10 Shops
                                            </span>
                                        </>
                                    ) : (
                                        <>
                                            <Building className="w-5 h-5 text-secondary" />
                                            <span className="text-gray-700 font-medium">
                                                Unlimited
                                            </span>
                                        </>
                                    )}
                                </div>
                                <ul className="space-y-4 mb-8">
                                    {plan.features.map((feature, idx) => (
                                        <li
                                            key={idx}
                                            className="flex items-start"
                                        >
                                            <Check
                                                className={`w-5 h-5 mr-3 flex-shrink-0 ${
                                                    plan.popular
                                                        ? "text-primary"
                                                        : "text-secondary"
                                                }`}
                                            />
                                            <span className="text-gray-600">
                                                {feature}
                                            </span>
                                        </li>
                                    ))}
                                </ul>
                                <Button
                                    variant={
                                        plan.popular ? "primary" : "outline"
                                    }
                                    fullWidth
                                    size="lg"
                                    className={
                                        plan.popular
                                            ? ""
                                            : "border-primary text-primary hover:bg-primary/5"
                                    }
                                >
                                    {plan.name === "Starter"
                                        ? "Get Started Free"
                                        : `Choose ${plan.name}`}
                                </Button>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section id="contact" className="py-24 bg-gray-50">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-3xl mx-auto text-center">
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                            Ready to Transform Your Shop?
                        </h2>
                        <p className="text-xl text-gray-600 mb-12">
                            Join thousands of shops using Productify
                        </p>

                        <div className="bg-white rounded-3xl p-8 border border-gray-200 shadow-lg">
                            <div className="space-y-6">
                                <div className="grid md:grid-cols-2 gap-6">
                                    <input
                                        type="text"
                                        placeholder="Your Name"
                                        value={contactForm.name}
                                        onChange={e =>
                                            setContactForm({
                                                ...contactForm,
                                                name: e.target.value
                                            })
                                        }
                                        className="w-full px-6 py-4 rounded-xl border border-gray-300 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                                    />
                                    <input
                                        type="email"
                                        placeholder="Your Email"
                                        value={contactForm.email}
                                        onChange={e =>
                                            setContactForm({
                                                ...contactForm,
                                                email: e.target.value
                                            })
                                        }
                                        className="w-full px-6 py-4 rounded-xl border border-gray-300 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                                    />
                                </div>
                                <input
                                    type="text"
                                    placeholder="Shop Name"
                                    value={contactForm.shop}
                                    onChange={e =>
                                        setContactForm({
                                            ...contactForm,
                                            shop: e.target.value
                                        })
                                    }
                                    className="w-full px-6 py-4 rounded-xl border border-gray-300 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                                />
                                <textarea
                                    placeholder="Tell us about your shop..."
                                    value={contactForm.message}
                                    onChange={e =>
                                        setContactForm({
                                            ...contactForm,
                                            message: e.target.value
                                        })
                                    }
                                    rows={4}
                                    className="w-full px-6 py-4 rounded-xl border border-gray-300 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent resize-none"
                                ></textarea>
                                <Button
                                    variant="primary"
                                    size="lg"
                                    fullWidth
                                    onClick={handleSubmit}
                                >
                                    Start Your Free Trial
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-gray-900 text-gray-300 py-12">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-4 gap-8 mb-8">
                        <div>
                            <h3 className="text-primary font-bold text-2xl mb-4
                            font-logo text-stroke uppercase">
                                Productify
                            </h3>
                            <p className="text-sm text-gray-400">
                                Modern POS for small shops
                            </p>
                        </div>
                        <div>
                            <h4 className="font-semibold text-white mb-4">
                                Product
                            </h4>
                            <ul className="space-y-2 text-sm">
                                <li>
                                    <button className="hover:text-primary transition-colors">
                                        Features
                                    </button>
                                </li>
                                <li>
                                    <button className="hover:text-primary transition-colors">
                                        Pricing
                                    </button>
                                </li>
                                <li>
                                    <button className="hover:text-primary transition-colors">
                                        Demo
                                    </button>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-semibold text-white mb-4">
                                Company
                            </h4>
                            <ul className="space-y-2 text-sm">
                                <li>
                                    <button className="hover:text-primary transition-colors">
                                        About
                                    </button>
                                </li>
                                <li>
                                    <button className="hover:text-primary transition-colors">
                                        Contact
                                    </button>
                                </li>
                                <li>
                                    <button className="hover:text-primary transition-colors">
                                        Support
                                    </button>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-semibold text-white mb-4">
                                Legal
                            </h4>
                            <ul className="space-y-2 text-sm">
                                <li>
                                    <button className="hover:text-primary transition-colors">
                                        Privacy
                                    </button>
                                </li>
                                <li>
                                    <button className="hover:text-primary transition-colors">
                                        Terms
                                    </button>
                                </li>
                                <li>
                                    <button className="hover:text-primary transition-colors">
                                        Security
                                    </button>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="border-t border-gray-800 pt-8 text-center text-sm text-gray-400">
                        <p>
                            © 2024 PRODUCTIFY. Crafted by{" "}
                            <span className="text-primary font-semibold">
                                Norway Mangorangca
                            </span>
                            . All rights reserved.
                        </p>
                    </div>
                </div>
            </footer>

            {/* Scroll to Top */}
            <button
                onClick={scrollToTop}
                className={`fixed bottom-8 right-8 bg-primary text-white p-4 rounded-full shadow-lg transition-all duration-300 transform hover:scale-110 hover:bg-primary/90 z-50 ${
                    showScrollTop
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-16 pointer-events-none"
                }`}
                aria-label="Scroll to top"
            >
                <ArrowUp className="w-6 h-6" />
            </button>
        </div>
    );
};

export default HomePage;
