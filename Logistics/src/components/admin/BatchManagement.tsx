import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '../ui/dialog';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../ui/table';
import { Badge } from '../ui/badge';
import { Users, Calendar, Plus, Edit, Trash2, Search } from 'lucide-react';
import { toast } from 'sonner@2.0.3';

export function BatchManagement() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const [batches, setBatches] = useState([
    { id: 'B-2025-001', program: 'Warehouse Operations & Management', instructor: 'Mr. Rajesh Kumar', students: 35, capacity: 40, startDate: '2025-01-15', endDate: '2025-04-15', status: 'Active' },
    { id: 'B-2025-002', program: 'Forklift & Material Handling', instructor: 'Ms. Priya Sharma', students: 28, capacity: 30, startDate: '2025-01-20', endDate: '2025-02-20', status: 'Active' },
    { id: 'B-2025-003', program: 'Supply Chain Management', instructor: 'Mr. Amit Patel', students: 42, capacity: 45, startDate: '2025-02-01', endDate: '2025-07-31', status: 'Upcoming' },
    { id: 'B-2025-004', program: 'Logistics Coordinator', instructor: 'Ms. Deepa Reddy', students: 30, capacity: 35, startDate: '2025-02-05', endDate: '2025-04-05', status: 'Upcoming' },
    { id: 'B-2024-045', program: 'Port & Container Operations', instructor: 'Mr. Suresh Menon', students: 38, capacity: 40, startDate: '2024-10-01', endDate: '2025-01-31', status: 'Active' },
    { id: 'B-2024-042', program: 'International Shipping & Customs', instructor: 'Ms. Anita Desai', students: 25, capacity: 30, startDate: '2024-11-15', endDate: '2025-02-15', status: 'Active' },
  ]);

  const [newBatch, setNewBatch] = useState({
    program: '',
    instructor: '',
    capacity: '',
    startDate: '',
    endDate: '',
  });

  const handleCreateBatch = () => {
    const batchId = `B-2025-${String(batches.length + 1).padStart(3, '0')}`;
    const batch = {
      id: batchId,
      program: newBatch.program,
      instructor: newBatch.instructor,
      students: 0,
      capacity: parseInt(newBatch.capacity),
      startDate: newBatch.startDate,
      endDate: newBatch.endDate,
      status: 'Upcoming',
    };
    setBatches([batch, ...batches]);
    toast.success(`Batch ${batchId} created successfully!`);
    setIsDialogOpen(false);
    setNewBatch({ program: '', instructor: '', capacity: '', startDate: '', endDate: '' });
  };

  const handleDeleteBatch = (id: string) => {
    setBatches(batches.filter(b => b.id !== id));
    toast.success('Batch deleted successfully!');
  };

  const filteredBatches = batches.filter(batch => {
    const matchesSearch = batch.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         batch.program.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         batch.instructor.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = filterStatus === 'all' || batch.status.toLowerCase() === filterStatus.toLowerCase();
    return matchesSearch && matchesStatus;
  });

  const programs = [
    'Warehouse Operations & Management',
    'Forklift & Material Handling',
    'Supply Chain Management',
    'Logistics Coordinator',
    'Port & Container Operations',
    'International Shipping & Customs',
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-gradient-to-br from-[#2596be] to-[#1a7094] text-white py-8">
        <div className="container mx-auto px-4">
          <h1 className="mb-2">Batch Management</h1>
          <p className="text-blue-100">Create and manage training batches</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Stats */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Total Batches</p>
                  <p className="text-gray-900">{batches.length}</p>
                </div>
                <Users className="h-8 w-8 text-[#2596be]" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Active Batches</p>
                  <p className="text-gray-900">{batches.filter(b => b.status === 'Active').length}</p>
                </div>
                <Calendar className="h-8 w-8 text-green-600" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Total Students</p>
                  <p className="text-gray-900">{batches.reduce((sum, b) => sum + b.students, 0)}</p>
                </div>
                <Users className="h-8 w-8 text-purple-600" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Upcoming Batches</p>
                  <p className="text-gray-900">{batches.filter(b => b.status === 'Upcoming').length}</p>
                </div>
                <Calendar className="h-8 w-8 text-[#f59e0b]" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Batch List */}
        <Card>
          <CardHeader>
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <CardTitle>Training Batches</CardTitle>
                <CardDescription>Manage all training batches and their details</CardDescription>
              </div>
              <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                <DialogTrigger asChild>
                  <Button>
                    <Plus className="h-4 w-4 mr-2" />
                    Create Batch
                  </Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Create New Batch</DialogTitle>
                    <DialogDescription>Add a new training batch to the system</DialogDescription>
                  </DialogHeader>
                  <div className="space-y-4 mt-4">
                    <div className="space-y-2">
                      <Label htmlFor="program">Program</Label>
                      <Select value={newBatch.program} onValueChange={(value) => setNewBatch({...newBatch, program: value})}>
                        <SelectTrigger id="program">
                          <SelectValue placeholder="Select program" />
                        </SelectTrigger>
                        <SelectContent>
                          {programs.map(program => (
                            <SelectItem key={program} value={program}>{program}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="instructor">Instructor Name</Label>
                      <Input
                        id="instructor"
                        value={newBatch.instructor}
                        onChange={(e) => setNewBatch({...newBatch, instructor: e.target.value})}
                        placeholder="Enter instructor name"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="capacity">Batch Capacity</Label>
                      <Input
                        id="capacity"
                        type="number"
                        value={newBatch.capacity}
                        onChange={(e) => setNewBatch({...newBatch, capacity: e.target.value})}
                        placeholder="Enter capacity"
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="startDate">Start Date</Label>
                        <Input
                          id="startDate"
                          type="date"
                          value={newBatch.startDate}
                          onChange={(e) => setNewBatch({...newBatch, startDate: e.target.value})}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="endDate">End Date</Label>
                        <Input
                          id="endDate"
                          type="date"
                          value={newBatch.endDate}
                          onChange={(e) => setNewBatch({...newBatch, endDate: e.target.value})}
                        />
                      </div>
                    </div>
                    <Button onClick={handleCreateBatch} className="w-full">Create Batch</Button>
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
                  placeholder="Search batches..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-9"
                />
              </div>
              <Select value={filterStatus} onValueChange={setFilterStatus}>
                <SelectTrigger className="w-full md:w-48">
                  <SelectValue placeholder="Filter by status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Status</SelectItem>
                  <SelectItem value="active">Active</SelectItem>
                  <SelectItem value="upcoming">Upcoming</SelectItem>
                  <SelectItem value="completed">Completed</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Table */}
            <div className="rounded-md border">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Batch ID</TableHead>
                    <TableHead>Program</TableHead>
                    <TableHead>Instructor</TableHead>
                    <TableHead>Students</TableHead>
                    <TableHead>Duration</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredBatches.map((batch) => (
                    <TableRow key={batch.id}>
                      <TableCell>{batch.id}</TableCell>
                      <TableCell>{batch.program}</TableCell>
                      <TableCell>{batch.instructor}</TableCell>
                      <TableCell>{batch.students}/{batch.capacity}</TableCell>
                      <TableCell className="text-sm">
                        {batch.startDate} to {batch.endDate}
                      </TableCell>
                      <TableCell>
                        <Badge variant={batch.status === 'Active' ? 'default' : 'secondary'}>
                          {batch.status}
                        </Badge>
                      </TableCell>
                      <TableCell className="text-right">
                        <div className="flex justify-end gap-2">
                          <Button variant="ghost" size="sm">
                            <Edit className="h-4 w-4" />
                          </Button>
                          <Button 
                            variant="ghost" 
                            size="sm"
                            onClick={() => handleDeleteBatch(batch.id)}
                          >
                            <Trash2 className="h-4 w-4 text-red-600" />
                          </Button>
                        </div>
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
