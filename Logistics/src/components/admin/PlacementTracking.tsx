import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '../ui/dialog';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../ui/table';
import { Badge } from '../ui/badge';
import { Briefcase, MapPin, Plus, Search, TrendingUp, Globe, Building } from 'lucide-react';
import { toast } from 'sonner@2.0.3';

export function PlacementTracking() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterLocation, setFilterLocation] = useState('all');
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const [placements, setPlacements] = useState([
    { id: 1, studentName: 'Rajesh Kumar', batchId: 'B-2024-038', program: 'Warehouse Operations', company: 'Amazon India', position: 'Warehouse Associate', location: 'Bangalore, India', salary: '₹3.5 LPA', placementDate: '2025-01-05', type: 'India' },
    { id: 2, studentName: 'Priya Sharma', batchId: 'B-2024-040', program: 'Supply Chain Management', company: 'DHL Express', position: 'Supply Chain Analyst', location: 'Dubai, UAE', salary: '$45,000', placementDate: '2025-01-08', type: 'Overseas' },
    { id: 3, studentName: 'Amit Patel', batchId: 'B-2024-039', program: 'Forklift Operations', company: 'FedEx', position: 'Forklift Operator', location: 'Mumbai, India', salary: '₹4.2 LPA', placementDate: '2025-01-10', type: 'India' },
    { id: 4, studentName: 'Deepa Reddy', batchId: 'B-2024-041', program: 'Logistics Coordinator', company: 'Maersk Line', position: 'Logistics Coordinator', location: 'Singapore', salary: 'SGD 48,000', placementDate: '2025-01-12', type: 'Overseas' },
    { id: 5, studentName: 'Suresh Menon', batchId: 'B-2024-037', program: 'Port Operations', company: 'DP World', position: 'Port Operations Manager', location: 'Abu Dhabi, UAE', salary: '$55,000', placementDate: '2025-01-15', type: 'Overseas' },
    { id: 6, studentName: 'Anita Desai', batchId: 'B-2024-042', program: 'International Shipping', company: 'Blue Dart', position: 'Shipping Executive', location: 'Delhi, India', salary: '₹5.0 LPA', placementDate: '2025-01-18', type: 'India' },
    { id: 7, studentName: 'Vikram Singh', batchId: 'B-2024-036', program: 'Warehouse Operations', company: 'Flipkart', position: 'Operations Executive', location: 'Hyderabad, India', salary: '₹3.8 LPA', placementDate: '2025-01-20', type: 'India' },
    { id: 8, studentName: 'Meera Krishnan', batchId: 'B-2024-043', program: 'Supply Chain Management', company: 'Aramex', position: 'Supply Chain Manager', location: 'Kuwait City, Kuwait', salary: 'KWD 12,000', placementDate: '2025-01-22', type: 'Overseas' },
  ]);

  const [newPlacement, setNewPlacement] = useState({
    studentName: '',
    batchId: '',
    program: '',
    company: '',
    position: '',
    location: '',
    salary: '',
    placementDate: '',
    type: 'India',
  });

  const handleAddPlacement = () => {
    const placement = {
      id: placements.length + 1,
      ...newPlacement,
    };
    setPlacements([placement, ...placements]);
    toast.success('Placement record added successfully!');
    setIsDialogOpen(false);
    setNewPlacement({
      studentName: '',
      batchId: '',
      program: '',
      company: '',
      position: '',
      location: '',
      salary: '',
      placementDate: '',
      type: 'India',
    });
  };

  const filteredPlacements = placements.filter(placement => {
    const matchesSearch = placement.studentName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         placement.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         placement.position.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesLocation = filterLocation === 'all' || placement.type.toLowerCase() === filterLocation.toLowerCase();
    return matchesSearch && matchesLocation;
  });

  const indiaCount = placements.filter(p => p.type === 'India').length;
  const overseasCount = placements.filter(p => p.type === 'Overseas').length;
  const placementRate = ((placements.length / 940) * 100).toFixed(1); // Assuming 940 total students

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-gradient-to-br from-green-700 to-green-900 text-white py-8">
        <div className="container mx-auto px-4">
          <h1 className="mb-2">Placement Tracking</h1>
          <p className="text-green-100">Monitor and manage student placements</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Stats */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Total Placements</p>
                  <p className="text-gray-900">{placements.length}</p>
                </div>
                <Briefcase className="h-8 w-8 text-green-600" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">India Placements</p>
                  <p className="text-gray-900">{indiaCount}</p>
                </div>
                <MapPin className="h-8 w-8 text-[#2596be]" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Overseas Placements</p>
                  <p className="text-gray-900">{overseasCount}</p>
                </div>
                <Globe className="h-8 w-8 text-[#1a7094]" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Placement Rate</p>
                  <p className="text-gray-900">{placementRate}%</p>
                </div>
                <TrendingUp className="h-8 w-8 text-[#f59e0b]" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Placement List */}
        <Card>
          <CardHeader>
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <CardTitle>Placement Records</CardTitle>
                <CardDescription>Track all student placements and employment details</CardDescription>
              </div>
              <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                <DialogTrigger asChild>
                  <Button>
                    <Plus className="h-4 w-4 mr-2" />
                    Add Placement
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-2xl">
                  <DialogHeader>
                    <DialogTitle>Add New Placement</DialogTitle>
                    <DialogDescription>Record a new student placement</DialogDescription>
                  </DialogHeader>
                  <div className="space-y-4 mt-4 max-h-[60vh] overflow-y-auto">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="studentName">Student Name</Label>
                        <Input
                          id="studentName"
                          value={newPlacement.studentName}
                          onChange={(e) => setNewPlacement({...newPlacement, studentName: e.target.value})}
                          placeholder="Enter student name"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="batchId">Batch ID</Label>
                        <Input
                          id="batchId"
                          value={newPlacement.batchId}
                          onChange={(e) => setNewPlacement({...newPlacement, batchId: e.target.value})}
                          placeholder="e.g., B-2024-001"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="program">Program</Label>
                      <Input
                        id="program"
                        value={newPlacement.program}
                        onChange={(e) => setNewPlacement({...newPlacement, program: e.target.value})}
                        placeholder="Program name"
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="company">Company</Label>
                        <Input
                          id="company"
                          value={newPlacement.company}
                          onChange={(e) => setNewPlacement({...newPlacement, company: e.target.value})}
                          placeholder="Company name"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="position">Position</Label>
                        <Input
                          id="position"
                          value={newPlacement.position}
                          onChange={(e) => setNewPlacement({...newPlacement, position: e.target.value})}
                          placeholder="Job position"
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="location">Location</Label>
                        <Input
                          id="location"
                          value={newPlacement.location}
                          onChange={(e) => setNewPlacement({...newPlacement, location: e.target.value})}
                          placeholder="City, Country"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="type">Deployment Type</Label>
                        <Select value={newPlacement.type} onValueChange={(value) => setNewPlacement({...newPlacement, type: value})}>
                          <SelectTrigger id="type">
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="India">India</SelectItem>
                            <SelectItem value="Overseas">Overseas</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="salary">Salary Package</Label>
                        <Input
                          id="salary"
                          value={newPlacement.salary}
                          onChange={(e) => setNewPlacement({...newPlacement, salary: e.target.value})}
                          placeholder="e.g., ₹3.5 LPA or $45,000"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="placementDate">Placement Date</Label>
                        <Input
                          id="placementDate"
                          type="date"
                          value={newPlacement.placementDate}
                          onChange={(e) => setNewPlacement({...newPlacement, placementDate: e.target.value})}
                        />
                      </div>
                    </div>
                    <Button onClick={handleAddPlacement} className="w-full">Add Placement</Button>
                  </div>
                </DialogContent>
              </Dialog>
            </div>
          </CardHeader>
          <CardContent>
            {/* Filters */}
            <div className="flex flex-col md:flex-row gap-4 mb-6">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <Input
                  placeholder="Search placements..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-9"
                />
              </div>
              <Select value={filterLocation} onValueChange={setFilterLocation}>
                <SelectTrigger className="w-full md:w-48">
                  <SelectValue placeholder="Filter by location" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Locations</SelectItem>
                  <SelectItem value="india">India</SelectItem>
                  <SelectItem value="overseas">Overseas</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Table */}
            <div className="rounded-md border">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Student Name</TableHead>
                    <TableHead>Batch</TableHead>
                    <TableHead>Company</TableHead>
                    <TableHead>Position</TableHead>
                    <TableHead>Location</TableHead>
                    <TableHead>Salary</TableHead>
                    <TableHead>Date</TableHead>
                    <TableHead>Type</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredPlacements.map((placement) => (
                    <TableRow key={placement.id}>
                      <TableCell>{placement.studentName}</TableCell>
                      <TableCell className="text-sm text-gray-600">{placement.batchId}</TableCell>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          <Building className="h-4 w-4 text-gray-400" />
                          {placement.company}
                        </div>
                      </TableCell>
                      <TableCell>{placement.position}</TableCell>
                      <TableCell>
                        <div className="flex items-center gap-1">
                          <MapPin className="h-3 w-3 text-gray-400" />
                          <span className="text-sm">{placement.location}</span>
                        </div>
                      </TableCell>
                      <TableCell>{placement.salary}</TableCell>
                      <TableCell className="text-sm text-gray-600">{placement.placementDate}</TableCell>
                      <TableCell>
                        <Badge variant={placement.type === 'Overseas' ? 'default' : 'secondary'}>
                          {placement.type}
                        </Badge>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
