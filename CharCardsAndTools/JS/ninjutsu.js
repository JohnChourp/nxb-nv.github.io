function createNinjutsu() {
    let rows = [[]];
    const table = document.getElementById("ninjutsu");
    let header = table.createTHead();

    rows[0] = header.insertRow(0);
    rows[1] = document.getElementById("ninjutsu").rows[1];
    rows[2] = document.getElementById("ninjutsu").rows[2];
    rows[3] = table.insertRow(3);

    rows[0][0] = rows[0].insertCell(0);
    rows[0][0].outerHTML = "<th colspan = 4 >Ninjutsu</th>";

    rows[0][1] = rows[0].insertCell(1);
    rows[0][1].outerHTML = "<th colspan = 4 >Max Card Stats</th>";

    rows[1][1] = rows[1].insertCell(1);
    let imgType = document.createElement("img");
    imgType.classList.add("typeImage");
    imgType.referrerPolicy = "no-referrer";
    rows[1][1].appendChild(imgType);

    rows[1][3] = document.getElementById("ninjutsu").rows[1].cells[3];
    let imgRank = document.createElement("img");
    imgRank.classList.add("rankImage");
    imgRank.alt = rows[1][3].innerHTML;
    rows[1][3].innerHTML = "";
    imgRank.referrerPolicy = "no-referrer";
    rows[1][3].appendChild(imgRank);

    rows[1][4] = rows[1].insertCell(4);
    rows[1][4].innerHTML = "HP";

    rows[1].insertCell(5);

    rows[1][6] = rows[1].insertCell(6);
    rows[1][6].innerHTML = "CP";

    rows[1].insertCell(7);

    rows[2][0] = document.getElementById("ninjutsu").rows[2].cells[0];
    rows[2][0].colSpan = "4";
    rows[2][0].rowSpan = "2";
    rows[2][0].classList.add("cardImageTable");

    let cardImage = document.createElement("img");
    cardImage.classList.add("cardImage");
    cardImage.referrerPolicy = "no-referrer";
    cardImage.src = rows[2][0].innerHTML;
    rows[2][0].innerHTML = "";
    rows[2][0].appendChild(cardImage);

    rows[2][1] = rows[2].insertCell(1);
    rows[2][1].innerHTML = "ATK";

    rows[2].insertCell(2);

    rows[2][3] = rows[2].insertCell(3);
    rows[2][3].innerHTML = "DEF";

    rows[2].insertCell(4);

    rows[3][0] = rows[3].insertCell(0);
    rows[3][0].innerHTML = "CRI";

    rows[3].insertCell(1);

    rows[3][2] = rows[3].insertCell(2);
    rows[3][2].innerHTML = "EVA";

    rows[3].insertCell(3);
}

