function createUltimateJutsu() {
    let rows = [[]];
    const table = document.getElementById("ultimateJutsu");
    let header = table.createTHead();

    rows[0] = header.insertRow(0);
    rows[1] = document.getElementById("ultimateJutsu").rows[1];
    rows[2] = document.getElementById("ultimateJutsu").rows[2];
    rows[3] = table.insertRow(3);
    rows[4] = table.insertRow(4);
    rows[5] = document.getElementById("ultimateJutsu").rows[5];
    rows[6] = document.getElementById("ultimateJutsu").rows[6];
    rows[7] = document.getElementById("ultimateJutsu").rows[7];

    rows[0][0] = rows[0].insertCell(0);
    rows[0][1] = rows[0].insertCell(1);

    rows[1][1] = rows[1].insertCell(1);
    rows[1][4] = rows[1].insertCell(4);
    rows[1].insertCell(5);
    rows[1][6] = rows[1].insertCell(6);
    rows[1].insertCell(7);

    rows[2][1] = rows[2].insertCell(1);
    rows[2].insertCell(2);
    rows[2][3] = rows[2].insertCell(3);
    rows[2].insertCell(4);

    rows[3][0] = rows[3].insertCell(0);
    rows[3].insertCell(1);
    rows[3][2] = rows[3].insertCell(2);
    rows[3].insertCell(3);

    rows[4][0] = rows[4].insertCell(0);

    rows[5][1] = rows[5].insertCell(1);
    rows[5][3] = rows[5].insertCell(3);
    rows[5].insertCell(4);

    rows[6][1] = rows[6].insertCell(1);
    rows[6].insertCell(2);
    rows[6][3] = rows[6].insertCell(3);
    rows[6].insertCell(4);
    rows[6][5] = rows[6].insertCell(5);
    rows[6].insertCell(6);

    rows[7].insertCell(0);
    rows[7].insertCell(1);
    rows[7][2] = rows[7].insertCell(2);

    rows[0][0].outerHTML = "<th colspan=4 >Ninjutsu</th>";

    rows[0][1].outerHTML = "<th colspan=4 >Max Card Stats</th>";

    rows[1][0] = document.getElementById("ultimateJutsu").rows[1].cells[0];
    rows[1][0].style.fontWeight = "bold";

    let imgType = document.createElement("img");
    imgType.classList.add("typeImage");
    imgType.alt = rows[1][0].innerHTML;
    imgType.referrerPolicy = "no-referrer";
    rows[1][1].appendChild(imgType);

    rows[1][3] = document.getElementById("ultimateJutsu").rows[1].cells[3];

    let imgRank = document.createElement("img");
    imgRank.classList.add("rankImage");
    imgRank.alt = rows[1][3].innerHTML;
    rows[1][3].innerHTML = "";
    imgRank.referrerPolicy = "no-referrer";
    rows[1][3].appendChild(imgRank);

    rows[1][4].innerHTML = "HP";

    rows[1][6].innerHTML = "CP";

    rows[2][0] = document.getElementById("ultimateJutsu").rows[2].cells[0];
    rows[2][0].colSpan = "4";
    rows[2][0].rowSpan = "2";
    rows[2][0].classList.add("cardImageTable");

    let cardImage = document.createElement("img");
    cardImage.classList.add("cardImage");
    cardImage.referrerPolicy = "no-referrer";
    cardImage.src = rows[2][0].innerHTML;
    rows[2][0].innerHTML = "";
    rows[2][0].appendChild(cardImage);

    rows[2][1].innerHTML = "ATK";

    rows[2][3].innerHTML = "DEF";

    rows[3][0].innerHTML = "CRI";

    rows[3][2].innerHTML = "EVA";


    rows[4][0] = document.getElementById("ultimateJutsu").rows[4].cells[0];

    rows[4][0].outerHTML = "<th colspan=8 >Max Jutsu Stats</th>";

    rows[5][0] = document.getElementById("ultimateJutsu").rows[5].cells[0];
    rows[5][0].style.fontWeight = "bold";

    let natureImage = document.createElement("img");
    natureImage.classList.add("natureImage");
    natureImage.alt = rows[5][0].innerHTML;
    natureImage.referrerPolicy = "no-referrer";
    rows[5][1].appendChild(natureImage);

    rows[5][2] = document.getElementById("ultimateJutsu").rows[5].cells[2];
    rows[5][2].colSpan = "4";
    rows[5][2].style.fontWeight = "bold";

    rows[5][3].innerHTML = "LVL";

    rows[6][0] = document.getElementById("ultimateJutsu").rows[6].cells[0];
    rows[6][0].colSpan = "2";

    let jutsuImage = document.createElement("img");
    jutsuImage.classList.add("jutsuImage");
    jutsuImage.referrerPolicy = "no-referrer";
    jutsuImage.src = rows[6][0].innerHTML;
    rows[6][0].innerHTML = "";
    rows[6][0].appendChild(jutsuImage);

    rows[6][1].innerHTML = "CP Cost";
    rows[6][3].innerHTML = "CRI";
    rows[6][5].innerHTML = "POW";

    rows[7][0] = document.getElementById("ultimateJutsu").rows[7].cells[0];

    let rtImage = document.createElement("img");
    rtImage.classList.add("rtImage");
    rtImage.referrerPolicy = "no-referrer";
    rtImage.alt = "rt";
    rows[7][0].appendChild(rtImage);

    rows[7][2].colSpan = "3";
    rows[7][2].innerHTML = "Equippable By";

    rows[7][3] = document.getElementById("ultimateJutsu").rows[7].cells[3];
    rows[7][3].colSpan = "3";
}

