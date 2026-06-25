import { motion } from "framer-motion";

const experiences = [
  {
    title: "Manual & Exploratory Testing",
    description:
      "Freelance QA Tester across testIO, uTest, TesterWork, Digivante, and Testlio. Functional, exploratory, and regression testing on web and mobile apps across Android, iOS, Windows, and Mac. Filed reproducible bug reports with severity classification, environment specs, and screen recordings.",
  },
  {
    title: "API & Backend Validation",
    description:
      "Tested REST APIs with Postman, validated backend microservices and database integrity (PostgreSQL, MySQL, Supabase), and used pytest and Jest for automated test coverage on my own full stack projects.",
  },
  {
    title: "AI Data Annotation",
    description:
      "AI Trainer and Data Annotation Specialist across Micro1, Mercor, Turing, and iMerit. Annotated and validated text and video datasets for AI model training against strict SOP requirements, enforcing timestamp precision and labeling consistency.",
  },
  {
    title: "Field Data QA",
    description:
      "Digital Research and Data Intern at Green World Campaign Kenya. Built and maintained KoboToolbox and Survey123 validation workflows, reducing data inconsistency across distributed field teams.",
  },
];

const QAExperience = () => {
  return (
    <section className="section-padding bg-muted/30" id="qa-experience">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="section-heading">QA & Testing Experience</h2>
          <p className="section-intro">
            Before I write code, I break it. Two years of professional QA work across
            manual testing, exploratory testing, and AI data annotation taught me to
            think in edge cases.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {experiences.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.08, duration: 0.5 }}
              viewport={{ once: true }}
              className="minimal-card"
            >
              <h3 className="text-lg font-semibold text-foreground mb-3">
                {item.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default QAExperience;
