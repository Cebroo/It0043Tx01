document.addEventListener("DOMContentLoaded", function () {
  const flexContainer = document.querySelector(".flex-container");
  const flexDirectionSelect = document.getElementById("flex-direction");
  const justifyContentSelect = document.getElementById("justify-content");
  const alignItemsSelect = document.getElementById("align-items");
  const gapInput = document.getElementById("gap");
  const resetGrowButton = document.getElementById("f-reset");
  const growAllButton = document.getElementById("f-grow");
  const box1GrowInput = document.getElementById("box1Grow");
  const box2GrowInput = document.getElementById("box2Grow");
  const box3GrowInput = document.getElementById("box3Grow");
  const resetFlexboxButton = document.getElementById("reset");
  const boxInputs = document.querySelectorAll(".box-container input");

  const updateFlexContainer = () => {
    flexContainer.style.gap = `${gapInput.value}px`;
  };

  gapInput.addEventListener("input", updateFlexContainer);

  function updateFlexBoxProperties() {
    flexContainer.style.flexDirection = flexDirectionSelect.value;
    flexContainer.style.justifyContent = justifyContentSelect.value;
    flexContainer.style.alignItems = alignItemsSelect.value;
  }

  flexDirectionSelect.addEventListener("change", updateFlexBoxProperties);
  justifyContentSelect.addEventListener("change", updateFlexBoxProperties);
  alignItemsSelect.addEventListener("change", updateFlexBoxProperties);

  updateFlexBoxProperties();

  growAllButton.addEventListener("click", function () {
    boxInputs.forEach((input) => (input.value = 1));
    flexContainer
      .querySelectorAll(".flexContainer   > div")
      .forEach((div) => (div.style.flexGrow = "1"));
  });

  boxInputs.forEach((input) => {
    input.addEventListener("input", function () {
      const index = Array.from(boxInputs).indexOf(input);
      const box = flexContainer.children[index];
      box.style.flexGrow = input.value;
    });

    resetGrowButton.addEventListener("click", () => {
      boxInputs.forEach((input) => (input.value = 0));
      flexContainer
        .querySelectorAll(".flexContainer > div")
        .forEach((div) => (div.style.flexGrow = "0"));
    });

    resetFlexboxButton.addEventListener("click", () => {
      gapInput.value = 0;
      flexContainer.style.gap = "0px";
      flexContainer.style.flexDirection = "row";
      flexContainer.style.justifyContent = "flex-start";
      flexContainer.style.alignItems = "flex-start";
      boxInputs.forEach((input) => (input.value = 0));
      flexContainer
        .querySelectorAll(".flexContainer > div")
        .forEach((div) => (div.style.flexGrow = "0"));
    });
  });
});