function ultimateJutsu() {
    createUltimateJutsu();
    let rows = [[]], rowsUJByLvl = [[]], rowsUltimateJutsu = [[]], rowsLength;

    rowsLength = document.getElementById("ultimateJutsuCheckByLv").rows.length;
    rowsUltimateJutsu[6] = document.getElementById("ultimateJutsu").rows[6].cells;
    rowsUltimateJutsu[7] = document.getElementById("ultimateJutsu").rows[7].cells;

    for (let i = 0, j = 0; i < (rowsLength - 1) / 2, j < (rowsLength - 1) / 2; i = i + 2, j++) {
        rowsUJByLvl[j] = document.getElementById("ultimateJutsuCheckByLv").rows[2 + i].cells;
    }

    for (let i = 2, j = 1; i < (rowsLength - 1) / 2, j < ((rowsLength - 1) / 2) - 1; i++, j++) {
        rowsUJByLvl[i][1].innerHTML = eval("parseInt(rowsUJByLvl[1][1].innerHTML) + ( parseInt(rowsUJByLvl[1][1].innerHTML) - parseInt(rowsUJByLvl[0][1].innerHTML) ) * j");
        rowsUJByLvl[i][3].innerHTML = eval("parseInt(rowsUJByLvl[1][3].innerHTML) + ( parseInt(rowsUJByLvl[1][3].innerHTML) - parseInt(rowsUJByLvl[0][3].innerHTML) ) * j");
        rowsUJByLvl[i][5].innerHTML = eval("parseInt(rowsUJByLvl[1][5].innerHTML) + ( parseInt(rowsUJByLvl[1][5].innerHTML) - parseInt(rowsUJByLvl[0][5].innerHTML) ) * j") + ".00%";
        rowsUJByLvl[i][7].innerHTML = eval("parseInt(rowsUJByLvl[1][7].innerHTML) + ( parseInt(rowsUJByLvl[1][7].innerHTML) - parseInt(rowsUJByLvl[0][7].innerHTML) ) * j");
    }

    rows[1] = document.getElementById("ultimateJutsu").rows[1].cells;
    rows[2] = document.getElementById("ultimateJutsu").rows[2].cells;
    rows[3] = document.getElementById("ultimateJutsu").rows[3].cells;
    rows[5] = document.getElementById("ultimateJutsu").rows[5].cells;

    switch (rows[1][2].innerHTML) {
        case "Lv 70/70":
            rows[3][1].innerHTML = "1.30%";
            rows[3][3].innerHTML = "1.30%";
            rows[5][4].innerHTML = "8/8";

            switch (rows[1][0].innerHTML) {
                case "Assist":
                    rows[1][5].innerHTML = "1128";
                    rows[1][7].innerHTML = "143";
                    rows[2][2].innerHTML = "480";
                    rows[2][4].innerHTML = "607";
                    break;
                case "Attack":
                    rows[1][5].innerHTML = "1128";
                    rows[1][7].innerHTML = "102";
                    rows[2][2].innerHTML = "829";
                    rows[2][4].innerHTML = "534";
                    break;
                case "Defense":
                    rows[1][5].innerHTML = "1296";
                    rows[1][7].innerHTML = "85";
                    rows[2][2].innerHTML = "571";
                    rows[2][4].innerHTML = "742";
                    break;
                case "Skill":
                    rows[1][5].innerHTML = "1029";
                    rows[1][7].innerHTML = "165";
                    rows[2][2].innerHTML = "627";
                    rows[2][4].innerHTML = "436";
                    break;
                case "Utility":
                    rows[1][5].innerHTML = "1218";
                    rows[1][7].innerHTML = "112";
                    rows[2][2].innerHTML = "607";
                    rows[2][4].innerHTML = "574";
                    break;
            }
            rowsUltimateJutsu[6][2].innerHTML = rowsUJByLvl[7][3].innerHTML;
            rowsUltimateJutsu[6][4].innerHTML = rowsUJByLvl[7][5].innerHTML;
            rowsUltimateJutsu[6][6].innerHTML = rowsUJByLvl[7][7].innerHTML;
            rowsUltimateJutsu[7][1].innerHTML = rowsUJByLvl[7][1].innerHTML;
            break;
        case "Lv 100/100":
            rows[3][1].innerHTML = "1.50%";
            rows[3][3].innerHTML = "1.50%";
            rows[5][4].innerHTML = "15/15";

            switch (rows[1][0].innerHTML) {
                case "Assist":
                    rows[1][5].innerHTML = "1730";
                    rows[1][7].innerHTML = "223";
                    rows[2][2].innerHTML = "740";
                    rows[2][4].innerHTML = "940";
                    break;
                case "Attack":
                    rows[1][5].innerHTML = "";
                    rows[1][7].innerHTML = "";
                    rows[2][2].innerHTML = "";
                    rows[2][4].innerHTML = "";
                    break;
                case "Defense":
                    rows[1][5].innerHTML = "1980";
                    rows[1][7].innerHTML = "138";
                    rows[2][2].innerHTML = "877";
                    rows[2][4].innerHTML = "1130";
                    break;
                case "Skill":
                    rows[1][5].innerHTML = "1596";
                    rows[1][7].innerHTML = "254";
                    rows[2][2].innerHTML = "955";
                    rows[2][4].innerHTML = "684";
                    break;
                case "Utility":
                    rows[1][5].innerHTML = "1881";
                    rows[1][7].innerHTML = "175";
                    rows[2][2].innerHTML = "940";
                    rows[2][4].innerHTML = "881";
                    break;
            }
            rowsUltimateJutsu[6][2].innerHTML = rowsUJByLvl[14][3].innerHTML;
            rowsUltimateJutsu[6][4].innerHTML = rowsUJByLvl[14][5].innerHTML;
            rowsUltimateJutsu[6][6].innerHTML = rowsUJByLvl[14][7].innerHTML;
            rowsUltimateJutsu[7][1].innerHTML = rowsUJByLvl[14][1].innerHTML;
            break;
    }
}