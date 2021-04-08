const salads = [
  {
    name: "Batavia",
    months: [5, 6, 7, 8, 9, 10],
    imageUrl: "/images/Batavia.png",
    text: {
      Pararaph1:
        "Der Bataviasalat gehört zu den bei uns noch relativ neuen Sorten,",
      Pararaph2: "die dem altbekannten Kopfsalat wie auch dem",
      Pararaph3:
        "ebenfalls erfolgreichen Eisbergsalat ernsthaft Konkurrenz machen. Kein Wunder, denn die Franzosen haben für den Bataviasalat das Beste aus den beiden anderen Salaten zusammengezüchtet. In der Form ähnelt der Batavia darum am ehesten dem Kopfsalat, die Konsistenz ist aber wie beim Eissalat etwas fester und knackiger. Der eigentliche Clou ist aber die Optik: Die teils grünen, teils rötlich-braunen Blätter sind an den Rändern relativ stark gekräuselt und sehen in der Salatschüssel oder auf kalten Platten klasse aus. Geschmack Konsistenz: Bataviasalat ähnelt mit seiner knackigen Konsistenz dem Eisbergsalat; sein Geschmack ist herzhafter und etwas würziger als der von Kopfsalat.",
    },
  },
  {
    name: "Chicorée",
    months: [1, 2, 3, 10, 11, 12],
    imageUrl: "/images/Chicoree.png",
    text:
      "Wenn es auf den Feldern zu kalt für die meisten Freiland-Gemüse wird, schlägt die Stunde des Chicorées: Vornehm blass kommen die schmalen Köpfe dann aus der Zucht in dunklen und speziell klimatisierten Räumen. Bekannt ist Chicorée bei uns schon lange: Im 19. Jahrhundert wurden seine Wurzeln getrocknet, geröstet und zu einem billigen Kaffee-Ersatz – dem Zichorienkaffee – verarbeitet. Dieser Kaffee wird auch Muckefuck genannt. Heute schätzt man die Wurzeln als Gemüse, setzt sie in Bassins mit erwärmtem Wasser und lässt daraus die Blätter treiben. Dabei herrscht absolute Dunkelheit, denn nur so behalten die zarten Kolben ihre vornehme Blässe. Ausnahmen bestätigen mal wieder die Regel: Inzwischen gibt es auch roten Chicorée: Diese Kreuzung aus herkömmlichem Chicorée und Radicchio sieht nicht nur höchst attraktiv aus, sondern enthält weniger Bitterstoffe als weißer Chicorée.",
  },
  {
    name: "Eichblattsalat",
    months: [5, 6, 7, 8, 9, 10],
    imageUrl: "/images/Eichblattsalat.png",
    text:
      "Ist hier der Name nun Programm oder nicht? Die korrekte Antwort müsste heißen: jein. Tatsächlich sehen die langen, schmalen und unregelmäßig gezackten Blätter des Eichblattsalats denjenigen der Amerikanischen Eiche ausgesprochen ähnlich. Dennoch hat Eichblattsalat natürlich nichts mit Eichenbäumen zu tun; er gehört botanisch zu den Endivien und damit zu den Salatgemüsen - daher auch das leichte, dekorative Kräuseln der Blattränder. Eichblattsalat – oft auch Eichenlaubsalat genannt – gibt es in grün und in rot sowie in verschiedenen Sorten; am häufigsten angebaut wird aber die Sorte „Red Salad Bowl“ mit besonders großen Köpfen. Obwohl der Eichblattsalat bei uns noch fast als Newcomer gilt, bauen ihn auch deutsche Gemüsebauern sowohl im Freiland als auch unter Glas an.",
  },
  {
    name: "Eisbergsalat",
    months: [5, 6, 7, 8, 9, 10, 11],
    imageUrl: "/images/Eisbergsalat.png",
    text:
      "Der Eisbergsalat zählt zu den zahlreichen Trends aus den USA, die bei uns begeistert aufgegriffen wurden. Warum das so ist, deuten nicht zuletzt die Namen an, die man ihm hierzulande auch manchmal gibt: Krachsalat oder Knacksalat drücken perfekt aus, was den Eisbergsalat vor allem auszeichnet – er ist knackig. Sein Name, oft auch einfach zu Eissalat abgekürzt und stammt aus der Vergangenheit, als er zum Transport von Küste zu Küste mit Eis frisch gehalten wurde. So überstand Eisbergsalat selbst lange Transportwege ohne an Knackigkeit und Geschmack zu verlieren. Genau diese gute Haltbarkeit unterscheidet den Eisbergsalat besonders von anderen Blattsalaten, die sowohl auf Wärme als auch auf Kälte empfindlich reagieren. Vor allem im Sommer oder bei Partys erfreut sich Eisbergsalat deshalb großer Beliebtheit: Er bleibt auch dann knackig und macht nicht schlapp, wenn er mehrere Stunden auf einem Buffet steht oder das Thermometer nach oben schnellt. Rein äußerlich ähnelt der Eisbergsalat mit seinen großen, runden und fest geschlossenen Köpfen eher einem lockeren Weißkohl als einem Salat. Auch bei der Größe von bis zu 20 Centimeter Durchmesser und beim Gewicht von bis zu 1 Kilogramm besteht eine Ähnlichkeit.",
  },
  {
    name: "Endiviensalat",
    months: [4, 5, 6, 7, 8, 9, 10, 11],
    imageUrl: "/images/Endiviensalat.png",
    text:
      "Es kommt ja eher selten vor, dass Franzosen und Amerikaner kulinarische Vorlieben teilen – aber zumindest Endivien haben dieses kleine Wunder vollbracht. Sowohl im Gourmetland als auch im Land der unbegrenzten Möglichkeiten gehört diese Salatsorte zu den beliebtesten. Allerdings bevorzugt man dort die krause Endivie, auch als Frisée bekannt. Ihr Erkennungsmerkmal sind die langen, fein gefiederten und stark gekräuselten Blätter, die oben grün sind und dann bis zum Herz hin immer heller und gelb werden. Gelb ist auch das Innere der glatten Endivie, vielen eher als Eskariol ein Begriff. Die beiden Sorten unterscheiden sich überhaupt nur in der Form des Kopfs und der Blätter beziehungsweise durch ihr Äußeres; Abstammung und Inhaltsstoffe sind gleich.",
  },
  {
    name: "Feldsalat",
    months: [1, 2, 3, 4, 10, 11, 12],
    imageUrl: "/images/Feldsalat.png",
    text:
      "Klein, aber oho: Die Blättchen von Feldsalat mögen bescheidene Ausmaße haben, doch dafür können sie mit jeder Menge Power für unsere Gesundheit punkten. Wozu den oft nitratbelasteten Treibhaussalat oder teure Importe aus exotischen Gefilden auf den Teller bringen – auch hierzulande gibt es schließlich im Herbst und Winter frisches Grün. Die von den Österreichern liebevoll Vogerlsalat getauften Pflänzchen punkten mit einem besonders delikaten Geschmack. Ganz billig ist das bei uns je nach Gegend auch Ackersalat oder Rapunzelsalat genannte Blattgemüse nicht und das kann es auch kaum sein, denn nach wie vor müssen die zarten Pflanzen mühsam per Hand geerntet werden. Auf den Markt kommt Feldsalat büschelweise und zwar mitsamt den feinen Wurzeln. Sie machen zwar beim Putzen etwas Arbeit, sorgen aber dafür, dass Feldsalat so schön knackig bleibt wie wir ihn kennen und lieben. Wie sein Name schon verrät, kommt Feldsalat tatsächlich frisch vom Feld. Unter den Blattsalaten ist er schon wegen seiner Robustheit einzigartig, denn im Gegensatz zu all seinen Konkurrenten verträgt er problemlos Temperaturen bis zu minus 15 Grad.",
  },
  {
    name: "Kopfsalat",
    months: [5, 6, 7, 8, 9, 10],
    imageUrl: "/images/Kopfsalat.png",
    text:
      "Der gute alte Kopfsalat wird bei uns inzwischen häufig links liegen gelassen. Das mag zum Einen daran liegen, dass er in den vielen neueren Salatsorten aus den Mittelmeerländern und besonders durch den Eisbergsalat mächtige Konkurrenten bekommen hat. Zum Anderen hat ihn auch der Anbau unter Glas etwas in Verruf gebracht. Tatsächlich stimmt es, dass bei Kopfsalat aus dem Treibhaus sehr häufig hohe Nitratwerte gefunden werden. Experten raten darum, Kopfsalat möglichst während der Freilandsaison zu essen. Der Kopfsalat aus Freilandanbau hat ein Comeback absolut verdient, denn er punktet mit feinem Geschmack und durchaus wertvollen Inhaltsstoffen. Die Franzosen wissen seine Qualitäten besonders zu schätzen und verwenden ihn sogar als Gemüse. In Frankreich liebt man übrigens besonders den roten Kopfsalat, eine bei uns immer noch eher seltene Sorte. Roter Kopfsalat hat etwas zartere Blätter als der übliche grüne. Am beliebtesten sind bei Feinschmeckern aller Länder die gleichzeitig knackigen und zarten Herzen des Kopfsalats. Allerdings stecken die meisten gesunden Nährstoffe in den dunkleren und etwas kräftigeren Außenblättern.",
  },
  {
    name: "Lollo Rossa // Bionda",
    months: [5, 6, 7, 8, 9, 10],
    imageUrl: "/images/Lollo_Rossa.png",
    text:
      "Der attraktive Krauskopf gehört zur Gruppe der Schnitt- und Pflücksalate und ist daher bei genauerem Hinsehen gar kein Kopf, sondern bildet eine Rosette. Es gibt verschiedene Sorten, darunter solche mit fast durchweg roten Blättern. Andere haben grüne Blätter, die sich erst zum Rand hin dunkel- bis weinrot färben.",
  },
  {
    name: "Pflücksalat",
    months: [5, 6, 7, 8, 9, 10],
    imageUrl: "/images/Pflücksalat.png",
    text: "",
  },
  {
    name: "Radicchio",
    months: [7, 8, 9, 10],
    imageUrl: "/images/Radicchio.png",
    text:
      "Nomen est omen: Seinen Zweitnamen „Roter Chicorée“ trägt der Radicchio aus gutem Grund, denn abgesehen von einer sehr engen botanischen Verwandtschaft ähneln sich auch die Anbaumethoden und im Geschmack gibt es ebenfalls Parallelen. Im Aussehen unterscheiden sich die beiden Salatgemüse allerdings: Radicchio hat im Gegensatz zum Chicorée eine runde und etwa faustgroße Form, längliche bis runde Außenblätter und ein kompaktes Herz. Die äußeren Blätter werden bereits auf dem Feld entfernt und auf den Markt kommen nur die fest geschlossenen Innenköpfe.",
  },
  {
    name: "Romanasalat",
    months: [6, 7, 8, 9],
    imageUrl: "/images/Romanasalat.png",
    text:
      "Für den knackigen Romanasalat gibt es diverse Zweitnamen wie vor allem Römersalat, Römischer Salat oder Sommerendivie. Viele kennen ihn außerdem als Kochsalat – ein Titel, der deutlich ausdrückt, dass man mit Römersalat keineswegs nur Rohkost zubereiten kann. Tatsächlich spielt er besonders in den Ländern rund ums Mittelmeer als Gemüse für Topf, Pfanne und Backofen eine ebenfalls große Rolle. Überhaupt gehört der Römersalat in Italien, Spanien und Frankreich zu den wichtigsten Salat- und Gemüsesorten und wird den ganzen Sommer über angeboten. Besonders beliebt ist der Römersalat in der Region um Kassel, wo es die hierzulande größten Anbauflächen gibt. Von dort stammt auch die Methode für die sogenannten Kassler Strünkchen, bei der die zarten Stiele gedünstet und wie Spargel serviert werden. Eine besondere Delikatesse sind die zarten Romana-Salatherzen. ",
  },
  {
    name: "Rucola",
    months: [5, 6, 7, 8, 9, 10, 11],
    imageUrl: "/images/Rucola.png",
    text:
      "Wenn Deutschland einen Gemüse-Superstar suchen würde, hätte Rucola erstklassige Chancen, ganz oben auf dem Treppchen zu landen. Keine Frage, Rucola gehört zu den kulinarischen Aufsteigern der letzten 20 Jahre und geht ohne Übertreibung als Trendkraut durch. Das aromatische Blattgemüse hat sich einen festen Platz in den Feinschmeckerherzen erobert. Rauke, wie Rucola hierzulande auch genannt wird, bekommt man im Bund oder verpackt in durchsichtigen Kunststoffschalen. Meistens handelt es sich um Rucola aus der Zucht beziehungsweise um sogenannte Gartenrauke. Die Wilde Rauke, die an besonders schmalen, dunkelgrünen Blättern zu erkennen ist, schmeckt intensiver, ist aber seltener zu bekommen.",
  },
];

export { salads };
