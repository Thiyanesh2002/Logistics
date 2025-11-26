import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Textarea } from '../ui/textarea';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { toast } from 'sonner@2.0.3';
import { useState } from 'react';

export function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('Message sent successfully! We will get back to you soon.');
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Office Address',
      content: '123 Training Center Road, Anna Nagar, Chennai, Tamil Nadu 600040, India',
    },
    {
      icon: Phone,
      title: 'Phone',
      content: '+91 12345 67890\n+91 98765 43210',
    },
    {
      icon: Mail,
      title: 'Email',
      content: 'info@tnautoskill.com\nadmissions@tnautoskill.com',
    },
    {
      icon: Clock,
      title: 'Office Hours',
      content: 'Monday - Saturday: 9:00 AM - 6:00 PM\nSunday: Closed',
    },
  ];

  return (
    <div>
      {/* Header Section */}
      <section className="bg-gradient-to-br from-[#1a7094] to-[#145773] text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="mb-4">Contact Us</h1>
            <p className="text-xl text-blue-100">
              Have questions about our programs? Get in touch with our team and we'll be happy to help you.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {contactInfo.map((info, index) => (
              <Card key={index}>
                <CardContent className="pt-6">
                  <div className="bg-[#2596be]/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                    <info.icon className="h-6 w-6 text-[#2596be]" />
                  </div>
                  <h3 className="mb-2">{info.title}</h3>
                  <p className="text-sm text-gray-600 whitespace-pre-line">{info.content}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Contact Form and Map */}
          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Send us a Message</CardTitle>
                <CardDescription>
                  Fill out the form below and we'll get back to you as soon as possible.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name *</Label>
                    <Input
                      id="name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Your name"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="your.email@example.com"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone</Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+91 12345 67890"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject *</Label>
                    <Input
                      id="subject"
                      required
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="What is this regarding?"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Your message..."
                      rows={5}
                    />
                  </div>
                  <Button type="submit" className="w-full">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>

            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Visit Our Office</CardTitle>
                  <CardDescription>
                    Come visit us at our training center to see our facilities and meet our team.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="bg-gray-200 h-64 rounded-lg flex items-center justify-center">
                    <div className="text-center text-gray-600">
                      <MapPin className="h-12 w-12 mx-auto mb-2" />
                      <p>Map View</p>
                      <p className="text-sm">Anna Nagar, Chennai</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-[#2596be]/5 border-[#2596be]/20">
                <CardHeader>
                  <CardTitle>Need Immediate Assistance?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-700 mb-4">
                    For urgent inquiries or admission support, please call our helpline:
                  </p>
                  <a href="tel:+911234567890" className="text-[#2596be] hover:text-[#1a7094]">
                    +91 12345 67890
                  </a>
                  <p className="text-sm text-gray-600 mt-2">Available Monday - Saturday, 9 AM - 6 PM</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-600 mb-8">
              Check out our most commonly asked questions. If you don't find what you're looking for, feel free to reach out!
            </p>
            <div className="space-y-4 text-left">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">What are the eligibility criteria for enrollment?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Most programs require a minimum of 10th standard education. Specific requirements vary by program. Contact us for detailed eligibility criteria.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Do you provide job placement assistance?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Yes! We have a dedicated placement cell that assists students with job placements both in India and overseas markets. We have partnerships with leading logistics companies.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Are the certifications internationally recognized?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Yes, our certifications are recognized by industry bodies and accepted by employers globally, especially in logistics and supply chain sectors.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
