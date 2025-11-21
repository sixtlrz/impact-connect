import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import { ArrowLeft, TrendingUp } from "lucide-react";
import { Header } from "@/components/Header";

export default function Simulate() {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    investmentAmount: "",
    investmentYears: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const { error } = await supabase
        .from("investment_submissions")
        .insert({
          first_name: formData.firstName,
          last_name: formData.lastName,
          email: formData.email,
          investment_amount: parseFloat(formData.investmentAmount),
          investment_years: parseInt(formData.investmentYears),
        });

      if (error) throw error;

      toast({
        title: "Success!",
        description: "Your investment simulation has been submitted.",
      });

      navigate("/dashboard");
    } catch (error) {
      console.error("Error submitting form:", error);
      toast({
        title: "Error",
        description: "Failed to submit your simulation. Please try again.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary/20">
      <Header />
      
      <div className="container mx-auto px-6 pt-32 pb-16">
        <Button
          variant="ghost"
          onClick={() => navigate("/")}
          className="mb-8"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to home
        </Button>

        <div className="max-w-2xl mx-auto">
          <Card className="shadow-elegant border-border">
            <CardHeader className="text-center space-y-4 pb-8">
              <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                <TrendingUp className="w-8 h-8 text-primary" />
              </div>
              <CardTitle className="text-3xl font-bold">
                Simulate Your Investment
              </CardTitle>
              <CardDescription className="text-lg">
                Tell us about your investment goals and we'll help you get started
              </CardDescription>
            </CardHeader>

            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name</Label>
                    <Input
                      id="firstName"
                      name="firstName"
                      required
                      value={formData.firstName}
                      onChange={handleChange}
                      placeholder="John"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input
                      id="lastName"
                      name="lastName"
                      required
                      value={formData.lastName}
                      onChange={handleChange}
                      placeholder="Doe"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john.doe@example.com"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="investmentAmount">Investment Amount (€)</Label>
                  <Input
                    id="investmentAmount"
                    name="investmentAmount"
                    type="number"
                    min="1000"
                    step="1000"
                    required
                    value={formData.investmentAmount}
                    onChange={handleChange}
                    placeholder="25000"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="investmentYears">Investment Period (Years)</Label>
                  <Input
                    id="investmentYears"
                    name="investmentYears"
                    type="number"
                    min="1"
                    max="30"
                    required
                    value={formData.investmentYears}
                    onChange={handleChange}
                    placeholder="5"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-primary hover:bg-primary/90 text-lg py-6"
                  disabled={loading}
                >
                  {loading ? "Submitting..." : "Register"}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}