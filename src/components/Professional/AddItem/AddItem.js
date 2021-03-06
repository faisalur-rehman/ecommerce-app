import React from "react";

const AddItem = () => {
  return (
    <div class="d-flex" id="wrapper">
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
          <section class="add_item_area">
            <h2 class="text-center">Add Item</h2>
            <div class="add_item_form">
              <_ArticleForm />
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default AddItem;

function _ArticleForm() {
  return (
    <form class="p-3 mt-2 row">
      <div class="col-lg-4 col-md-4 col-sm-12 mx-auto mb-4">
        <div>image-area</div>
      </div>
      <div class="form col-lg-8 col-md-8 col-sm-12 mx-auto mb-4">
        <div class="form-group">
          <label>Article Name</label>
          <input type="text" class="form-control" />
        </div>

        <div class="form-group">
          <label>Description</label>
          <br />
          <textarea cols="120" rows="6" style={{ maxWidth: "100%" }}></textarea>
        </div>

        <div class="form-group">
          <label>
            Brand Name <span class="text-danger">*</span>{" "}
          </label>
          <input type="password" class="form-control" />
        </div>
        <div class="form-group">
          <label>
            Oneline Date <span class="text-danger">*</span>{" "}
          </label>
          <input type="date" class="form-control" />
        </div>
        <div class="form-group">
          <label>
            City<span class="text-danger">*</span>
          </label>
          <input type="text" class="form-control" />
        </div>
        <div class="form-group">
          <label>
            Sections <span class="text-danger">*</span>
          </label>
          <select class="form-select" aria-label="Default select example">
            <option disabled selected>
              Select Section
            </option>
            <option value="1">SM</option>
            <option value="2">MD</option>
            <option value="3">L</option>
            <option value="4">XL</option>
          </select>
        </div>
        <div class="form-group">
          <label>
            Category <span class="text-danger">*</span>
          </label>
          <select class="form-select" aria-label="Default select example">
            <option disabled selected>
              Select Category
            </option>
            <option value="1">SM</option>
            <option value="2">MD</option>
            <option value="3">L</option>
            <option value="4">XL</option>
          </select>
        </div>
        <div class="form-group">
          <label>
            Available Sizes <span class="text-danger">*</span>
          </label>
          <select class="form-select" aria-label="Default select example">
            <option disabled selected>
              Select Size
            </option>
            <option value="1">SM</option>
            <option value="2">MD</option>
            <option value="3">L</option>
            <option value="4">XL</option>
          </select>
        </div>
        <div class="form-group">
          <label>
            Total Stock <span class="text-danger">*</span>
          </label>
          <input type="number" class="form-control" />
        </div>
        <div class="form-group">
          <label>
            Selling Price <span class="text-danger">*</span>
          </label>
          <input type="number" class="form-control" />
        </div>
        <div class="form-group">
          <label>
            Indicated Price <span class="text-danger">*</span>
          </label>
          <input type="number" class="form-control" />
        </div>

        <div class="form-group">
          <button type="submit" class="btn button_primary">
            Save Article
          </button>
        </div>
      </div>
    </form>
  );
}
