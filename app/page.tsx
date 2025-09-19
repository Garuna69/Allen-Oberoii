"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Github, Instagram, Mail, Phone, MapPin, Shield, Code, Brain, Bug, Target, ChevronDown } from "lucide-react"

export default function Portfolio() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const skills = [
    { name: "Web Development", icon: Code, color: "bg-primary" },
    { name: "Ethical Hacking", icon: Shield, color: "bg-accent" },
    { name: "Red Teaming", icon: Target, color: "bg-destructive" },
    { name: "Bug Hunting", icon: Bug, color: "bg-chart-3" },
    { name: "AI & Python", icon: Brain, color: "bg-chart-2" },
  ]

  const projects = [
    {
      title: "Security Assessment Tool",
      description: "Currently learning to build automated security scanning tools",
      tech: ["Python", "Networking", "Security"],
      status: "Learning",
    },
    {
      title: "Web Vulnerability Scanner",
      description: "Exploring web application security testing methodologies",
      tech: ["Python", "Web Security", "OWASP"],
      status: "In Progress",
    },
    {
      title: "AI-Powered Bug Detection",
      description: "Researching machine learning applications in cybersecurity",
      tech: ["Python", "AI/ML", "Security"],
      status: "Research",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5" />
        <div className="absolute inset-0 bg-[url('/abstract-cybersecurity-network-pattern.jpg')] opacity-5 bg-cover bg-center" />

        <div
          className={`relative z-10 text-center px-4 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <div className="mb-8">
            <img
              src="/professional-tech-developer-avatar.jpg"
              alt="Allen Oberoii"
              className="w-32 h-32 rounded-full mx-auto mb-6 border-4 border-primary/20 shadow-2xl hover:scale-105 transition-transform duration-300"
            />
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Allen Oberoii
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            Tech Learner & Security Enthusiast
          </p>

          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {skills.map((skill, index) => (
              <Badge
                key={skill.name}
                variant="secondary"
                className={`px-4 py-2 text-sm font-medium hover:scale-105 transition-all duration-300 delay-${index * 100}`}
              >
                <skill.icon className="w-4 h-4 mr-2" />
                {skill.name}
              </Badge>
            ))}
          </div>

          <Button
            size="lg"
            className="group hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
            onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
          >
            Explore My Journey
            <ChevronDown className="ml-2 w-4 h-4 group-hover:translate-y-1 transition-transform" />
          </Button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-balance">About Me</h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                I'm a passionate tech learner from Uttar Pradesh, India, currently working in Gurugram, Haryana. My
                journey in technology spans across web development, cybersecurity, and artificial intelligence.
              </p>

              <p className="text-lg text-muted-foreground leading-relaxed">
                I specialize in ethical hacking, red teaming, and bug hunting, always exploring the latest security
                methodologies and black hat tactics for educational purposes. My goal is to contribute to making the
                digital world more secure.
              </p>

              <div className="flex flex-wrap gap-4 pt-4">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <MapPin className="w-4 h-4 text-primary" />
                  <span>Gurugram, Haryana, India</span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {skills.map((skill, index) => (
                <Card
                  key={skill.name}
                  className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                >
                  <CardContent className="p-6 text-center">
                    <div
                      className={`w-12 h-12 ${skill.color} rounded-lg flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform`}
                    >
                      <skill.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="font-semibold text-sm">{skill.name}</h3>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-balance">Current Learning Projects</h2>

          <div className="grid md:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card
                key={project.title}
                className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <CardTitle className="text-xl group-hover:text-primary transition-colors">
                      {project.title}
                    </CardTitle>
                    <Badge variant="outline" className="text-xs">
                      {project.status}
                    </Badge>
                  </div>
                  <CardDescription className="leading-relaxed">{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <Badge key={tech} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-muted-foreground mb-6">
              Currently focusing on learning and improving my skills. More projects coming soon!
            </p>
            <Button variant="outline" className="group bg-transparent">
              <Github className="w-4 h-4 mr-2 group-hover:rotate-12 transition-transform" />
              View on GitHub
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-16 text-balance">Let's Connect</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <a
              href="mailto:death69ban@proton.me"
              className="group flex flex-col items-center p-6 rounded-lg border hover:border-primary/50 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <Mail className="w-8 h-8 text-primary mb-3 group-hover:scale-110 transition-transform" />
              <span className="font-medium">Email</span>
              <span className="text-sm text-muted-foreground mt-1">death69ban@proton.me</span>
            </a>

            <a
              href="tel:+919034941583"
              className="group flex flex-col items-center p-6 rounded-lg border hover:border-primary/50 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <Phone className="w-8 h-8 text-primary mb-3 group-hover:scale-110 transition-transform" />
              <span className="font-medium">Phone</span>
              <span className="text-sm text-muted-foreground mt-1">+91 9034941583</span>
            </a>

            <a
              href="https://github.com/Garuna69"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center p-6 rounded-lg border hover:border-primary/50 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <Github className="w-8 h-8 text-primary mb-3 group-hover:scale-110 transition-transform" />
              <span className="font-medium">GitHub</span>
              <span className="text-sm text-muted-foreground mt-1">@Garuna69</span>
            </a>

            <a
              href="https://www.instagram.com/allen.gov.in?igsh=eXh2bG9xeW0xZmo5"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center p-6 rounded-lg border hover:border-primary/50 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <Instagram className="w-8 h-8 text-primary mb-3 group-hover:scale-110 transition-transform" />
              <span className="font-medium">Instagram</span>
              <span className="text-sm text-muted-foreground mt-1">@allen.gov.in</span>
            </a>
          </div>

          <p className="text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            I'm always eager to connect with fellow tech enthusiasts, security professionals, and mentors. Whether you
            want to discuss the latest security trends, share learning resources, or explore collaboration
            opportunities, feel free to reach out!
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-8 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-muted-foreground">
            © 2024 Allen Oberoii. Built with passion for cybersecurity and continuous learning.
          </p>
        </div>
      </footer>
    </div>
  )
}
