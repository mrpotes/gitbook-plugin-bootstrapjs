require(["jQuery", "gitbook", "//netdna.bootstrapcdn.com/bootstrap/3.1.1/js/bootstrap.min.js"], function($, gitbook) {

  var options = {
      modal: true,
      dropdown: true,
      tab: true,
      tooltip: true,
      popover: true,
      collapse: true
  };

  var apply = function() {
    ["modal", "dropdown", "tab", "tooltip", "popover", "collapse", "carousel"].forEach(function(component) {
      if (options[component]) {
        $(options[component].selector || "." + component + ",[data-"+component+"]")[component]();
      }
    });
  };

  var init = function(e, config) {
    if (config) {
      options = config.bootstrapjs || options;
    }
    apply();
  };

  gitbook.events.bind("start", init);
  gitbook.events.bind("page.change", apply);

});
