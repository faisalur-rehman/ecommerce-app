export default function ProfessionalAccount() {
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
              <form class="p-3 mt-2">
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
                    Confirm Password <span class="text-danger">*</span>
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
                  <label>
                    First Name <span class="text-danger">*</span>
                  </label>
                  <input type="text" class="form-control" />
                </div>
                <div class="form-group">
                  <label>
                    Last Name <span class="text-danger">*</span>
                  </label>
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
                  <label>FaceBooks</label>
                  <input type="text" class="form-control" />
                </div>
                <div class="form-group">
                  <label>Instagram </label>
                  <input type="text" class="form-control" />
                </div>
                <div class="form-group">
                  <label>
                    Shop Photo <span class="text-danger">*</span>
                  </label>
                  <input type="file" class="form-control" id="customFile" />
                </div>
                <div class="form-group col-lg-6">
                  <label>
                    Section<span class="text-danger">*</span>
                  </label>
                  <div class="check-boxes-section bg-white p-3">
                    <div class="d-flex justify-content-between">
                      <div class="form-check">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          value=""
                        />
                        <label class="form-check-label"> Men </label>
                      </div>
                      <div class="form-check">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          value=""
                        />
                        <label class="form-check-label"> Women </label>
                      </div>
                    </div>
                    <div class="d-flex justify-content-between">
                      <div class="form-check">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          value=""
                        />
                        <label class="form-check-label"> Child </label>
                      </div>
                      <div class="form-check">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          value=""
                        />
                        <label class="form-check-label"> House </label>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <button type="submit" class="btn button_primary">
                    Save Changes
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
