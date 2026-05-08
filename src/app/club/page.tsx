import Link from "next/link";
import { FaArrowRight, FaCalendar, FaCode, FaUsers } from "react-icons/fa6";

export default function ClubPortal() {
  return (
    <div className="bg-zinc-50 dark:bg-black min-h-screen">
      {/* Club Hero Section */}
      <section className="bg-iwu-spirit py-20 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl -mr-20 -mt-20"></div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-5xl md:text-7xl font-tungsten uppercase tracking-wide mb-4">IWU AI Club</h1>
          <p className="text-lg md:text-xl font-gotham max-w-2xl mx-auto opacity-90">
            A student-led community dedicated to exploring, building, and learning about Artificial Intelligence.
          </p>
        </div>
      </section>

      {/* Club Features */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {/* Feature 1 */}
          <div className="bg-white dark:bg-zinc-900 border border-iwu-light-grey/20 rounded-xl p-8 shadow-sm">
            <div className="w-12 h-12 bg-iwu-spirit/10 rounded-lg flex items-center justify-center text-iwu-spirit mb-6">
              <FaCode size={24} />
            </div>
            <h2 className="text-2xl font-tungsten uppercase tracking-wide mb-3">Workshops</h2>
            <p className="text-iwu-dark-grey text-sm font-gotham mb-4">
              Hands-on coding sessions where we build real AI applications and learn new tools together.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="bg-white dark:bg-zinc-900 border border-iwu-light-grey/20 rounded-xl p-8 shadow-sm">
            <div className="w-12 h-12 bg-iwu-spirit/10 rounded-lg flex items-center justify-center text-iwu-spirit mb-6">
              <FaUsers size={24} />
            </div>
            <h2 className="text-2xl font-tungsten uppercase tracking-wide mb-3">Community</h2>
            <p className="text-iwu-dark-grey text-sm font-gotham mb-4">
              Connect with like-minded students across disciplines who share an interest in the future of technology.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="bg-white dark:bg-zinc-900 border border-iwu-light-grey/20 rounded-xl p-8 shadow-sm">
            <div className="w-12 h-12 bg-iwu-spirit/10 rounded-lg flex items-center justify-center text-iwu-spirit mb-6">
              <FaCalendar size={24} />
            </div>
            <h2 className="text-2xl font-tungsten uppercase tracking-wide mb-3">Events</h2>
            <p className="text-iwu-dark-grey text-sm font-gotham mb-4">
              Guest speakers, hackathons, and social gatherings focused on the AI industry.
            </p>
          </div>
        </div>
      </section>

      {/* Join CTA */}
      <section className="container mx-auto px-4 py-12 mb-20 text-center">
        <div className="bg-white dark:bg-zinc-900 border-t-4 border-iwu-spirit rounded-xl p-10 max-w-3xl mx-auto shadow-md">
          <h2 className="text-3xl font-tungsten uppercase tracking-wide mb-4">Ready to Build the Future?</h2>
          <p className="text-iwu-dark-grey font-gotham mb-8">
            The club is open to all IWU students, regardless of major or prior coding experience.
          </p>
          <Link href="/join" className="inline-flex items-center gap-2 px-8 py-3 bg-iwu-spirit text-white font-bold rounded hover:bg-iwu-red transition-colors">
            Become a Member <FaArrowRight size={18} />
          </Link>
        </div>
      </section>
    </div>
  );
}
