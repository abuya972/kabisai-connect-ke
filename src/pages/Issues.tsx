import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { AlertCircle } from "lucide-react";

const Issues = () => {
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Issue Reported",
      description: "Thank you for bringing this to our attention. We'll investigate immediately.",
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-grow pt-24 pb-16 bg-gradient-to-b from-secondary to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                <AlertCircle className="h-8 w-8 text-primary" />
              </div>
              <h1 className="text-4xl font-bold mb-4">Report an Issue</h1>
              <p className="text-lg text-muted-foreground">
                Help us identify and address problems in your community
              </p>
            </div>

            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle>Issue Details</CardTitle>
                <CardDescription>
                  Provide as much information as possible to help us take action
                </CardDescription>
              </CardHeader>
              
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="issueType">Issue Category</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select issue type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="roads">Roads & Infrastructure</SelectItem>
                        <SelectItem value="education">Education & Schools</SelectItem>
                        <SelectItem value="health">Healthcare</SelectItem>
                        <SelectItem value="water">Water & Sanitation</SelectItem>
                        <SelectItem value="security">Security Concerns</SelectItem>
                        <SelectItem value="environment">Environmental Issues</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="ward">Ward</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select your ward" />
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
                      <Label htmlFor="location">Specific Location</Label>
                      <Input
                        id="location"
                        placeholder="e.g., Main Street near Market"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="description">Issue Description</Label>
                    <Textarea
                      id="description"
                      placeholder="Describe the issue in detail..."
                      rows={6}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="contact">Your Contact (Optional)</Label>
                    <Input
                      id="contact"
                      type="email"
                      placeholder="your.email@example.com"
                    />
                    <p className="text-xs text-muted-foreground">
                      We'll use this to update you on the progress
                    </p>
                  </div>

                  <Button type="submit" className="w-full" size="lg">
                    Submit Issue Report
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

export default Issues;
