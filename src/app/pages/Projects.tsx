import { motion } from "motion/react";
import {
  ExternalLink,
  Github,
  BarChart3,
  Brain,
  Workflow,
  LineChart,
  Database,
  Zap,
} from "lucide-react";
import { Button } from "../components/ui/button";

export function Projects() {
  const projects = [
    {
      title: "Customer Churn Prediction",
      description:
        "Built a machine learning model to predict customer churn with 92% accuracy. Implemented automated data pipelines and created interactive dashboards for stakeholders.",
      icon: <Brain className="w-6 h-6" />,
      tags: ["Python", "Scikit-learn", "SQL", "Tableau"],
      metrics: ["92% Accuracy", "15% Churn Reduction", "500K+ Records"],
      color: "from-blue-500 to-cyan-500",
    },
    {
      title: "Real-Time Analytics Dashboard",
      description:
        "Developed a comprehensive real-time analytics platform processing millions of events per day. Optimized query performance by 70% through data modeling.",
      icon: <BarChart3 className="w-6 h-6" />,
      tags: ["React", "PostgreSQL", "Apache Kafka", "Redis"],
      metrics: ["2M+ Events/Day", "70% Faster Queries", "10ms Latency"],
      color: "from-purple-500 to-pink-500",
    },
    {
      title: "Automated ETL Pipeline",
      description:
        "Designed and deployed a robust ETL pipeline automating data ingestion from multiple sources. Reduced manual data processing time by 85%.",
      icon: <Workflow className="w-6 h-6" />,
      tags: ["Apache Airflow", "Python", "AWS S3", "Snowflake"],
      metrics: ["85% Time Saved", "20+ Data Sources", "99.9% Uptime"],
      color: "from-green-500 to-emerald-500",
    },
    {
      title: "Sales Forecasting System",
      description:
        "Created an advanced sales forecasting system using time series analysis. Improved forecast accuracy by 35% compared to traditional methods.",
      icon: <LineChart className="w-6 h-6" />,
      tags: ["R", "Prophet", "Time Series", "PowerBI"],
      metrics: ["35% Better Accuracy", "$2M Cost Savings", "12 Regions"],
      color: "from-orange-500 to-red-500",
    },
    {
      title: "Data Warehouse Optimization",
      description:
        "Restructured data warehouse architecture, implementing star schema design and indexing strategies. Achieved 60% reduction in query execution time.",
      icon: <Database className="w-6 h-6" />,
      tags: ["SQL", "Data Modeling", "Redshift", "dbt"],
      metrics: ["60% Faster", "5TB Data", "100+ Tables"],
      color: "from-indigo-500 to-blue-500",
    },
    {
      title: "Anomaly Detection Engine",
      description:
        "Implemented an automated anomaly detection system for monitoring system metrics and business KPIs. Reduced incident response time by 75%.",
      icon: <Zap className="w-6 h-6" />,
      tags: ["Python", "TensorFlow", "Docker", "Grafana"],
      metrics: ["75% Faster Response", "200+ Metrics", "24/7 Monitoring"],
      color: "from-yellow-500 to-orange-500",
    },
  ];

  return (
    <div className="min-h-screen py-12 px-6 bg-slate-50">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-bold text-slate-900 mb-6">
            Featured Projects
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            A showcase of my work in data analysis, engineering, and business
            intelligence. Each project demonstrates my commitment to delivering
            impactful solutions.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -5 }}
              className="bg-white rounded-2xl shadow-sm hover:shadow-xl overflow-hidden border border-slate-200 transition-all"
            >
              {/* Gradient Header */}
              <div className={`h-2 bg-gradient-to-r ${project.color}`}></div>

              <div className="p-8">
                {/* Icon */}
                <div
                  className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br ${project.color} text-white mb-4`}
                >
                  {project.icon}
                </div>

                {/* Title & Description */}
                <h3 className="text-2xl font-bold text-slate-900 mb-3">
                  {project.title}
                </h3>
                <p className="text-slate-600 mb-6 leading-relaxed">
                  {project.description}
                </p>

                {/* Metrics */}
                <div className="grid grid-cols-3 gap-4 mb-6 pb-6 border-b border-slate-200">
                  {project.metrics.map((metric, idx) => (
                    <div key={idx} className="text-center">
                      <div className="text-sm font-semibold text-slate-900">
                        {metric.split(" ")[0]}
                      </div>
                      <div className="text-xs text-slate-500">
                        {metric.split(" ").slice(1).join(" ")}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-slate-100 text-slate-700 text-sm rounded-full border border-slate-200"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Actions */}
                <div className="flex gap-3">
                  <Button variant="default" className="flex-1 gap-2">
                    <ExternalLink className="w-4 h-4" />
                    View Project
                  </Button>
                  <Button variant="outline" size="icon">
                    <Github className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-20 text-center bg-white p-12 rounded-2xl shadow-sm border border-slate-200"
        >
          <h2 className="text-3xl font-bold text-slate-900 mb-4">
            Interested in Collaborating?
          </h2>
          <p className="text-lg text-slate-600 mb-8">
            I'm always open to discussing new projects and opportunities
          </p>
          <Button size="lg">
            Let's Connect
          </Button>
        </motion.div>
      </div>
    </div>
  );
}