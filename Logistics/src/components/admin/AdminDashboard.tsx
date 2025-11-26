import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Link } from 'react-router-dom';
import { Users, GraduationCap, Briefcase, TrendingUp, Calendar, MapPin, Award, FileText } from 'lucide-react';
import { Button } from '../ui/button';

export function AdminDashboard() {
  const stats = [
    {
      title: 'Total Students',
      value: '1,248',
      change: '+12% from last month',
      icon: Users,
      color: 'bg-[#2596be]/10 text-[#2596be]',
    },
    {
      title: 'Active Batches',
      value: '24',
      change: '8 starting this month',
      icon: GraduationCap,
      color: 'bg-green-100 text-green-600',
    },
    {
      title: 'Placements (This Year)',
      value: '892',
      change: '95% placement rate',
      icon: Briefcase,
      color: 'bg-purple-100 text-purple-600',
    },
    {
      title: 'Overseas Deployments',
      value: '456',
      change: '51% of total placements',
      icon: MapPin,
      color: 'bg-[#f59e0b]/10 text-[#f59e0b]',
    },
  ];

  const recentBatches = [
    { id: 'B-2025-001', program: 'Warehouse Operations', students: 35, startDate: '2025-01-15', status: 'Active' },
    { id: 'B-2025-002', program: 'Forklift Operations', students: 28, startDate: '2025-01-20', status: 'Active' },
    { id: 'B-2025-003', program: 'Supply Chain Mgmt', students: 42, startDate: '2025-02-01', status: 'Upcoming' },
    { id: 'B-2025-004', program: 'Logistics Coordinator', students: 30, startDate: '2025-02-05', status: 'Upcoming' },
  ];

  const recentPlacements = [
    { name: 'Rajesh Kumar', program: 'Warehouse Operations', company: 'Amazon India', location: 'Bangalore', date: '2025-01-05' },
    { name: 'Priya Sharma', program: 'Supply Chain Mgmt', company: 'DHL Express', location: 'Dubai, UAE', date: '2025-01-08' },
    { name: 'Amit Patel', program: 'Forklift Operations', company: 'FedEx', location: 'Mumbai', date: '2025-01-10' },
    { name: 'Deepa Reddy', program: 'Logistics Coordinator', company: 'Maersk Line', location: 'Singapore', date: '2025-01-12' },
  ];

  const quickActions = [
    { title: 'Batch Management', description: 'Create and manage training batches', icon: GraduationCap, link: '/admin/batches', color: 'bg-[#2596be]' },
    { title: 'Placement Tracking', description: 'Track student placements', icon: Briefcase, link: '/admin/placements', color: 'bg-green-600' },
    { title: 'Generate Reports', description: 'View analytics and reports', icon: FileText, link: '/admin/reports', color: 'bg-[#f59e0b]' },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-gradient-to-br from-[#1a7094] to-[#145773] text-white py-8">
        <div className="container mx-auto px-4">
          <h1 className="mb-2">Admin Dashboard</h1>
          <p className="text-blue-100">Welcome back! Here's an overview of your training center.</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Stats Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <Card key={index}>
              <CardContent className="pt-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <p className="text-sm text-gray-600 mb-1">{stat.title}</p>
                    <p className="text-gray-900">{stat.value}</p>
                  </div>
                  <div className={`${stat.color} p-3 rounded-lg`}>
                    <stat.icon className="h-5 w-5" />
                  </div>
                </div>
                <p className="text-sm text-gray-600">{stat.change}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Quick Actions */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {quickActions.map((action, index) => (
            <Link to={action.link} key={index}>
              <Card className="hover:shadow-lg transition-shadow cursor-pointer h-full">
                <CardContent className="pt-6">
                  <div className={`${action.color} w-12 h-12 rounded-lg flex items-center justify-center mb-4`}>
                    <action.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="mb-2">{action.title}</h3>
                  <p className="text-sm text-gray-600">{action.description}</p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        {/* Recent Activity */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* Recent Batches */}
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle>Recent Batches</CardTitle>
                  <CardDescription>Latest training batches</CardDescription>
                </div>
                <Link to="/admin/batches">
                  <Button variant="outline" size="sm">View All</Button>
                </Link>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentBatches.map((batch) => (
                  <div key={batch.id} className="flex items-center justify-between pb-4 border-b last:border-b-0 last:pb-0">
                    <div>
                      <p className="text-gray-900">{batch.id}</p>
                      <p className="text-sm text-gray-600">{batch.program}</p>
                      <div className="flex items-center gap-4 mt-1">
                        <span className="text-xs text-gray-500 flex items-center gap-1">
                          <Users className="h-3 w-3" /> {batch.students} students
                        </span>
                        <span className="text-xs text-gray-500 flex items-center gap-1">
                          <Calendar className="h-3 w-3" /> {batch.startDate}
                        </span>
                      </div>
                    </div>
                    <span className={`px-2 py-1 rounded-full text-xs ${
                      batch.status === 'Active' ? 'bg-green-100 text-green-700' : 'bg-[#2596be]/10 text-[#2596be]'
                    }`}>
                      {batch.status}
                    </span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Recent Placements */}
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle>Recent Placements</CardTitle>
                  <CardDescription>Latest student placements</CardDescription>
                </div>
                <Link to="/admin/placements">
                  <Button variant="outline" size="sm">View All</Button>
                </Link>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentPlacements.map((placement, index) => (
                  <div key={index} className="pb-4 border-b last:border-b-0 last:pb-0">
                    <div className="flex items-start justify-between mb-1">
                      <p className="text-gray-900">{placement.name}</p>
                      <span className="text-xs text-gray-500">{placement.date}</span>
                    </div>
                    <p className="text-sm text-gray-600">{placement.company}</p>
                    <div className="flex items-center gap-1 mt-1">
                      <MapPin className="h-3 w-3 text-gray-400" />
                      <span className="text-xs text-gray-500">{placement.location}</span>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
