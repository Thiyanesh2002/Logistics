import { Link } from 'react-router-dom';
import { Button } from '../ui/button';
import { Card, CardContent } from '../ui/card';
import { GraduationCap, Globe, Award, Users, TrendingUp, CheckCircle2 } from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';

export function HomePage() {
  const features = [
    {
      icon: GraduationCap,
      title: 'Expert Training',
      description: 'Industry-leading curriculum designed by logistics professionals',
    },
    {
      icon: Globe,
      title: 'Global Opportunities',
      description: 'Deployment services for jobs in India and overseas markets',
    },
    {
      icon: Award,
      title: 'Certified Programs',
      description: 'Internationally recognized certifications and credentials',
    },
    {
      icon: Users,
      title: 'Experienced Faculty',
      description: 'Learn from industry experts with years of practical experience',
    },
  ];

  const stats = [
    { value: '5000+', label: 'Students Trained' },
    { value: '95%', label: 'Placement Rate' },
    { value: '25+', label: 'Countries' },
    { value: '10+', label: 'Years Experience' },
  ];

  const benefits = [
    'Comprehensive logistics and supply chain training',
    'Hands-on practical sessions with real equipment',
    'Job placement assistance in India and abroad',
    'Industry-recognized certifications',
    'Flexible training schedules',
    'Competitive training fees with installment options',
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#2596be] to-[#1a7094] text-white">
        <div className="container mx-auto px-4 py-20 md:py-32">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="mb-6">
                Building Careers in Logistics & Supply Chain
              </h1>
              <p className="text-xl text-blue-100 mb-8">
                Premier training institute for logistics professionals. We train, certify, and deploy skilled workers for careers in India and overseas.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/programs">
                  <Button size="lg" variant="secondary">
                    Explore Programs
                  </Button>
                </Link>
                <Link to="/registration">
                  <Button size="lg" variant="outline" className="bg-transparent text-white border-white hover:bg-white hover:text-[#2596be]">
                    Register Now
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative h-[300px] md:h-[400px] rounded-lg overflow-hidden shadow-2xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1739204618173-3e89def7140f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsb2dpc3RpY3MlMjB3YXJlaG91c2UlMjB0cmFpbmluZ3xlbnwxfHx8fDE3NjIzMjA2MDB8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Logistics Training"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-[#2596be] mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="mb-4">About TN - Autoskill for Logistics</h2>
            <p className="text-gray-600">
              We are Tamil Nadu's leading logistics training institute, dedicated to creating skilled professionals for the global logistics industry. With over a decade of experience, we've successfully trained and deployed thousands of professionals across India and international markets.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card key={index}>
                <CardContent className="pt-6">
                  <div className="bg-[#2596be]/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                    <feature.icon className="h-6 w-6 text-[#2596be]" />
                  </div>
                  <h3 className="mb-2">{feature.title}</h3>
                  <p className="text-gray-600 text-sm">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-lg">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1758691736067-b309ee3ef7b9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMG1lZXRpbmclMjB0cmFpbmluZ3xlbnwxfHx8fDE3NjIzMjA4ODV8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Training Session"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h2 className="mb-6">Why Choose TN - Autoskill?</h2>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="h-6 w-6 text-green-600 flex-shrink-0 mt-0.5" />
                    <p className="text-gray-700">{benefit}</p>
                  </div>
                ))}
              </div>
              <div className="mt-8">
                <Link to="/contact">
                  <Button size="lg">Get Started Today</Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#2596be] text-white">
        <div className="container mx-auto px-4 text-center">
          <TrendingUp className="h-12 w-12 mx-auto mb-4" />
          <h2 className="mb-4">Ready to Start Your Logistics Career?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join thousands of successful professionals who have built their careers with TN - Autoskill
          </p>
          <Link to="/registration">
            <Button size="lg" variant="secondary">
              Register for Training
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
