import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { Link, useNavigate } from "react-router-dom";
import authServices from "@/services/auth/auth.services";
import { formatPhoneNumber } from "@/lib/format";
import { HttpStatusCode } from "axios";
import { useDispatch } from "@/store";
import { setUser } from "@/store/slice/userSlice";
import { useToast } from "@/hooks/use-toast";
import { cookieStorage } from "@/lib/cookie";

type SignupFormValues = {
  name: string;
  phone: string;
  password: string;
};

const validationSchema = Yup.object().shape({
  name: Yup.string().required("Name is required").min(2, "Name must be at least 2 characters").max(50, "Name must be at most 50 characters"),
  phone: Yup.string().required("Phone number is required"),
  password: Yup.string()
    .required("Password is required")
    .min(8, "Password must be at least 8 characters")
    .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/, "Password must contain at least one uppercase letter, one lowercase letter, and one number"),
});

const initialValues: SignupFormValues = {
  name: "",
  phone: "",
  password: "",
};

const Signup = () => {
  const dispatch = useDispatch();
  const { toast } = useToast();
  const navigate = useNavigate();

  const handleSubmit = async (values: SignupFormValues, { setSubmitting }: any) => {
    try {
      const phone = formatPhoneNumber(values.phone);
      const response = await authServices.signUp({
        name: values.name,
        countryCode: phone?.countryCode?.toString(),
        phoneNumber: phone?.nationalNumber?.toString(),
        password: values.password,
      });

      if (response && response.status === HttpStatusCode.Created) {
        dispatch(
          setUser({
            name: response.data.user.name,
            countryCode: response.data.user.countryCode,
            phoneNumber: response.data.user.phoneNumber,
          })
        );

        cookieStorage.setItem("p_id", response.data.user._id);
        toast({ title: "Success", description: "Signup successful" });
        navigate("/dashboard");
      }
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
          <CardDescription>Enter your details to create a new account</CardDescription>
        </CardHeader>

        <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
          {({ isSubmitting, values, setFieldValue, errors, touched, getFieldProps }) => (
            <Form>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input id="name" type="text" placeholder="John Doe" className="w-full" {...getFieldProps("name")} />
                  {errors.name && touched.name && <p className="text-sm font-medium text-destructive mt-1">{errors.name}</p>}
                </div>

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
                    {errors.phone && touched.phone && <p className="text-sm font-medium text-destructive mt-1">{errors.phone}</p>}
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="password">Password</Label>
                  <Input {...getFieldProps("password")} id="password" name="password" type="password" placeholder="••••••••" className="w-full" />
                  {errors.password && touched.password && <p className="text-sm font-medium text-destructive mt-1">{errors.password}</p>}
                </div>
              </CardContent>
              <CardFooter className="flex flex-col space-y-4">
                <Button type="submit" className="w-full" disabled={isSubmitting}>
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
