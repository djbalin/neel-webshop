export function devLog(...args: Parameters<typeof console.log>) {
  if (process.env.NODE_ENV === "development") {
    console.log(args);
  }
}
