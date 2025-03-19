document.querySelector('#card-number-input').oninput = () => {
    let input = document.querySelector('#card-number-input').value.replace(/\s/g, '');
    input = input.replace(/(.{4})/g, '$1 ').trim();
    document.querySelector('#card-number-box').innerText = input || "#### #### #### ####";
};
document.querySelector('#cardholder-input').oninput =() =>{
    document.querySelector('#cardholder-name').innerText =
    document.querySelector('#cardholder-input').value;
};
document.querySelector('#month-input').oninput =() =>{
    document.querySelector('#exp-month').innerText =
    document.querySelector('#month-input').value;
};
document.querySelector('#year-input').oninput =() =>{
    document.querySelector('#exp-year').innerText =
    document.querySelector('#year-input').value;
};
document.querySelector('#cvv-input').oninput =() =>{
    document.querySelector('#cvv-box').innerText =
    document.querySelector('#cvv-input').value;
};
document.querySelector('#cvv-input').onmouseenter =() =>{
    document.querySelector('#front').style.display="none";
    document.querySelector('#back').style.display="block";
};
document.querySelector('#cvv-input').onmouseleave =() =>{
    document.querySelector('#front').style.display="block";
    document.querySelector('#back').style.display="none";
};