 let box = document.getElementById("box");
    let color = document.getElementById("color");
    let radius = document.getElementById("radius");
    let border = document.getElementById("border");
    let shadow = document.getElementById("shadow");

    color.addEventListener("input", () => {
      box.style.background = color.value;
      document.getElementById("color-code").innerHTML = `background-color: ${color.value};`;
    });

    radius.addEventListener("input", () => {
      box.style.borderRadius = `${radius.value}px`;
      document.getElementById("radius-code").innerHTML = `border-radius: ${radius.value}%;`;
    });

    border.addEventListener("input", () => {
      box.style.border = border.value;
      document.getElementById("border-code").innerHTML = `border: ${border.value};`;
    });

    shadow.addEventListener("input", () => {
    box.style.boxShadow = shadow.value;
    document.getElementById("shadow").innerHTML = `box-shadow${shadow.value};`;});