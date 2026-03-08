import { Outlet, Link, useLocation } from "react-router";
import { Download, Home, Briefcase } from "lucide-react";
import { Button } from "./ui/button";
import { motion } from "motion/react";

export function Layout() {
  const location = useLocation();

  const handleDownloadResume = () => {
    // Create a sample resume file
    const resumeContent = `
ANALYST ENGINEER RESUME
========================

Name: Your Name
Email: your.email@example.com
Phone: (123) 456-7890

PROFESSIONAL SUMMARY
-------------------
Experienced Analyst Engineer with expertise in data analysis, engineering solutions, 
and problem-solving. Passionate about leveraging technology to drive business insights.

SKILLS
------
- Data Analysis & Visualization
- SQL, Python, R
- Machine Learning
- Business Intelligence
- ETL Processes
- Statistical Analysis

EXPERIENCE
----------
[Add your experience here]

EDUCATION
---------
[Add your education here]
    `;

    const blob = new Blob([resumeContent], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "resume.txt";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-200 shadow-sm"
      >
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link to="/" className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Portfolio
          </Link>
          
          <div className="flex items-center gap-4">
            <Link to="/">
              <Button
                variant={location.pathname === "/" ? "default" : "ghost"}
                className="gap-2"
              >
                <Home className="w-4 h-4" />
                Home
              </Button>
            </Link>
            
            <Link to="/projects">
              <Button
                variant={location.pathname === "/projects" ? "default" : "ghost"}
                className="gap-2"
              >
                <Briefcase className="w-4 h-4" />
                Projects
              </Button>
            </Link>
            
            <Button
              onClick={handleDownloadResume}
              variant="outline"
              className="gap-2"
            >
              <Download className="w-4 h-4" />
              Resume
            </Button>
          </div>
        </div>
      </motion.nav>

      {/* Main Content */}
      <main className="pt-20">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-slate-50 text-slate-600 py-8 mt-20 border-t border-slate-200">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p>&copy; 2026 Your Name. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}