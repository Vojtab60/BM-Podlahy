# BM Podlahy, s.r.o. - redesign webu

## Informacni architektura

1. `index.html`
   Domovska stranka s hero blokem, vysvetlenim co firma dela, duvody duvery, prehledem sluzeb, ukazkami realizaci, postupem spoluprace a CTA na kontakt.

2. `sluzby.html`
   Samostatna stranka pro ctyri hlavni oblasti:
   - pokladka drevenych podlah
   - renovace a brouseni podlah
   - poradenstvi pri vyberu materialu
   - realizace v bytech, domech i komercnich interierech

3. `realizace.html`
   Galerie projektu a detailni bloky realizaci s nazvem, lokalitou nebo typem interieru, popisem a vice fotografiemi.

4. `o-firme.html`
   Strucny pribeh firmy, pristup k praci a duraz na detail, material a komunikaci.

5. `kontakt.html`
   Telefon, e-mail, sidlo firmy, jednoducha poptavka a vysvetleni, co klient potrebuje dodat na zacatku.

## Textovy koncept brandu

BM Podlahy maji pusobit jako poctiva ceska firma, ktera umi kvalitni remeslo a mluvi normalne. Znacka nestoji na luxusu ani na efektnich sloganech, ale na klidnem sebevedomi, presne praci a duvere, kterou vytvari zpusob komunikace. Vizual je editorialni, vzdusny a materialovy. Texty jsou konkretni, vecne a lidske.

Znacka zduraznuje:

- drevo jako prirozeny material, ne jako dekorativni kulisu
- detail jako soucast poctive prace
- jasnou domluvu bez mlzeni
- schopnost navrhnout rozumne reseni pro byt, dum i komercni interier

## Kde menit obsah

- Texty: v jednotlivych HTML souborech jsou komentarove poznamky `<!-- ... -->` u hlavnich sekci a mist, ktera se budou nejcasteji menit.
- Fotky: vsechny obrazky jsou lokalni placeholdery ve slozce `assets/`. Staci je nahradit skutecnymi fotografiemi a ponechat stejne cesty, nebo upravit `src` v HTML.
- Styly: centralne ve `styles.css`.
- Interakce: mobilni menu, zvyrazneni aktivni stranky a formular jsou ve `script.js`.

## Poznamka k formulari

Kontaktni formular je pripraveny jako staticka ukazka. Aktualne otevre predvyplneny e-mail pres `mailto:` a lze ho pozdeji napojit na realne odesilani bez zmeny vizualni struktury.
