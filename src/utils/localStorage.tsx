export function handleGetLocalStorage() {
  if (typeof window !== "undefined") {
    const stored = localStorage.getItem("theme");
    return stored;
  }
}
export function handleSetLocalStorage(valor: string): void {
  if (typeof window !== "undefined") {
    // Perform localStorage action
    localStorage.setItem("theme", valor);
  }
}
