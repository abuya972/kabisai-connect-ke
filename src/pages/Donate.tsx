import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check } from "lucide-react";

const donationTiers = [
  {
    name: "Silver",
    range: "Ksh 100 - 5,000",
    color: "bg-gray-100 border-gray-300",
    benefits: ["Campaign updates", "Digital certificate", "Community member"],
  },
  {
    name: "Ruby",
    range: "Ksh 5,000 - 50,000",
    color: "bg-red-50 border-red-300",
    benefits: ["All Silver benefits", "Event invitations", "Monthly newsletters"],
  },
  {
    name: "Gold",
    range: "Ksh 50,000 - 200,000",
    color: "bg-yellow-50 border-yellow-400",
    benefits: ["All Ruby benefits", "VIP event access", "Campaign merchandise"],
  },
  {
    name: "Platinum",
    range: "Ksh 200,000 - 1,000,000",
    color: "bg-blue-50 border-blue-400",
    benefits: ["All Gold benefits", "Direct campaign updates", "Recognition on website"],
  },
  {
    name: "Investor",
    range: "Above Ksh 1,000,000",
    color: "bg-purple-50 border-purple-400",
    benefits: ["All Platinum benefits", "Strategic consultation", "Legacy recognition"],
  },
];

const causes = [
  "Schools & Education",
  "Support for the Homeless",
  "Infrastructure Development",
  "Churches & Faith Communities",
  "Disaster Relief",
  "Campaign Logistics",
];

const Donate = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-grow pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Support Our Campaign</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Your contribution helps us build a better Kisumu County for everyone
            </p>
          </div>

          <div className="mb-16">
            <h2 className="text-2xl font-bold mb-6 text-center">Choose Your Impact Level</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {donationTiers.map((tier) => (
                <Card key={tier.name} className={`${tier.color} border-2 hover:shadow-lg transition-shadow`}>
                  <CardHeader>
                    <CardTitle className="text-xl">{tier.name}</CardTitle>
                    <CardDescription className="font-semibold text-foreground">
                      {tier.range}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    {tier.benefits.map((benefit) => (
                      <div key={benefit} className="flex items-start gap-2">
                        <Check className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-sm">{benefit}</span>
                      </div>
                    ))}
                    <Button className="w-full mt-4" variant="default">
                      Select {tier.name}
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Select a Cause</CardTitle>
                <CardDescription>
                  Direct your donation to a specific initiative
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {causes.map((cause) => (
                    <Button
                      key={cause}
                      variant="outline"
                      className="justify-start h-auto py-4"
                    >
                      {cause}
                    </Button>
                  ))}
                </div>
              </CardContent>
            </Card>

            <div className="mt-8 text-center">
              <p className="text-sm text-muted-foreground mb-4">
                Accepted Payment Methods
              </p>
              <div className="flex justify-center gap-4 flex-wrap">
                <Badge variant="secondary" className="text-base px-4 py-2">MPESA</Badge>
                <Badge variant="secondary" className="text-base px-4 py-2">Airtel Money</Badge>
                <Badge variant="secondary" className="text-base px-4 py-2">Bank Transfer</Badge>
                <Badge variant="secondary" className="text-base px-4 py-2">PayPal</Badge>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Donate;
