import * as yup from "yup";

export const updateProfessionalProfile = yup.object().shape({
  userName: yup.string().required(),
  shopName: yup.string().required(),
  email: yup.string().required(),
  password: yup.string().required(),
  number: yup.number().required(),
  address: yup.string().required(),
  facebook: yup.string().notRequired(),
  instagram: yup.string().notRequired(),
  passwordConfirmation: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords must match")
    .notRequired(),
});
