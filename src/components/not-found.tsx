import Link from "next/link"
import { Button } from "@/components/ui/button"
import { FolderSearch } from "lucide-react"

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[50vh] text-center">
      <FolderSearch className="w-12 h-12 text-muted-foreground mb-4" />
      <h1 className="text-2xl font-semibold mb-2">Project Not Found</h1>
      <p className="text-sm text-muted-foreground mb-4">We couldn&apos;t find the project you&apos;re looking for.</p>
      <Button asChild>
        <Link href="/">Return to Home</Link>
      </Button>
    </div>
  )
}

