function adjustBodyPadding() {
    const header = document.getElementById("site-header");
    const headerHeight = header.offsetHeight; // Get the height of the header
    document.body.style.paddingTop = `${headerHeight}px`;
}

// Run the function on load and resize
window.addEventListener("load", adjustBodyPadding);
window.addEventListener("resize", adjustBodyPadding);
