export type Project = {
  id: string;
  title: string;
  description: string;
  status: "ongoing" | "completed" | "on-hold";
  teamMembers: string[];
  image?: string;
  links?: {
    demo?: string;
    github?: string;
    publications?: string[];
  };
  tags?: string[];
};
export type Person = {
  id: string;
  name: string;
  role: "faculty" | "graduate-student" | "undergraduate-student" | "contributor";
  title: string;
  photo?: string;
  email?: string;
  phone?: string;
  quote?: string;
  socialLinks?: {
    github?: string;
    linkedin?: string;
  };
};
/**
 * ============================================================================
 * PLACEHOLDER DATA: HOW TO EDIT
 * ============================================================================
 * This file contains DUMMY PLACEHOLDER data to scaffold the UI.
 * 
 * To update the website with real data, simply replace the contents of these 
 * arrays with real information. Ensure that you adhere to the property names 
 * (like 'title', 'description', 'status', etc.) exactly as defined above.
 * ============================================================================
 */
export const PROJECTS_DATA: Project[] = [
  // LIMIT: Keep description to roughly 150-300 characters to ensure the cards remain a consistent height.
  {
    id: "proj-1",
    title: "[PLACEHOLDER] Generative AI for Education",
    description: "This is a placeholder description. A research initiative exploring how Large Language Models can be safely integrated into undergraduate coursework to enhance personalized tutoring.",
    status: "ongoing",
    teamMembers: ["Dr. Jane Smith", "John Doe", "Alice Johnson"],
    links: {
      github: "https://github.com",
    },
    tags: ["LLM", "Education"],
  },
  {
    id: "proj-2",
    title: "[PLACEHOLDER] Computer Vision for Autonomous Rovers",
    description: "This is a placeholder description. Developing a lightweight edge-computing vision model capable of identifying obstacles in low-light environments for the IWU Robotics Club.",
    status: "completed",
    teamMembers: ["Bob Williams", "Dr. Alan Turing"],
    links: {
      demo: "https://example.com",
      github: "https://github.com",
      publications: ["https://example.com/paper"],
    },
    tags: ["Computer Vision", "Robotics"],
  },
  {
    id: "proj-3",
    title: "[PLACEHOLDER] AI Ethics Evaluation Framework",
    description: "This is a placeholder description. An ongoing theoretical framework study attempting to mathematically quantify bias in standard datasets used for facial recognition.",
    status: "on-hold",
    teamMembers: ["Sarah Connor"],
    tags: ["Ethics", "Bias"],
  }
];
export const PEOPLE_DATA: Person[] = [
  // LIMIT: Keep quote under 100 characters.
  {
    id: "person-1",
    name: "Dr. Jane Smith (Placeholder)",
    role: "faculty",
    title: "Director of AI Lab & Associate Professor",
    email: "jane.smith@indwes.edu",
    quote: "Placeholder Quote: 'Faith and reason are the two wings of truth.'",
    socialLinks: {
      linkedin: "https://linkedin.com",
      github: "https://github.com"
    }
  },
  {
    id: "person-2",
    name: "Dr. Alan Turing (Placeholder)",
    role: "faculty",
    title: "Assistant Professor of Computer Science",
    email: "alan.turing@indwes.edu",
    quote: "Placeholder Quote: 'Sometimes it is the people no one imagines anything of who do the things.'",
  },
  {
    id: "person-3",
    name: "Alice Johnson (Placeholder)",
    role: "graduate-student",
    title: "Lead Researcher",
    quote: "Placeholder Quote: 'Building the future, one node at a time.'",
    socialLinks: {
      github: "https://github.com"
    }
  },
  {
    id: "person-4",
    name: "John Doe (Placeholder)",
    role: "undergraduate-student",
    title: "AI Club President",
    email: "john.doe@indwes.edu",
    quote: "Placeholder Quote: 'Coffee and code.'",
    socialLinks: {
      linkedin: "https://linkedin.com",
      github: "https://github.com"
    }
  },
  {
    id: "person-5",
    name: "Bob Williams (Placeholder)",
    role: "undergraduate-student",
    title: "Computer Vision Lead",
  },
  {
    id: "person-6",
    name: "Sarah Connor (Placeholder)",
    role: "contributor",
    title: "Alumni Advisor",
    socialLinks: {
      linkedin: "https://linkedin.com"
    }
  }
];