const partyHeader = document.getElementById('party');



export const htmlGenerator = (string, htmlElement) => {
    const p = document.createElement("p");
    p.innerText = string;
    htmlElement.appendChild(p);
};

htmlGenerator('Party Time.', partyHeader);
htmlGenerator("I <3 Vanilla DOM manipulation.", document.querySelector('#party'));