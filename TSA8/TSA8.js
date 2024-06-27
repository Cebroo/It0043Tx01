const flexContainer = document.querySelector('.flex-container');
const flexDirectionSelect = document.getElementById('flex-direction');   
const justifyContentSelect = document.getElementById('justify-content');
const alignItemsSelect = document.getElementById('align-items');

function updateFlexBoxProperties(){
    flexContainer.style.flexDirection = flexDirectionSelect.value;
    flexContainer.style.justifyContent = justifyContentSelect.value;
    flexContainer.style.alignItems = alignItemsSelect.value;
}

flexDirectionSelect.addEventListener('change', updateFlexBoxProperties);
justifyContentSelect.addEventListener('change', updateFlexBoxProperties);
alignItemsSelect.addEventListener('change', updateFlexBoxProperties);

updateFlexBoxProperties();