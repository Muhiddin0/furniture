export function HeaderTrasform(y: number, pathname: string) {
  if (pathname == "/") {
    y
      ? document.querySelector("header")?.classList.remove("transparent")
      : document.querySelector("header")?.classList.add("transparent");
  } else {
    document.querySelector("header")?.classList.remove("transparent");
  }
}
