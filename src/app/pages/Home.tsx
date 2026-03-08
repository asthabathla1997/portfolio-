import { motion } from "motion/react";
import {
  BarChart3,
  Code2,
  Database,
  TrendingUp,
  Lightbulb,
  Users,
  Mail,
  MapPin,
  Linkedin,
  Github,
  ArrowRight,
} from "lucide-react";
import { Button } from "../components/ui/button";
import { Link } from "react-router";

export function Home() {
  const skills = [
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "Data Analysis",
      description: "Expert in extracting insights from complex datasets",
    },
    {
      icon: <Code2 className="w-6 h-6" />,
      title: "Engineering",
      description: "Building scalable solutions and data pipelines",
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: "Data Management",
      description: "Optimizing data infrastructure and workflows",
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Business Intelligence",
      description: "Translating data into actionable business strategies",
    },
    {
      icon: <Lightbulb className="w-6 h-6" />,
      title: "Problem Solving",
      description: "Innovative approaches to complex challenges",
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Collaboration",
      description: "Working with cross-functional teams effectively",
    },
  ];

  const stats = [
    { label: "Years Experience", value: "5+" },
    { label: "Projects Completed", value: "50+" },
    { label: "Technologies", value: "20+" },
    { label: "Happy Clients", value: "30+" },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-5 gap-12 items-center">
            {/* Profile Image */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="md:col-span-2 flex justify-center"
            >
              <div className="relative">
                <img
                  src="src/app/components/54993169380_61d54ebd0c_o.jpg"
                  alt="Profile"
                  className="w-72 h-72 rounded-2xl object-cover shadow-2xl"
                />
                <div className="absolute -bottom-4 -right-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-xl shadow-lg">
                  <p className="text-sm font-semibold">Available for Work</p>
                </div>
              </div>
            </motion.div>

            {/* Text Content */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="md:col-span-3"
            >
              <p className="font-semibold mb-4 text-sm uppercase tracking-wider">
                Data Analyst/Analyst Engineer
              </p>
              <h1 className="text-5xl font-bold text-slate-900 mb-6 leading-tight">
                Hi, I'm{" "}
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent hover:from-blue-700 hover:to-purple-700 transition-all duration-300 border-b-2 border-blue-600/30 hover:border-blue-600"
                >
                  Astha Bathla
                </a>
              </h1>
              <p className="text-xl text-slate-600 mb-8 leading-relaxed">
                I transform complex data into actionable insights and build innovative engineering solutions that drive measurable business growth.
              </p>

              <div className="flex flex-wrap gap-4 mb-8">
                <Link to="/projects">
                  <Button size="lg" className="gap-2">
                    View Projects
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </Link>
                <Button size="lg" variant="outline" className="gap-2">
                  <Mail className="w-4 h-4" />
                  Contact Me
                </Button>
              </div>

              {/* Social Links */}
              <div className="flex gap-4">
                <a
                  href="https://asthabathla1997.github.io/portfolio-/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg bg-slate-100 hover:bg-slate-200 flex items-center justify-center text-slate-700 hover:text-blue-600 transition-all"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a
                  href="https://linkedin.com/in/asthabathla"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg bg-slate-100 hover:bg-slate-200 flex items-center justify-center text-slate-700 hover:text-blue-600 transition-all"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-6 bg-slate-50">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="text-center"
              >
                <div className="text-4xl font-bold text-slate-900 mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-slate-600 uppercase tracking-wider">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              Expertise
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Combining analytical thinking with engineering expertise to deliver impactful solutions
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="bg-white p-8 rounded-xl border border-slate-200 hover:border-blue-300 hover:shadow-lg transition-all group"
              >
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center text-blue-600 mb-4 group-hover:scale-110 transition-transform">
                  {skill.icon}
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">
                  {skill.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {skill.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-6 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold text-slate-900 mb-12 text-center">
              About Me
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="md:col-span-2 space-y-4">
                <p className="text-lg text-slate-700 leading-relaxed">
                  As an <span className="font-semibold text-blue-600">Analyst Engineer</span>, I specialize in building data-driven solutions that empower organizations to make informed decisions. My unique blend of analytical and engineering skills allows me to not only understand complex data but also to design and implement robust systems that scale.
                </p>
                <p className="text-lg text-slate-700 leading-relaxed">
                  I'm passionate about transforming raw data into meaningful insights through advanced analytics, machine learning, and visualization techniques. Whether it's optimizing data pipelines, building predictive models, or creating interactive dashboards, I thrive on solving challenging problems.
                </p>
                <p className="text-lg text-slate-700 leading-relaxed">
                  When I'm not working with data, you can find me exploring new technologies, contributing to open-source projects, or sharing knowledge with the tech community.
                </p>
              </div>

              <div className="space-y-4">
                <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
                  <MapPin className="w-5 h-5 text-blue-600 mb-2" />
                  <h3 className="font-semibold text-slate-900 mb-1">Location</h3>
                  <p className="text-slate-600 text-sm">Melbourne, Australia</p>
                </div>
                <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
                  <Mail className="w-5 h-5 text-purple-600 mb-2" />
                  <h3 className="font-semibold text-slate-900 mb-1">Email</h3>
                  <p className="text-slate-600 text-sm">asthabathla1997@gmail.com</p>
                </div>
                <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
                  <Code2 className="w-5 h-5 text-pink-600 mb-2" />
                  <h3 className="font-semibold text-slate-900 mb-1">Specialties</h3>
                  <p className="text-slate-600 text-sm">Python • SQL • Pyspark • Power BI • ML</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-blue-600 to-purple-600">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-4xl font-bold text-white mb-6">
            Let's Work Together
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            I'm always interested in hearing about new opportunities and interesting projects.
          </p>
          <Link to="/projects">
            <Button
              size="lg"
              variant="secondary"
              className="gap-2"
            >
              View My Projects
              <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
        </motion.div>
      </section>
    </div>
  );
}
