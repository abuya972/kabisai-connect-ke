import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";

const Volunteer = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    idNumber: "",
    voterCard: "",
    ward: "",
    pollingStation: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Registration Submitted!",
      description: "Thank you for joining Team K'abisai. We'll contact you soon.",
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-grow pt-24 pb-16 bg-gradient-to-b from-secondary to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <Card className="shadow-lg">
              <CardHeader className="text-center">
                <CardTitle className="text-3xl font-bold">Join Our Movement</CardTitle>
                <CardDescription>
                  Register as a volunteer and be part of the change Kisumu needs
                </CardDescription>
              </CardHeader>
              
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="fullName">Full Name</Label>
                    <Input
                      id="fullName"
                      placeholder="Enter your full name"
                      required
                      value={formData.fullName}
                      onChange={(e) => setFormData({...formData, fullName: e.target.value})}
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="your.email@afromail.com"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="+254 700 000 000"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="idNumber">ID Number</Label>
                      <Input
                        id="idNumber"
                        placeholder="Enter your ID number"
                        required
                        value={formData.idNumber}
                        onChange={(e) => setFormData({...formData, idNumber: e.target.value})}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="voterCard">Voter Card Number</Label>
                      <Input
                        id="voterCard"
                        placeholder="Enter voter card number"
                        required
                        value={formData.voterCard}
                        onChange={(e) => setFormData({...formData, voterCard: e.target.value})}
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="ward">Select Your Ward</Label>
                    <Select onValueChange={(value) => setFormData({...formData, ward: value})}>
                      <SelectTrigger>
                        <SelectValue placeholder="Choose your ward" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="kisumu-central">Kisumu Central</SelectItem>
                        <SelectItem value="kisumu-east">Kisumu East</SelectItem>
                        <SelectItem value="kisumu-west">Kisumu West</SelectItem>
                        <SelectItem value="seme">Seme</SelectItem>
                        <SelectItem value="nyando">Nyando</SelectItem>
                        <SelectItem value="muhoroni">Muhoroni</SelectItem>
                        <SelectItem value="nyakach">Nyakach</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="pollingStation">Polling Station</Label>
                    <Input
                      id="pollingStation"
                      placeholder="Enter your polling station"
                      required
                      value={formData.pollingStation}
                      onChange={(e) => setFormData({...formData, pollingStation: e.target.value})}
                    />
                  </div>

                  <Button type="submit" className="w-full" size="lg">
                    Register as Volunteer
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Volunteer;
