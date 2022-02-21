function abilityListImages() {
    let abilityListItemLength = document.getElementsByClassName("abilityListImages");

    for (let i = 0; i < abilityListItemLength.length; i++) {
        switch (document.getElementsByClassName("abilityListImages").item(i).alt) {
            case "increasePower":
                document.getElementsByClassName("abilityListImages").item(i).src = "https://lh3.googleusercontent.com/pw/AM-JKLXFLakjaeC_OuyP-ZxXsXRZ8ZDxhZAok1qOUGzP-fmo1mhGXvy1bwOYELyPPVk6pzPuqFBG2kJ3Aa1ylnyULr4_si9lgrSsPGyCsKXXt_eL9R9N60EJKetV7zWrnHjIFNEPlZGtGQNSj1uZOePi0AZj=w114-h115-no?authuser=0";
                break;
            case "increaseUltimatePower":
                document.getElementsByClassName("abilityListImages").item(i).src = "https://lh3.googleusercontent.com/pw/AM-JKLXL5PeVymgqghKs3nPYrw3SeEldkRcXZSFsezuGcLoomfNMqS4PA2mohbHgf_QmKLXpseHHdKnCuPWM7iq_Ck-HlYANkVb5DdAXj7UW3z2DaLu35HPxgALDLZg6-qo9EAgFIEMSHBwHgkUzF-x5KFZX=s114-no?authuser=0";
                break;
            case "abilityPoints":
                document.getElementsByClassName("abilityListImages").item(i).src = "https://lh3.googleusercontent.com/pw/AM-JKLUkYukn8zFT9m5nFayzEeVHT6YH96_D4KUBgp2yxCVUZeanpXbFUN52HW0sgJo2lqsDa0DsPoNec1N7BRe5Me_-QEQbQf80dEXBCW9Qv5N-TDHTJuu4Dx8ZpeAuwNB1SegN8UjVKZEB395wS-5w1BUv=w148-h149-no?authuser=0";
                break;

        }
    }
}