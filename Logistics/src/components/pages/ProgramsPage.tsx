import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { Link } from 'react-router-dom';
import { Clock, MapPin, Award, CheckCircle2 } from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';

export function ProgramsPage() {
  const programs = [
    {
      id: 1,
      title: 'Warehouse Operations & Management',
      description: 'Comprehensive training in warehouse operations, inventory management, and safety protocols.',
      duration: '3 months',
      type: 'India & Overseas',
      certification: 'Certified Warehouse Professional',
      image: 'https://images.unsplash.com/photo-1739204618173-3e89def7140f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsb2dpc3RpY3MlMjB3YXJlaG91c2UlMjB0cmFpbmluZ3xlbnwxfHx8fDE3NjIzMjA2MDB8MA&ixlib=rb-4.1.0&q=80&w=1080',
      features: [
        'Inventory Management Systems',
        'Material Handling Equipment',
        'Safety and Compliance',
        'Warehouse Layout Optimization',
      ],
    },
    {
      id: 2,
      title: 'Forklift & Material Handling',
      description: 'Hands-on training for operating forklifts and various material handling equipment.',
      duration: '1 month',
      type: 'India & Overseas',
      certification: 'Licensed Forklift Operator',
      image: 'https://images.unsplash.com/photo-1596961042915-4b760fc5ec15?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmb3JrbGlmdCUyMG9wZXJhdG9yJTIwdHJhaW5pbmd8ZW58MXx8fHwxNzYyMzIwNjAxfDA&ixlib=rb-4.1.0&q=80&w=1080',
      features: [
        'Forklift Operation Techniques',
        'Load Handling & Safety',
        'Equipment Maintenance',
        'OSHA Compliance Training',
      ],
    },
    {
      id: 3,
      title: 'Supply Chain Management',
      description: 'Advanced program covering end-to-end supply chain processes and optimization.',
      duration: '6 months',
      type: 'India & Overseas',
      certification: 'Supply Chain Professional',
      image: 'https://images.unsplash.com/photo-1712704341675-d75096a6666c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzaGlwcGluZyUyMGNvbnRhaW5lcnMlMjBwb3J0fGVufDF8fHx8MTc2MjI2MDAwNHww&ixlib=rb-4.1.0&q=80&w=1080',
      features: [
        'Procurement & Sourcing',
        'Logistics Planning',
        'Transportation Management',
        'Supply Chain Analytics',
      ],
    },
    {
      id: 4,
      title: 'Logistics Coordinator',
      description: 'Training for managing logistics operations, documentation, and coordination.',
      duration: '2 months',
      type: 'India & Overseas',
      certification: 'Logistics Coordinator Certificate',
      image: 'https://images.unsplash.com/photo-1758691736067-b309ee3ef7b9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMG1lZXRpbmclMjB0cmFpbmluZ3xlbnwxfHx8fDE3NjIzMjA4ODV8MA&ixlib=rb-4.1.0&q=80&w=1080',
      features: [
        'Freight Documentation',
        'Customer Service Excellence',
        'Vendor Coordination',
        'Shipment Tracking Systems',
      ],
    },
    {
      id: 5,
      title: 'Port & Container Operations',
      description: 'Specialized training for port operations and container handling.',
      duration: '4 months',
      type: 'India & Overseas',
      certification: 'Port Operations Specialist',
      image: 'https://images.unsplash.com/photo-1712704341675-d75096a6666c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzaGlwcGluZyUyMGNvbnRhaW5lcnMlMjBwb3J0fGVufDF8fHx8MTc2MjI2MDAwNHww&ixlib=rb-4.1.0&q=80&w=1080',
      features: [
        'Container Handling Equipment',
        'Port Safety Protocols',
        'Cargo Documentation',
        'Terminal Operations',
      ],
    },
    {
      id: 6,
      title: 'International Shipping & Customs',
      description: 'Learn international trade procedures, shipping documentation, and customs clearance.',
      duration: '3 months',
      type: 'Overseas Focus',
      certification: 'International Trade Certificate',
      image: 'https://images.unsplash.com/photo-1712704341675-d75096a6666c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzaGlwcGluZyUyMGNvbnRhaW5lcnMlMjBwb3J0fGVufDF8fHx8MTc2MjI2MDAwNHww&ixlib=rb-4.1.0&q=80&w=1080',
      features: [
        'Import/Export Documentation',
        'Customs Regulations',
        'Incoterms & Trade Terms',
        'International Payment Methods',
      ],
    },
  ];

  return (
    <div>
      {/* Header Section */}
      <section className="bg-gradient-to-br from-[#1a7094] to-[#145773] text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="mb-4">Our Training Programs</h1>
            <p className="text-xl text-blue-100">
              Industry-focused training programs designed to prepare you for successful careers in logistics, both in India and overseas markets.
            </p>
          </div>
        </div>
      </section>

      {/* Programs Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {programs.map((program) => (
              <Card key={program.id} className="flex flex-col">
                <div className="relative h-48 overflow-hidden">
                  <ImageWithFallback
                    src={program.image}
                    alt={program.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-[#f59e0b]">{program.type}</Badge>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle>{program.title}</CardTitle>
                  <CardDescription>{program.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-1">
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <Clock className="h-4 w-4" />
                      <span>Duration: {program.duration}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <Award className="h-4 w-4" />
                      <span>{program.certification}</span>
                    </div>
                  </div>
                  <div className="space-y-2">
                    {program.features.map((feature, index) => (
                      <div key={index} className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-green-600 flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
                <CardFooter>
                  <Link to="/registration" className="w-full">
                    <Button className="w-full">Enroll Now</Button>
                  </Link>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-4">Not Sure Which Program is Right for You?</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Our career counselors are here to help you choose the perfect program based on your goals and experience.
          </p>
          <Link to="/contact">
            <Button size="lg">Contact Us for Guidance</Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
