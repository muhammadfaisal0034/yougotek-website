"use client";

import { motion } from "framer-motion";

const skills = {
    "Frontend": [
        "React.js", "Next.js", "TypeScript", "Redux Toolkit", "React Query", "Tailwind CSS", "Ant Design", "Material UI", "Vue.js", "Angular"
    ],
    "Backend": [
        "Node.js", "Express.js", "Microservices", "REST APIs"
    ],
    "Databases": [
        "MongoDB (NoSQL)", "Postgres (SQL)"
    ],
    "DevOps & Tools": [
        "Docker", "AWS S3", "CI/CD Pipelines", "GitHub/Bitbucket", "Jira", "Postman", "WebStorm", "VS Code"
    ],
    "Testing & Quality": [
        "Jest", "React Testing Library", "Playwright", "Code Reviews"
    ]
};

export function Skills() {
    return (
        <section id="skills" className="py-24 sm:py-32 bg-white/5">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl lg:text-center mb-16">
                    <h2 className="text-base font-semibold leading-7 text-accent">My Skills</h2>
                    <p className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                        Technologies I work with
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    {Object.entries(skills).map(([category, items], index) => (
                        <motion.div
                            key={category}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: index * 0.1 }}
                            className="rounded-2xl border border-white/10 bg-white/5 p-8 hover:border-accent/50 transition-colors"
                        >
                            <h3 className="text-xl font-bold text-foreground mb-4">{category}</h3>
                            <div className="flex flex-wrap gap-2">
                                {items.map((skill) => (
                                    <span
                                        key={skill}
                                        className="inline-flex items-center rounded-md bg-accent/10 px-3 py-1 text-sm font-medium text-accent ring-1 ring-inset ring-accent/20"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
