const veggies = [
  {
    name: "Aubergine",
    months: [8, 9, 10],
    imageUrl: "/images/Aubergine.svg",
    text: "Lorem ipsum ...",
  },
  { name: "Bärlauch", months: [3, 4, 5], imageUrl: "/images/Bärlauch.svg" },
  {
    name: "Blumenkohl",
    months: [5, 6, 7, 8, 9, 10],
    imageUrl: "/images/Blumenkohl.svg",
    text:
      "Sein Name spricht Wahres: Der Blumenkohl ist wirklich eine „Kohl-Blume“. Gegessen werden die fleischig verdickten Blütenzweige mitsamt den noch nicht voll entwickelten Blütenknospen, den kleinen Röschen. Die weiße Farbe behalten diese nur, wenn sie nicht der Sonne ausgesetzt werden und daher kein Chlorophyll – den grünen Blattfarbstoff – entwickeln. Die Anbauer knicken einige der inneren Hüllblätter über den Kohlkopf und binden sie zusammen. Heute wachsen die Blätter durch Züchtung oft selbst auf diese Weise.",
  },
  {
    name: "Bohnen",
    months: [7, 8, 9, 10],
    imageUrl: "/images/Bohnen.svg",
    text:
      "Bohnen sind eine der ältesten Kulturpflanzen der Menschheit. Grüne Bohnen, auch Gartenbohnen genannt, sind eigentlich Exoten, die erst im 16. Jahrhundert nach Europa kamen und hier rasche Verbreitung als Alternative zu Dicken Bohnen fanden. Sie werden unterschieden in Busch- und Stangenbohnen. Die strauchartig wachsenden Buschbohnen brauchen keine Stütze und werden für den Frischmarkt und für die Verarbeitung zu Konserven oder Tiefkühlware angebaut. Ihre Ernte erfolgt meist voll mechanisiert. Stangebohnen wachsen an Stützen wie Holzstangen oder winden sich an Stahldraht oder Schnüren empor, weshalb sie auch als Kletter- oder Hochbohnen bezeichnet werden. Ihre Ernte erfolgt ausschließlich per Hand. Produziert wird in erster Linie für den Frischmarkt. Mit dem ersten Frost endet die Bohnensaison.",
  },
  {
    name: "Brokkoli",
    months: [6, 7, 8, 9, 10],
    imageUrl: "/images/Brokkoli.svg",
    text:
      "Brokkoli stammt wie alle Kohlarten vom Wildkohl aus dem Mittelmeergebiet ab und wurde ursprünglich überwiegend in Südeuropa angebaut. Vor 200 Jahren wurde er erstmals hierzulande kultiviert. Von einer kulinarischen Rarität hat er sich zu einem weitverbreiteten Gemüse entwickelt. Seinen Namen hat der Brokkoli vom lateinischen Wort „brachium“, das bedeutet Zweig. Und tatsächlich sehen die Röschen wie kleine Bäume aus. Die „Baumkronen“ bestehen zum Zeitpunkt der Schnittreife aus voll entwickelten und meist grünen Blütenknospen, die auf den verzweigten, fleischigen Stielen sitzen. Außer den gewöhnlichen grünen oder blaugrünen Sorten gibt es auch weißen, gelben und violetten Brokkoli. ",
  },
  {
    name: "Champigons",
    months: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    imageUrl: "/images/Champignons.svg",
    text:
      "Bereits Mitte des 17. Jahrhunderts am Hofe von Ludwig XIV. war der Champignon eine Gaumenfreude. Zu dieser Zeit entdeckte ein französischer Gärtner, dass auf seinen abgeernteten Melonenfeldern Champignons sprießen, und entwickelte die Idee, die Pilze selber anzubauen. Bald kam man dahinter, dass sie lichtscheue Geschöpfe sind, die am besten in dunklen Gewölben und Kellern gedeihen. Doch erst seit Anfang des 20. Jahrhunderts entstand eine nennenswerte Champignonzucht in Produktionsbetrieben mit abgedunkelten, klimatisierten Spezialhallen. Wie seine wilden Verwandten hat auch der Kultur-Champignon hohe Ansprüche an seine Lebensgrundlage. Er wächst nur auf einem speziellen Nährboden, der aus frischen, organischen Rohstoffen produziert wird. Dieses Substrat wird mit „Pilzbrut“, das sind mit Pilzmycel überwachsende Weizenkörner, geimpft. Bei einer Temperatur von 25 Grad durchwächst das Pilzmycel das Substrat. Nach zwei Woche wird auf die Beete eine Schicht Deckerde aufgebracht und die Temperatur auf 16 Grad gesenkt. Dieser Kälteschock löst nach weiteren zwei Wochen das Pilzwachstum aus. Schon eine Woche später beginnt die Ernte. ",
  },
  {
    name: "Chinakohl",
    months: [6, 7, 8, 9, 10, 11],
    imageUrl: "/images/Chinakohl.svg",
    text:
      "Schon sein Name verrät es: Der Chinakohl wird bereits seit dem 5. Jahrhundert traditionell in China angebaut. Dort wird er „Zahn des weißen Drachens“ genannt. Vermutlich ist er eine Kreuzung zwischen dem chinesischen Blattgemüse „Pak-Choi“ und einer Rübenart. In Europa musste man noch bis Ende des 19. Jahrhunderts auf den abwechslungsreichen Kohl verzichten. Die Gärten deutscher Feinschmecker erreichte er nach einem Umweg über Amerika. Erst seit wenigen Jahrzehnten erobert der Chinakohl die Märkte und gewinnt laufend an Bedeutung. Der Chinakohl stammt aus der Familie der Kreuzblütler. Er wird auch Blätterkohl, Pekingkohl oder Kochsalat genannt. Seine gewellten Blätter schließen sich von der Wurzel aus zu einem lockeren kegelförmigen oder ovalen Kopf von 50 bis 60 cm Länge zusammen. Der sonst kohltypische Strunk fehlt ihm vollständig. Chinakohl hat je nach Sorte gelbe bis grüne Außenblätter. Die Innenblätter sind gelb bis goldgelb. Erntefrische Köpfe wiegen zwischen 800 und 1200 g.",
  },
  {
    name: "Erbsen",
    months: [6, 7, 8, 9],
    imageUrl: "/images/Erbse.svg",
    text:
      "Erbsen sind zart und süß – je frischer sie sind, desto besser. Sie schmecken als Beilage, als Salat, in Eintöpfen und vielen anderen köstlichen Speisen! Nicht nur bei Tieren beliebt, ist die Erbse auch bei uns eine wichtige Nutz- und Speisepflanze. Die Hülsenfrucht wird hierzulande häufig im Osten der Republik angebaut. Verwendet werden sie häufig als Konserven oder tiefgekühlt, da sie nicht besonders lange haltbar sind.",
  },
  {
    name: "Fenchel",
    months: [6, 7, 8, 9, 10, 11],
    imageUrl: "/images/Fenchel.svg",
    text:
      "Gemüsefenchel ist auch als „Bologneser Fenchel“, „Finocchio“ oder „Süßer Fenchel“ bekannt. Ursprünglich stammt er aus Vorderasien und dem Mittelmeerraum. Bereits bei den Ägyptern, Griechen und Römern war der wilde Fenchel als Gewürz- und Arzneipflanze beliebt. Der heutige Fenchel ist eine Zuchtform aus einer wilden Art. Die Pflanze bildet oberirdisch eine Zwiebel, die auch als Knolle bezeichnet wird. Sie entsteht durch die Verdickung der Blattstiele. Die faustgroße, weiß-grüne Knolle mit grünen, gefiederten Blättern ist je nach Sorte rund oder lang gestreckt.",
  },
  {
    name: "Frühlingszwiebel",
    months: [5, 6, 7, 8, 9, 10, 11],
    imageUrl: "/images/Frühlingszwiebel.svg",
    text:
      "Sie sind die Frühjahrsboten unter den heimischen Gemüsespezialitäten: Frühlingszwiebeln haben ab März in Deutschland Saison. Egal ob auf dem Butterbrot, in Saucen und Pasten oder als würzige Zutat in Salaten: Das Bodengewächs verleiht zahlreichen Speisen den richtigen Geschmack. Frühlingszwiebeln sind wahre Allround-Talente. Ihre kulinarischen Einsatzmöglichkeiten sind dank der fein-milden Schärfe nahezuunbegrenzt. Besonders aromatisch schmeckt das zur Familie der Winterzwiebeln zählende Gemüse, wenn es möglichst frisch auf den Tisch kommt. Kein Wunder,dass Verbraucher immer häufiger zu Waren aus regionaler Erzeugung greifen. Ein Trend, den die Experten der AMI Agrarmarkt Informations-Gesellschaft mbH bestätigen: Demnach bauten deutsche Landwirte 2011 auf 1949 Hektar Frühlingszwiebeln an – ein Plus von 15 (14,78) Prozent gegenüber 2010. Die Einkaufsmenge stieg um 4,2 Prozent auf rund 22.000 (21840,953) Tonnen.",
  },
  {
    name: "Grünkohl",
    months: [1, 2, 11, 12],
    imageUrl: "/images/Gruenkohl.svg",
    text:
      "Grünkohl gehört zu den Kohlsorten mit dem höchsten Gehalt an Vitamin C und enthält zudem das Vitamin K. Der Grünkohl, Braunkohl oder Krauskohl gehört zur Familie der Kreuzblütengewächse. Er stammt vom Wildkohl ab und ist eine schnellwüchsige Blattkohlart. Hierzulande ist Grünkohl besonders im Norden beliebt. Das typische Wintergemüse kommt bei vielen zur Weihnachtszeit auf den Tisch.",
  },
  {
    name: "Gurke",
    months: [6, 7, 8, 9],
    imageUrl: "/images/Gurke.svg",
    text:
      "Die Gurke, auch als Kukumer und Gartengurke bezeichnet, ist ein Kürbisgewächs. Sie gehört zu den wirtschaftlich bedeutendsten Gemüsearten. Über den Ursprung der Salatgurke ist man sich uneinig, aber sicher ist: heutzutage wird sie weltweit angebaut. Neben den großen Salatgurken gibt es ebenfalls Mittelgroße (Vespergurken) und Kleine (Minigurken). ",
  },
  {
    name: "Karotte",
    months: [8, 9, 10],
    imageUrl: "/images/Karotte.svg",
    text:
      "Karotten gehören zu den ältesten heimischen Gemüsearten und waren bis zum Auftauchen der Kartoffel die meist verspeiste Beilage. Sie sind auch als Mohrrüben, Möhren, Gelbe Rüben oder in Süddeutschland als Rübli bekannt. Der Unterschied zwischen Möhren und Karotten ist reine Formsache. Karotten – so heißen oft die frühen, kleinen Möhrchen – sind kurz und stumpf, Möhren dagegen länglich-schmal. Eine optimale Möhre hat ein möglichst dünnes Mark (auch Herz genannt), eine möglichst dicke Rinde und ist von möglichst einheitlicher Farbe. Die Rinde ist der wertvollste Teil der Wurzel. Das Herz ist meistens etwas heller und enthält weniger Zucker, Nähr- und Aromastoffe.",
  },
  {
    name: "Kartoffel",
    months: [8, 9, 10],
    imageUrl: "/images/Kartoffel.svg",
    text:
      "Kartoffeln haben wenige Kalorien, sind dank ihrer Nährwerte aber ideale Sattmacher. Die Kartoffel ist eines der wichtigsten Nahrungsmittel der Welt und es wird jährlich ca. 380 Millionen Tonnen geerntet, davon in Deutschland rund 10 Mio. Tonnen. Die Kartoffel (auch in vielen Teilen Deutschlands Erdapfel genannt) ist die unterirdische Knolle, mit denen die Pflanze sich vegetativ vermehrt. Das Wort Kartoffel leitet sich vom lateinischen Wort terrae tuber („Erdknolle“) ab.",
  },
  {
    name: "Knollensellerie",
    months: [7, 8, 9, 10, 11],
    imageUrl: "/images/Knollensellerie.svg",
    text:
      "Botanisch betrachtet gehört Knollensellerie zu den Doldengewächsen und ist so mit den Möhren verwandt. Er stammt vom Wild- oder Sumpfsellerie ab, der in Nordeuropa auf feuchten, salzreichen Böden – z.B. am Meeresstrand und in Sümpfen – gedeiht. Als Gemüse ist Sellerie in Mitteleuropa erst seit dem Mittelalter bekannt. Der Anbau blieb jedoch bis zum 18. Jahrhundert auf Hof- und Klostergärten beschränkt. Die kugelige Knolle ist eigentlich eine Sprossrübe, da sie zu gleichen Teilen aus der gestauchten Sprossachse und der verdickten Wurzel gebildet wird. Knollensellerie ist außen gelbbraun und innen weiß bis cremefarben. Als Gewürz- und Heilmittel hat Sellerie eine lange Tradition. Bei den alten Ägyptern wurde er vermutlich als Grabschmuck verstorbenen Königen beigelegt. Homer, der erste Dichter des Abendlandes, hat den Sellerie als Lieblingsgemüse der Zauberin Kalypso in seiner Odyssee besungen. Seit dieser Zeit haftet der Knolle der Ruf eines Aphrodisiakums an, obwohl ihre erotisierende Wirkung niemals nachgewiesen werden konnte. In jedem Fall genoss der Sellerie bei den Griechen höchstes Ansehen und durfte sogar zusammen mit Lorbeer verehrungswürdige Häupter bekränzen.  ",
  },
  {
    name: "Kohlrabi",
    months: [8, 9, 10],
    imageUrl: "/images/Kohlrabi.svg",
    text:
      "Schon die Römer haben das Gemüse botanisch richtig eingeordnet, sie nannten es „caulorapa“, die „Stängelrübe“. Die kugeligen Knollen entwickeln sich aus dem verdickten Stiel der Pflanze. Da der essbare Teil des Kohlrabis oberirdisch wächst, nennt man ihn auch Oberrübe. Die von einer Wachsschicht überzogenen Knollen können plattrund, rund oder oval sein und bis zu 20 cm Durchmesser erreichen. Die Sorten unterscheiden sich durch ihr weiße bis zartgrüne bzw. blaue bis violette Schalenfärbung. Das Fleisch ist jedoch bei allen Sorten weiß.",
  },
  {
    name: "Kürbis",
    months: [8, 9, 10, 11],
    imageUrl: "/images/Kuerbis.svg",
    text:
      "Kürbisse gibt es in sehr vielen verschiedenen Sorten. Der wohl bekannteste Speisekürbis ist der Hokkaido. Feurig-warme Kürbissuppe und schaurig-schöne Halloween-Partys: Herbstzeit ist Kürbiszeit! Dann kommen die runden Früchte, die als Beerengewächs zur Familie der Gurken und Tomaten zählen, in Deutschland erntefrisch auf den Tisch. Kürbisse haben dabei in immer mehr Haushalten einen festen Platz auf dem Speiseplan. Die Anbau- und Absatzzahlen wachsen hierzulande konstant. Angebaut wird er in der Nähe von Frankfurt und Mannheim, in Nordrhein-Westfalen und Norddeutschland.",
  },
  {
    name: "Lauch",
    months: [1, 2, 3, 4, 7, 8, 9, 10, 11, 12],
    imageUrl: "/images/Lauch.svg",
    text:
      "Der Lauch stammt ursprünglich aus Südeuropa, genauer genommen Italien. Es wird vermutet, dass er schon bei den Ägyptern verwendet wurde. Der Lauch stammt ursprünglich aus Italien. Es wird vermutet, dass er schon bei den Ägyptern verwendet wurde. Den Weg nach Deutschland fand der Lauch allerdings erst im Mittelalter und wird heute vor allem in Süd- und Westdeutschland angebaut.",
  },
  {
    name: "Mais",
    months: [6, 7, 8, 9, 10],
    imageUrl: "/images/Mais.svg",
    text:
      "Den besten Geschmack hat Zuckermais unmittelbar nach der Ernte, bei der Lagerung verliert er an Aroma. Beim Anbau kommt es auf den richtigen Zeitpunkt an... In Deutschland wird der Zuckermais in Süd/West Deutschland, in der Nähe von Frankfurt, Mannheim und Karlsruhe, angebaut. Dabei kommt es auf den richtigen Zeitpunkt an: Wird Zuckermais zu früh gesät, bedrohen kalte Nächte die Pflanzen – bei späterer Aussaat gibt es manchmal Probleme mit dem Reifen der Kolben. Vor allem wenn man selbst Samen für das kommende Jahr ernten möchte.",
  },
  {
    name: "Mangold",
    months: [5, 6, 7, 8, 9, 10],
    imageUrl: "/images/Mangold.svg",
    text:
      "Mangold war lange Zeit in Vergessenheit geraten, dabei ist das Gemüse doch so gesund! Mangold, auch Krautstiel genannt, ist eine Gemüsepflanze und eine Kulturform der Rübe. Es kann in Stiel- oder Rippen-Mangold, sowie Schnitt- oder Blatt-Mangold unterschieden werden. Bis Ende des ersten Weltkriegs war Mangold hierzulande äußerst beliebt. Unsere Vorfahren verspeisten das attraktive Blattgemüse gern und oft – bis ihm der Spinat den Rang ablief.  Dabei ist der botanisch zu den Gänsefuß-Gewächsen zählende Mangold weitaus aromatischer und würziger.",
  },
  {
    name: "Paprika",
    months: [8, 9, 10],
    imageUrl: "/images/Paprika.svg",
    text:
      "Die Paprika gehört zur Familie der Nachtschattengewächse. Sie ist vor allem wegen ihrer Früchte bekannt, die als Gemüse und Gewürz verwendet werden. Ursprünglich stammt die Paprika aus Mittel- und Südamerika, wird heutzutage allerdings weltweit in der tropischen und gemäßigten Zone angebaut. Um eine durchgängige Versorgung zu gewährleisten wird die Paprika in mehreren Sätzen gepflanzt. Häufig als Schoten bezeichnet ist die Paprika sehr form- und farbenreich. Sie benötigen ca. 50 bis 120 Tage um nach der Befruchtung ausgereift zu sein. In Deutschland wird die Paprika hauptsächlich in blockigen Paprika-Typen den ganzen Sommer über aus deutschen Beständen verkauft, da die Paprika im Gewächshaus oder im Folientunnel überall angebaut werden kann. Auch Spitzpaprika-Typen werden hierzulande angebaut. Die verschiedenen Farben der Paprika sind auf den Reifegrad zurückzuführen: Im unreifen Zustand sind alle Paprika grün, mit zunehmendem Reifegrad werden sie gelblicher oder rötlicher. Mit der Reife werden sie auch süßer im Geschmack.",
  },
  {
    name: "Pastinake",
    months: [1, 2, 3, 9, 10, 11, 12],
    imageUrl: "/images/Pastinake.svg",
    text:
      "Pastinaken sind ein besonders bekömmliches Wintergemüse, das in Hauptgerichten, Beilagen und sogar im Kuchen schmeckt! Bis zur Mitte des 18. Jahrhunderts waren Pastinaken in Deutschland ein wichtiges Grundnahrungsmittel. Dies liegt an ihrer geringen Krankheitsanfälligkeit. Mit der Entdeckung der Kartoffel verlor die Pastinake hierzulande allerdings ihre Bedeutung – holt jetzt aber wieder auf. Nicht zuletzt bei Sterneköchen, denn aus dem würzigen Wurzelgemüse lassen sich nämlich sowohl deftige Eintöpfe als auch feine Suppen und Pürees zubereiten.",
  },
  {
    name: "Radieschen",
    months: [4, 5, 6, 7, 8, 9, 10],
    imageUrl: "/images/Radieschen.svg",
    text:
      "Die Verwandtschaft mit dem Rettich schmeckt man den Radieschen an: Beide Pflanzen enthalten Senföl, welches das mehr oder minder scharfe Aroma ausmacht. Senföl wirkt sich positiv auf die Atmungsorgane aus und regt die Verdauung an. Die leichte Schärfe bringt den Kreislauf in Schwung und macht Appetit auf mehr. Im Laufe der Zeit haben die Züchter dem Radieschen zu einem perfekten Outfit verholfen. Neben den kugelrunden, roten Radieschen gibt es Liebhabersorten in länglich-ovaler Form und in zweifarbig rot-weißer, gelber oder weißer Schale. Sie werden gebündelt, mit mindestens zehn „Köpfen“ und mit grünem Laub angeboten. Ob die Wurzeln schön knackig sind, erkennt man sofort an den Blättern: Sind sie noch frisch, sind es auch die Wurzeln. Vor der Aufbewahrung im Kühlschrank sollten die Blätter abgedreht werden, um Wasserverluste zu vermeiden. Anschließend die Radieschen waschen, abtrocknen und in einen Gefrierbeutel oder eine Kunststoffbox geben – so bleiben sie mehrere Tage frisch und knackig.",
  },
  {
    name: "Rettich",
    months: [5, 6, 7, 8, 9, 10],
    imageUrl: "/images/Rettich.svg",
    text: "Lorem ipsum ...",
  },
  {
    name: "Rosenkohl",
    months: [1, 2, 3, 10, 11, 12],
    imageUrl: "/images/Rosenkohl.svg",
    text:
      "Noch im Jahr 1587 wurde der Kohl mit den vielen kleinen Köpfen als seltene und unbrauchbare Art beschrieben. Erst intensive Züchtungsarbeit in Belgien um 1785, später auch in Paris und England verwandelten den wilden Kohl nach und nach in eine schmackhafte Gemüseart. Die Pflanze bildet einen beblätterten, etwa einen Meter hohen Stamm mit kleinen, walnussgroßen Röschen in den Blattachseln. Die kleinen, grünen Kohlköpfe bestehen aus dicht übereinander liegenden Blättchen und schmecken herzhafter, aromatischer und feiner als die großen Kopfkohlarten.",
  },
  {
    name: "Rote Beete",
    months: [7, 8, 9, 10, 11],
    imageUrl: "/images/Rotebete.svg",
    text:
      "Rote Bete ist eine wahre Vitamin- und Mineralstoff-Lieferant, der richtig zubereitet köstlich schmeckt! Die Rote Bete wurde von den Römern nach Mitteleuropa gebracht, ihren Ursprung hat sie im Mittelmeerraum Nordafrikas.",
  },
  {
    name: "Rotkohl",
    months: [7, 8, 9, 10, 11],
    imageUrl: "/images/Rotkohl.svg",
  },
  {
    name: "Schwarzwurzel",
    months: [10, 11],
    imageUrl: "/images/Schwarzwurzel.svg",
  },
  { name: "Spargel", months: [4, 5, 6], imageUrl: "/images/Spargel.svg" },
  {
    name: "Spinat",
    months: [3, 4, 5, 9, 10],
    imageUrl: "/images/Spinat.svg",
  },
  {
    name: "Spitzkohl",
    months: [6, 7, 8, 9, 10, 11],
    imageUrl: "/images/Spitzkohl.svg",
  },
  {
    name: "Staudensellerie",
    months: [5, 6, 7, 8, 9, 10, 11],
    imageUrl: "/images/Staudensellerie.svg",
  },
  { name: "Steckrübe", months: [9, 10], imageUrl: "/images/Steckruebe.svg" },
  { name: "Tomate", months: [8, 9, 10], imageUrl: "/images/Tomate.svg" },
  {
    name: "Weißkohl",
    months: [7, 8, 9, 10, 11],
    imageUrl: "/images/Weisskohl.svg",
  },
  {
    name: "Wirsing",
    months: [6, 7, 8, 9, 10, 11],
    imageUrl: "/images/Wirsing.svg",
  },
  {
    name: "Zucchini",
    months: [6, 7, 8, 9, 10],
    imageUrl: "/images/Zucchini.svg",
  },
  {
    name: "Zuckerschote",
    months: [6, 7, 8, 9, 10],
    imageUrl: "/images/Zuckerschoten.svg",
  },
  { name: "Zwiebeln", months: [8, 9, 10], imageUrl: "/images/Zwiebel.svg" },
];

export { veggies };
