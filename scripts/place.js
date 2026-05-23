
document.getElementById("currentyear").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = document.lastModified;

window.addEventListener("load", () => {
    const temp = parseFloat(document.getElementById("temp").textContent);
    const wind = parseFloat(document.getElementById("wind").textContent);
    const windChillElement = document.getElementById("windchill");

    const calculateWindChill = (t, w) => (35.74 + 0.6215 * t - 35.75 * Math.pow(w, 0.16) + 0.4275 * t * Math.pow(w, 0.16)).toFixed(1);

    if (temp <= 50 && wind > 3) {
        windChillElement.textContent = `${calculateWindChill(temp, wind)} °F`;
    } else {
        windChillElement.textContent = "N/A";
    }
});