import { useState, useEffect, useRef } from "react";
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
    Building,
    Rocket,
    Sparkles,
    ChevronRight,
    PlayCircle,
    Zap,
    Star,
    ShoppingBag,
    TrendingUp,
    Crown
} from "lucide-react";

// Import the background images and video
import homeBg from "@/assets/images/homeBg.png";
import dashboardImage from "@/assets/images/dashboardImage.png";

const HomePage = () => {
    const [showScrollTop, setShowScrollTop] = useState(false);
    const [showVideoModal, setShowVideoModal] = useState(false);
    const [contactForm, setContactForm] = useState({
        name: "",
        email: "",
        shop: "",
        message: ""
    });

    const videoRef = useRef<HTMLVideoElement>(null);

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

    const handlePlayVideo = () => {
        setShowVideoModal(true);
        if (videoRef.current) {
            videoRef.current.play();
        }
    };

    const handleCloseVideo = () => {
        setShowVideoModal(false);
        if (videoRef.current) {
            videoRef.current.pause();
            videoRef.current.currentTime = 0;
        }
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
            popular: false,
            icon: <Store className="w-6 h-6" />
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
            popular: true,
            icon: <TrendingUp className="w-6 h-6" />
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
            popular: false,
            icon: <Crown className="w-6 h-6" />
        }
    ];

    return (
        <div className="font-sans">
            {/* Video Modal */}
            {showVideoModal && (
                <div className="fixed inset-0 bg-black/90 backdrop-blur-sm z-[100] flex items-center justify-center p-4">
                    <div className="relative max-w-4xl w-full bg-gray-900 rounded-2xl overflow-hidden shadow-2xl">
                        <button
                            onClick={handleCloseVideo}
                            className="absolute top-4 right-4 z-10 bg-white/10 hover:bg-white/20 text-white p-2 rounded-full backdrop-blur-sm transition-colors"
                        >
                            <svg
                                className="w-6 h-6"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        </button>
                        <video
                            ref={videoRef}
                            className="w-full rounded-lg"
                            controls
                            src="/assets/videos/demo.mp4"
                        >
                            Your browser does not support the video tag.
                        </video>
                    </div>
                </div>
            )}

            {/* Hero Section with White Gradient Overlay */}
            <section
                id="home"
                className="min-h-screen relative overflow-hidden pt-16"
                style={{
                    backgroundImage: `linear-gradient(to bottom,
                    rgba(255,255,255,0.526), 
                    rgba(225,101,255,0.412)), url(${homeBg.src || homeBg})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat"
                }}
            >
                {/* Subtle gradient overlay using primary/secondary colors */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5"></div>

                {/* Modern Background Elements */}
                <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/10 rounded-full mix-blend-multiply filter blur-3xl"></div>
                    <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-secondary/10 rounded-full mix-blend-multiply filter blur-3xl"></div>
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/5 rounded-full mix-blend-multiply filter blur-3xl"></div>
                </div>

                <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 min-h-[calc(100vh-64px)] flex items-center">
                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
                        {/* Left Content */}
                        <div className="max-w-xl">
                            <div className="inline-flex items-center gap-2 bg-white backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium text-secondary mb-6 border border-secondary/20 shadow-sm">
                                <Sparkles className="w-4 h-4" />
                                <span>All-in-One Retail Solution</span>
                                <ChevronRight className="w-4 h-4" />
                            </div>

                            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                                Simplify Your{" "}
                                <span
                                    className="text-primary font-logo
                                text-stroke"
                                >
                                    Shop Management
                                </span>
                            </h1>

                            <p className="text-lg md:text-xl text-gray-700 mb-8 leading-relaxed">
                                Fast checkout, real-time tracking, and smart
                                analytics in one beautiful POS system.
                                Everything you need for business growth.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 mb-8">
                                {/* Example: Update this in HomePage.tsx */}
                                <Button
                                    variant="primary"
                                    size="lg"
                                    className="shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-300"
                                >
                                    <Rocket className="w-5 h-5" />
                                    Start Free Trial
                                    <ChevronRight className="w-5 h-5" />
                                </Button>

                                {/* Remove the flex classes, they're now in Button component */}
                                <Button
                                    variant="secondary"
                                    size="lg"
                                    onClick={handlePlayVideo}
                                    className="border-gray-300 text-gray-700 hover:bg-gray-50"
                                >
                                    <PlayCircle className="w-5 h-5" />
                                    Watch Demo
                                </Button>
                            </div>
                        </div>

                        {/* Right - Modern Dashboard Image */}
                        <div className="relative flex justify-center lg:justify-end">
                            <div className="relative w-full max-w-md">
                                <div className="relative rounded-3xl overflow-hidden shadow-2xl transform hover:scale-[1.01] transition-all duration-500 bg-white/5 backdrop-blur-sm p-6">
                                    {/* Modern floating elements around the image */}
                                    <div className="absolute -top-4 -right-4 w-20 h-24 bg-primary/10 rounded-2xl rotate-12"></div>
                                    <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-secondary/10 rounded-2xl -rotate-12"></div>

                                    {/* Main Dashboard Image Container */}
                                    <div className="relative z-10">
                                        <img
                                            src={
                                                dashboardImage.src ||
                                                dashboardImage
                                            }
                                            alt="Productify Dashboard"
                                            className="w-full h-auto rounded-2xl shadow-lg mx-auto border border-white/30"
                                            style={{
                                                boxShadow:
                                                    "0 20px 40px rgba(138, 0, 255, 0.1), 0 4px 12px rgba(0, 0, 0, 0.05)"
                                            }}
                                            onError={e => {
                                                e.currentTarget.src =
                                                    "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80";
                                            }}
                                        />
                                    </div>

                                    {/* Live Indicator */}
                                    <div className="absolute top-6 right-6 z-20">
                                        <div className="flex items-center gap-2 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full text-xs font-medium text-secondary border border-secondary/20">
                                            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                                            <span>Live Demo</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Section - Gradient Background */}
            <section
                id="about"
                className="py-24 bg-gradient-to-br from-primary/5 via-bgColor to-secondary/5"
            >
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <div className="inline-flex items-center gap-2 bg-gradient-to-r from-primary/10 to-secondary/10 px-4 py-2 rounded-full text-sm font-medium text-gray-900 mb-4 border border-primary/20">
                            <Zap className="w-4 h-4" />
                            <span>Why Choose Productify</span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                            Built for{" "}
                            <span className="text-primary">Modern Retail</span>
                        </h2>
                        <p className="text-xl text-gray-600">
                            Everything you need to run your shop efficiently
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {features.map((feature, index) => (
                            <div
                                key={index}
                                className="group bg-gradient-to-br from-white to-bgColor p-8 rounded-3xl border border-gray-100 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 shadow-lg"
                            >
                                <div className="w-14 h-14 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                                    <div className="text-white">
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
            <section
                id="pricing"
                className="py-24 bg-gradient-to-br from-secondary/5 via-bgColor to-primary/5"
            >
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-2xl mx-auto mb-16">
                        <div className="inline-flex items-center gap-2 bg-gradient-to-r from-primary/10 to-secondary/10 text-gray-900 px-4 py-2 rounded-full text-sm font-medium mb-4 border border-primary/20">
                            <Sparkles className="w-4 h-4" />
                            <span>Simple Pricing</span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                            Pricing That{" "}
                            <span className="text-secondary">
                                Grows With You
                            </span>
                        </h2>
                        <p className="text-xl text-gray-600">
                            Start free, upgrade as needed
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                        {pricingPlans.map((plan, index) => (
                            <div
                                key={index}
                                className={`relative rounded-3xl p-8 transition-all duration-300 hover:-translate-y-2 ${
                                    plan.popular
                                        ? "bg-gradient-to-b from-white to-primary/10 border-2 border-primary shadow-2xl transform scale-105"
                                        : "bg-gradient-to-b from-white to-bgColor border border-gray-200 hover:shadow-xl"
                                }`}
                            >
                                {plan.popular && (
                                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-primary to-secondary text-white text-sm font-bold px-6 py-2 rounded-full shadow-lg">
                                        MOST POPULAR
                                    </div>
                                )}

                                <div className="flex items-center gap-3 mb-4">
                                    <div
                                        className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                                            plan.popular
                                                ? "bg-gradient-to-br from-primary to-secondary"
                                                : "bg-gradient-to-br from-gray-100 to-gray-200"
                                        }`}
                                    >
                                        <div
                                            className={`${
                                                plan.popular
                                                    ? "text-white"
                                                    : "text-gray-700"
                                            }`}
                                        >
                                            {plan.icon}
                                        </div>
                                    </div>
                                    <h3
                                        className={`text-2xl font-bold ${
                                            plan.popular
                                                ? "text-secondary"
                                                : "text-gray-900"
                                        }`}
                                    >
                                        {plan.name}
                                    </h3>
                                </div>

                                <div className="mb-8">
                                    <span className="text-5xl font-bold">
                                        ${plan.price}
                                    </span>
                                    <span
                                        className={`text-lg ml-2 ${
                                            plan.popular
                                                ? "text-secondary"
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
                                            <Building className="w-5 h-5 text-secondary" />
                                            <span className="text-gray-700 font-medium">
                                                10 Shops
                                            </span>
                                        </>
                                    ) : (
                                        <>
                                            <Building className="w-5 h-5 text-primary" />
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
                                                        ? "text-secondary"
                                                        : "text-primary"
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
                                        plan.popular ? "primary" : "secondary"
                                    }
                                    fullWidth
                                    size="lg"
                                    className="inline-flex items-center justify-center gap-2"
                                >
                                    {plan.name === "Starter" ? (
                                        <>
                                            <ShoppingBag className="w-5 h-5" />
                                            Get Started Free
                                        </>
                                    ) : (
                                        <>
                                            {plan.popular ? (
                                                <Star className="w-5 h-5" />
                                            ) : (
                                                <TrendingUp className="w-5 h-5" />
                                            )}
                                            Choose {plan.name}
                                        </>
                                    )}
                                </Button>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section
                id="contact"
                className="py-24 bg-gradient-to-br from-primary/10 via-bgColor to-secondary/10"
            >
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-3xl mx-auto text-center">
                        <div className="inline-flex items-center gap-2 bg-gradient-to-r from-primary/10 to-secondary/10 px-4 py-2 rounded-full text-sm font-medium text-gray-900 mb-4 border border-primary/20">
                            <Rocket className="w-4 h-4" />
                            <span>Ready to Start?</span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                            Ready to Transform Your Shop?
                        </h2>
                        <p className="text-xl text-gray-600 mb-12">
                            Join thousands of shops using Productify
                        </p>

                        <div className="bg-gradient-to-br from-white to-bgColor rounded-3xl p-8 border border-gray-200 shadow-xl">
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
                                        className="w-full px-6 py-4 rounded-xl border border-gray-300 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
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
                                        className="w-full px-6 py-4 rounded-xl border border-gray-300 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
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
                                    className="w-full px-6 py-4 rounded-xl border border-gray-300 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
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
                                    className="w-full px-6 py-4 rounded-xl border border-gray-300 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent resize-none transition-all"
                                ></textarea>
                                <Button
                                    variant="primary"
                                    size="lg"
                                    fullWidth
                                    onClick={handleSubmit}
                                    className="inline-flex items-center justify-center gap-2 shadow-lg"
                                >
                                    <Rocket className="w-5 h-5" />
                                    Start Your Free Trial
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-gradient-to-b from-gray-900 to-gray-950 text-gray-300 py-12">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-4 gap-8 mb-8">
                        <div>
                            <h3 className="text-primary font-bold text-2xl mb-4">
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
                className={`fixed bottom-8 right-8 bg-gradient-to-r from-primary
                to-secondary text-white p-4 rounded-full shadow-lg
                transition-all duration-300 transform hover:scale-111
                hover:shadow-xl z-50 ${
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
