const fruities = [
  {
    name: "Apfel",
    months: [8, 9, 10, 11],
    imageUrl: "/images/Apfel.svg",
    text:
      "Der Apfel ist hierzulande das beliebtest Obst. Dies liegt zum einen an der großen Sortenvielfalt, aber natürlich auch an ihrem köstlichen Geschmack. Außerdem sind Äpfel in Deutschland fast das ganze Jahr lang verfügbar. Vom Alten Land bis zum Bodensee ernten die deutschen Obstbauern Äpfel. Der Apfel ist hierzulande das beliebteste Obst: Ganze 17 Kilogramm Äpfel isst jeder Deutsche durchschnittlich pro Jahr. Bundesweit sind mehr als 20 Apfelsorten im Handel erhältlich. Am liebsten beißen die Deutschen in den aromatisch-saftigen Elstar, gefolgt vom süß-säuerlichen Braeburn und dem feinsäuerlichen Jonagold.",
  },
  {
    name: "Birne",
    months: [9],
    imageUrl: "/images/Birne.svg",
    text:
      "Wie Apfel und Quitte zählt auch die Birne zum Kernobst und gehört zur Familie der Rosengewächse. Hinsichtlich der Sortenvielfalt kann die Birne mit dem Apfel gut mithalten. Weltweit sind mehr als 2500 Sorten bekannt, im deutschen Anbau sind 25 Sorten bedeutsam. Davon dominieren etwa zehn das Marktangebot. Tafelbirnen tragen allesamt vornehme Namen: Die berühmte, saftig-süße „Williams Christ“, die leicht würzige „Conférence“, „Clapps“ fein-säuerlicher „Liebling“, die weinsäuerlich-süße „Gellerts Butterbirne“, die süße und würzige „Alexander Lucas“ oder die „Köstliche aus Charneux“ mit fein säuerlichem Geschmack. Die Sorten unterscheiden sich in Form, Größe und Schalenfarbe, Saftgehalt, Fruchtﬂeischkonsistenz und natürlich dem Aroma.",
  },
  {
    name: "Blaubeere",
    months: [6, 7, 8, 9],
    imageUrl: "/images/Blaubeere.svg",
    text:
      "Blaubeeren lassen sich sowohl frisch verzehren als auch in der Küche verwerten. Sie färben, aufgrund der enthaltenen Pflanzenfarbstoffe Anthocyane, beim Verzehr den Mund und die Zähne rot bis blau. Blaubeeren werden regional auch Heidelbeeren, Schwarzbeeren oder Wildbeere genannt und stammen aus der Familie der Heidekrautgewächse. Von Ende Juni bis September haben Heidelbeeren bei uns Saison. Sie bevorzugen in der Natur feuchte Moorwiesen und das Unterholz lichter Moorwälder. Die Hauptanbaugebiete liegen in der Lüneburger Heide, in Brandenburg und im Oldenburger Raum sowie in Süddeutschland und Mittelbaden.",
  },
  {
    name: "Brombeere",
    months: [7, 8, 9],
    imageUrl: "/images/Brombeere.svg",
    text:
      "Das Wort Brombeere hat sich aus dem althochdeutschen Wort brāmberi‚ Dorngebüschbeere oder Beere des Dornstrauchs, entwickelt. Die Brombeere kommt in Deutschland frei in der Natur vor. Die Kletterpflanze, die bis zu 3 Meter hoch werden kann, blüht von Mai bis August und bevorzugt viel Sonne. Am besten geeignet sind halbschattige Lagen wie leichte Wälder, mit kalk- und stickstoffreichen Böden. Aber auch zu Hause oder im heimischen Garten lassen sich Brombeeren gut pflanzen. Damit sich schöne große Beeren bilden, ist eine gute und gleichmäßige Wasserversorgung wichtig.",
  },
  {
    name: "Erdbeere",
    months: [6, 7, 8, 9],
    imageUrl: "/images/Erdbeere.svg",
    text:
      "Ob pur, auf dem Kuchen, als Eis oder im Salat – Erdbeeren machen immer eine gute Figur. Die frischen Früchtchen aus heimischem Anbau haben von Ende April bis Anfang September hierzulande Saison. Im vergangenen Jahr wurden rund 138.600 Tonnen (AMI 2013) der roten Leckerbissen geerntet. Die meisten Erdbeeren stammten dabei aus Niedersachsen. Erdbeeren werden auch als „Königinnen des Gartens“ bezeichnet – und das zu Recht. Die aromatischen Früchte gehören neben Äpfeln zu den beliebtesten Obstsorten der Deutschen. Dies liegt zum einen an ihrer angenehmen Süße und zum anderen an ihren vielfältigen Einsatzmöglichkeiten. Die kleinen Hingucker punkten zudem durch eine geringe Kalorienanzahl und einen hohen Vitamin-C-Gehalt. Mit 65 Milligramm pro 100 Gramm Erdbeeren liegt dieser weit über dem von Zitronen und Orangen.",
  },
  {
    name: "Himbeere",
    months: [7, 8, 9],
    imageUrl: "/images/Himbeere.svg",
    text:
      "Von Juli bis August haben Himbeeren hierzulande Saison. Die heimischen Verbraucher bevorzugen Beeren aus der Region. Knapp 75 Prozent der verkauften Strauchbeeren kommen aus Deutschland. Aufgrund ihres angenehm süßen Geschmacks sind Himbeeren auch pur ein Genuss, sie lassen sich darüber hinaus zu Sommerköstlichkeiten wie Obstkuchen, Marmeladen, Gelees und Säften verarbeiten. Himbeeren sind reich an den Vitaminen C, B1 und B2. Außerdem enthalten sie Eisen und Ballaststoffe sowie zahlreiche wertvolle Mineralien wie Kalium, Calcium und Phosphor.",
  },
  {
    name: "Holunderbeere",
    months: [9, 10],
    imageUrl: "/images/Holunderbeere.svg",
    text:
      "Früher pflanzte man Holunder auf jedem Bauernhof. Er galt als Baum des Lebens und der Sippen, ihm wurden magische, beschützende Kräfte für Menschen und Tiere zugesprochen. Ob man an solche Legenden nun glaubt oder nicht, fest steht: Der zu den Gänsefußgewächsen gehörende Holunder kann jedenfalls dazu beitragen, Zwei- und Vierbeiner zu ernähren und gesund zu halten. Schon die Menschen der Jungsteinzeit sollen Holunderbeeren als Nahrungs- und Heilmittel genutzt haben. Vor allem seine herb-aromatischen Früchte sind seit Urzeiten besonders beliebt, denn aus Holunderbeeren, die oft auch Fliederbeeren genannt werden, lässt sich ein leckerer Saft kochen.",
  },
  {
    name: "Johannisbeere",
    months: [6, 7, 8],
    imageUrl: "/images/Johannisbeere.svg",
    text:
      "Es gibt etwa 50 verschiedene Sorten: Ihre Farben reichen von rot, rosa, gelblich und grünlich bis weiß und schwarz. Die roten Johannisbeeren gibt es auf dem Frischmarkt am häufigsten. Die gelblich-weiße Johannisbeere ist eine Albinoart der roten Sorte und eine absolute Rarität auf dem Markt. Die in Rispen angeordneten Beeren werden von Hand direkt in die Verkaufsschalen gepflückt und so bis in den September hinein auf dem Markt angeboten. Wegen ihres säuerlich-bitteren Geschmacks schmecken sie gesüßt oder in einem Obstsalat am besten. Für die Herstellung von Konfitüren, Fruchtgetränken, Likören und Weinen sind sie gut geeignet. Beliebt sind die schwarzen Beeren auch zum Verfeinern von Wildgerichten. Rote Johannisbeeren mit ihrem leicht säuerlich-herben Aroma munden roh ausgesprochen gut – ob mit Zucker und Milch, in Quark oder Joghurt oder als Tortenbelag. Gekocht verwendet man sie vor allem in Roter Grütze oder bereitet aus ihnen Gelees, Konfitüren und Säfte.",
  },
  {
    name: "Kirsche",
    months: [6, 7, 8],
    imageUrl: "/images/Kirsche.svg",
    text:
      "Je nach Reifezeit werden sogenannte Kirschwochen unterschieden. In jeder Woche erreichen unterschiedliche Kirschsorten ihre Reife – das sorgt für geschmackliche Abwechslung. Der Erntezeitraum erstreckt sich bis in den August hinein. Die Obstbauern hätscheln die empfindlichen Süßkirschen geradezu: Zum Schutz vor Regenschauern spannen sie riesige Schirme über ihre Süßkirschenanlagen auf, damit die voller Saft stehenden Früchte nicht aufplatzen. Rund ein Kilogramm Kirschen lässt sich jeder Bundesbürger durchschnittlich pro Jahr schmecken. Viele naschen sie pur. Das heißt aber nicht, dass man sie nur von der Hand in den Mund genießen kann: Als fruchtige Füllung von Sahnetorten oder in leckeren Quarkspeisen zeigen sie, was in ihnen steckt. Auch als Verzierung sind die süßen Früchtchen einfach spitze.",
  },
  {
    name: "Mirabelle",
    months: [7, 8, 9],
    imageUrl: "/images/Mirabellen.svg",
    text:
      "Sie sind die kleinen, gelben Schwestern der Pflaumen: Mirabellen. Die süßen Früchte haben hierzulande zwischen Juli und September Saison. Im vergangenen Jahr kauften die Deutschen rund 1.300 Tonnen des leckeren Obstes. Fast 90 Prozent stammten dabei aus heimischem Anbau. Mirabellen sind leicht steinlösend, die Früchte lassen sich deshalb einfach zubereiten. Um das Obst einzukochen, sollte es kurz in heißem Wasser erhitzt werden. So löst sich die Schale vom Fruchtfleisch und die Mirabellen können im Anschluss ganz leicht durch ein Sieb gedrückt werden.",
  },
  {
    name: "Pflaume",
    months: [7, 8, 9],
    imageUrl: "/images/Pflaume.svg",
    text: [
      "Zugegeben - bei diesem Steinobst kann man ganz schnell den Überblick verlieren. Weltweit gibt es über 2000 Sorten, die wir unter dem Oberbegriff Pflaumen zusammenfassen. Für unsere Warenkunde konzentrieren wir uns aber auf die vier gängigsten Sorten, die Pflaumen, Zwetschgen, Renekloden und Mirabellen. - Pflaumen sind blauviolett, erkennbar an einer ausgeprägten Bauchnaht. Das Fruchtfleisch ist nur schwer vom Kern zu lösen.",
      "- Zwetschgen sind tiefblau mit einer länglichen Form, die spitz zu den Enden verläuft. Ihr Fruchtfleisch ist süßer und leichter vom Kern zu lösen.",
      "- Die kugelförmigen Renekloden gehören zu den Edelpflaumen, sie sind rot, grün oder gelb.",
      "- Die kirschgroßen Mirabellen haben eine glatte gelbe Haut und ein süßes Fruchtfleisch.",
    ],
  },
  {
    name: "Quitte",
    months: [10, 11],
    imageUrl: "/images/Quitte.svg",
    text:
      "Quitten sind die Urgroßmütter der Marmelade. In Portugal heißt sie aus gutem Grund marmelo, denn dort kocht man aus den meist steinharten Früchten mit dem von Natur aus hohen Pektingehalt besonders gern süßen Brotaufstrich. Auch hierzulande wandern Quitten meistens in den Einmachtopf. Was allerdings viele zögern lässt, Quitten zu kaufen, ist die Tatsache, dass sowohl Schale als auch Fruchtfleisch extrem hart sind. Roh kann man Quitten nicht essen, aber Ausnahmen bestätigen auch hier die Regel, denn einige der weltweit etwa 200 Quittensorten kann man auch wie einen Apfel direkt vom Baum vernaschen. Bei den meisten der bei uns erhältlichen Quitten wäre das beherzte Reinbeißen allerdings fatal, denn sie sind steinhart und müssen grundsätzlich gekocht werden, um genießbar zu sein.",
  },
  {
    name: "Rhabarber",
    months: [4, 5, 6],
    imageUrl: "/images/Rhabarber.svg",
    text:
      "Fürchten Sie, dass Ihnen der Rhabarber zu sauer ist, dann greifen Sie zu Beginn der Erntezeit zu, da schmeckt er milder. Rhabarber stammt aus dem Himalaya und wurde im 11. Jahrhundert zuerst aus medizinischen Gründen nach Europa importiert. Später entwickelten sich in Norddeutschland große Anbaugebiete, welche sich weiter nach Nordrhein-Westfalen und in den Süden ausdehnten.",
  },
  {
    name: "Stachelbeere",
    months: [6, 7, 8],
    imageUrl: "/images/Stachelbeere.svg",
    text:
      "Lange bevor die Stachelbeere ihren Einzug in unsere Küchen hielt, wuchs sie als wilder Strauch an Hecken und Mauern, an Felsen und in Bergwäldern. Ihre ursprüngliche Heimat liegt in Nordafrika und Eurasien. Doch kaum war sie im 16. Jahrhundert entdeckt, begann man sie zu züchten und mit ähnlichen Arten zu kreuzen. Wie der Name schon sagt, besitzt die Stachelbeere von Natur aus Stacheln an den Stängeln. Neuere Züchtungen ergaben auch stachelfreie Sorten. Stachelbeeren werden als Büsche, Hochstämmchen oder Hecken kultiviert. Am liebsten mögen sie leicht schattige Plätzen, sonst bekommen die Früchte einen Sonnenbrand und faulen.",
  },
  {
    name: "Traube",
    months: [9, 10],
    imageUrl: "/images/Traube.svg",
    text:
      "Weintrauben (eigentlich Weinbeeren; auch Tafeltrauben oder einfach Trauben genannt) gehören zu den ältesten Obstsorten überhaupt. Die ersten Funde von nahen Verwandten der Weinrebe stammen aus dem Tertiär, also aus der ganz frühen Erdgeschichte. Die größten Anbaugebiete für Trauben liegen in Europa. Auch wenn Kalifornien neben Südafrika und anderen Ländern in Übersee zu den großen Anbaugebieten für Wein gehört, kommen ungefähr zwei Drittel der Weintrauben-Ernte aus Spanien, Frankreich, Italien, Griechenland, der Türkei und den Balkanländern. Einen kleinen Teil steuert auch Deutschland bei, allerdings sind die bei uns wachsenden Weintrauben selten süß genug zum Vernaschen. Vermutlich genau deshalb gelten die Deutschen als weltweit größter Abnehmer für Tafeltrauben. Die eigentliche Traube ist übrigens die Form, in der die Beeren rispenförmig wachsen.",
  },
  {
    name: "Zwetschge",
    months: [7, 8, 9, 10],
    imageUrl: "/images/Zwetschge.svg",
    text:
      "Wenn es um Zwetschgen (auch Zwetschen oder Zwetschken genannt) geht, herrscht bei den meisten Verwirrung: Ist das nicht dasselbe wie Pflaumen? Ja und nein, müsste die korrekte Antwort lauten: Beide sind botanisch zwar sehr eng verwandt, gehören aber trotzdem jeweils einer eigenen Steinfruchtart an. Es gibt allerdings auch Kreuzungen aus Pflaume und Zwetschge, bei denen sogar Fachleute ins Grübeln kommen, weil sie sich mit ihrer ovalen Form und der violetten Farbe zum Verwechseln ähnlich sehen und kaum ein er Art zuzuordnen sind. Die alte Regel lautet zwar: Pflaumen erkennt man an ihrer länglichen „Naht“, während Zwetschgen eine komplett glatte Haut haben – doch bei den Kreuzungen stimmt eben auch diese Regel nur bedingt. Am einfachsten ist die Unterscheidung bei den großen Sorten: Was eher länglich aussieht, ist eindeutig eine Zwetschge. Auch die Farbe der Haut kann Auskunft über die wahre Identität geben: Hellrot, rot, gelb oder grün leuchtet sie nämlich nur bei Pflaumen, Zwetschgen dagegen haben immer eine violette Farbe. Ein weiteres typisches Kennzeichen von Zwetschgen: Ihr Stein lässt sich im Gegensatz zu dem der Pflaume ganz leicht aus dem gelben und sehr saftigen Fruchtfleisch lösen. Nicht zuletzt das macht sie so beliebt als Kuchenbelag, denn mit Zwetschgen spart man eine ganze Menge Arbeit und Zeit. Außerdem behalten sie auch bei Ofenhitze gut ihre längliche Form und zerfallen nicht.",
  },
];

export { fruities };
