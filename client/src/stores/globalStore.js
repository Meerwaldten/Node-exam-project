import { readable, writable } from "svelte/store";

export const BASE_URL = readable("http://localhost:8080");

//export const myUsername = writable();

export const myUsername = writable(getStoredUsername());

function getStoredUsername() {
  const storedUsername = localStorage.getItem("myUsername");
  return storedUsername ? JSON.parse(storedUsername) : null;
}

myUsername.subscribe((value) => {
  localStorage.setItem("myUsername", JSON.stringify(value));
});