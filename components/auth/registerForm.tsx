"use client";
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Image from "next/image"
import Link from "next/link"
import Github from "@/components/providers/github";
import Google from "@/components/providers/google";
import { register } from "@/lib/actions/auth"
import { useActionState ,useEffect } from 'react'
import { useRouter } from "next/navigation";
import { errorToast, successToast, warnToast } from "@/components/utils/toastNotification";

export function RegisterForm({
  className,
  ...props
}: React.ComponentProps<"div">) {

  const router = useRouter();
  const [state, action, pending] = useActionState(register, undefined)

  // Handle side effects when `state` changes
  useEffect(() => {
    if (state?.success) {
      successToast(state?.message ?? "Registration  successful");
      router.push("/login");
    } else if (state?.error) {
      errorToast(state?.error ?? "Something went wrong");
    } else if (state?.warning) {
      warnToast(state.warning ?? "Something went wrong");
    }

  }, [state, router]);


  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card className="overflow-hidden">
        <CardContent className="grid p-0 md:grid-cols-2 overflow-y-auto hide-scrollbar">
          <div   className="p-6 md:p-8">
            <div className="flex flex-col gap-6">
              <div className="flex flex-col items-center text-center gap-3">
                <h1 className="text-2xl font-bold">Welcome To Acme Inc</h1>
                <p className="text-balance text-muted-foreground">
                  Register A New account
                </p>
              </div>
             <form action={action} className="flex flex-col gap-6"> 
              <div className="grid gap-2">
                <Label htmlFor="name">Display Name</Label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="john Doe"
                  required
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="m@example.com"
                  required
                />
              </div>
              <div className="grid gap-2">
                <div className="flex items-center">
                  <Label htmlFor="password">Password</Label>
                </div>
                <Input id="password" name="password" placeholder="*********"  type="password" required />
              </div>
            
              <div className="grid gap-2">
                <div className="flex items-center">
                  <Label htmlFor="confirmPassword">Confirm Password</Label>
                </div>
                <Input id="confirmPassword" name="confirmPassword" placeholder="*********" type="password" required />
              </div>
              
              <Button disabled={pending} type="submit" className="w-full">
                Sign Up
              </Button>
              </form>
              <div className="relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t after:border-border">
                <span className="relative z-10 bg-background px-2 text-muted-foreground">
                  Or continue with
                </span>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <Github/>
                <Google/>
              </div>
              <div className="text-center text-sm">
                Already have an account?{" "}
                <Link href='/login' className="underline underline-offset-4">
                  Sign in
                </Link>
              </div>
            </div>
          </div>
          <div className="relative hidden bg-muted md:block">
            <Image
              src="/assets/images/placeHolder.jpg"
              width={600}
              height={600}
              alt="Image"
              className="absolute inset-0 h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
            />
          </div>
        </CardContent>
      </Card>
      <div className="text-balance text-center text-xs text-muted-foreground [&_a]:underline [&_a]:underline-offset-4 hover:[&_a]:text-primary">
        By clicking continue, you agree to our <a href="#">Terms of Service</a>{" "}
        and <a href="#">Privacy Policy</a>.
      </div>
    </div>
  )
}
