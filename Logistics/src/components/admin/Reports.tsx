import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import { BarChart, Bar, LineChart, Line, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { FileText, Download, TrendingUp, Users, Briefcase, Globe } from 'lucide-react';
import { useState } from 'react';

export function Reports() {
  const [reportPeriod, setReportPeriod] = useState('2025');

  // Mock data for charts
  const monthlyEnrollments = [
    { month: 'Jan', enrollments: 145 },
    { month: 'Feb', enrollments: 168 },
    { month: 'Mar', enrollments: 152 },
    { month: 'Apr', enrollments: 178 },
    { month: 'May', enrollments: 165 },
    { month: 'Jun', enrollments: 192 },
    { month: 'Jul', enrollments: 188 },
    { month: 'Aug', enrollments: 205 },
    { month: 'Sep', enrollments: 198 },
    { month: 'Oct', enrollments: 215 },
    { month: 'Nov', enrollments: 223 },
    { month: 'Dec', enrollments: 210 },
  ];

  const placementsByProgram = [
    { program: 'Warehouse Ops', placements: 285 },
    { program: 'Forklift', placements: 198 },
    { program: 'Supply Chain', placements: 165 },
    { program: 'Logistics Coord', placements: 142 },
    { program: 'Port Ops', placements: 102 },
  ];

  const placementDistribution = [
    { name: 'India', value: 436, color: '#2596be' },
    { name: 'Overseas', value: 456, color: '#f59e0b' },
  ];

  const topEmployers = [
    { company: 'Amazon India', hires: 85 },
    { company: 'DHL Express', hires: 72 },
    { company: 'FedEx', hires: 68 },
    { company: 'Maersk Line', hires: 54 },
    { company: 'DP World', hires: 48 },
    { company: 'Blue Dart', hires: 42 },
  ];

  const revenueData = [
    { month: 'Jan', revenue: 2850000 },
    { month: 'Feb', revenue: 3120000 },
    { month: 'Mar', revenue: 2950000 },
    { month: 'Apr', revenue: 3280000 },
    { month: 'May', revenue: 3150000 },
    { month: 'Jun', revenue: 3520000 },
    { month: 'Jul', revenue: 3480000 },
    { month: 'Aug', revenue: 3750000 },
    { month: 'Sep', revenue: 3620000 },
    { month: 'Oct', revenue: 3890000 },
    { month: 'Nov', revenue: 4050000 },
    { month: 'Dec', revenue: 3980000 },
  ];

  const stats = [
    { title: 'Total Students (2025)', value: '2,239', icon: Users, color: 'text-[#2596be]' },
    { title: 'Total Placements', value: '892', icon: Briefcase, color: 'text-green-600' },
    { title: 'Placement Rate', value: '95.2%', icon: TrendingUp, color: 'text-[#1a7094]' },
    { title: 'Overseas Rate', value: '51.1%', icon: Globe, color: 'text-[#f59e0b]' },
  ];

  const handleDownloadReport = (reportType: string) => {
    console.log(`Downloading ${reportType} report...`);
    // In production, this would generate and download the actual report
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-gradient-to-br from-[#1a7094] to-[#145773] text-white py-8">
        <div className="container mx-auto px-4">
          <h1 className="mb-2">Reports & Analytics</h1>
          <p className="text-blue-100">Comprehensive insights and performance metrics</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Header Controls */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
          <div>
            <h2>Performance Dashboard</h2>
            <p className="text-gray-600">Year: {reportPeriod}</p>
          </div>
          <div className="flex gap-2">
            <Select value={reportPeriod} onValueChange={setReportPeriod}>
              <SelectTrigger className="w-32">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="2025">2025</SelectItem>
                <SelectItem value="2024">2024</SelectItem>
                <SelectItem value="2023">2023</SelectItem>
              </SelectContent>
            </Select>
            <Button variant="outline">
              <Download className="h-4 w-4 mr-2" />
              Export All
            </Button>
          </div>
        </div>

        {/* Key Stats */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <Card key={index}>
              <CardContent className="pt-6">
                <div className="flex items-center justify-between mb-2">
                  <stat.icon className={`h-8 w-8 ${stat.color}`} />
                </div>
                <p className="text-gray-900 mb-1">{stat.value}</p>
                <p className="text-sm text-gray-600">{stat.title}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Charts Row 1 */}
        <div className="grid md:grid-cols-2 gap-6 mb-6">
          {/* Monthly Enrollments */}
          <Card>
            <CardHeader>
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle>Monthly Enrollments</CardTitle>
                  <CardDescription>Student enrollment trends for 2025</CardDescription>
                </div>
                <Button variant="ghost" size="sm" onClick={() => handleDownloadReport('enrollments')}>
                  <Download className="h-4 w-4" />
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={monthlyEnrollments}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Line type="monotone" dataKey="enrollments" stroke="#2596be" strokeWidth={2} />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          {/* Placement Distribution */}
          <Card>
            <CardHeader>
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle>Placement Distribution</CardTitle>
                  <CardDescription>India vs Overseas placements</CardDescription>
                </div>
                <Button variant="ghost" size="sm" onClick={() => handleDownloadReport('distribution')}>
                  <Download className="h-4 w-4" />
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={placementDistribution}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                    outerRadius={100}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {placementDistribution.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>

        {/* Charts Row 2 */}
        <div className="grid md:grid-cols-2 gap-6 mb-6">
          {/* Placements by Program */}
          <Card>
            <CardHeader>
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle>Placements by Program</CardTitle>
                  <CardDescription>Program-wise placement statistics</CardDescription>
                </div>
                <Button variant="ghost" size="sm" onClick={() => handleDownloadReport('programs')}>
                  <Download className="h-4 w-4" />
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={placementsByProgram}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="program" angle={-15} textAnchor="end" height={80} />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="placements" fill="#10b981" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          {/* Revenue Trend */}
          <Card>
            <CardHeader>
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle>Revenue Trend</CardTitle>
                  <CardDescription>Monthly revenue in INR</CardDescription>
                </div>
                <Button variant="ghost" size="sm" onClick={() => handleDownloadReport('revenue')}>
                  <Download className="h-4 w-4" />
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={revenueData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis tickFormatter={(value) => `₹${(value / 100000).toFixed(1)}L`} />
                  <Tooltip formatter={(value: number) => `₹${(value / 100000).toFixed(2)} Lakhs`} />
                  <Legend />
                  <Bar dataKey="revenue" fill="#1a7094" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>

        {/* Top Employers */}
        <Card>
          <CardHeader>
            <div className="flex justify-between items-start">
              <div>
                <CardTitle>Top Hiring Partners</CardTitle>
                <CardDescription>Companies with most student placements in 2025</CardDescription>
              </div>
              <Button variant="ghost" size="sm" onClick={() => handleDownloadReport('employers')}>
                <Download className="h-4 w-4" />
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {topEmployers.map((employer, index) => (
                <div key={index} className="flex items-center gap-4">
                  <div className="w-8 h-8 rounded-full bg-[#2596be]/10 flex items-center justify-center flex-shrink-0">
                    <span className="text-sm text-[#2596be]">{index + 1}</span>
                  </div>
                  <div className="flex-1">
                    <p className="text-gray-900">{employer.company}</p>
                    <div className="w-full bg-gray-200 rounded-full h-2 mt-1">
                      <div
                        className="bg-[#2596be] h-2 rounded-full"
                        style={{ width: `${(employer.hires / topEmployers[0].hires) * 100}%` }}
                      />
                    </div>
                  </div>
                  <span className="text-gray-900">{employer.hires}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Quick Export Options */}
        <Card className="mt-6">
          <CardHeader>
            <CardTitle>Quick Report Downloads</CardTitle>
            <CardDescription>Generate and download detailed reports</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-4">
              <Button variant="outline" className="justify-start" onClick={() => handleDownloadReport('student-roster')}>
                <FileText className="h-4 w-4 mr-2" />
                Student Roster Report
              </Button>
              <Button variant="outline" className="justify-start" onClick={() => handleDownloadReport('batch-completion')}>
                <FileText className="h-4 w-4 mr-2" />
                Batch Completion Report
              </Button>
              <Button variant="outline" className="justify-start" onClick={() => handleDownloadReport('placement-summary')}>
                <FileText className="h-4 w-4 mr-2" />
                Placement Summary Report
              </Button>
              <Button variant="outline" className="justify-start" onClick={() => handleDownloadReport('financial')}>
                <FileText className="h-4 w-4 mr-2" />
                Financial Report
              </Button>
              <Button variant="outline" className="justify-start" onClick={() => handleDownloadReport('performance')}>
                <FileText className="h-4 w-4 mr-2" />
                Performance Analysis
              </Button>
              <Button variant="outline" className="justify-start" onClick={() => handleDownloadReport('custom')}>
                <FileText className="h-4 w-4 mr-2" />
                Custom Report Builder
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
