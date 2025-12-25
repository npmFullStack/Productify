import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { User, Mail, Lock, Eye, EyeOff, Check, AlertCircle } from "lucide-react";
import Button from "@/components/Button/Button";
import { registerSchema, type RegisterFormData } from "@/schemas/authSchema";
import loginImage from "@/assets/images/loginImage.png"; // Reusing same image
import authBg from "@/assets/images/authBg.png";

const Register = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [serverError, setServerError] = useState("");

    const {
        register,
        handleSubmit,
        formState: { errors },
        watch
    } = useForm<RegisterFormData>({
        resolver: zodResolver(registerSchema)
    });

    const password = watch("password");

    const onSubmit = async (data: RegisterFormData) => {
        setIsLoading(true);
        setServerError("");
        
        try {
            console.log("Register data:", {
                firstName: data.firstName,
                lastName: data.lastName,
                email: data.email,
                // Don't log passwords in production
            });
            
            // TODO: Implement actual registration logic
            // const response = await fetch("/api/auth/register", {...})
            // For now, simulate API call
            await new Promise(resolve => setTimeout(resolve, 1000));
            
            alert("Registration successful! Please check your email to verify your account.");
            // TODO: Redirect to login or dashboard
        } catch (error) {
            setServerError("Registration failed. Please try again.");
            console.error("Registration error:", error);
        } finally {
            setIsLoading(false);
        }
    };

    const handleSocialRegister = (provider: "google" | "facebook") => {
        console.log(`${provider} registration clicked`);
        // TODO: Implement social registration
        window.location.href = `/api/auth/${provider}`;
    };

    // Password strength checker
    const checkPasswordStrength = () => {
        if (!password) return { strength: 0, color: "bg-gray-300", text: "Weak" };
        
        let strength = 0;
        if (password.length >= 6) strength += 25;
        if (/[A-Z]/.test(password)) strength += 25;
        if (/[0-9]/.test(password)) strength += 25;
        if (/[^A-Za-z0-9]/.test(password)) strength += 25;
        
        let color = "bg-red-500";
        let text = "Weak";
        
        if (strength >= 75) {
            color = "bg-green-500";
            text = "Strong";
        } else if (strength >= 50) {
            color = "bg-yellow-500";
            text = "Good";
        } else if (strength >= 25) {
            color = "bg-orange-500";
            text = "Fair";
        }
        
        return { strength, color, text };
    };

    const passwordStrength = checkPasswordStrength();

    return (
        <div 
            className="min-h-screen flex items-center justify-center p-4"
            style={{
                backgroundImage: `linear-gradient(to bottom,
                    rgba(255,255,255,0.95),
                    rgba(138, 0, 255, 0.08)), 
                    url(${authBg.src || authBg})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat"
            }}
        >
            {/* Subtle gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5"></div>

            <div className="relative z-10 container max-w-6xl mx-auto">
                <div className="bg-white/95 backdrop-blur-sm rounded-3xl shadow-2xl overflow-hidden border border-white/30">
                    <div className="grid lg:grid-cols-2 gap-0">
                        {/* Left Column - Image */}
                        <div className="relative hidden lg:block">
                            <div className="absolute inset-0 bg-gradient-to-br from-primary to-secondary opacity-20"></div>
                            <img
                                src={loginImage.src || loginImage}
                                alt="Register Illustration"
                                className="w-full h-full object-cover"
                                onError={(e) => {
                                    e.currentTarget.src = "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80";
                                }}
                            />
                            
                            {/* Overlay content */}
                            <div className="absolute inset-0 flex flex-col justify-end p-12 text-white bg-gradient-to-t from-black/60 to-transparent">
                                <h2 className="text-4xl font-bold mb-4">Join Productify</h2>
                                <p className="text-lg opacity-90">
                                    Create your account and start managing your shop efficiently.
                                </p>
                                
                                {/* Benefits */}
                                <div className="space-y-4 mt-12">
                                    <div className="flex items-center gap-3">
                                        <Check className="w-5 h-5 text-green-400" />
                                        <span>Free 14-day trial</span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <Check className="w-5 h-5 text-green-400" />
                                        <span>No credit card required</span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <Check className="w-5 h-5 text-green-400" />
                                        <span>Cancel anytime</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right Column - Form */}
                        <div className="p-8 md:p-12">
                            <div className="max-w-md mx-auto">
                                {/* Logo */}
                                <Link href="/" className="inline-block mb-8">
                                    <span className="font-logo font-bold text-3xl text-primary">
                                        Productify
                                    </span>
                                </Link>

                                <div className="mb-8">
                                    <h1 className="text-3xl font-bold text-gray-900 mb-2">
                                        Create your account
                                    </h1>
                                    <p className="text-gray-600">
                                        Start your free trial today.
                                    </p>
                                </div>

                                {/* Server Error */}
                                {serverError && (
                                    <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-xl flex items-start gap-3">
                                        <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                                        <p className="text-red-600 text-sm">{serverError}</p>
                                    </div>
                                )}

                                {/* Form */}
                                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                                    {/* Name Fields */}
                                    <div className="grid grid-cols-2 gap-4">
                                        <div>
                                            <label className="block text-sm font-medium text-gray-900 mb-2">
                                                First Name
                                            </label>
                                            <div className="relative">
                                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                                    <User className="h-5 w-5 text-gray-400" />
                                                </div>
                                                <input
                                                    type="text"
                                                    {...register("firstName")}
                                                    className="pl-10 w-full px-4 py-3.5 rounded-xl border border-gray-300 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                                                    placeholder="John"
                                                />
                                            </div>
                                            {errors.firstName && (
                                                <p className="mt-2 text-sm text-red-600">
                                                    {errors.firstName.message}
                                                </p>
                                            )}
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-gray-900 mb-2">
                                                Last Name
                                            </label>
                                            <div className="relative">
                                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                                    <User className="h-5 w-5 text-gray-400" />
                                                </div>
                                                <input
                                                    type="text"
                                                    {...register("lastName")}
                                                    className="pl-10 w-full px-4 py-3.5 rounded-xl border border-gray-300 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                                                    placeholder="Doe"
                                                />
                                            </div>
                                            {errors.lastName && (
                                                <p className="mt-2 text-sm text-red-600">
                                                    {errors.lastName.message}
                                                </p>
                                            )}
                                        </div>
                                    </div>

                                    {/* Email */}
                                    <div>
                                        <label className="block text-sm font-medium text-gray-900 mb-2">
                                            Email Address
                                        </label>
                                        <div className="relative">
                                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                                <Mail className="h-5 w-5 text-gray-400" />
                                            </div>
                                            <input
                                                type="email"
                                                {...register("email")}
                                                className="pl-10 w-full px-4 py-3.5 rounded-xl border border-gray-300 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                                                placeholder="you@example.com"
                                            />
                                        </div>
                                        {errors.email && (
                                            <p className="mt-2 text-sm text-red-600">
                                                {errors.email.message}
                                            </p>
                                        )}
                                    </div>

                                    {/* Password */}
                                    <div>
                                        <label className="block text-sm font-medium text-gray-900 mb-2">
                                            Password
                                        </label>
                                        <div className="relative">
                                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                                <Lock className="h-5 w-5 text-gray-400" />
                                            </div>
                                            <input
                                                type={showPassword ? "text" : "password"}
                                                {...register("password")}
                                                className="pl-10 pr-10 w-full px-4 py-3.5 rounded-xl border border-gray-300 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                                                placeholder="••••••••"
                                            />
                                            <button
                                                type="button"
                                                onClick={() => setShowPassword(!showPassword)}
                                                className="absolute inset-y-0 right-0 pr-3 flex items-center"
                                            >
                                                {showPassword ? (
                                                    <EyeOff className="h-5 w-5 text-gray-400 hover:text-gray-600" />
                                                ) : (
                                                    <Eye className="h-5 w-5 text-gray-400 hover:text-gray-600" />
                                                )}
                                            </button>
                                        </div>
                                        
                                        {/* Password Strength Indicator */}
                                        {password && (
                                            <div className="mt-3">
                                                <div className="flex justify-between text-sm mb-1">
                                                    <span className="text-gray-700">Password strength:</span>
                                                    <span className={`font-medium ${
                                                        passwordStrength.strength >= 75 ? "text-green-600" :
                                                        passwordStrength.strength >= 50 ? "text-yellow-600" :
                                                        passwordStrength.strength >= 25 ? "text-orange-600" :
                                                        "text-red-600"
                                                    }`}>
                                                        {passwordStrength.text}
                                                    </span>
                                                </div>
                                                <div className="w-full bg-gray-200 rounded-full h-2">
                                                    <div 
                                                        className={`${passwordStrength.color} h-2 rounded-full transition-all duration-300`}
                                                        style={{ width: `${passwordStrength.strength}%` }}
                                                    ></div>
                                                </div>
                                                <div className="mt-2 text-xs text-gray-600">
                                                    <p className="flex items-center gap-1">
                                                        <Check className={`w-3 h-3 ${password.length >= 6 ? "text-green-500" : "text-gray-400"}`} />
                                                        At least 6 characters
                                                    </p>
                                                    <p className="flex items-center gap-1">
                                                        <Check className={`w-3 h-3 ${/[A-Z]/.test(password) ? "text-green-500" : "text-gray-400"}`} />
                                                        One uppercase letter
                                                    </p>
                                                    <p className="flex items-center gap-1">
                                                        <Check className={`w-3 h-3 ${/[0-9]/.test(password) ? "text-green-500" : "text-gray-400"}`} />
                                                        One number
                                                    </p>
                                                </div>
                                            </div>
                                        )}
                                        
                                        {errors.password && (
                                            <p className="mt-2 text-sm text-red-600">
                                                {errors.password.message}
                                            </p>
                                        )}
                                    </div>

                                    {/* Confirm Password */}
                                    <div>
                                        <label className="block text-sm font-medium text-gray-900 mb-2">
                                            Confirm Password
                                        </label>
                                        <div className="relative">
                                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                                <Lock className="h-5 w-5 text-gray-400" />
                                            </div>
                                            <input
                                                type={showConfirmPassword ? "text" : "password"}
                                                {...register("confirmPassword")}
                                                className="pl-10 pr-10 w-full px-4 py-3.5 rounded-xl border border-gray-300 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                                                placeholder="••••••••"
                                            />
                                            <button
                                                type="button"
                                                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                                className="absolute inset-y-0 right-0 pr-3 flex items-center"
                                            >
                                                {showConfirmPassword ? (
                                                    <EyeOff className="h-5 w-5 text-gray-400 hover:text-gray-600" />
                                                ) : (
                                                    <Eye className="h-5 h-5 text-gray-400 hover:text-gray-600" />
                                                )}
                                            </button>
                                        </div>
                                        {errors.confirmPassword && (
                                            <p className="mt-2 text-sm text-red-600">
                                                {errors.confirmPassword.message}
                                            </p>
                                        )}
                                    </div>

                                    {/* Terms Agreement */}
                                    <div className="flex items-start">
                                        <input
                                            type="checkbox"
                                            id="terms"
                                            required
                                            className="h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded mt-1"
                                        />
                                        <label htmlFor="terms" className="ml-2 text-sm text-gray-700">
                                            I agree to Productify&apos;s{" "}
                                            <Link href="/terms" className="text-primary hover:underline">
                                                Terms of Service
                                            </Link>{" "}
                                            and{" "}
                                            <Link href="/privacy" className="text-primary hover:underline">
                                                Privacy Policy
                                            </Link>
                                        </label>
                                    </div>

                                    {/* Submit Button */}
                                    <Button
                                        type="submit"
                                        variant="primary"
                                        size="lg"
                                        fullWidth
                                        disabled={isLoading}
                                        className="shadow-lg hover:shadow-xl"
                                    >
                                        {isLoading ? "Creating account..." : "Create Account"}
                                    </Button>
                                </form>

                                {/* Divider */}
                                <div className="my-8">
                                    <div className="relative">
                                        <div className="absolute inset-0 flex items-center">
                                            <div className="w-full border-t border-gray-300"></div>
                                        </div>
                                        <div className="relative flex justify-center text-sm">
                                            <span className="px-4 bg-white text-gray-500">
                                                Or sign up with
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                {/* Social Registration */}
                                <div className="grid grid-cols-2 gap-4 mb-8">
                                    <Button
                                        variant="outline"
                                        onClick={() => handleSocialRegister("google")}
                                        className="border-gray-300 hover:border-gray-400"
                                    >
                                        <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
                                            <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                                            <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                                            <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                                            <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                                        </svg>
                                        Google
                                    </Button>
                                    <Button
                                        variant="outline"
                                        onClick={() => handleSocialRegister("facebook")}
                                        className="border-gray-300 hover:border-gray-400"
                                    >
                                        <svg className="w-5 h-5 mr-2" fill="#1877F2" viewBox="0 0 24 24">
                                            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                                        </svg>
                                        Facebook
                                    </Button>
                                </div>

                                {/* Sign In Link */}
                                <div className="text-center">
                                    <p className="text-gray-600">
                                        Already have an account?{" "}
                                        <Link 
                                            href="/auth/login" 
                                            className="font-semibold text-primary hover:text-secondary transition-colors"
                                        >
                                            Sign in
                                        </Link>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;