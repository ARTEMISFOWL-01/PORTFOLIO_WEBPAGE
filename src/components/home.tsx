import React from "react";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import {
  Github,
  Linkedin,
  Instagram,
  Mail,
  Phone,
  Globe,
  GitFork,
  Terminal,
  Database,
  FileSpreadsheet,
  Code,
  FileCode,
} from "lucide-react";
import ProfileSection from "./ProfileSection";
import SectionContainer from "./SectionContainer";
import ProjectCard from "./ProjectCard";

const Home = () => {
  return (
    <div className="min-h-screen bg-[#0F0A1F] text-white font-sans overflow-x-hidden">
      {/* Floating UI Elements */}
      <div className="absolute top-10 left-10 w-8 h-8 bg-pink-500 rounded-full opacity-70 animate-pulse"></div>
      <div className="absolute top-20 left-40 w-4 h-4 bg-cyan-400 rounded-full opacity-60 animate-bounce"></div>
      <div className="absolute top-16 right-60 w-6 h-6 bg-green-400 rounded-full opacity-50 animate-pulse"></div>
      <div className="absolute top-32 right-32 w-3 h-3 bg-yellow-300 rounded-full opacity-70 animate-bounce"></div>

      {/* Admin Badge */}
      <div className="fixed top-5 right-5 z-50">
        <Badge className="bg-purple-700 hover:bg-purple-600 text-white px-4 py-1 rounded-full">
          Admin
        </Badge>
      </div>

      {/* Main Container */}
      <div className="container mx-auto px-4 py-10 max-w-6xl">
        {/* SECTION 1 - Hero Area */}
        <ProfileSection
          name="Abhay Pratap Singh"
          title="Student at MIT Manipal"
          headline={
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Designing seamless,
              <br />
              <span className="text-pink-500">user-centered</span> experiences
              that drive
              <br />
              engagement and <span className="text-cyan-400">innovation.</span>
            </h1>
          }
          profileImage="https://i.imgur.com/BYLUdh9.jpeg"
          socialLinks={[
            {
              icon: <Linkedin className="h-5 w-5" />,
              url: "https://www.linkedin.com/in/abhay-pratap-singh-manhas",
              label: "LinkedIn",
            },
            {
              icon: <Github className="h-5 w-5" />,
              url: "https://github.com/ARTEMISFOWL-01",
              label: "GitHub",
            },
            {
              icon: <Instagram className="h-5 w-5" />,
              url: "#",
              label: "Instagram",
            },
            {
              icon: <Mail className="h-5 w-5" />,
              url: "mailto:abhaypratap007@gmail.com",
              label: "Email",
            },
            {
              icon: <Phone className="h-5 w-5" />,
              url: "tel:9596713921",
              label: "Phone",
            },
            { icon: <Globe className="h-5 w-5" />, url: "#", label: "Website" },
          ]}
        />

        {/* SECTION 3 - Experience */}
        <SectionContainer title="Experience" className="mt-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="bg-[#1A1333] border-purple-700 hover:border-pink-500 transition-all duration-300">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-pink-500">
                  AI/ML Intern – IndoAI
                </h3>
                <p className="text-gray-300 text-sm mt-1">Present</p>
                <p className="mt-3">
                  Gesture detection for triggering alerts and other ML-based
                  tools.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-[#1A1333] border-purple-700 hover:border-cyan-400 transition-all duration-300">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-cyan-400">
                  MIST Club – MIT Manipal
                </h3>
                <p className="mt-3">
                  Technical domain member solving CTF problems.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-[#1A1333] border-purple-700 hover:border-green-400 transition-all duration-300">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-green-400">
                  Kalpana Project – Radio Telescope
                </h3>
                <p className="mt-3">
                  Automating control systems for observation tasks.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-[#1A1333] border-purple-700 hover:border-yellow-300 transition-all duration-300">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-yellow-300">
                  Hackathon Participant
                </h3>
                <p className="mt-3">
                  Built and presented multiple quick-deploy tech solutions.
                </p>
              </CardContent>
            </Card>
          </div>
        </SectionContainer>

        {/* SECTION 4 - Education */}
        <SectionContainer title="Education" className="mt-24">
          <div className="space-y-6">
            <div className="bg-[#1A1333] p-6 rounded-lg border border-purple-700">
              <div className="flex items-start gap-4">
                <Badge className="bg-green-500 text-white px-3 py-1 rounded-md">
                  2023 - Present
                </Badge>
                <div>
                  <h3 className="text-xl font-bold">
                    B.Tech in Computer and Communication Engineering
                  </h3>
                  <p className="text-gray-300">MIT Manipal</p>
                  <p className="text-green-400 mt-1">CGPA: 9.62</p>
                </div>
              </div>
            </div>

            <div className="bg-[#1A1333] p-6 rounded-lg border border-purple-700">
              <div className="flex items-start gap-4">
                <Badge className="bg-green-500 text-white px-3 py-1 rounded-md">
                  2017 - 2023
                </Badge>
                <div>
                  <h3 className="text-xl font-bold">
                    Jawahar Navodaya Vidyalaya
                  </h3>
                  <p className="text-gray-300">Jammu & Udhampur</p>
                </div>
              </div>
            </div>
          </div>
        </SectionContainer>

        {/* SECTION 5 - Skills */}
        <SectionContainer title="Skills" className="mt-24">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            <div className="bg-[#1A1333] p-4 rounded-lg border border-purple-700 hover:border-pink-500 transition-all duration-300">
              <p className="text-pink-500 font-medium">
                Python, C++, C, Java, SQL
              </p>
            </div>
            <div className="bg-[#1A1333] p-4 rounded-lg border border-purple-700 hover:border-cyan-400 transition-all duration-300">
              <p className="text-cyan-400 font-medium">
                Machine Learning, Data Science, Computer Vision
              </p>
            </div>
            <div className="bg-[#1A1333] p-4 rounded-lg border border-purple-700 hover:border-green-400 transition-all duration-300">
              <p className="text-green-400 font-medium">
                Data Analysis, Feature Engineering
              </p>
            </div>
            <div className="bg-[#1A1333] p-4 rounded-lg border border-purple-700 hover:border-yellow-300 transition-all duration-300">
              <p className="text-yellow-300 font-medium">
                Image Processing, Gesture Recognition
              </p>
            </div>
            <div className="bg-[#1A1333] p-4 rounded-lg border border-purple-700 hover:border-pink-500 transition-all duration-300">
              <p className="text-pink-500 font-medium">
                Scikit-learn, Pandas, Numpy
              </p>
            </div>
            <div className="bg-[#1A1333] p-4 rounded-lg border border-purple-700 hover:border-cyan-400 transition-all duration-300">
              <p className="text-cyan-400 font-medium">
                Problem Solving, Team Collaboration
              </p>
            </div>
          </div>
        </SectionContainer>

        {/* SECTION 6 - Tools */}
        <SectionContainer title="Tools" className="mt-24">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6">
            <div className="flex flex-col items-center justify-center bg-[#1A1333] p-4 rounded-lg border border-purple-700 hover:border-cyan-400 transition-all duration-300 aspect-square">
              <Terminal className="h-10 w-10 text-cyan-400 mb-2" />
              <p className="text-center font-medium">Linux</p>
            </div>
            <div className="flex flex-col items-center justify-center bg-[#1A1333] p-4 rounded-lg border border-purple-700 hover:border-green-400 transition-all duration-300 aspect-square">
              <Database className="h-10 w-10 text-green-400 mb-2" />
              <p className="text-center font-medium">Power BI</p>
            </div>
            <div className="flex flex-col items-center justify-center bg-[#1A1333] p-4 rounded-lg border border-purple-700 hover:border-yellow-300 transition-all duration-300 aspect-square">
              <FileSpreadsheet className="h-10 w-10 text-yellow-300 mb-2" />
              <p className="text-center font-medium">Excel</p>
            </div>
            <div className="flex flex-col items-center justify-center bg-[#1A1333] p-4 rounded-lg border border-purple-700 hover:border-pink-500 transition-all duration-300 aspect-square">
              <Code className="h-10 w-10 text-pink-500 mb-2" />
              <p className="text-center font-medium">VS Code</p>
            </div>
            <div className="flex flex-col items-center justify-center bg-[#1A1333] p-4 rounded-lg border border-purple-700 hover:border-cyan-400 transition-all duration-300 aspect-square">
              <FileCode className="h-10 w-10 text-cyan-400 mb-2" />
              <p className="text-center font-medium">GitHub</p>
            </div>
          </div>
        </SectionContainer>

        {/* SECTION 7 - Certifications */}
        <SectionContainer title="Certifications" className="mt-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-[#1A1333] p-4 rounded-lg border border-purple-700 hover:border-pink-500 transition-all duration-300">
              <h3 className="font-medium text-pink-500">
                Python Project for Data Science
              </h3>
              <p className="text-sm text-gray-300">IBM (Coursera)</p>
            </div>
            <div className="bg-[#1A1333] p-4 rounded-lg border border-purple-700 hover:border-cyan-400 transition-all duration-300">
              <h3 className="font-medium text-cyan-400">
                Excel Basics for Data Analysis
              </h3>
              <p className="text-sm text-gray-300">IBM (Coursera)</p>
            </div>
            <div className="bg-[#1A1333] p-4 rounded-lg border border-purple-700 hover:border-green-400 transition-all duration-300">
              <h3 className="font-medium text-green-400">
                Introduction to Data Analytics
              </h3>
              <p className="text-sm text-gray-300">IBM (Coursera)</p>
            </div>
            <div className="bg-[#1A1333] p-4 rounded-lg border border-purple-700 hover:border-yellow-300 transition-all duration-300">
              <h3 className="font-medium text-yellow-300">
                Python for Data Science, AI & Development
              </h3>
              <p className="text-sm text-gray-300">IBM (Coursera)</p>
            </div>
            <div className="bg-[#1A1333] p-4 rounded-lg border border-purple-700 hover:border-pink-500 transition-all duration-300">
              <h3 className="font-medium text-pink-500">
                Linear Algebra for ML
              </h3>
              <p className="text-sm text-gray-300">Coursera</p>
            </div>
            <div className="bg-[#1A1333] p-4 rounded-lg border border-purple-700 hover:border-cyan-400 transition-all duration-300">
              <h3 className="font-medium text-cyan-400">Calculus for ML</h3>
              <p className="text-sm text-gray-300">Coursera</p>
            </div>
            <div className="bg-[#1A1333] p-4 rounded-lg border border-purple-700 hover:border-green-400 transition-all duration-300">
              <h3 className="font-medium text-green-400">Power BI Basics</h3>
              <p className="text-sm text-gray-300">Microsoft</p>
            </div>
            <div className="bg-[#1A1333] p-4 rounded-lg border border-purple-700 hover:border-yellow-300 transition-all duration-300">
              <h3 className="font-medium text-yellow-300">
                Data Analysis with Excel
              </h3>
              <p className="text-sm text-gray-300">IBM</p>
            </div>
          </div>
        </SectionContainer>

        {/* SECTION 8 - About Me */}
        <SectionContainer title="About Me" className="mt-24">
          <div className="bg-[#1A1333] p-6 rounded-lg border border-purple-700">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-full overflow-hidden flex-shrink-0">
                <img
                  src="https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg?ga=GA1.1.1243683981.1744632958&semt=ais_items_boosted&w=740"
                  alt="Avatar"
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-lg">
                <span className="text-pink-500">AI</span> and{" "}
                <span className="text-cyan-400">design</span> enthusiast. I
                build practical,{" "}
                <span className="text-green-400">smart tools</span> that solve
                real problems — simply and{" "}
                <span className="text-yellow-300">effectively</span>.
              </p>
            </div>
          </div>
        </SectionContainer>

        {/* SECTION 9 - Project Index */}
        <div className="mt-24 relative">
          <div className="flex items-center mb-8">
            <h2 className="text-3xl font-bold">Projects</h2>
            <div className="ml-4 px-3 py-1 bg-pink-500 text-white text-sm font-bold rounded-md">
              INDEX
            </div>
          </div>

          <div className="mb-12">
            <h3 className="text-xl font-bold mb-6 flex items-center">
              <span className="text-yellow-300 mr-2">⚡</span> Featured Projects
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <a
                href="https://github.com/ARTEMISFOWL-01/Distress_signal"
                target="_blank"
                rel="noopener noreferrer"
              >
                <ProjectCard
                  index="01"
                  title="Distress Signal"
                  description="Real-time hand gesture recognition system for sending emergency alerts."
                  image="https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?w=800&q=80"
                  color="pink"
                />
              </a>

              <a
                href="https://artemisfowl-01.github.io/TEAM-JK-/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <ProjectCard
                  index="02"
                  title="Elder Bridge"
                  description="Website to help elderly users with daily tasks while keeping family informed."
                  image="https://images.unsplash.com/photo-1587440871875-191322ee64b0?w=800&q=80"
                  color="cyan"
                />
              </a>

              <a
                href="https://github.com/ARTEMISFOWL-01/Predicting-price-for-cars-using-linear-regression"
                target="_blank"
                rel="noopener noreferrer"
              >
                <ProjectCard
                  index="03"
                  title="Car Price Predictor"
                  description="Predicts car prices using linear regression."
                  image="https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=800&q=80"
                  color="yellow"
                />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-6 flex items-center">
              <span className="text-cyan-400 mr-2">💡</span> Additional Projects
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <a
                href="https://github.com/ARTEMISFOWL-01/TITANIC-SURVIVAL-PREDICTION"
                target="_blank"
                rel="noopener noreferrer"
              >
                <ProjectCard
                  index="04"
                  title="Titanic Survival Prediction"
                  description="Model to predict survival using cleaned Titanic dataset."
                  image="https://images.unsplash.com/photo-1569263979104-865ab7cd8d13?w=800&q=80"
                  color="pink"
                />
              </a>

              <a
                href="https://github.com/ARTEMISFOWL-01/simple_image_classifier_using_svc"
                target="_blank"
                rel="noopener noreferrer"
              >
                <ProjectCard
                  index="05"
                  title="Image Classifier"
                  description="Classified images using SVC and feature extraction."
                  image="https://images.unsplash.com/photo-1527430253228-e93688616381?w=800&q=80"
                  color="cyan"
                />
              </a>

              <a
                href="https://github.com/ARTEMISFOWL-01/color_detection_using_opencv"
                target="_blank"
                rel="noopener noreferrer"
              >
                <ProjectCard
                  index="06"
                  title="Color Detection"
                  description="Tracked specific colors in video streams using OpenCV."
                  image="https://images.unsplash.com/photo-1541701494587-cb58502866ab?w=800&q=80"
                  color="green"
                />
              </a>

              <a
                href="https://github.com/ARTEMISFOWL-01/controlling-volume-button-using-handgestures"
                target="_blank"
                rel="noopener noreferrer"
              >
                <ProjectCard
                  index="07"
                  title="Gesture-Based Audio Control"
                  description="Adjusted volume using hand signs in real-time."
                  image="https://images.unsplash.com/photo-1583324113626-70df0f4deaab?w=800&q=80"
                  color="yellow"
                />
              </a>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="mt-24 py-8 border-t border-purple-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 mb-4 md:mb-0">
              © 2023 Abhay Pratap Singh. All rights reserved.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.linkedin.com/in/abhay-pratap-singh-manhas"
                className="text-gray-400 hover:text-pink-500 transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="https://github.com/ARTEMISFOWL-01"
                className="text-gray-400 hover:text-cyan-400 transition-colors"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="mailto:abhaypratap007@gmail.com"
                className="text-gray-400 hover:text-green-400 transition-colors"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Home;
