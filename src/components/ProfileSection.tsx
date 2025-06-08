import React from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Avatar } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { Github, Linkedin, Instagram, Mail, Phone, Globe } from "lucide-react";
import { motion } from "framer-motion";

interface ProfileSectionProps {
  name?: string;
  title?: string;
  profileImage?: string;
  socialLinks?: {
    linkedin?: string;
    github?: string;
    instagram?: string;
    email?: string;
    phone?: string;
    website?: string;
  };
}

const ProfileSection = ({
  name = "Abhay Pratap Singh",
  title = "Student at MIT Manipal",
  profileImage = "https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg?ga=GA1.1.1243683981.1744632958&semt=ais_items_boosted&w=740",
  socialLinks = {
    linkedin: "https://www.linkedin.com/in/abhay-pratap-singh-manhas",
    github: "https://github.com/ARTEMISFOWL-01",
    instagram: "#",
    email: "abhaypratap007@gmail.com",
    phone: "9596713921",
    website: "#",
  },
}: ProfileSectionProps) => {
  return (
    <section className="relative w-full min-h-[500px] bg-[#1a0b2e] text-white py-8 px-4 md:px-8 lg:px-16 overflow-hidden">
      {/* Floating UI Elements */}
      <div className="absolute top-10 left-10 w-12 h-12 rounded-full bg-pink-500/30 blur-md animate-pulse"></div>
      <div className="absolute top-20 left-40 w-8 h-8 rounded-full bg-cyan-500/30 blur-sm animate-pulse"></div>
      <div className="absolute top-40 left-20 w-16 h-16 rounded-full bg-green-500/20 blur-md animate-pulse"></div>
      <div className="absolute top-10 right-40 w-10 h-10 rounded-full bg-yellow-500/20 blur-sm animate-pulse"></div>

      {/* Admin Badge */}
      <div className="absolute top-4 right-4">
        <Badge
          variant="outline"
          className="bg-purple-900/50 text-white border-purple-500 px-4 py-1 rounded-full"
        >
          Admin
        </Badge>
      </div>

      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between gap-8 lg:gap-16">
          {/* Left Content - Text */}
          <div className="flex-1 space-y-8 mt-16">
            {/* Hero Text */}
            <div className="space-y-2">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
                Designing seamless,{" "}
                <span className="text-pink-500">user-centered</span> experiences
                that drive engagement and{" "}
                <span className="text-cyan-400">innovation.</span>
              </h1>
            </div>

            {/* Name and Title */}
            <div className="space-y-2 pt-4">
              <h2 className="text-2xl md:text-3xl font-bold">{name}</h2>
              <p className="text-gray-300">{title}</p>
            </div>

            {/* Social Links */}
            <div className="flex flex-wrap gap-4 pt-2">
              {socialLinks.linkedin && (
                <a
                  href={socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    variant="outline"
                    size="icon"
                    className="rounded-full bg-purple-900/50 border-purple-500 hover:bg-purple-800"
                  >
                    <Linkedin className="h-5 w-5" />
                  </Button>
                </a>
              )}

              {socialLinks.github && (
                <a
                  href={socialLinks.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    variant="outline"
                    size="icon"
                    className="rounded-full bg-purple-900/50 border-purple-500 hover:bg-purple-800"
                  >
                    <Github className="h-5 w-5" />
                  </Button>
                </a>
              )}

              {socialLinks.instagram && (
                <a
                  href={socialLinks.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    variant="outline"
                    size="icon"
                    className="rounded-full bg-purple-900/50 border-purple-500 hover:bg-purple-800"
                  >
                    <Instagram className="h-5 w-5" />
                  </Button>
                </a>
              )}

              {socialLinks.email && (
                <a href={`mailto:${socialLinks.email}`}>
                  <Button
                    variant="outline"
                    size="icon"
                    className="rounded-full bg-purple-900/50 border-purple-500 hover:bg-purple-800"
                  >
                    <Mail className="h-5 w-5" />
                  </Button>
                </a>
              )}

              {socialLinks.phone && (
                <a href={`tel:${socialLinks.phone}`}>
                  <Button
                    variant="outline"
                    size="icon"
                    className="rounded-full bg-purple-900/50 border-purple-500 hover:bg-purple-800"
                  >
                    <Phone className="h-5 w-5" />
                  </Button>
                </a>
              )}

              {socialLinks.website && (
                <a
                  href={socialLinks.website}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    variant="outline"
                    size="icon"
                    className="rounded-full bg-purple-900/50 border-purple-500 hover:bg-purple-800"
                  >
                    <Globe className="h-5 w-5" />
                  </Button>
                </a>
              )}
            </div>

            {/* Contact Info */}
            <div className="space-y-2 text-sm text-gray-300">
              {socialLinks.email && <p>{socialLinks.email}</p>}
              {socialLinks.phone && <p>{socialLinks.phone}</p>}
            </div>
          </div>

          {/* Right Content - Profile Image */}
          <div className="relative flex-1 flex justify-center lg:justify-end">
            <motion.div
              className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-2xl overflow-hidden border-2 border-purple-500/30 shadow-lg shadow-purple-500/20 cursor-pointer"
              whileHover={{
                scale: 1.05,
                boxShadow: "0 25px 50px -12px rgba(168, 85, 247, 0.4)",
              }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 20,
              }}
            >
              <motion.img
                src={profileImage}
                alt="Profile"
                className="w-full h-full object-cover"
                whileHover={{ scale: 1.1 }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 20,
                }}
              />

              {/* Decorative elements */}
              <div className="absolute -bottom-6 -right-6 w-24 h-24 rounded-full bg-pink-500/20 blur-md"></div>
              <div className="absolute -top-6 -left-6 w-20 h-20 rounded-full bg-cyan-500/20 blur-md"></div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Bottom Separator */}
      <div className="mt-16">
        <Separator className="bg-purple-500/30" />
      </div>
    </section>
  );
};

export default ProfileSection;
