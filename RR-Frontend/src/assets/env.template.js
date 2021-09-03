(function (window) {
  window["env"] = window["env"] || {};

  // Environment variables
  window["env"]["baseUrl"] = "${BASE_URL}";
  window["env"]["tracking"] = ("${TRACKING}" === 'ENABLED');
  window["env"]["customerLogo"] = "${CUSTOMER_LOGO}"; // assets/img/layout/rr-customer-CUSTOMER.svg
  window["env"]["instituteId"] = "${INSTITUTE_ID}";
})(this);
