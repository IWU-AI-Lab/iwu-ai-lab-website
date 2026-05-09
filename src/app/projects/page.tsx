"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaImage, FaPlay, FaCircleCheck, FaPause, FaUsers, FaGithub, FaLink, FaBookOpen } from "react-icons/fa6";
import { PROJECTS_DATA, Project } from "@/lib/placeholder-data";

export default function ProjectsPage() {
  const [filterStatus, setFilterStatus] = useState<string>("all");

  const filteredProjects = filterStatus === "all"
    ? PROJECTS_DATA
    : PROJECTS_DATA.filter(p => p.status === filterStatus);

  // Helper to render correct status badge
  const renderStatusBadge = (status: Project["status"]) => {
    switch (status) {
      case "ongoing":
        return (
          <span className="absolute top-4 right-4 flex items-center gap-1.5 px-3 py-1 bg-iwu-action text-white text-xs font-bold uppercase rounded-full shadow-md z-10">
            <FaPlay size={10} /> Ongoing
          </span>
        );
      case "completed":
        return (
          <span className="absolute top-4 right-4 flex items-center gap-1.5 px-3 py-1 bg-iwu-red text-white text-xs font-bold uppercase rounded-full shadow-md z-10">
            <FaCircleCheck size={10} /> Completed
          </span>
        );
      case "on-hold":
        return (
          <span className="absolute top-4 right-4 flex items-center gap-1.5 px-3 py-1 bg-iwu-light-grey text-iwu-dark-grey text-xs font-bold uppercase rounded-full shadow-md z-10">
            <FaPause size={10} /> On Hold
          </span>
        );
    }
  };

  return (
    <div className="min-h-screen bg-transparent py-16">
      <div className="container mx-auto px-4">

        {/* Header Section */}
        <div className="mb-12 border-b border-iwu-light-grey/20 pb-8">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-tungsten uppercase text-foreground mb-4"
          >
            Our <span className="text-iwu-red">Projects</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg font-gotham text-iwu-dark-grey max-w-3xl"
          >
            Explore cutting-edge AI research conducted by our team. From generative models to computer vision, our students and faculty are building solutions for real-world impact.
          </motion.p>
        </div>

        {/* Controls Section */}
        <div className="flex justify-end mb-8">
          <div className="flex items-center gap-3">
            <span className="font-gotham text-sm font-bold text-iwu-dark-grey uppercase">Filter by Status:</span>
            <select
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value)}
              className="px-4 py-2 bg-white dark:bg-zinc-800 border border-iwu-light-grey/30 rounded shadow-sm font-gotham text-sm focus:outline-none focus:ring-2 focus:ring-iwu-action"
            >
              <option value="all">All Projects</option>
              <option value="ongoing">Ongoing</option>
              <option value="completed">Completed</option>
              <option value="on-hold">On Hold</option>
            </select>
          </div>
        </div>

        {/* Projects Grid */}
        {filteredProjects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, idx) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-white dark:bg-zinc-900 rounded-xl shadow-lg border border-iwu-light-grey/10 overflow-hidden flex flex-col group"
              >
                {/* Image Area */}
                <div className="relative h-[200px] w-full bg-iwu-light-grey/10 flex items-center justify-center overflow-hidden">
                  {renderStatusBadge(project.status)}
                  {project.image ? (
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  ) : (
                    <FaImage size={48} className="text-iwu-light-grey/40" />
                  )}
                </div>

                {/* Content Area */}
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-gotham font-bold mb-3 text-foreground line-clamp-2">{project.title}</h3>
                  <p className="font-gotham text-sm text-foreground/80 mb-6 flex-grow line-clamp-3">
                    {project.description}
                  </p>

                  {/* Team Members */}
                  <div className="flex items-start gap-2 mb-6">
                    <FaUsers className="text-iwu-red mt-1 flex-shrink-0" size={14} />
                    <span className="font-gotham text-xs text-iwu-dark-grey leading-relaxed">
                      {project.teamMembers.length > 3
                        ? `${project.teamMembers.slice(0, 3).join(", ")} +${project.teamMembers.length - 3} more`
                        : project.teamMembers.join(", ")
                      }
                    </span>
                  </div>

                  {/* Links Row */}
                  {(project.links?.demo || project.links?.github || project.links?.publications) && (
                    <div className="flex gap-2 pt-4 border-t border-iwu-light-grey/20">
                      {project.links.demo && (
                        <Link href={project.links.demo} target="_blank" className="p-2 bg-iwu-action/10 text-iwu-action hover:bg-iwu-action hover:text-white rounded transition-colors" title="Live Demo">
                          <FaLink size={16} />
                        </Link>
                      )}
                      {project.links.github && (
                        <Link href={project.links.github} target="_blank" className="p-2 bg-iwu-dark-grey/10 text-foreground hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black rounded transition-colors" title="GitHub Repository">
                          <FaGithub size={16} />
                        </Link>
                      )}
                      {project.links.publications && project.links.publications.length > 0 && (
                        <Link href={project.links.publications[0]} target="_blank" className="p-2 bg-iwu-spirit/10 text-iwu-spirit hover:bg-iwu-spirit hover:text-white rounded transition-colors" title="Read Publication">
                          <FaBookOpen size={16} />
                        </Link>
                      )}
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-white dark:bg-zinc-900 rounded-xl border border-iwu-light-grey/20">
            <p className="font-gotham text-lg text-iwu-dark-grey">No projects found matching that status. Check back soon!</p>
          </div>
        )}
      </div>
    </div>
  );
}
