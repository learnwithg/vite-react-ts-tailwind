import * as yup from "yup";

export const formSchema = yup.object().shape({
  firstName: yup.string().required("Firstname is required"),
  lastName: yup.string().required("Lastname is required"),
  emailAddress: yup
    .string()
    .email("Must be a valid email address")
    .required("Email is required"),
  companyToVisit: yup
    .string()
    .required("Please select the company name you want to visit"),
  personToVisit: yup
    .string()
    .required("Please select the person name you want to visit"),
  reasonToVisit: yup.string().required("Please select a reason for your visit"),
});
