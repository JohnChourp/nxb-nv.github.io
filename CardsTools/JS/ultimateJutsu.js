function createUltimateJutsu() {
    let rows = [[]];
    const table = document.getElementById("ultimateJutsu");
    let header = table.createTHead();

    rows[0] = header.insertRow(0);
    rows[1] = table.rows[1];
    rows[2] = table.rows[2];
    rows[3] = table.insertRow(3);
    rows[4] = table.insertRow(4);
    rows[5] = table.rows[5];
    rows[6] = table.rows[6];
    rows[7] = table.rows[7];
    rows[8] = table.rows[8];

    rows[0][0] = rows[0].insertCell(0);
    rows[0][1] = rows[0].insertCell(1);

    rows[1][0] = table.rows[1].cells[0];
    rows[1][1] = rows[1].insertCell(1);
    rows[1][3] = table.rows[1].cells[3];
    rows[1][4] = rows[1].insertCell(4);
    rows[1].insertCell(5);
    rows[1][6] = rows[1].insertCell(6);
    rows[1].insertCell(7);

    rows[2][0] = table.rows[2].cells[0];
    rows[2][1] = rows[2].insertCell(1);
    rows[2].insertCell(2);
    rows[2][3] = rows[2].insertCell(3);
    rows[2].insertCell(4);

    rows[3][0] = rows[3].insertCell(0);
    rows[3].insertCell(1);
    rows[3][2] = rows[3].insertCell(2);
    rows[3].insertCell(3);

    rows[4][0] = rows[4].insertCell(0);

    rows[5][0] = table.rows[5].cells[0];
    rows[5][1] = rows[5].insertCell(1);
    rows[5][2] = table.rows[5].cells[2];
    rows[5][3] = rows[5].insertCell(3);
    rows[5].insertCell(4);

    rows[6][0] = table.rows[6].cells[0];
    rows[6][1] = rows[6].insertCell(1);
    rows[6].insertCell(2);
    rows[6][3] = rows[6].insertCell(3);
    rows[6].insertCell(4);
    rows[6][5] = rows[6].insertCell(5);
    rows[6].insertCell(6);

    rows[7][0] = rows[7].insertCell(0);
    rows[7].insertCell(1);
    rows[7][2] = rows[7].insertCell(2);
    rows[7][3] = table.rows[7].cells[3];

    rows[8][0] = rows[8].insertCell(0);
    rows[8][1] = table.rows[8].cells[1];

    rows[0][0].outerHTML = "<th colspan=4 >Ninjutsu</th>";

    rows[0][1].outerHTML = "<th colspan=4 >Max Card Stats</th>";

    rows[1][0].style.fontWeight = "bold";

    let imgType = document.createElement("img");
    imgType.classList.add("typeImage");
    imgType.alt = rows[1][0].innerHTML;
    imgType.referrerPolicy = "no-referrer";
    rows[1][1].appendChild(imgType);

    let imgRank = document.createElement("img");
    imgRank.classList.add("rankImage");
    imgRank.alt = rows[1][3].innerHTML;
    rows[1][3].innerHTML = "";
    imgRank.referrerPolicy = "no-referrer";
    rows[1][3].appendChild(imgRank);

    rows[1][4].innerHTML = "HP";

    rows[1][6].innerHTML = "CP";

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

    rows[4][0].outerHTML = "<th colspan=8 >Max Jutsu Stats</th>";

    rows[5][0].style.fontWeight = "bold";

    let natureImage = document.createElement("img");
    natureImage.classList.add("natureImage");
    natureImage.alt = rows[5][0].innerHTML;
    natureImage.referrerPolicy = "no-referrer";
    rows[5][1].appendChild(natureImage);

    rows[5][2].colSpan = "4";
    rows[5][2].style.fontWeight = "bold";

    rows[5][3].innerHTML = "LVL";

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

    let rtImage = document.createElement("img");
    rtImage.classList.add("rtImage");
    rtImage.referrerPolicy = "no-referrer";
    rtImage.alt = "rt";
    rows[7][0].appendChild(rtImage);

    rows[7][2].colSpan = "3";
    rows[7][2].innerHTML = "Equippable By";

    rows[7][3].colSpan = "3";

    rows[8][0].colSpan = "2";
    rows[8][0].innerHTML = "Info";

    rows[8][1].colSpan = "6";
}

