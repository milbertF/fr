let tooltipTimeout;

export default function tooltipHover(event, text) {
  const tooltip = document.getElementById("tooltip");
  if (!tooltip) return;

  if (event) {
    clearTimeout(tooltipTimeout);

    tooltipTimeout = setTimeout(() => {
      tooltip.innerText = text;
      tooltip.style.display = "block";
      tooltip.style.left = `${event.clientX + -20}px`;
      tooltip.style.top = `${event.clientY + 15}px`;
    }, 500);
  } else {
    clearTimeout(tooltipTimeout);
    tooltip.style.display = "none";
  }
}
