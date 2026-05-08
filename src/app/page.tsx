import HeroSection from "@/components/HeroSection";
import Link from "next/link";
import { ArrowRight, Brain, Users, Lightbulb } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col gap-16 pb-20">
      <HeroSection />
      
      {/* Quick Access Section */}
      <section className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {/* Card 1 */}
          <div className="bg-background border border-iwu-light-grey/30 rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow group">
            <div className="w-12 h-12 bg-iwu-red/10 rounded-lg flex items-center justify-center text-iwu-red mb-6 group-hover:scale-110 transition-transform">
              <Brain size={24} />
            </div>
            <h2 className="text-2xl font-tungsten uppercase tracking-wide mb-3">Our Research</h2>
            <p className="text-iwu-dark-grey text-sm mb-6 font-gotham">
              Explore our latest publications and ongoing projects in artificial intelligence.
            </p>
            <Link href="/research" className="flex items-center gap-2 text-iwu-red font-bold text-sm hover:text-iwu-red/80 transition-colors">
              Learn More <ArrowRight size={16} />
            </Link>
          </div>

          {/* Card 2 */}
          <div className="bg-background border border-iwu-light-grey/30 rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow group">
            <div className="w-12 h-12 bg-iwu-action/10 rounded-lg flex items-center justify-center text-iwu-action mb-6 group-hover:scale-110 transition-transform">
              <Lightbulb size={24} />
            </div>
            <h2 className="text-2xl font-tungsten uppercase tracking-wide mb-3">Student Projects</h2>
            <p className="text-iwu-dark-grey text-sm mb-6 font-gotham">
              See what our students are building, from machine learning models to generative AI apps.
            </p>
            <Link href="/projects" className="flex items-center gap-2 text-iwu-action font-bold text-sm hover:text-iwu-action/80 transition-colors">
              View Projects <ArrowRight size={16} />
            </Link>
          </div>

          {/* Card 3 */}
          <div className="bg-iwu-spirit rounded-xl p-8 shadow-md text-white hover:shadow-lg transition-shadow group relative overflow-hidden">
            <div className="absolute top-0 right-0 -mr-8 -mt-8 w-32 h-32 bg-white/10 rounded-full blur-2xl group-hover:bg-white/20 transition-colors"></div>
            <div className="relative z-10">
              <div className="w-12 h-12 bg-white/20 backdrop-blur rounded-lg flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform">
                <Users size={24} />
              </div>
              <h2 className="text-2xl font-tungsten uppercase tracking-wide mb-3 text-white">Join the AI Club</h2>
              <p className="text-white/80 text-sm mb-6 font-gotham">
                Connect with peers, attend workshops, and get hands-on experience with AI tools.
              </p>
              <Link href="/club" className="flex items-center gap-2 text-white font-bold text-sm hover:text-white/80 transition-colors">
                Go to Club Portal <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
