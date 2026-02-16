import { GraduationCap, MapPin, Calendar, BookOpen } from "lucide-react";
import { motion } from "framer-motion";

interface Education {
    id: string;
    degree: string;
    field: string;
    institution: string;
    institutionUrl: string;
    location: string;
    period: string;
    grade: string;
    thesis?: string;
    modules?: string[];
}

const education: Education[] = [
    {
        id: "msc",
        degree: "MSc",
        field: "Robotics and Artificial Intelligence",
        institution: "University College London",
        institutionUrl: "https://www.ucl.ac.uk/computer-science/",
        location: "London, UK",
        period: "Sep 2024 – Sep 2025",
        grade: "Merit",
        thesis:
            "Hybrid 3D Reconstruction Pipeline for Cultural Heritage Preservation in Extreme Environments",
        modules: [
            "Robot Vision & Navigation",
            "Machine Learning for Robotics",
            "Aerial Robotics",
            "Soft Robotics",
            "Estimation & Control",
            "Computer Vision & Sensing",
            "Motion Planning",
            "Affective Computing",
        ],
    },
    {
        id: "btech",
        degree: "B.Tech",
        field: "Artificial Intelligence Engineering",
        institution: "Amrita Vishwa Vidyapeetham",
        institutionUrl: "https://www.amrita.edu/",
        location: "Kerala, India",
        period: "Oct 2020 – Jun 2024",
        grade: "First Class with Distinction · CGPA 8.27 / 10.0",
    },
];

export default function EducationSection() {
    return (
        <section id="education" className="py-24 relative">
            <div className="container mx-auto px-6 max-w-7xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-display font-medium mb-4">
                        Education
                    </h2>
                    <div className="w-16 h-0.5 bg-accent" />
                </motion.div>

                <div className="space-y-10">
                    {education.map((edu, index) => (
                        <motion.div
                            key={edu.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="relative bg-card/30 border border-white/5 rounded-2xl p-8 md:p-10 hover:border-accent/20 transition-colors duration-300"
                        >
                            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                                <div className="space-y-2">
                                    <div className="flex items-center gap-3">
                                        <GraduationCap className="w-5 h-5 text-accent shrink-0" />
                                        <h3 className="text-xl md:text-2xl font-display font-medium">
                                            {edu.degree} {edu.field}
                                        </h3>
                                    </div>
                                    <a
                                        href={edu.institutionUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-lg text-accent/80 hover:text-accent transition-colors"
                                    >
                                        {edu.institution}
                                    </a>
                                </div>

                                <div className="flex flex-col items-start md:items-end gap-1 text-sm text-muted-foreground shrink-0">
                                    <div className="flex items-center gap-2">
                                        <Calendar className="w-4 h-4" />
                                        <span>{edu.period}</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <MapPin className="w-4 h-4" />
                                        <span>{edu.location}</span>
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-4">
                                <p className="text-sm font-medium text-foreground/90">
                                    {edu.grade}
                                </p>

                                {edu.thesis && (
                                    <div className="flex items-start gap-2 text-sm text-muted-foreground">
                                        <BookOpen className="w-4 h-4 mt-0.5 shrink-0 text-accent/60" />
                                        <p>
                                            <span className="text-foreground/80 font-medium">Thesis: </span>
                                            {edu.thesis}
                                        </p>
                                    </div>
                                )}

                                {edu.modules && edu.modules.length > 0 && (
                                    <div className="pt-2">
                                        <p className="text-xs uppercase tracking-wider text-muted-foreground/60 mb-3">
                                            Key Modules
                                        </p>
                                        <div className="flex flex-wrap gap-2">
                                            {edu.modules.map((mod) => (
                                                <span
                                                    key={mod}
                                                    className="px-3 py-1.5 text-sm rounded-lg bg-white/5 text-muted-foreground hover:bg-accent/10 hover:text-accent transition-colors duration-200"
                                                >
                                                    {mod}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
