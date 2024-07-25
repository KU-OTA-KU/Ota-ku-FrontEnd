export function isMobile(): boolean {
  if (window.innerWidth <= 768) {
    console.log("yes")
    return true;
  } else {
    console.log("no")
    return false;
  }
}

// export function addListener(): void {
//   window.addEventListener('resize', this.handleResize);
// }

// export function removeListener(): void {
//   window.removeEventListener('resize', this.handleResize);
// }

// export function handleResize(): void {
//   this.isDesktop = window.innerWidth > 800;
// }