function createUltimateNinjutsuCheckByLvl() {
    let rowsCheckByLvl = [[]], rowsUltimateNinjutsu = [[]];
    const tableCheckByLvl = document.getElementById("ultimateJutsuCheckByLv");
    const tableUltimateNinjutsu = document.getElementById("ultimateJutsu");
    let imgRankLvl = document.createElement("img");
    let rtImageLvl = document.createElement("img");

    let header = tableCheckByLvl.createTHead();
    //row0
    rowsCheckByLvl[0] = header.insertRow(0);
    rowsCheckByLvl[0][0] = rowsCheckByLvl[0].insertCell(0);
    rowsCheckByLvl[0][0].outerHTML = "<th colspan=8 >Check By Lv</th>";
    //row0

    //row1
    rowsCheckByLvl[1] = tableCheckByLvl.insertRow(1);
    rowsCheckByLvl[1][0] = rowsCheckByLvl[1].insertCell(0);
    rowsCheckByLvl[1][1] = rowsCheckByLvl[1].insertCell(1);
    rowsCheckByLvl[1][2] = rowsCheckByLvl[1].insertCell(2);
    rowsCheckByLvl[1][0].colSpan = "2";
    rowsCheckByLvl[1][0].innerHTML = "NJ Lv 1";
    rowsCheckByLvl[1][1].colSpan = "3";
    rowsCheckByLvl[1][1].innerHTML = "Card Rank";
    rowsCheckByLvl[1][2].colSpan = "3";
    //row1

    //row2
    rowsCheckByLvl[2] = tableCheckByLvl.rows[2];
    rowsCheckByLvl[2][0] = rowsCheckByLvl[2].insertCell(0);
    rowsCheckByLvl[2][2] = rowsCheckByLvl[2].insertCell(2);
    rowsCheckByLvl[2][4] = rowsCheckByLvl[2].insertCell(4);
    rowsCheckByLvl[2][6] = rowsCheckByLvl[2].insertCell(6);
    rtImageLvl.classList.add("rtImage");
    rtImageLvl.referrerPolicy = "no-referrer";
    rtImageLvl.alt = "rt";
    rowsCheckByLvl[2][0].appendChild(rtImageLvl);
    rowsCheckByLvl[2][2].innerHTML = "CP Cost";
    rowsCheckByLvl[2][4].innerHTML = "CRI";
    rowsCheckByLvl[2][6].innerHTML = "POW";
    //row2

    //row3
    rowsCheckByLvl[3] = tableCheckByLvl.insertRow(3);
    rowsCheckByLvl[3][0] = rowsCheckByLvl[3].insertCell(0);
    rowsCheckByLvl[3][1] = rowsCheckByLvl[3].insertCell(1);
    rowsCheckByLvl[3][2] = rowsCheckByLvl[3].insertCell(2);
    rowsCheckByLvl[3][0].colSpan = "2";
    rowsCheckByLvl[3][0].innerHTML = "NJ Lv 2";
    rowsCheckByLvl[3][1].colSpan = "3";
    rowsCheckByLvl[3][1].innerHTML = "Card Rank";
    rowsCheckByLvl[3][2].colSpan = "3";
    //row3

    //row4
    rowsCheckByLvl[4] = tableCheckByLvl.rows[4];
    rowsCheckByLvl[4][0] = rowsCheckByLvl[4].insertCell(0);
    rowsCheckByLvl[4][2] = rowsCheckByLvl[4].insertCell(2);
    rowsCheckByLvl[4][4] = rowsCheckByLvl[4].insertCell(4);
    rowsCheckByLvl[4][6] = rowsCheckByLvl[4].insertCell(6);
    rtImageLvl = document.createElement("img");
    rtImageLvl.classList.add("rtImage");
    rtImageLvl.referrerPolicy = "no-referrer";
    rtImageLvl.alt = "rt";
    rowsCheckByLvl[4][0].appendChild(rtImageLvl);
    rowsCheckByLvl[4][2].innerHTML = "CP Cost";
    rowsCheckByLvl[4][4].innerHTML = "CRI";
    rowsCheckByLvl[4][6].innerHTML = "POW";
    //row4

    rowsUltimateNinjutsu[1] = tableUltimateNinjutsu.rows[1].cells;
    switch (rowsUltimateNinjutsu[1][2].innerHTML) {
        case "Lv 70/70":
            for (let i = 5; i < 17; i++) {
                rowsCheckByLvl[i] = tableCheckByLvl.insertRow(i);
            }

            for (let i = 5, j = 3; i < 17, j < 9; i = i + 2, j++) {
                rowsCheckByLvl[i][0] = rowsCheckByLvl[i].insertCell(0);
                rowsCheckByLvl[i][1] = rowsCheckByLvl[i].insertCell(1);
                rowsCheckByLvl[i][2] = rowsCheckByLvl[i].insertCell(2);
                rowsCheckByLvl[i][0].colSpan = "2";
                rowsCheckByLvl[i][0].innerHTML = "NJ Lv " + j;
                rowsCheckByLvl[i][1].colSpan = "3";
                rowsCheckByLvl[i][1].innerHTML = "Card Rank";
                rowsCheckByLvl[i][2].colSpan = "3";

                rowsCheckByLvl[i + 1][0] = rowsCheckByLvl[i + 1].insertCell(0);
                rowsCheckByLvl[i + 1].insertCell(1);
                rowsCheckByLvl[i + 1][2] = rowsCheckByLvl[i + 1].insertCell(2);
                rowsCheckByLvl[i + 1].insertCell(3);
                rowsCheckByLvl[i + 1][4] = rowsCheckByLvl[i + 1].insertCell(4);
                rowsCheckByLvl[i + 1].insertCell(5);
                rowsCheckByLvl[i + 1][6] = rowsCheckByLvl[i + 1].insertCell(6);
                rowsCheckByLvl[i + 1].insertCell(7);
                rowsCheckByLvl[i + 1][2].innerHTML = "CP Cost";
                rowsCheckByLvl[i + 1][4].innerHTML = "CRI";
                rowsCheckByLvl[i + 1][6].innerHTML = "POW";
                rtImageLvl = document.createElement("img");
                rtImageLvl.classList.add("rtImage");
                rtImageLvl.referrerPolicy = "no-referrer";
                rtImageLvl.alt = "rt";
                rowsCheckByLvl[i + 1][0].appendChild(rtImageLvl);
            }

            rowsCheckByLvl[1] = tableCheckByLvl.rows[1];
            imgRankLvl = document.createElement("img");
            imgRankLvl.classList.add("rankImage");
            imgRankLvl.alt = "5 Star";
            imgRankLvl.referrerPolicy = "no-referrer";
            rowsCheckByLvl[1][2].appendChild(imgRankLvl);

            rowsCheckByLvl[3] = tableCheckByLvl.rows[3];
            imgRankLvl = document.createElement("img");
            imgRankLvl.classList.add("rankImage");
            imgRankLvl.alt = "5 Star";
            imgRankLvl.referrerPolicy = "no-referrer";
            rowsCheckByLvl[3][2].appendChild(imgRankLvl);

            imgRankLvl = document.createElement("img");
            imgRankLvl.classList.add("rankImage");
            imgRankLvl.alt = "5 Star";
            imgRankLvl.referrerPolicy = "no-referrer";
            rowsCheckByLvl[5][2].appendChild(imgRankLvl);

            imgRankLvl = document.createElement("img");
            imgRankLvl.classList.add("rankImage");
            imgRankLvl.alt = "5 Star";
            imgRankLvl.referrerPolicy = "no-referrer";
            rowsCheckByLvl[7][2].appendChild(imgRankLvl);

            rtImageLvl = document.createElement("img");
            rtImageLvl.classList.add("rankImage");
            rtImageLvl.alt = "5 Star";
            rtImageLvl.referrerPolicy = "no-referrer";
            rowsCheckByLvl[9][2].appendChild(rtImageLvl);

            rtImageLvl = document.createElement("img");
            rtImageLvl.classList.add("rankImage");
            rtImageLvl.alt = "5 Star";
            rtImageLvl.referrerPolicy = "no-referrer";
            rowsCheckByLvl[11][2].appendChild(rtImageLvl);

            rtImageLvl = document.createElement("img");
            rtImageLvl.classList.add("rankImage");
            rtImageLvl.alt = "6 Star";
            rtImageLvl.referrerPolicy = "no-referrer";
            rowsCheckByLvl[13][2].appendChild(rtImageLvl);

            rtImageLvl = document.createElement("img");
            rtImageLvl.classList.add("rankImage");
            rtImageLvl.alt = "6 Star";
            rtImageLvl.referrerPolicy = "no-referrer";
            rowsCheckByLvl[15][2].appendChild(rtImageLvl);
            break;
    }
}

