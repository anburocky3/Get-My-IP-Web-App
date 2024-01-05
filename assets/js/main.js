const ipAddressPlaceholder = document.querySelector("#ipAddress");
// Get the ip address from this url: https://ipv4.icanhazip.com/

let xhr = new XMLHttpRequest();

xhr.onreadystatechange = function () {
  if (this.readyState === 4 && this.status === 200) {
    ipAddressPlaceholder.textContent = xhr.responseText;
  }
};
xhr.open(
  "GET",
  "https://cors-anywhere.herokuapp.com/https://ipv4.icanhazip.com/"
);
xhr.send();
