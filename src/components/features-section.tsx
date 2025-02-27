import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle } from "lucide-react"

export default function FeaturesSection({features}: {features: string[]}) {
  // const features = [
  //   "User-friendly interface with drag-and-drop functionality",
  //   "Real-time collaboration and task sharing",
  //   "Customizable project boards and task categories",
  //   "Integrated calendar and deadline reminders",
  //   "Detailed analytics and progress tracking",
  //   "Mobile responsive design for on-the-go access",
  // ]

  return (
    <Card className="p-4 space-y-4">
      <CardHeader>
        <CardTitle className="text-xl font-bold">Key Features</CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {features?.map((feature, index) => (
            <li key={index} className="flex items-center space-x-2">
              <CheckCircle className="h-5 w-5 text-green-500" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  )
}

