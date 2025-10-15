import { Shield, Phone, AlertTriangle, Heart } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";

const SafetyInfo = () => {
  const emergencyContacts = [
    { name: "Emergency Hotline", number: "911", icon: Phone },
    { name: "Tourism Office", number: "(052) 820-6815", icon: Heart },
    { name: "Police Station", number: "117", icon: Shield },
    { name: "Fire Department", number: "160", icon: AlertTriangle },
  ];

  const safetyTips = [
    "Always inform someone about your travel plans",
    "Stay hydrated, especially when hiking near Mayon Volcano",
    "Follow local guidelines and respect cultural sites",
    "Keep emergency contact numbers saved in your phone",
    "Check weather conditions before visiting nature spots",
  ];

  return (
    <section id="safety" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Your Safety Matters</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Important information to ensure a safe and enjoyable visit to Albay
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Phone className="h-5 w-5 text-primary" />
                Emergency Contacts
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {emergencyContacts.map((contact) => {
                const Icon = contact.icon;
                return (
                  <div
                    key={contact.name}
                    className="flex items-center justify-between p-4 rounded-lg bg-accent/50 hover:bg-accent transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <Icon className="h-5 w-5 text-primary" />
                      <span className="font-medium">{contact.name}</span>
                    </div>
                    <a
                      href={`tel:${contact.number}`}
                      className="text-primary font-bold hover:underline"
                    >
                      {contact.number}
                    </a>
                  </div>
                );
              })}
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="h-5 w-5 text-primary" />
                Safety Guidelines
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {safetyTips.map((tip, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-sm font-bold text-primary">{index + 1}</span>
                    </div>
                    <span className="text-muted-foreground">{tip}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>

        <Alert className="bg-secondary/10 border-secondary">
          <AlertTriangle className="h-5 w-5 text-secondary" />
          <AlertDescription className="text-foreground">
            <strong>Mayon Volcano Alert:</strong> Always check the current alert level before visiting areas near the volcano. 
            Follow all safety advisories from local authorities.
          </AlertDescription>
        </Alert>
      </div>
    </section>
  );
};

export default SafetyInfo;
