const ipAddressPlaceholder = document.querySelector("#ipAddress");
// Get the ip address from this url: https://ipv4.icanhazip.com/

let xhr = new XMLHttpRequest();
xhr.responseType = "json";
xhr.onreadystatechange = function () {
  if (this.readyState === 4) {
    if (this.status === 200) {
      ipAddressPlaceholder.textContent = xhr.response.data.trim();
    } else {
      ipAddressPlaceholder.innerHTML =
        "<div class='alert-danger'>COULDN'T GET YOUR IP. <a href='/' class='retry-btn'>Retry</a></div>";
    }
  }
};
xhr.open(
  "GET",
  // "https://cors-anywhere.herokuapp.com/https://ipv4.icanhazip.com/"
  "/.netlify/functions/ip"
);
xhr.send();
