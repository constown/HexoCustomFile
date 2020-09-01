var install_app_btn = document.getElementById("install_app_btn");
window.addEventListener("beforeinstallprompt", function(e) {
  e.preventDefault();
  window.ePrompt = e;
  install_app_btn.addEventListener("click", () => {
    window.ePrompt.prompt();
  });
});
