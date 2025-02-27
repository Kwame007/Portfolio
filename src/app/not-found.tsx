import { Button } from "@/components/ui/button";
import { FolderSearch } from "lucide-react";
import Link from "next/link";

export default function NotFoundPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[50vh] text-center">
      <FolderSearch className="w-12 h-12 text-muted-foreground mb-4" />
      <h1 className="text-2xl font-semibold mb-2">Page Not Found</h1>
      <p className="text-sm text-muted-foreground mb-4">We couldn&apos;t find the page you&apos;re looking for.</p>
      <Button asChild>
        <Link href="/">Return to Home</Link>
      </Button>
    </div>
  )
}