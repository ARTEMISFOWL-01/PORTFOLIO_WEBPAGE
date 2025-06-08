import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

interface ProjectCardProps {
  index: string;
  title: string;
  description: string;
  imageUrl?: string;
  isFeatured?: boolean;
  onClick?: () => void;
}

const ProjectCard = ({
  index = "01",
  title = "Project Title",
  description = "Project description goes here with details about the project and technologies used.",
  imageUrl = "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80",
  isFeatured = false,
  onClick,
}: ProjectCardProps) => {
  return (
    <motion.div
      whileHover={{ scale: 1.03, y: -5 }}
      transition={{ type: "spring", stiffness: 300 }}
      className="cursor-pointer"
      onClick={onClick}
    >
      <Card className="w-[350px] h-[280px] bg-[#1a1a2e] border-[#2a2a3e] overflow-hidden relative group">
        <div className="absolute top-4 left-4 z-10">
          <span className="text-4xl font-bold text-[#8a2be2] opacity-70">
            {index}
          </span>
        </div>

        <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a2e] via-transparent to-transparent z-10 opacity-80" />

        <div className="relative h-full w-full overflow-hidden">
          {/* Project Image with 3D angled mockup styling */}
          <div className="absolute inset-0 transform perspective-1000 group-hover:scale-105 transition-transform duration-500">
            <div className="h-full w-full overflow-hidden transform rotate-x-5 rotate-y-3 shadow-xl">
              <img
                src={imageUrl}
                alt={title}
                className="w-full h-full object-cover object-center transform scale-110"
              />
            </div>
          </div>

          {/* Content overlay */}
          <CardContent className="absolute bottom-0 left-0 right-0 p-5 z-20">
            <div className="space-y-2">
              {isFeatured && (
                <span className="inline-block px-2 py-1 text-xs font-medium bg-[#ff2a6d] text-white rounded-md mb-2">
                  Featured
                </span>
              )}
              <h3 className="text-xl font-bold text-white group-hover:text-[#05d9e8] transition-colors">
                {title}
              </h3>
              <p className="text-sm text-gray-300 line-clamp-2">
                {description}
              </p>
            </div>
          </CardContent>
        </div>
      </Card>
    </motion.div>
  );
};

export default ProjectCard;