function ultimateJutsu() {
    createUltimateJutsu();
    createUltimateNinjutsuCheckByLvl();

    let rowsCheckByLv = [[]], rowsUltimateJutsu = [[]], rowsCheckByLvLength;

    const tableUltimateJutsu = document.getElementById("ultimateJutsu");
    const tableNinjutsuCheckByLv = document.getElementById("ultimateJutsuCheckByLv");

    rowsCheckByLvLength = tableNinjutsuCheckByLv.rows.length;

    for (let i = 0, j = 0; i < (rowsCheckByLvLength - 1) / 2, j < (rowsCheckByLvLength - 1) / 2; i = i + 2, j++) {
        rowsCheckByLv[j] = tableNinjutsuCheckByLv.rows[2 + i].cells;
    }

    for (let i = 2, j = 1; i < (rowsCheckByLvLength - 1) / 2, j < ((rowsCheckByLvLength - 1) / 2) - 1; i++, j++) {
        rowsCheckByLv[i][1].innerHTML = eval("parseInt(rowsCheckByLv[1][1].innerHTML) + ( parseInt(rowsCheckByLv[1][1].innerHTML) - parseInt(rowsCheckByLv[0][1].innerHTML) ) * j");
        rowsCheckByLv[i][3].innerHTML = eval("parseInt(rowsCheckByLv[1][3].innerHTML) + ( parseInt(rowsCheckByLv[1][3].innerHTML) - parseInt(rowsCheckByLv[0][3].innerHTML) ) * j");
        rowsCheckByLv[i][5].innerHTML = eval("parseInt(rowsCheckByLv[1][5].innerHTML) + ( parseInt(rowsCheckByLv[1][5].innerHTML) - parseInt(rowsCheckByLv[0][5].innerHTML) ) * j") + ".00%";
        rowsCheckByLv[i][7].innerHTML = eval("parseInt(rowsCheckByLv[1][7].innerHTML) + ( parseInt(rowsCheckByLv[1][7].innerHTML) - parseInt(rowsCheckByLv[0][7].innerHTML) ) * j");
    }

    rowsUltimateJutsu[1] = tableUltimateJutsu.rows[1].cells;
    rowsUltimateJutsu[2] = tableUltimateJutsu.rows[2].cells;
    rowsUltimateJutsu[3] = tableUltimateJutsu.rows[3].cells;
    rowsUltimateJutsu[5] = tableUltimateJutsu.rows[5].cells;
    rowsUltimateJutsu[6] = tableUltimateJutsu.rows[6].cells;
    rowsUltimateJutsu[7] = tableUltimateJutsu.rows[7].cells;

    switch (rowsUltimateJutsu[1][2].innerHTML) {
        case "Lv 70/70":
            rowsUltimateJutsu[3][1].innerHTML = "1.30%";
            rowsUltimateJutsu[3][3].innerHTML = "1.30%";
            rowsUltimateJutsu[5][4].innerHTML = "8/8";

            switch (rowsUltimateJutsu[1][0].innerHTML) {
                case "Assist":
                    rowsUltimateJutsu[1][5].innerHTML = "1128";
                    rowsUltimateJutsu[1][7].innerHTML = "143";
                    rowsUltimateJutsu[2][2].innerHTML = "480";
                    rowsUltimateJutsu[2][4].innerHTML = "607";
                    break;
                case "Attack":
                    rowsUltimateJutsu[1][5].innerHTML = "1128";
                    rowsUltimateJutsu[1][7].innerHTML = "102";
                    rowsUltimateJutsu[2][2].innerHTML = "829";
                    rowsUltimateJutsu[2][4].innerHTML = "534";
                    break;
                case "Defense":
                    rowsUltimateJutsu[1][5].innerHTML = "1296";
                    rowsUltimateJutsu[1][7].innerHTML = "85";
                    rowsUltimateJutsu[2][2].innerHTML = "571";
                    rowsUltimateJutsu[2][4].innerHTML = "742";
                    break;
                case "Skill":
                    rowsUltimateJutsu[1][5].innerHTML = "1029";
                    rowsUltimateJutsu[1][7].innerHTML = "165";
                    rowsUltimateJutsu[2][2].innerHTML = "627";
                    rowsUltimateJutsu[2][4].innerHTML = "436";
                    break;
                case "Utility":
                    rowsUltimateJutsu[1][5].innerHTML = "1218";
                    rowsUltimateJutsu[1][7].innerHTML = "112";
                    rowsUltimateJutsu[2][2].innerHTML = "607";
                    rowsUltimateJutsu[2][4].innerHTML = "574";
                    break;
            }
            rowsUltimateJutsu[6][2].innerHTML = rowsCheckByLv[7][3].innerHTML;
            rowsUltimateJutsu[6][4].innerHTML = rowsCheckByLv[7][5].innerHTML;
            rowsUltimateJutsu[6][6].innerHTML = rowsCheckByLv[7][7].innerHTML;
            rowsUltimateJutsu[7][1].innerHTML = rowsCheckByLv[7][1].innerHTML;
            break;
        case "Lv 100/100":
            rowsUltimateJutsu[3][1].innerHTML = "1.50%";
            rowsUltimateJutsu[3][3].innerHTML = "1.50%";
            rowsUltimateJutsu[5][4].innerHTML = "15/15";

            switch (rowsUltimateJutsu[1][0].innerHTML) {
                case "Assist":
                    rowsUltimateJutsu[1][5].innerHTML = "1730";
                    rowsUltimateJutsu[1][7].innerHTML = "223";
                    rowsUltimateJutsu[2][2].innerHTML = "740";
                    rowsUltimateJutsu[2][4].innerHTML = "940";
                    break;
                case "Attack":
                    rowsUltimateJutsu[1][5].innerHTML = "";
                    rowsUltimateJutsu[1][7].innerHTML = "";
                    rowsUltimateJutsu[2][2].innerHTML = "";
                    rowsUltimateJutsu[2][4].innerHTML = "";
                    break;
                case "Defense":
                    rowsUltimateJutsu[1][5].innerHTML = "1980";
                    rowsUltimateJutsu[1][7].innerHTML = "138";
                    rowsUltimateJutsu[2][2].innerHTML = "877";
                    rowsUltimateJutsu[2][4].innerHTML = "1130";
                    break;
                case "Skill":
                    rowsUltimateJutsu[1][5].innerHTML = "1596";
                    rowsUltimateJutsu[1][7].innerHTML = "254";
                    rowsUltimateJutsu[2][2].innerHTML = "955";
                    rowsUltimateJutsu[2][4].innerHTML = "684";
                    break;
                case "Utility":
                    rowsUltimateJutsu[1][5].innerHTML = "1881";
                    rowsUltimateJutsu[1][7].innerHTML = "175";
                    rowsUltimateJutsu[2][2].innerHTML = "940";
                    rowsUltimateJutsu[2][4].innerHTML = "881";
                    break;
            }
            rowsUltimateJutsu[6][2].innerHTML = rowsCheckByLv[14][3].innerHTML;
            rowsUltimateJutsu[6][4].innerHTML = rowsCheckByLv[14][5].innerHTML;
            rowsUltimateJutsu[6][6].innerHTML = rowsCheckByLv[14][7].innerHTML;
            rowsUltimateJutsu[7][1].innerHTML = rowsCheckByLv[14][1].innerHTML;
            break;
    }
}
ultimateJutsu();