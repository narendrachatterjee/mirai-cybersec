import React from 'react';
import { Shield, Zap, Lock, Brain, ArrowRight, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';

const Home = () => {
  const services = [
    {
      icon: Shield,
      title: 'VAPT Testing',
      description: 'Comprehensive vulnerability assessment and penetration testing to identify security weaknesses.',
    },
    {
      icon: Zap,
      title: 'Incident Response',
      description: 'Rapid response and recovery services to minimize the impact of security incidents.',
    },
    {
      icon: Lock,
      title: 'Security Auditing',
      description: 'Thorough security audits to ensure compliance and identify potential risks.',
    },
  ];

  const products = [
    {
      icon: Lock,
      title: 'Password-less Authentication',
      description: 'Revolutionary authentication system that eliminates phishing attacks entirely.',
      features: ['Zero passwords', 'Biometric security', 'Multi-factor protection'],
    },
    {
      icon: Shield,
      title: 'Privacy-focused CDR Platform',
      description: 'Content Disarm & Reconstruction platform ensuring safe file handling.',
      features: ['Real-time scanning', 'Zero-day protection', 'Privacy-first design'],
    },
    {
      icon: Brain,
      title: 'Quantum Ransomware Protection',
      description: 'AI/ML-powered quantum protection against next-generation ransomware.',
      features: ['Quantum algorithms', 'Predictive analysis', 'Real-time blocking'],
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative hero-gradient min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/5" />
        
        {/* Interactive background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-32 h-32 bg-primary/20 rounded-full blur-xl floating-element" />
          <div className="absolute bottom-20 right-20 w-24 h-24 bg-secondary/20 rounded-full blur-lg floating-element-delayed" />
          <div className="absolute top-1/2 left-20 w-16 h-16 bg-accent/30 rounded-full blur-md animate-pulse-glow" />
          <div className="absolute top-40 right-40 w-20 h-20 bg-primary/15 rounded-full blur-lg animate-scale-bounce" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto animate-fade-in">
            <div className="mb-8 inline-flex items-center px-4 py-2 rounded-full bg-primary/10 border border-primary/20 hover-glow-primary cursor-pointer transition-all duration-300">
              <Shield className="w-4 h-4 text-primary mr-2" />
              <span className="text-sm text-primary font-medium">Next-Gen Cybersecurity Solutions</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              Future-Ready{' '}
              <span className="text-gradient-primary">Cybersecurity</span>
              <br />
              for Modern Threats
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
              Protecting your digital assets with cutting-edge AI technology, quantum-resistant security, 
              and autonomous threat detection systems.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="hero" className="group">
                Get Started
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              {/* <Button variant="outline" size="lg" className="group">
                Watch Demo
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button> */}
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Our <span className="text-gradient-primary">Core Services</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive cybersecurity solutions tailored to protect your organization from emerging threats.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  className="card-interactive p-8 text-center group rounded-xl"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="relative mb-6">
                    <div className="inline-flex p-4 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-all duration-300 icon-interactive">
                      <Icon className="w-8 h-8 text-primary" />
                    </div>
                    <div className="absolute inset-0 rounded-full bg-primary/20 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-300" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4 group-hover:text-primary transition-colors">{service.title}</h3>
                  <p className="text-muted-foreground leading-relaxed group-hover:text-foreground transition-colors">{service.description}</p>
                  
                  {/* Interactive hover indicator */}
                  <div className="mt-6 flex justify-center">
                    <div className="w-12 h-1 bg-primary/20 rounded-full group-hover:bg-primary transition-all duration-300 group-hover:w-16" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-20 bg-muted/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Proprietary <span className="text-gradient-secondary">Security Tools</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Revolutionary security technologies designed to stay ahead of tomorrow's threats.
            </p>
          </div>

          <div className="space-y-16">
            {products.map((product, index) => {
              const Icon = product.icon;
              return (
                <div key={index} className={`flex flex-col lg:flex-row items-center gap-12 ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                  <div className="lg:w-1/2">
                    <div className="card-interactive p-8 rounded-xl">
                      <div className="flex items-center mb-6">
                        <div className="p-3 rounded-full bg-secondary/10 mr-4 icon-interactive">
                          <Icon className="w-6 h-6 text-secondary" />
                        </div>
                        <h3 className="text-2xl font-bold">{product.title}</h3>
                      </div>
                      <p className="text-muted-foreground mb-6 leading-relaxed">{product.description}</p>
                      <div className="space-y-3 mb-6">
                        {product.features.map((feature, i) => (
                          <div key={i} className="flex items-center group">
                            <div className="w-5 h-5 rounded-full bg-secondary/20 flex items-center justify-center mr-3 group-hover:bg-secondary/40 transition-colors">
                              <Check className="w-3 h-3 text-secondary" />
                            </div>
                            <span className="text-sm group-hover:text-foreground transition-colors">{feature}</span>
                          </div>
                        ))}
                      </div>
                      <Button variant="outline" className="group">
                        Learn More
                        <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </div>
                  </div>
                  <div className="lg:w-1/2 text-center">
                    <div className="relative">
                      <div className="w-80 h-80 mx-auto bg-gradient-to-br from-primary/20 to-secondary/20 rounded-3xl flex items-center justify-center relative overflow-hidden group cursor-pointer">
                        <Icon className="w-40 h-40 text-primary/60 group-hover:scale-110 transition-transform duration-500" />
                        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      </div>
                      <div className="absolute -top-4 -right-4 w-24 h-24 bg-accent/20 rounded-full animate-pulse-glow" />
                      <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-secondary/20 rounded-full floating-element" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-background relative overflow-hidden">
        {/* Interactive background */}
        <div className="absolute inset-0">
          <div className="absolute top-10 left-1/4 w-40 h-40 bg-primary/10 rounded-full blur-3xl floating-element" />
          <div className="absolute bottom-10 right-1/4 w-32 h-32 bg-secondary/10 rounded-full blur-2xl floating-element-delayed" />
        </div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Ready to Secure Your <span className="text-gradient-primary">Digital Future</span>?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join the next generation of cybersecurity with Mirai CyberSec's revolutionary AI-powered solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" variant="hero" className="group">
                Start Your Security Journey
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link to="/services">
              <Button variant="outline" size="lg" className="group">
                Explore Our Solutions
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;