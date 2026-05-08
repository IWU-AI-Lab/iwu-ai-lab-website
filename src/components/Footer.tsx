import Link from "next/link";
import { FaInstagram, FaLinkedin, FaGithub, FaEnvelope, FaGlobe } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="bg-iwu-black text-white py-12 mt-20">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        
        {/* Brand Section */}
        <div className="col-span-1 md:col-span-1 flex flex-col">
          <span className="font-tungsten text-4xl tracking-wide uppercase mb-4">IWU AI Lab</span>
          <p className="text-iwu-light-grey text-sm mb-6">
            Pioneering artificial intelligence research, education, and student engagement at Indiana Wesleyan University.
          </p>
          <div className="flex gap-4 text-iwu-light-grey">
            <a href="#" className="hover:text-white transition-colors" aria-label="Instagram">
              <FaInstagram size={20} />
            </a>
            <a href="#" className="hover:text-white transition-colors" aria-label="LinkedIn">
              <FaLinkedin size={20} />
            </a>
            <a href="#" className="hover:text-white transition-colors" aria-label="GitHub">
              <FaGithub size={20} />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="col-span-1">
          <h3 className="font-gotham font-bold text-lg mb-4 text-iwu-light-grey">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><Link href="/projects" className="hover:text-iwu-red transition-colors">Projects</Link></li>
            <li><Link href="/research" className="hover:text-iwu-red transition-colors">Research</Link></li>
            <li><Link href="/publications" className="hover:text-iwu-red transition-colors">Publications</Link></li>
            <li><Link href="/people" className="hover:text-iwu-red transition-colors">People</Link></li>
            <li><Link href="/about-us" className="hover:text-iwu-red transition-colors">About Us</Link></li>
          </ul>
        </div>

        {/* Student Organization */}
        <div className="col-span-1">
          <h3 className="font-gotham font-bold text-lg mb-4 text-iwu-light-grey">Student Org</h3>
          <ul className="space-y-2 text-sm">
            <li><Link href="/club" className="hover:text-iwu-spirit transition-colors text-iwu-spirit font-semibold">AI Club Portal</Link></li>
            <li><Link href="/activities" className="hover:text-white transition-colors">Activities & Events</Link></li>
            <li><Link href="/resources" className="hover:text-white transition-colors">Student Resources</Link></li>
            <li><Link href="/join" className="hover:text-white transition-colors">Join the Club</Link></li>
          </ul>
        </div>

        {/* Contact */}
        <div className="col-span-1">
          <h3 className="font-gotham font-bold text-lg mb-4 text-iwu-light-grey">Contact Us</h3>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center gap-3 text-iwu-light-grey hover:text-white transition-colors">
              <FaGlobe size={16} />
              <a href="https://www.indwes.edu" target="_blank" rel="noopener noreferrer">indwes.edu</a>
            </li>
            <li className="flex items-center gap-3 text-iwu-light-grey hover:text-white transition-colors">
              <FaEnvelope size={16} />
              <a href="mailto:admin@example.com">admin@example.com</a>
            </li>
            <li className="mt-4 text-iwu-light-grey text-xs">
              4201 S Washington St<br/>
              Marion, IN 46953
            </li>
          </ul>
        </div>
      </div>

      <div className="container mx-auto px-4 mt-12 pt-8 border-t border-iwu-dark-grey/50 text-center text-sm text-iwu-light-grey">
        <p>&copy; {new Date().getFullYear()} Indiana Wesleyan University AI Lab. All rights reserved.</p>
      </div>
    </footer>
  );
}
