import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function Newsletter() {
  return (
    <div className="bg-slate-100 rounded-md p-8 my-12">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-2xl font-bold mb-2">Newsletters</h2>
        <p className="text-muted-foreground mb-6">Sign up for our Newsletter!</p>
        <div className="flex flex-col sm:flex-row gap-2">
          <Input type="email" placeholder="Enter your email" className="flex-1" />
          <Button className="bg-primary hover:bg-primary/90">Subscribe</Button>
        </div>
      </div>
    </div>
  )
}