function ninjutsu() {
    createNinjutsu();
    let rows = [[]], rowsNJByLvl = [[]], rowsNinJutsu = [[]], rowsLength;

    rowsLength = document.getElementById("ninjutsuCheckByLv").rows.length;
    rowsNinJutsu[0] = document.getElementById("ninjutsu").rows[6].cells;
    rowsNinJutsu[1] = document.getElementById("ninjutsu").rows[7].cells;

    for (let i = 0, j = 0; i < (rowsLength - 1) / 2, j < (rowsLength - 1) / 2; i = i + 2, j++) {
        rowsNJByLvl[j] = document.getElementById("ninjutsuCheckByLv").rows[2 + i].cells;
    }

    for (let i = 2, j = 1; i < (rowsLength - 1) / 2, j < ((rowsLength - 1) / 2) - 1; i++, j++) {
        rowsNJByLvl[i][1].innerHTML = eval("parseInt(rowsNJByLvl[1][1].innerHTML) + ( parseInt(rowsNJByLvl[1][1].innerHTML) - parseInt(rowsNJByLvl[0][1].innerHTML) ) * j");
        rowsNJByLvl[i][3].innerHTML = eval("parseInt(rowsNJByLvl[1][3].innerHTML) + ( parseInt(rowsNJByLvl[1][3].innerHTML) - parseInt(rowsNJByLvl[0][3].innerHTML) ) * j");
        rowsNJByLvl[i][5].innerHTML = eval("parseInt(rowsNJByLvl[1][5].innerHTML) + ( parseInt(rowsNJByLvl[1][5].innerHTML) - parseInt(rowsNJByLvl[0][5].innerHTML) ) * j") + ".00%";
        rowsNJByLvl[i][7].innerHTML = eval("parseInt(rowsNJByLvl[1][7].innerHTML) + ( parseInt(rowsNJByLvl[1][7].innerHTML) - parseInt(rowsNJByLvl[0][7].innerHTML) ) * j");
    }

    rows[0] = document.getElementById("ninjutsu").rows[1].cells;
    rows[0][0].style.fontWeight = "bold";
    document.getElementsByClassName("typeImage").item(0).alt = rows[0][0].innerHTML;
    rows[1] = document.getElementById("ninjutsu").rows[2].cells;
    rows[2] = document.getElementById("ninjutsu").rows[3].cells;
    rows[3] = document.getElementById("ninjutsu").rows[5].cells;

    switch (rows[0][2].innerHTML) {
        case "Lv 70/70":
            rows[2][1].innerHTML = "1.10%";
            rows[2][3].innerHTML = "1.10%";
            rows[3][4].innerHTML = "8/8";

            switch (rows[0][0].innerHTML) {
                case "Assist":
                    rows[0][5].innerHTML = "936";
                    rows[0][7].innerHTML = "119";
                    rows[1][2].innerHTML = "393";
                    rows[1][4].innerHTML = "499";
                    break;
                case "Attack":
                    rows[0][5].innerHTML = "936";
                    rows[0][7].innerHTML = "84";
                    rows[1][2].innerHTML = "682";
                    rows[1][4].innerHTML = "432";
                    break;
                case "Defense":
                    rows[0][5].innerHTML = "1083";
                    rows[0][7].innerHTML = "64";
                    rows[1][2].innerHTML = "472";
                    rows[1][4].innerHTML = "622";
                    break;
                case "Skill":
                    rows[0][5].innerHTML = "837";
                    rows[0][7].innerHTML = "135";
                    rows[1][2].innerHTML = "525";
                    rows[1][4].innerHTML = "349";
                    break;
                case "Utility":
                    rows[0][5].innerHTML = "999";
                    rows[0][7].innerHTML = "94";
                    rows[1][2].innerHTML = "499";
                    rows[1][4].innerHTML = "475";
                    break;
            }
            rowsNinJutsu[0][2].innerHTML = rowsNJByLvl[7][3].innerHTML;
            rowsNinJutsu[0][4].innerHTML = rowsNJByLvl[7][5].innerHTML;
            rowsNinJutsu[0][6].innerHTML = rowsNJByLvl[7][7].innerHTML;
            rowsNinJutsu[1][1].innerHTML = rowsNJByLvl[7][1].innerHTML;
            break;
        case "Lv 60/60":
            rows[2][1].innerHTML = "0.90%";
            rows[2][3].innerHTML = "0.90%";
            rows[3][4].innerHTML = "6/6";

            switch (rows[0][0].innerHTML) {
                case "Assist":
                    rows[0][5].innerHTML = "695";
                    rows[0][7].innerHTML = "87";
                    rows[1][2].innerHTML = "290";
                    rows[1][4].innerHTML = "367";
                    break;
                case "Attack":
                    rows[0][5].innerHTML = "695";
                    rows[0][7].innerHTML = "61";
                    rows[1][2].innerHTML = "504";
                    rows[1][4].innerHTML = "313";
                    break;
                case "Defense":
                    rows[0][5].innerHTML = "809";
                    rows[0][7].innerHTML = "44";
                    rows[1][2].innerHTML = "350";
                    rows[1][4].innerHTML = "466";
                    break;
                case "Skill":
                    rows[0][5].innerHTML = "611";
                    rows[0][7].innerHTML = "98";
                    rows[1][2].innerHTML = "394";
                    rows[1][4].innerHTML = "251";
                    break;
                case "Utility":
                    rows[0][5].innerHTML = "735";
                    rows[0][7].innerHTML = "69";
                    rows[1][2].innerHTML = "367";
                    rows[1][4].innerHTML = "352";
                    break;
            }
            rowsNinJutsu[0][2].innerHTML = rowsNJByLvl[5][3].innerHTML;
            rowsNinJutsu[0][4].innerHTML = rowsNJByLvl[5][5].innerHTML;
            rowsNinJutsu[0][6].innerHTML = rowsNJByLvl[5][7].innerHTML;
            rowsNinJutsu[1][1].innerHTML = rowsNJByLvl[5][1].innerHTML;
            break;
        case "Lv 40/40":
            rows[2][1].innerHTML = "0.50%";
            rows[2][3].innerHTML = "0.50%";
            rows[3][4].innerHTML = "2/2";

            switch (rows[0][0].innerHTML) {
                case "Assist":
                    rows[0][5].innerHTML = "408";
                    rows[0][7].innerHTML = "50";
                    rows[1][2].innerHTML = "169";
                    rows[1][4].innerHTML = "213";
                    break;
                case "Attack":
                    rows[0][5].innerHTML = "408";
                    rows[0][7].innerHTML = "35";
                    rows[1][2].innerHTML = "294";
                    rows[1][4].innerHTML = "181";
                    break;
                case "Defense":
                    rows[0][5].innerHTML = "477";
                    rows[0][7].innerHTML = "24";
                    rows[1][2].innerHTML = "205";
                    rows[1][4].innerHTML = "274";
                    break;
                case "Skill":
                    rows[0][5].innerHTML = "354";
                    rows[0][7].innerHTML = "58";
                    rows[1][2].innerHTML = "234";
                    rows[1][4].innerHTML = "144";
                    break;
                case "Utility":
                    rows[0][5].innerHTML = "427";
                    rows[0][7].innerHTML = "40";
                    rows[1][2].innerHTML = "213";
                    rows[1][4].innerHTML = "205";
                    break;
            }
            rowsNinJutsu[0][2].innerHTML = rowsNJByLvl[1][3].innerHTML;
            rowsNinJutsu[0][4].innerHTML = rowsNJByLvl[1][5].innerHTML;
            rowsNinJutsu[0][6].innerHTML = rowsNJByLvl[1][7].innerHTML;
            rowsNinJutsu[1][1].innerHTML = rowsNJByLvl[1][1].innerHTML;
            break;
    }
}