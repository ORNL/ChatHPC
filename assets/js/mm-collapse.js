(function () {
  function setExpanded(btn, expanded) {
    btn.setAttribute("aria-expanded", expanded ? "true" : "false");
  }

  document.addEventListener("click", function (e) {
    const btn = e.target.closest('[data-toggle="mm-collapse"]');
    if (!btn) return;

    const id = btn.getAttribute("data-target");
    const panel = document.getElementById(id);
    if (!panel) return;

    const isHidden = panel.hasAttribute("hidden");
    if (isHidden) {
      panel.removeAttribute("hidden");
      setExpanded(btn, true);
    } else {
      panel.setAttribute("hidden", "");
      setExpanded(btn, false);
    }
  });
})();
