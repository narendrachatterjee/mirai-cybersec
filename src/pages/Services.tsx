import React from 'react';
import { Shield, Zap, Lock, Brain, Search, CheckCircle, ArrowRight, Clock, Users, Award } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Services = () => {
  const services = [
    {
      icon: Shield,
      title: 'VAPT (Vulnerability Assessment & Penetration Testing)',
      description: 'Comprehensive security testing to identify and exploit vulnerabilities in your systems before malicious actors do.',
      features: [
        'External & Internal Network Testing',
        'Web Application Security Testing',
        'Mobile Application Testing',
        'Social Engineering Assessments',
        'Detailed Remediation Reports',
        'Executive Summary & Risk Ratings'
      ],
      duration: '2-4 weeks',
      deliverables: 'Detailed report with remediation steps'
    },
    {
      icon: Zap,
      title: 'Incident Response (IR)',
      description: 'Rapid response services to contain, investigate, and recover from security incidents with minimal business impact.',
      features: [
        '24/7 Emergency Response Hotline',
        'Digital Forensics Investigation',
        'Malware Analysis & Removal',
        'Data Breach Assessment',
        'Recovery & Business Continuity',
        'Legal & Compliance Support'
      ],
      duration: 'Immediate response',
      deliverables: 'Incident analysis & recovery plan'
    },
    {
      icon: Search,
      title: 'Cybersecurity Auditing',
      description: 'Thorough security audits to ensure compliance with industry standards and identify security gaps.',
      features: [
        'Compliance Gap Analysis',
        'Security Policy Review',
        'Access Control Auditing',
        'Network Security Assessment',
        'Risk Assessment & Management',
        'Continuous Monitoring Setup'
      ],
      duration: '1-3 weeks',
      deliverables: 'Compliance report & recommendations'
    }
  ];

  const products = [
    {
      icon: Lock,
      title: 'Password-less Authentication System',
      description: 'Revolutionary authentication platform that eliminates passwords entirely, preventing phishing attacks and credential theft.',
      benefits: [
        'Zero password vulnerabilities',
        'Biometric & behavioral authentication',
        'Multi-factor device verification',
        'Real-time threat detection',
        'Seamless user experience',
        'API integration support'
      ],
      useCase: 'Enterprise login systems, customer portals, financial services'
    },
    {
      icon: Shield,
      title: 'Privacy-focused CDR Platform',
      description: 'Content Disarm & Reconstruction platform that ensures safe file handling while preserving document functionality.',
      benefits: [
        'Real-time malware removal',
        'Zero-day threat protection',
        'Privacy-preserving processing',
        'Document format preservation',
        'Cloud & on-premise deployment',
        'Audit trail & reporting'
      ],
      useCase: 'Email security, file sharing platforms, document management'
    },
    {
      icon: Brain,
      title: 'AI/ML Quantum Ransomware Protection',
      description: 'Next-generation ransomware protection using AI/ML algorithms and quantum-resistant encryption.',
      benefits: [
        'Predictive threat analysis',
        'Quantum-resistant encryption',
        'Behavioral anomaly detection',
        'Automated threat response',
        'Machine learning adaptation',
        'Cross-platform protection'
      ],
      useCase: 'Critical infrastructure, healthcare systems, financial institutions'
    }
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="hero-gradient py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
            Our <span className="text-gradient-primary">Services</span> & Products
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Comprehensive cybersecurity solutions and cutting-edge products designed to protect 
            your organization from current and emerging threats.
          </p>
        </div>
      </section>

      {/* Core Services */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Core <span className="text-gradient-primary">Security Services</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Expert-delivered services to assess, protect, and respond to cybersecurity threats.
            </p>
          </div>

          <div className="space-y-12">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Card key={index} className="card-gradient border-border hover-glow-primary group transition-all duration-300">
                  <CardContent className="p-8">
                    <div className="grid lg:grid-cols-3 gap-8">
                      {/* Service Info */}
                      <div className="lg:col-span-2">
                        <div className="flex items-center mb-4">
                          <div className="p-3 rounded-full bg-primary/10 mr-4 group-hover:bg-primary/20 transition-colors">
                            <Icon className="w-8 h-8 text-primary" />
                          </div>
                          <h3 className="text-2xl font-bold">{service.title}</h3>
                        </div>
                        <p className="text-muted-foreground mb-6 leading-relaxed text-lg">
                          {service.description}
                        </p>
                        
                        <div className="grid md:grid-cols-2 gap-4">
                          {service.features.map((feature, i) => (
                            <div key={i} className="flex items-center">
                              <CheckCircle className="w-5 h-5 text-secondary mr-3 flex-shrink-0" />
                              <span className="text-sm">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Service Details */}
                      <div className="space-y-6">
                        <div className="p-6 bg-muted/20 rounded-lg">
                          <div className="flex items-center mb-3">
                            <Clock className="w-5 h-5 text-primary mr-2" />
                            <span className="font-medium">Duration</span>
                          </div>
                          <p className="text-muted-foreground">{service.duration}</p>
                        </div>

                        <div className="p-6 bg-muted/20 rounded-lg">
                          <div className="flex items-center mb-3">
                            <Award className="w-5 h-5 text-primary mr-2" />
                            <span className="font-medium">Deliverables</span>
                          </div>
                          <p className="text-muted-foreground">{service.deliverables}</p>
                        </div>

                        <Button className="w-full hover-glow-primary group">
                          Learn More
                          <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Proprietary Products */}
      <section className="py-20 bg-muted/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Proprietary <span className="text-gradient-secondary">Security Products</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Revolutionary security technologies designed to address tomorrow's threats today.
            </p>
          </div>

          <div className="space-y-12">
            {products.map((product, index) => {
              const Icon = product.icon;
              return (
                <Card key={index} className="card-gradient border-border hover-glow-secondary group transition-all duration-300">
                  <CardContent className="p-8">
                    <div className="grid lg:grid-cols-3 gap-8">
                      {/* Product Visual */}
                      <div className="text-center">
                        <div className="w-48 h-48 mx-auto bg-gradient-to-br from-secondary/20 to-accent/20 rounded-2xl flex items-center justify-center mb-6">
                          <Icon className="w-24 h-24 text-secondary" />
                        </div>
                        <Button variant="outline" className="hover-glow-secondary">
                          Request Demo
                        </Button>
                      </div>

                      {/* Product Info */}
                      <div className="lg:col-span-2">
                        <h3 className="text-2xl font-bold mb-4">{product.title}</h3>
                        <p className="text-muted-foreground mb-6 leading-relaxed text-lg">
                          {product.description}
                        </p>

                        <div className="mb-6">
                          <h4 className="text-lg font-semibold mb-4">Key Benefits</h4>
                          <div className="grid md:grid-cols-2 gap-3">
                            {product.benefits.map((benefit, i) => (
                              <div key={i} className="flex items-center">
                                <CheckCircle className="w-5 h-5 text-secondary mr-3 flex-shrink-0" />
                                <span className="text-sm">{benefit}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        <div className="p-4 bg-muted/20 rounded-lg">
                          <div className="flex items-center mb-2">
                            <Users className="w-5 h-5 text-secondary mr-2" />
                            <span className="font-medium">Use Cases</span>
                          </div>
                          <p className="text-muted-foreground text-sm">{product.useCase}</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Ready to Enhance Your Security?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Contact us today to discuss your security needs and learn how our solutions can protect your organization.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" className="hover-glow-primary">
                Get a Security Assessment
              </Button>
            </Link>
            <Button variant="outline" size="lg" className="hover-glow-secondary">
              Schedule Consultation
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;