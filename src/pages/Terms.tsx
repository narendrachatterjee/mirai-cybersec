import React from 'react';
import { ScrollText, Shield, AlertTriangle, Scale } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const Terms = () => {
  const sections = [
    {
      icon: Shield,
      title: 'Service Agreement',
      content: [
        'These Terms and Conditions govern the use of cybersecurity services provided by Mirai CyberSec.',
        'By engaging our services, you agree to comply with all terms outlined in this document.',
        'Our services include but are not limited to VAPT testing, incident response, and security auditing.',
        'All services are provided in accordance with industry best practices and applicable regulations.'
      ]
    },
    {
      icon: AlertTriangle,
      title: 'Liability and Responsibilities',
      content: [
        'Mirai CyberSec will perform all services with professional care and expertise.',
        'Client is responsible for providing accurate and complete information necessary for service delivery.',
        'Our liability is limited to the value of services provided and excludes consequential damages.',
        'Both parties acknowledge the inherent risks in cybersecurity testing and incident response activities.'
      ]
    },
    {
      icon: Scale,
      title: 'Intellectual Property',
      content: [
        'All proprietary tools, methodologies, and reports remain the intellectual property of Mirai CyberSec.',
        'Client retains ownership of their data and systems subject to testing or analysis.',
        'Confidential information shared during engagements will be protected under strict non-disclosure terms.',
        'Custom tools or configurations developed specifically for client may be subject to separate licensing agreements.'
      ]
    }
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="hero-gradient py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center mb-6">
            <ScrollText className="w-16 h-16 text-primary mr-4" />
            <h1 className="text-4xl md:text-6xl font-bold animate-fade-in">
              Terms & <span className="text-gradient-primary">Conditions</span>
            </h1>
          </div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Please read these terms and conditions carefully before using our cybersecurity services.
          </p>
        </div>
      </section>

      {/* Terms Content */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="mb-12">
            <Card className="card-gradient border-border">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <AlertTriangle className="w-6 h-6 text-primary mr-3" />
                  <h2 className="text-2xl font-bold">Important Notice</h2>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  <strong>Last Updated:</strong> December 2024<br />
                  <strong>Effective Date:</strong> January 1, 2024<br /><br />
                  These terms constitute a legal agreement between you and Mirai CyberSec. 
                  By accessing our website or using our services, you acknowledge that you have read, 
                  understood, and agree to be bound by these terms.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Terms Sections */}
          <div className="space-y-8">
            {sections.map((section, index) => {
              const Icon = section.icon;
              return (
                <Card key={index} className="card-gradient border-border hover-glow-primary transition-all duration-300">
                  <CardContent className="p-8">
                    <div className="flex items-center mb-6">
                      <div className="p-3 rounded-full bg-primary/10 mr-4">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                      <h3 className="text-2xl font-bold">{section.title}</h3>
                    </div>
                    <div className="space-y-4">
                      {section.content.map((paragraph, i) => (
                        <p key={i} className="text-muted-foreground leading-relaxed">
                          {paragraph}
                        </p>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Additional Terms */}
          <div className="mt-12 space-y-8">
            <Card className="card-gradient border-border">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6">Additional Terms</h3>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-lg font-semibold mb-3 text-primary">Payment Terms</h4>
                    <ul className="space-y-2 text-muted-foreground text-sm">
                      <li>• Payment terms are typically Net 30 unless otherwise specified</li>
                      <li>• Late payments may incur additional fees</li>
                      <li>• Emergency services may require immediate payment</li>
                      <li>• All prices are subject to applicable taxes</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-3 text-primary">Service Delivery</h4>
                    <ul className="space-y-2 text-muted-foreground text-sm">
                      <li>• Service timelines are estimates and may vary</li>
                      <li>• Client cooperation is required for timely delivery</li>
                      <li>• Change requests may affect timeline and cost</li>
                      <li>• Final reports delivered within agreed timeframes</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-3 text-primary">Confidentiality</h4>
                    <ul className="space-y-2 text-muted-foreground text-sm">
                      <li>• Strict confidentiality maintained for all client data</li>
                      <li>• Non-disclosure agreements signed for sensitive projects</li>
                      <li>• Data retention policies clearly defined</li>
                      <li>• Secure handling of all client information</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-3 text-primary">Termination</h4>
                    <ul className="space-y-2 text-muted-foreground text-sm">
                      <li>• Either party may terminate with written notice</li>
                      <li>• Work completed to termination date will be billed</li>
                      <li>• Client data returned or securely destroyed</li>
                      <li>• Ongoing support services may have different terms</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="card-gradient border-border">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  If you have any questions about these Terms and Conditions, please contact us:
                </p>
                <div className="grid md:grid-cols-2 gap-4 text-sm">
                  <div>
                    {/* <strong>Email:</strong> legal@miraicybersec.com<br /> */}
                    {/* <strong>Phone:</strong> +1 (555) 123-4567<br /> */}
                    <strong>Address:</strong> Sector-62, Noida, India
                  </div>
                  <div>
                    <strong>Business Hours:</strong> Mon - Fri, 9AM - 6PM IST<br />
                    {/* <strong>Emergency Contact:</strong> +1 (555) 911-CYBER<br /> */}
                    <strong>Response Time:</strong> Within 24 hours
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Terms;