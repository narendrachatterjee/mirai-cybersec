import React from 'react';
import { Shield, Target, Eye, Users, Award, Lightbulb } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  const values = [
    {
      icon: Shield,
      title: 'Security First',
      description: 'Every decision we make is driven by our commitment to providing uncompromising security.',
    },
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'We continuously push the boundaries of cybersecurity technology to stay ahead of threats.',
    },
    {
      icon: Users,
      title: 'Client-Centric',
      description: 'Our clients\' success and security are at the heart of everything we do.',
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'We strive for excellence in every service we deliver and solution we create.',
    },
  ];

  const team = [
    {
      name: 'Aditya Singh',
      role: 'CTO & Founder',
      specialization: 'Cybersecurity Expert',
      experience: '3+ years in enterprise security',
    },
    {
      name: 'Narendra Chatterjee',
      role: 'CTO & Co-Founder',
      specialization: 'AI-ML Expert',
      experience: '4+ years in AI-driven security solutions',
    }
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="hero-gradient py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
            About <span className="text-gradient-primary">Mirai CyberSec</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            We are a next-generation cybersecurity company dedicated to protecting organizations 
            from emerging threats through innovative technology and expert services.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="mb-12">
                <div className="flex items-center mb-4">
                  <Target className="w-8 h-8 text-primary mr-3" />
                  <h2 className="text-3xl font-bold">Our Mission</h2>
                </div>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  To revolutionize cybersecurity by developing cutting-edge, quantum-resistant solutions 
                  that protect organizations from both current and future threats. We believe in a world 
                  where digital security is proactive, intelligent, and unbreachable.
                </p>
              </div>
              
              <div>
                <div className="flex items-center mb-4">
                  <Eye className="w-8 h-8 text-secondary mr-3" />
                  <h2 className="text-3xl font-bold">Our Vision</h2>
                </div>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  To be the global leader in next-generation cybersecurity, setting the standard for 
                  AI-powered, quantum-resistant security solutions that adapt and evolve with the 
                  ever-changing threat landscape.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="w-full h-96 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl flex items-center justify-center">
                <Shield className="w-48 h-48 text-primary/30" />
              </div>
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-accent/20 rounded-full animate-pulse-glow" />
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-secondary/20 rounded-full animate-float" />
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-muted/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Our <span className="text-gradient-primary">Core Values</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              The principles that guide our work and define our commitment to excellence.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <Card key={index} className="card-gradient border-border hover-glow-primary group cursor-pointer transition-all duration-300">
                  <CardContent className="p-6 text-center">
                    <div className="inline-flex p-4 rounded-full bg-primary/10 mb-4 group-hover:bg-primary/20 transition-colors">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold mb-3">{value.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{value.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Meet Our <span className="text-gradient-secondary">Expert Team</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Industry veterans and security experts dedicated to protecting your digital future.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="card-gradient border-border hover-glow-secondary group cursor-pointer transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full flex items-center justify-center">
                    <Users className="w-10 h-10 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold mb-1">{member.name}</h3>
                  <p className="text-primary text-sm font-medium mb-2">{member.role}</p>
                  <p className="text-muted-foreground text-sm mb-2">{member.specialization}</p>
                  <p className="text-muted-foreground text-xs">{member.experience}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Company Stats */}
      {/* <section className="py-20 bg-muted/20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="animate-fade-in">
              <div className="text-4xl md:text-5xl font-bold text-gradient-primary mb-2">500+</div>
              <p className="text-muted-foreground">Clients Protected</p>
            </div>
            <div className="animate-fade-in" style={{ animationDelay: '0.1s' }}>
              <div className="text-4xl md:text-5xl font-bold text-gradient-primary mb-2">99.9%</div>
              <p className="text-muted-foreground">Uptime Guarantee</p>
            </div>
            <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <div className="text-4xl md:text-5xl font-bold text-gradient-primary mb-2">24/7</div>
              <p className="text-muted-foreground">Security Monitoring</p>
            </div>
            <div className="animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <div className="text-4xl md:text-5xl font-bold text-gradient-primary mb-2">0</div>
              <p className="text-muted-foreground">Successful Breaches</p>
            </div>
          </div>
        </div>
      </section> */}
    </div>
  );
};

export default About;