import { useContext, useState } from "react";
import { Github, Linkedin, Mail, FileText } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import { assets } from "../assets/assets";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const navigate = useNavigate();
  const { backendUrl } = useContext(AppContext);
  const location = useLocation();

  // Add state for email input and submission status
  const [email, setEmail] = useState("");
  const [subscribeStatus, setSubscribeStatus] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const socialLinks = [
    {
      name: "GitHub",
      icon: <Github size={20} />,
      href: "https://github.com/SynthCipher",
    },
    {
      name: "LinkedIn",
      icon: <Linkedin size={20} />,
      href: "https://www.linkedin.com/in/jigmatdorjey/",
    },
    {
      name: "Email",
      icon: <Mail size={20} />,
      href: "mailto:jigmatdorjey255@gmail.com",
    },
    {
      name: "Resume",
      icon: <FileText size={20} />,
      href: "/assets/myCV.pdf", // Path to your CV file
    },
  ];

  // Updated footer links to handle both same-page and cross-page navigation
  const footerLinks = [
    { name: "Home", path: "/", hash: "home" },
    { name: "Projects", path: "/", hash: "projects" },
    { name: "Blog", path: "/", hash: "blog" },
  ];

  // Handle navigation with proper hash scrolling
  const handleNavigation = (link) => {
    if (link.isExternal) {
      // Open external links or files in a new tab
      window.open(link.path, "_blank");
      return;
    }

    const isCurrentPath = location.pathname === link.path;

    if (isCurrentPath) {
      // If we're already on the target page, just scroll to the section
      const element = document.getElementById(link.hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      // Navigate to the page first, then scroll to section after page loads
      navigate(link.path);

      // Wait for navigation to complete before scrolling
      setTimeout(() => {
        const element = document.getElementById(link.hash);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    }
  };

  const handleSubscribe = async (e) => {
    e.preventDefault();

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setSubscribeStatus({
        type: "error",
        message: "Please enter a valid email address",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      // Option 1: Using fetch
      const response = await fetch(backendUrl + "/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Subscription failed");
      }

      const data = await response.json();

      // Option 2: Using axios (alternative)
      // const response = await axios.post(backendUrl + "/api/subscribe", { email });
      // const data = response.data;

      setSubscribeStatus({
        type: "success",
        message: data.message || "Thanks for subscribing!",
      });
      setEmail("");
    } catch (error) {
      setSubscribeStatus({
        type: "error",
        message: error.message || "Failed to subscribe. Please try again.",
      });
      console.error("Newsletter subscription error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <footer className="bg-white border-t border-gray-100">
      <div className="container mx-auto px-4 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About */}
          <div>
            <h3 className="text-lg font-medium mb-4 text-gray-800">
              Portfolio
            </h3>
            <p className="text-gray-500 mb-4 text-sm">
              A showcase of my work, skills, and experiences as a developer.
              Feel free to reach out for collaborations or opportunities.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-gray-800 transition-colors duration-300"
                  aria-label={link.name}
                >
                  {link.icon}
                </a>
              ))}
            </div>

            {/* Resume Button */}
            <div className="mt-4">
              <a
                href={assets.myCV}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-2 bg-gray-800 text-white rounded-md hover:bg-gray-700 transition-colors duration-300 text-sm"
              >
                <FileText size={16} className="mr-2" />
                View Resume
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-medium mb-4 text-gray-800">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => handleNavigation(link)}
                    className="text-gray-500 hover:text-gray-800 text-sm transition-colors duration-300"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-medium mb-4 text-gray-800">
              Stay Updated
            </h3>
            <p className="text-gray-500 mb-4 text-sm">
              Subscribe to my newsletter for the latest updates on projects and
              blog posts.
            </p>
            <form
              className="flex flex-col space-y-2"
              onSubmit={handleSubscribe}
            >
              <input
                type="email"
                placeholder="Your email"
                className="px-4 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-1 focus:ring-gray-800 text-sm"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                aria-label="Email for newsletter"
              />
              <button
                type="submit"
                disabled={isSubmitting}
                className={`px-4 py-2 cursor-pointer bg-gray-800 text-white rounded-md hover:bg-gray-700 focus:outline-none focus:ring-1 focus:ring-gray-800 text-sm transition-colors duration-300 ${
                  isSubmitting ? "opacity-70 cursor-not-allowed" : ""
                }`}
              >
                {isSubmitting ? "Subscribing..." : "Subscribe"}
              </button>

              {/* Status message */}
              {subscribeStatus && (
                <p
                  className={`text-sm mt-2 ${
                    subscribeStatus.type === "success"
                      ? "text-green-600"
                      : "text-red-600"
                  }`}
                >
                  {subscribeStatus.message}
                </p>
              )}
            </form>
          </div>
        </div>

        <div className="border-t border-gray-100 mt-8 pt-6 pb-2 text-gray-500 text-sm">
          <p>
            &copy; {currentYear}{" "}
            <span
              className="cursor-pointer hover:text-gray-800 transition-colors duration-300"
              onClick={() => {
                navigate("/");

                setTimeout(() => {
                  window.scrollTo({
                    top: 0,
                    behavior: "smooth",
                  });
                }, 100);
              }}
            >
              SynthCipher
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
