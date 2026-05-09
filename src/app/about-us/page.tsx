"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaGraduationCap, FaChalkboardUser, FaHandshake, FaBullseye, FaLightbulb, FaHeart, FaFileLines } from "react-icons/fa6";
export default function AboutUs() {
    return (
        <div className="min-h-screen bg-transparent">
            {/* Hero Section */}
            <section className="py-20 bg-gradient-to-b from-iwu-light-grey/10 to-transparent">
                <div className="container mx-auto px-4 text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="text-5xl md:text-7xl font-tungsten uppercase text-iwu-red mb-4"
                    >
                        About the AI Lab
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="text-xl md:text-2xl font-gotham text-iwu-dark-grey max-w-2xl mx-auto"
                    >
                        Innovation rooted in faith and academic excellence
                    </motion.p>
                </div>
            </section>
            {/* Mission & Vision Section */}
            <section className="py-16 container mx-auto px-4">
                <div className="flex flex-col md:flex-row gap-12">
                    {/* Mission */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="flex-1 bg-white dark:bg-zinc-900 p-8 rounded-xl shadow-sm border border-iwu-light-grey/20"
                    >
                        <div className="flex items-center gap-4 mb-6">
                            <div className="p-4 bg-iwu-red/10 rounded-full text-iwu-red">
                                <FaBullseye size={24} />
                            </div>
                            <h2 className="text-3xl font-tungsten uppercase tracking-wide">Our Mission</h2>
                        </div>
                        <div className="space-y-4 font-gotham text-foreground/80 leading-relaxed">
                            <p>
                                [PLACEHOLDER] To empower the next generation of technologists with rigorous, hands-on experience in Artificial Intelligence, machine learning, and data science.
                            </p>
                            <p>
                                [PLACEHOLDER] We strive to foster an environment of intellectual curiosity where students can tackle real-world problems and develop solutions that have a meaningful impact on society.
                            </p>
                        </div>
                    </motion.div>
                    {/* Vision */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="flex-1 bg-white dark:bg-zinc-900 p-8 rounded-xl shadow-sm border border-iwu-light-grey/20"
                    >
                        <div className="flex items-center gap-4 mb-6">
                            <div className="p-4 bg-iwu-action/10 rounded-full text-iwu-action">
                                <FaLightbulb size={24} />
                            </div>
                            <h2 className="text-3xl font-tungsten uppercase tracking-wide">Our Vision</h2>
                        </div>
                        <div className="space-y-4 font-gotham text-foreground/80 leading-relaxed">
                            <p>
                                [PLACEHOLDER] To be a leading undergraduate research laboratory that bridges the gap between theoretical computer science and practical AI applications.
                            </p>
                            <p>
                                [PLACEHOLDER] By continually adapting to the rapid advancements in AI, we envision our graduates entering the workforce not just as participants, but as ethical leaders and pioneers.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </section>
            {/* Faith-Based Foundation */}
            <section className="py-16 bg-iwu-light-grey/5">
                <div className="container mx-auto px-4 text-center max-w-4xl">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <FaHeart className="mx-auto text-iwu-red mb-6" size={40} />
                        <h2 className="text-4xl font-tungsten uppercase tracking-wide text-iwu-red mb-6">Christ-Centered Excellence</h2>
                        <div className="font-gotham text-lg text-foreground/80 leading-relaxed space-y-4">
                            <p>
                                [PLACEHOLDER] At Indiana Wesleyan University, our pursuit of knowledge is fundamentally intertwined with our faith. We believe that Artificial Intelligence, like any powerful tool, requires ethical stewardship and a commitment to human flourishing.
                            </p>
                            <p>
                                [PLACEHOLDER] Our lab approaches complex technological challenges through a lens of Christian ethics, ensuring our innovations ultimately serve to uplift and empower our communities.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </section>
            {/* Resources (Coming Soon) */}
            <section className="py-16 container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-tungsten uppercase tracking-wide mb-4">Lab Resources</h2>
                    <p className="font-gotham text-iwu-dark-grey">Tools, documentation, and compute access for lab members.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {[1, 2, 3].map((i) => (
                        <div key={i} className="bg-iwu-light-grey/10 border border-iwu-light-grey/20 p-6 rounded-xl flex items-center gap-4 opacity-60">
                            <div className="p-3 bg-iwu-dark-grey/20 rounded-lg text-iwu-dark-grey">
                                <FaFileLines size={20} />
                            </div>
                            <div>
                                <h3 className="font-gotham font-bold text-foreground/50">Resource {i}</h3>
                                <p className="text-sm font-gotham text-iwu-dark-grey">Coming Soon...</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
            {/* How to Get Involved */}
            <section className="py-20 bg-iwu-red text-white">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-tungsten uppercase tracking-wide mb-4 text-white">Get Involved</h2>
                        <p className="font-gotham text-white/80 max-w-2xl mx-auto text-lg">Whether you are a student eager to learn or a partner looking to collaborate, there's a place for you.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                        {/* For Students */}
                        <motion.div
                            whileHover={{ y: -5 }}
                            className="bg-white text-foreground p-8 rounded-xl shadow-lg text-center flex flex-col items-center"
                        >
                            <div className="p-5 bg-iwu-spirit/10 rounded-full text-iwu-spirit mb-6">
                                <FaGraduationCap size={40} />
                            </div>
                            <h3 className="text-2xl font-gotham font-bold mb-3">For Students</h3>
                            <p className="text-iwu-dark-grey font-gotham mb-8 flex-grow">
                                Join the AI Club, participate in hackathons, or apply for an undergraduate research position in the Lab.
                            </p>
                            <Link href="/join" className="w-full py-3 px-6 bg-iwu-action hover:bg-iwu-actionDark text-white font-gotham font-bold rounded transition-colors">
                                Learn More
                            </Link>
                        </motion.div>
                        {/* For Faculty */}
                        <motion.div
                            whileHover={{ y: -5 }}
                            className="bg-white text-foreground p-8 rounded-xl shadow-lg text-center flex flex-col items-center"
                        >
                            <div className="p-5 bg-iwu-red/10 rounded-full text-iwu-red mb-6">
                                <FaChalkboardUser size={40} />
                            </div>
                            <h3 className="text-2xl font-gotham font-bold mb-3">For Faculty</h3>
                            <p className="text-iwu-dark-grey font-gotham mb-8 flex-grow">
                                Collaborate on cross-disciplinary research projects and leverage our compute resources for your studies.
                            </p>
                            <Link href="#" className="w-full py-3 px-6 bg-iwu-light-grey/20 hover:bg-iwu-light-grey/40 text-foreground font-gotham font-bold rounded transition-colors">
                                Contact Us
                            </Link>
                        </motion.div>
                        {/* For Community */}
                        <motion.div
                            whileHover={{ y: -5 }}
                            className="bg-white text-foreground p-8 rounded-xl shadow-lg text-center flex flex-col items-center"
                        >
                            <div className="p-5 bg-black/5 rounded-full text-black mb-6">
                                <FaHandshake size={40} />
                            </div>
                            <h3 className="text-2xl font-gotham font-bold mb-3">Community Partners</h3>
                            <p className="text-iwu-dark-grey font-gotham mb-8 flex-grow">
                                Partner with us to provide students with real-world industry challenges and internship opportunities.
                            </p>
                            <Link href="#" className="w-full py-3 px-6 bg-iwu-light-grey/20 hover:bg-iwu-light-grey/40 text-foreground font-gotham font-bold rounded transition-colors">
                                Partner With Us
                            </Link>
                        </motion.div>
                    </div>
                </div>
            </section>
            {/* Footer CTA */}
            <section className="py-24 bg-background border-t border-iwu-light-grey/20 text-center">
                <div className="container mx-auto px-4">
                    <h2 className="text-5xl font-tungsten uppercase tracking-wide mb-6">Ready to join the AI Lab?</h2>
                    <p className="text-xl font-gotham text-iwu-dark-grey mb-10 max-w-xl mx-auto">
                        Step into the future of technology and make your mark. We are always looking for passionate individuals.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <Link href="/join" className="py-4 px-10 bg-iwu-red hover:bg-iwu-spirit text-white font-gotham font-bold rounded shadow-lg transition-colors text-lg">
                            Join Us
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}