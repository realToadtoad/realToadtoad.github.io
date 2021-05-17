import { writable } from "svelte/store";

function getCookie(cname) {
  var name = cname + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(";");
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == " ") {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

let darkCookie = true;
if (process.browser) {
  darkCookie = getCookie("darkMode");
  if (darkCookie == "false") {
    darkCookie = false;
  } else if (darkCookie == "" || darkCookie == "true") {
    darkCookie = true;
  }
}

export const dark = writable(darkCookie);
