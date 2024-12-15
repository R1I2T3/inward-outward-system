"use client";
import React from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Input } from "@/components/Input";
import { FormProvider, useForm } from "react-hook-form";
import { LoginSchema, LoginType } from "@/lib/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form } from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Link, useNavigate } from "@tanstack/react-router";
import { toast } from "sonner";
const SignInForm = () => {
  const form = useForm<LoginType>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const [loading, setLoading] = React.useState(false);
  const navigate = useNavigate();
  const onSubmit = async (values: LoginType) => {
    setLoading(true);
    const res = await fetch(`/api/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    });
    if (res.status !== 201) {
      toast.error("Failed to Login");
    } else {
      toast.success("Logged in successfully");
      navigate({ to: "/" });
    }
    setLoading(false);
  };

  return (
    <Card className="w-[90%] md:w-[50%] lg:w-[40%] mx-auto">
      <CardHeader>
        <h1 className="text-3xl font-bold m-auto">Sign In</h1>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form
            className="w-full space-y-4"
            onSubmit={form.handleSubmit(onSubmit)}
          >
            <FormProvider {...form}>
              <Input label="Email" name="email" />
              <Input label="Password" name="password" type="password" />
              <Link
                to="/forgot_password_request"
                className="flex justify-end  text-blue-600 my-3 text-sm hover:underline hover:underline-offset-2"
              >
                Forgot Password?
              </Link>
            </FormProvider>
            <Button
              className="bg-[#d17a00] w-full text-white text-[16px]"
              disabled={loading}
            >
              {loading ? "pending..." : "Sign In"}
            </Button>
          </form>
        </Form>
      </CardContent>
      <CardFooter className="flex flex-col gap-2 w-full">
        <Link
          className="border-[#d17a00] border-2  hover:border-[#d17a00]  text-black text-[16px] rounded-lg py-1 text-center w-full"
          to="/signup"
        >
          Sign-up
        </Link>
      </CardFooter>
    </Card>
  );
};

export default SignInForm;