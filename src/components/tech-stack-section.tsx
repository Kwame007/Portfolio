import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function TechStackSection({stack}: {stack: string[]}) {
  const techStack = [
    "React",
    "Next.js",
    "TypeScript",
    "Tailwind CSS",
    "Node.js",
    "Express",
    "MongoDB",
    "Redis",
    "Docker",
    "AWS",
    "GitHub Actions",
  ]

  return (
    <Card className="p-4 space-y-4">
      <CardHeader>
        <CardTitle className="text-xl font-bold">Tech Stack</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap gap-2">
          {stack.map((tech, index) => (
            <Badge key={index} variant="default">
              {tech}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

