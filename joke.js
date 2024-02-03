const btnEl = document.getElementById("btn");
const apiKey = "ordp8PLUMfAQMDWrrQrNyQ==rNFS8WsL6BBFpY6g";
const options = {
  method: "GET",
  headers: {
    "X-Api-Key": apiKey,
  },
};
const apiUrl = "https://api.api-ninjas.com/v1/dadjokes?limit=1";

async function getJoke() {
  try {
    document.getElementById("joke").textContent = "Loading. . .";
    btnEl.disabled = true;
    btnEl.textContent = ". . .";
    const response = await fetch(apiUrl, options);
    const data = await response.json();
    document.querySelector(".joke").textContent = data[0].joke;
    btnEl.disabled = false;
    btnEl.textContent = "TELL ME A JOKE";
  } catch (error) {
    document.querySelector(".joke").textContent =
      "Please Check Your Internet Connection. . .";
  }
}
btnEl.addEventListener("click", getJoke);
