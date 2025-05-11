import Link from "next/link";
import { CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function PaymentSuccessPage() {
  return (
    <div className="container flex items-center justify-center min-h-[80vh] py-8">
      <Card className="w-full max-w-md mx-auto text-center">
        <CardHeader>
          <div className="flex justify-center mb-4">
            <CheckCircle className="h-16 w-16 text-green-500" />
          </div>
          <CardTitle className="text-2xl">Payment Successful!</CardTitle>
          <CardDescription>
            Thank you for your payment. Your movie rental is now available.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground mb-4">
            You can now enjoy watching your selected movie. Your receipt has
            been sent to your email.
          </p>
        </CardContent>
        <CardFooter className="flex flex-col sm:flex-row gap-3 justify-center">
          <Button asChild className="w-full sm:w-auto">
            <Link href="/dashboard/user/purchase">Go to Dashboard</Link>
          </Button>
          <Button asChild variant="outline" className="w-full sm:w-auto">
            <Link href="/">Return to Home</Link>
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
