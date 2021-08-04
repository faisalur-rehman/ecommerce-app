import React from "react";
import Layout from "../Layout/Layout";
import "./ProfessionalRegistration.css";

const ProfessionalRegistration = () => {
  return (
    <Layout>
      <section class="professional_form_area row">
        <div class="professional_login_form col-lg-6 col-md-6">
          <form class="p-3 mt-5">
            <h2 class="text-center">Log in</h2>
            <hr />
            <div class="form-group">
              <label>
                Mail address <span class="text-danger">*</span>
              </label>
              <input type="email" class="form-control" />
            </div>
            <div class="form-group">
              <label>
                Password <span class="text-danger">*</span>{" "}
              </label>
              <input type="password" class="form-control" />
            </div>
            <div class="text-center">
              <button type="submit" class="btn">
                Login
              </button>
            </div>

            <a class="d-block text-center mt-1">Forgot your Password ?</a>
          </form>
        </div>
        <div class="professional_sign_up_from col-lg-6 col-md-6 mb-4">
          <form class="p-3 mt-5">
            <h2 class="text-center">Professional Registration</h2>
            <hr />
            <div class="form-group">
              <label>
                Mail address <span class="text-danger">*</span>
              </label>
              <input type="email" class="form-control" />
            </div>
            <div class="form-group">
              <label>
                Password <span class="text-danger">*</span>{" "}
              </label>
              <input type="password" class="form-control" />
            </div>
            <div class="form-group">
              <label>
                Confirm Password <span class="text-danger">*</span>{" "}
              </label>
              <input type="password" class="form-control" />
            </div>
            <div class="form-group">
              <label>
                Shop Name <span class="text-danger">*</span>
              </label>
              <input type="text" class="form-control" />
            </div>
            <div class="form-group">
              <label>First Name</label>
              <input type="text" class="form-control" />
            </div>
            <div class="form-group">
              <label>Last Name</label>
              <input type="text" class="form-control" />
            </div>
            <div class="form-group">
              <label>
                Phone <span class="text-danger">*</span>
              </label>
              <input type="text" class="form-control" />
            </div>
            <div class="form-group">
              <label>
                Address <span class="text-danger">*</span>
              </label>
              <input type="text" class="form-control" />
            </div>
            <div class="form-group">
              <label>Facebook</label>
              <input type="text" class="form-control" />
            </div>
            <div class="form-group">
              <label>Instagram</label>
              <input type="text" class="form-control" />
            </div>
            <div class="form-group">
              <label>
                Shop Photo <span class="text-danger">*</span>
              </label>
              <input type="text" class="form-control" />
            </div>
            <div class="form-group">
              <label>
                Section<span class="text-danger">*</span>
              </label>
              <div class="check-boxes-section">
                <div class="d-flex justify-content-between">
                  <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="" />
                    <label class="form-check-label"> Men </label>
                  </div>
                  <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="" />
                    <label class="form-check-label"> Women </label>
                  </div>
                </div>
                <div class="d-flex justify-content-between">
                  <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="" />
                    <label class="form-check-label"> Child </label>
                  </div>
                  <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="" />
                    <label class="form-check-label"> House </label>
                  </div>
                </div>
              </div>
            </div>
            <div class="text-center">
              <button type="submit" class="btn">
                Inscripton
              </button>
            </div>
          </form>
        </div>
      </section>
    </Layout>
  );
};

export default ProfessionalRegistration;
