"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaMagnifyingGlass, FaUser, FaLinkedin, FaGithub, FaEnvelope, FaPhone, FaQuoteLeft } from "react-icons/fa6";
import { PEOPLE_DATA, Person } from "@/lib/placeholder-data";

// Helper to define display names for roles
const roleTitles = {
  "faculty": "Faculty",
  "graduate-student": "Graduate Students",
  "undergraduate-student": "Undergraduate Students",
  "contributor": "Contributors",
};

export default function PeoplePage() {
  const [searchTerm, setSearchTerm] = useState("");

  // Filter people based on search term
  const filteredPeople = useMemo(() => {
    if (!searchTerm.trim()) return PEOPLE_DATA;
    
    const lowerSearch = searchTerm.toLowerCase();
    return PEOPLE_DATA.filter((person) => {
      return (
        person.name.toLowerCase().includes(lowerSearch) ||
        person.title.toLowerCase().includes(lowerSearch) ||
        person.role.toLowerCase().includes(lowerSearch)
      );
    });
  }, [searchTerm]);

  // Group filtered people by role
  const groupedPeople = useMemo(() => {
    const groups: Record<string, Person[]> = {
      "faculty": [],
      "graduate-student": [],
      "undergraduate-student": [],
      "contributor": [],
    };

    filteredPeople.forEach(person => {
      if (groups[person.role]) {
        groups[person.role].push(person);
      }
    });

    return groups;
  }, [filteredPeople]);

  return (
    <div className="min-h-screen bg-transparent py-16">
      <div className="container mx-auto px-4">
        
        {/* Header Section */}
        <div className="mb-12 border-b border-iwu-light-grey/20 pb-8 text-center md:text-left">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-tungsten uppercase text-foreground mb-4"
          >
            Meet Our <span className="text-iwu-red">Team</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg font-gotham text-iwu-dark-grey max-w-3xl mx-auto md:mx-0"
          >
            Faculty, students, and contributors driving AI innovation.
          </motion.p>
        </div>

        {/* Search Bar */}
        <div className="mb-16 max-w-xl mx-auto md:mx-0 relative">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
            <FaMagnifyingGlass className="text-iwu-light-grey" />
          </div>
          <input
            type="text"
            placeholder="Search by name, role, or title..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-12 pr-4 py-4 bg-white dark:bg-zinc-800 border border-iwu-light-grey/30 rounded-full shadow-sm font-gotham focus:outline-none focus:ring-2 focus:ring-iwu-action transition-shadow"
          />
        </div>

        {/* Results / Grouped People */}
        {filteredPeople.length > 0 ? (
          <div className="space-y-20">
            {Object.entries(roleTitles).map(([roleKey, displayTitle]) => {
              const peopleInRole = groupedPeople[roleKey];
              if (!peopleInRole || peopleInRole.length === 0) return null;

              return (
                <div key={roleKey}>
                  {/* Role Header */}
                  <div className="flex items-center gap-4 mb-8">
                    <h2 className="text-3xl font-tungsten uppercase tracking-wide text-foreground">
                      {displayTitle} <span className="text-iwu-dark-grey/50">({peopleInRole.length})</span>
                    </h2>
                    <div className="flex-grow h-px bg-iwu-light-grey/20"></div>
                  </div>

                  {/* Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                    {peopleInRole.map((person, idx) => (
                      <motion.div
                        key={person.id}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: (idx % 4) * 0.1 }}
                        whileHover={{ scale: 1.02 }}
                        className="bg-white dark:bg-zinc-900 rounded-xl p-6 shadow-md border border-iwu-light-grey/10 text-center flex flex-col group transition-all"
                      >
                        {/* Avatar */}
                        <div className="relative w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden bg-iwu-light-grey/20 flex items-center justify-center border-4 border-white dark:border-zinc-800 shadow-inner">
                          {person.photo ? (
                            <Image 
                              src={person.photo} 
                              alt={person.name} 
                              fill 
                              className="object-cover" 
                            />
                          ) : (
                            <FaUser size={40} className="text-iwu-light-grey/50" />
                          )}
                        </div>

                        {/* Info */}
                        <h3 className="font-gotham font-bold text-lg text-foreground mb-1">{person.name}</h3>
                        <p className="font-gotham text-sm text-iwu-red mb-4">{person.title}</p>

                        {/* Quote Overlay (Desktop Hover) or static mobile text */}
                        {person.quote && (
                          <div className="mb-6 relative">
                            <FaQuoteLeft className="absolute -top-2 -left-2 text-iwu-light-grey/20" size={24} />
                            <p className="font-gotham italic text-sm text-iwu-dark-grey relative z-10 px-4">
                              "{person.quote}"
                            </p>
                          </div>
                        )}

                        {/* Spacer to push social/contact to bottom */}
                        <div className="flex-grow"></div>

                        {/* Contact & Social Links */}
                        <div className="mt-4 pt-4 border-t border-iwu-light-grey/20 flex justify-center items-center gap-4">
                          {person.email && (
                            <Link href={`mailto:${person.email}`} className="text-iwu-dark-grey hover:text-iwu-action transition-colors">
                              <FaEnvelope size={18} />
                            </Link>
                          )}
                          {person.phone && (
                            <Link href={`tel:${person.phone}`} className="text-iwu-dark-grey hover:text-iwu-action transition-colors hidden sm:block">
                              <FaPhone size={18} />
                            </Link>
                          )}
                          {person.socialLinks?.github && (
                            <Link href={person.socialLinks.github} target="_blank" className="text-iwu-dark-grey hover:text-black dark:hover:text-white transition-colors">
                              <FaGithub size={18} />
                            </Link>
                          )}
                          {person.socialLinks?.linkedin && (
                            <Link href={person.socialLinks.linkedin} target="_blank" className="text-iwu-dark-grey hover:text-[#0077b5] transition-colors">
                              <FaLinkedin size={18} />
                            </Link>
                          )}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="text-center py-20 bg-white dark:bg-zinc-900 rounded-xl border border-iwu-light-grey/20">
            <p className="font-gotham text-lg text-iwu-dark-grey">No team members found matching "{searchTerm}". Try a different search.</p>
          </div>
        )}

      </div>
    </div>
  );
}
