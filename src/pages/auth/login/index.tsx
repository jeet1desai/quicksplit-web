import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { Link } from "react-router-dom";

type LoginFormValues = {
  phone: string;
  password: string;
};

const validationSchema = Yup.object().shape({
  phone: Yup.string()
    .required("Phone number is required")
    .test("is-valid-phone", "Enter a valid phone number", (value) => {
      const phoneNumber = value?.replace(/\D/g, "");
      return phoneNumber ? phoneNumber.length >= 10 : false;
    }),
  password: Yup.string()
    .required("Password is required")
    .min(8, "Password must be at least 8 characters"),
});

const initialValues: LoginFormValues = {
  phone: "",
  password: "",
};

const Login = () => {
  const handleSubmit = async (
    values: LoginFormValues,
    { setSubmitting }: any
  ) => {
    try {
      // Handle login logic here
      console.log({
        phone: values.phone.startsWith("+") ? values.phone : `+${values.phone}`,
        password: values.password,
      });

      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500));
    } catch (error) {
      console.error("Login error:", error);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background to-muted/30 p-4">
      <Card className="w-full max-w-md glass glass-hover">
        <CardHeader className="space-y-1 text-center">
          <CardTitle className="text-2xl font-bold">Welcome back</CardTitle>
          <CardDescription>
            Enter your phone number and password to sign in to your account
          </CardDescription>
        </CardHeader>

        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting, values, setFieldValue, errors, touched }) => (
            <Form>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <div className="relative">
                    <Field name="phone">
                      {() => (
                        <PhoneInput
                          country={"in"}
                          value={values.phone}
                          onChange={(phone) => setFieldValue("phone", phone)}
                          inputClass={`!flex !h-10 !w-full !rounded-md !border !px-3 !py-2 !pl-14 !text-sm !ring-offset-background placeholder:text-muted-foreground focus-visible:!outline-none focus-visible:!ring-2 focus-visible:!ring-ring focus-visible:!ring-offset-2 disabled:!cursor-not-allowed disabled:!opacity-50`}
                          containerClass="w-full"
                          inputStyle={{
                            width: "100%",
                            height: "40px",
                            backgroundColor: "hsl(var(--background))",
                            color: "hsl(var(--foreground))",
                            border: "1px solid hsl(var(--border))",
                          }}
                          buttonStyle={{
                            border: "none",
                            padding: "0 8px",
                            background: "hsl(var(--background))",
                            color: "hsl(var(--foreground))",
                          }}
                          dropdownStyle={{
                            backgroundColor: "hsl(var(--background))",
                            border: "1px solid hsl(var(--border))",
                            borderRadius: "0.5rem",
                            color: "hsl(var(--foreground))",
                            textAlign: "left",
                          }}
                        />
                      )}
                    </Field>
                    {errors.phone && touched.phone && (
                      <p className="text-sm font-medium text-destructive mt-1">
                        {errors.phone}
                      </p>
                    )}
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="password">Password</Label>
                    <Link
                      to="/forgot-password"
                      className="text-sm font-medium text-primary hover:underline"
                    >
                      Forgot password?
                    </Link>
                  </div>
                  <Field
                    as={Input}
                    id="password"
                    name="password"
                    type="password"
                    placeholder="••••••••"
                    className="w-full"
                  />
                  {errors.password && touched.password && (
                    <p className="text-sm font-medium text-destructive mt-1">
                      {errors.password}
                    </p>
                  )}
                </div>
              </CardContent>
              <CardFooter className="flex flex-col space-y-4">
                <Button
                  type="submit"
                  className="w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Signing in..." : "Sign In"}
                </Button>
                <p className="text-sm text-muted-foreground">
                  Don't have an account?{" "}
                  <Link to="/signup" className="text-primary hover:underline">
                    Sign up
                  </Link>
                </p>
              </CardFooter>
            </Form>
          )}
        </Formik>
      </Card>
    </div>
  );
};

export default Login;
