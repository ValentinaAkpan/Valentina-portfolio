import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import { CheckCircle2, BarChart3, Users, TrendingUp } from "lucide-react";

const SkillCat = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              SkillCat
            </span>
            <span className="text-foreground"> | HRAI Learning</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            A mobile-based learning platform designed for the HVAC and HVACR industry
          </p>
          <Button 
            size="lg" 
            className="text-lg px-8"
            onClick={() => window.open('https://lp.constantcontactpages.com/sl/V3dOCY7', '_blank')}
          >
            Request Demo
          </Button>
        </div>
      </section>

      {/* What is SkillCat */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-card/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-center">What is SkillCat</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            SkillCat is a mobile-based learning platform designed for the HVAC and HVACR industry. 
            It offers interactive, hands-on training through virtual simulations, troubleshooting tools, 
            diagnostics, and industry-relevant courses. Accessible anytime and anywhere, SkillCat allows 
            technicians to learn in the flow of work and gain certifications that translate directly to 
            real-world job performance. Through HRAI, Canadian professionals can access SkillCat's trusted 
            learning management system to enhance their technical expertise and workforce readiness.
          </p>
        </div>
      </section>

      {/* Why Choose SkillCat */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Why Choose SkillCat?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <TrendingUp className="w-12 h-12 text-primary mb-4" />
                <CardTitle>Lower Training Costs, Higher Impact</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Train new talent efficiently with cost-effective, scalable solutions.
                </CardDescription>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Users className="w-12 h-12 text-primary mb-4" />
                <CardTitle>Stronger Retention & Outcomes</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Help learners see a clear future in the trades. Our training builds confidence, 
                  increases job satisfaction, and supports long-term career growth.
                </CardDescription>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CheckCircle2 className="w-12 h-12 text-primary mb-4" />
                <CardTitle>Job-Ready from Day One</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  SkillCat's curriculum prepares students and entry-level workers to hit the ground 
                  running—reducing onboarding time and supervision needs.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Dashboard Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-card/50">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <BarChart3 className="w-16 h-16 text-primary mb-6" />
              <h2 className="text-3xl font-bold mb-6">Real-Time Dashboard</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Track certifications, safety compliance, and progress with SkillCat's intuitive 
                dashboard—data-driven insights to optimize the workforce.
              </p>
              <Button 
                onClick={() => window.open('https://lp.constantcontactpages.com/sl/V3dOCY7', '_blank')}
              >
                Learn More
              </Button>
            </div>
            <div className="bg-muted rounded-lg aspect-video flex items-center justify-center">
              <p className="text-muted-foreground">Dashboard Preview</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Workforce?</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Equip your skilled trades workforce with job-aligned skills, data-driven insights, 
            and trusted content and credentials.
          </p>
          <Button 
            size="lg" 
            className="text-lg px-8"
            onClick={() => window.open('https://lp.constantcontactpages.com/sl/V3dOCY7', '_blank')}
          >
            Request Your Demo
          </Button>
        </div>
      </section>
    </div>
  );
};

export default SkillCat;
