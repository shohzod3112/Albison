const myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");
myHeaders.append("apiKey", "83023e234c081df06204d624d2bc1920e77b0d274482e032e16552971717e967420cf8d99a9c0ccb2e6dc92031f79eb404a843931cefc12421068770b19a5538");

const raw = JSON.stringify({
  "perPage": 10,
  "page": 0,
  "search": []
});

const requestOptions = {
  method: "POST",
  headers: myHeaders,
  body: raw,
  redirect: "follow"
};

fetch("https://api.ukiosk.uz/kiosk/v1/setting/pageable", requestOptions)
  .then((response) => response.text())
  .then((result) => console.log(result))
  .catch((error) => console.error(error));