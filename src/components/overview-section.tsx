import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "./ui/button"
import Link from "next/link"
import { Icons } from "./icons"

export default function OverviewSection({overview,link}: {overview: string, link: {type: string, href: string,icon: React.ReactNode}}) {
  return (
    <Card className="p-4 space-y-4">
      <CardHeader>
        <CardTitle className="text-xl font-bold">Overview</CardTitle>
        <CardDescription>A brief description of the project</CardDescription>
      </CardHeader>
      <CardContent>
        <p>
          {overview}
        </p>
        <Link href={link.href} referrerPolicy="no-referrer">
          <Button className="mt-4 flex gap-2">
           {link.icon} {link.type}
          </Button>
        </Link>
      </CardContent>
    </Card>
  )
}

