import { Field } from "formik";
import { updateProfessionalProfile } from "../../../utils/validations";
import AppForm from "../../AppForm/AppForm";
import FieldError from "../../AppForm/FieldError";

export default function ProfessionalAccount() {
  const handleSubmit = ({ formValues }) => {
    console.log("handle submit: ", formValues);
  };

  return (
    <div id="page-content-wrapper">
      <nav class="navbar navbar-expand-lg navbar-light bg-light border-bottom">
        <div class="container-fluid">
          <button class="btn button_primary1" id="sidebarToggle">
            <i class="fa fa-home fa-2x" aria-hidden="true">
              {" "}
            </i>
          </button>
          <div></div>
        </div>
      </nav>
      <div class="container-fluid">
        <section class="seller_account_area">
          <h2 class="text-center">My Account</h2>
          <div class="row">
            <div
              class="
                  seller_account_edit_form
                  col-lg-8 col-md-8 col-sm-12
                  mx-auto
                  mb-4 
                "
            >
              <_UpdateForm onSubmit={handleSubmit} />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

function _UpdateForm({ onSubmit }) {
  return (
    <AppForm
      initialValues={initialValues}
      validationSchema={updateProfessionalProfile}
      handleSubmit={onSubmit}
    >
      <div class="p-3 mt-2">
        <div class="form-group">
          <label>
            Mail address <span class="text-danger">*</span>
          </label>
          <Field type="email" class="form-control" name="email" />
          <FieldError field="email" />
        </div>
        <div class="form-group">
          <label>
            Password <span class="text-danger">*</span>{" "}
          </label>
          <Field type="password" name="password" class="form-control" />
          <FieldError field="password" />
        </div>
        <div class="form-group">
          <label>
            Confirm Password <span class="text-danger">*</span>
          </label>
          <Field
            type="password"
            name="passwordConfirmation"
            class="form-control"
          />
          <FieldError field="passwordConfirmation" />
        </div>
        <div class="form-group">
          <label>
            Shop Name <span class="text-danger">*</span>
          </label>
          <Field type="text" name="shopName" class="form-control" />
          <FieldError field="shopName" />
        </div>
        <div class="form-group">
          <label>
            Username <span class="text-danger">*</span>
          </label>
          <Field type="text" name="userName" class="form-control" />
          <FieldError field="userName" />
        </div>

        <div class="form-group">
          <label>
            Phone <span class="text-danger">*</span>
          </label>
          <Field type="number" name="number" class="form-control" />
          <FieldError field="number" />
        </div>
        <div class="form-group">
          <label>
            Address <span class="text-danger">*</span>
          </label>
          <Field type="text" name="address" class="form-control" />
          <FieldError field="address" />
        </div>
        <div class="form-group">
          <label>FaceBooks</label>
          <Field type="text" name="facebook" class="form-control" />
          <FieldError field="facebook" />
        </div>
        <div class="form-group">
          <label>Instagram </label>
          <Field type="text" name="instagram" class="form-control" />
          <FieldError field="instagram" />
        </div>

        <div class="form-group col-lg-6">
          <label>
            Section<span class="text-danger">*</span>
          </label>
          <div class="check-boxes-section bg-white p-3">
            <div class="d-flex justify-content-between">
              <div class="form-check">
                <input class="form-check-input" type="checkbox" value="" />
                <label class="form-check-label"> Men </label>
              </div>
              {/* <div class="form-check">
                <input class="form-check-input" type="checkbox" value="" />
                <label class="form-check-label"> Women </label>
              </div> */}
            </div>
            <div class="d-flex justify-content-between">
              <div class="form-check">
                <input class="form-check-input" type="checkbox" value="" />
                <label class="form-check-label"> Child </label>
              </div>
              {/* <div class="form-check">
                <input class="form-check-input" type="checkbox" value="" />
                <label class="form-check-label"> House </label>
              </div> */}
            </div>
          </div>
        </div>
        <div>
          <button type="submit" class="btn button_primary">
            Save Changes
          </button>
        </div>
      </div>
    </AppForm>
  );
}

const initialValues = {
  userName: "",
  shopName: "",
  email: "",
  password: "",
  number: "",
  address: "",
  facebook: "",
  instagram: "",
  sections: [],
};
