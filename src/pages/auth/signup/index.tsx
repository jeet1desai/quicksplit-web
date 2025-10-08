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

type SignupFormValues = {
  name: string;
  phone: string;
  password: string;
  confirmPassword: string;
};

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .required("Name is required")
    .min(2, "Name must be at least 2 characters")
    .max(50, "Name must be at most 50 characters"),
  phone: Yup.string()
    .required("Phone number is required")
    .test("is-valid-phone", "Enter a valid phone number", (value) => {
      const phoneNumber = value?.replace(/\D/g, "");
      return phoneNumber ? phoneNumber.length >= 10 : false;
    }),
  password: Yup.string()
    .required("Password is required")
    .min(8, "Password must be at least 8 characters")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/,
      "Password must contain at least one uppercase letter, one lowercase letter, and one number"
    ),
  confirmPassword: Yup.string()
    .required("Please confirm your password")
    .oneOf([Yup.ref("password")], "Passwords must match"),
});

const initialValues: SignupFormValues = {
  name: "",
  phone: "",
  password: "",
  confirmPassword: "",
};

const Signup = () => {
  const handleSubmit = async (values: SignupFormValues, { setSubmitting }: any) => {
    try {
      // Handle signup logic here
      console.log({
        name: values.name,
        phone: values.phone.startsWith("+") ? values.phone : `+${values.phone}`,
        password: values.password,
      });

      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500));
    } catch (error) {
      console.error("Signup error:", error);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background to-muted/30 p-4">
      <Card className="w-full max-w-md glass glass-hover">
        <CardHeader className="space-y-1 text-center">
          <CardTitle className="text-2xl font-bold">Create an account</CardTitle>
          <CardDescription>
            Enter your details to create a new account
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
                {/* Name Field */}
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Field
                    as={Input}
                    id="name"
                    name="name"
                    type="text"
                    placeholder="John Doe"
                    className="w-full"
                  />
                  {errors.name && touched.name && (
                    <p className="text-sm font-medium text-destructive mt-1">
                      {errors.name}
                    </p>
                  )}
                </div>

                {/* Phone Field */}
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <div className="relative">
                    <Field name="phone">
                      {() => (
                        <PhoneInput
                          country={"in"}
                          value={values.phone}
                          onChange={(phone) => setFieldValue("phone", phone)}
                          inputClass="!flex !h-10 !w-full !rounded-md !border !px-3 !py-2 !pl-14 !text-sm !ring-offset-background placeholder:text-muted-foreground focus-visible:!outline-none focus-visible:!ring-2 focus-visible:!ring-ring focus-visible:!ring-offset-2 disabled:!cursor-not-allowed disabled:!opacity-50"
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

                {/* Password Field */}
                <div className="space-y-2">
                  <Label htmlFor="password">Password</Label>
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
                  {isSubmitting ? "Creating account..." : "Sign Up"}
                </Button>
                <p className="text-sm text-muted-foreground">
                  Already have an account?{" "}
                  <Link to="/login" className="text-primary hover:underline">
                    Sign in
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

export default Signup;
