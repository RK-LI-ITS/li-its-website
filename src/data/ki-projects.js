export const kiCategories = [
  {
    title: 'Vertrieb & Kundenmanagement',
    subtitle: 'Intelligente Automatisierung für Kundenbeziehungen und Vertriebsprozesse',
    projects: [
      {
        title: 'Intelligenter Vertriebsassistent',
        tag: 'Vertrieb & CRM',
        description: 'KI analysiert eingehende Kundenanfragen per E-Mail, erstellt automatisch Kontaktdatensätze, recherchiert die Branche des Interessenten und generiert passende Anwendungsfälle — alles ohne manuellen Aufwand.',
        tech: ['GPT', 'Web-Recherche', 'CRM-Integration'],
      },
      {
        title: 'KI-Vertriebsboard mit Briefing',
        tag: 'Vertriebssteuerung',
        description: 'Ein KI-Assistent im Vertriebsdashboard erstellt Briefing-Reports vor Kundenanrufen, dokumentiert Gespräche automatisch und verwaltet Wiedervorlagen — integriert in das CRM-System.',
        tech: ['OpenRouter GPT', 'Blazor', 'DevExpress'],
      },
      {
        title: 'Automatische Branchenanalyse',
        tag: 'Lead-Qualifizierung',
        description: 'Bei jeder neuen Anfrage recherchiert die KI automatisch im Web die Branche des Unternehmens und generiert bis zu 10 branchenspezifische KI-Anwendungsfälle als Gesprächsgrundlage.',
        tech: ['Perplexity', 'Web-Recherche', 'CRM'],
      },
      {
        title: 'Follow-Up-Analyse per KI',
        tag: 'E-Mail-Automation',
        description: 'E-Mail-Berichte von Mitarbeitern werden automatisch analysiert. Die KI erkennt Kontexte, ordnet Anfragen zu und erstellt Aktivitäten, Aufgaben und Kalendereinträge im CRM.',
        tech: ['GPT', 'IMAP', 'n8n-Workflows'],
      },
      {
        title: 'Intelligente Terminverwaltung',
        tag: 'Kalender & Buchung',
        description: 'Ein KI-gesteuerter Terminbuchungs-Server prüft Verfügbarkeiten, koordiniert Kalender und verwaltet Buchungen — steuerbar per natürlicher Sprache über verschiedene Kanäle.',
        tech: ['Cal.com', 'MCP-Server', 'Node.js'],
      },
      {
        title: 'Intelligenter Angebotsassistent',
        tag: 'Angebotserstellung',
        description: 'Die KI analysiert Kundenanfragen per E-Mail oder Telefon, extrahiert Reisedaten und Personenzahl, prüft Fahrzeug- und Fahrerverfügbarkeit in Echtzeit und erstellt strukturierte Angebote — Schritt für Schritt mit Bestätigung durch den Sachbearbeiter.',
        tech: ['OpenAI', 'Function Calling', '.NET'],
      },
    ],
  },
  {
    title: 'Datenschutz & Compliance',
    subtitle: 'Fünf spezialisierte KI-Kanäle für durchgängige DSGVO-Compliance',
    projects: [
      {
        title: 'DSGVO-FAQ mit KI-Wissensdatenbank',
        tag: 'Wissensmanagement',
        description: 'Ein RAG-basierter Chatbot durchsucht eine umfangreiche Datenschutz-Wissensdatenbank und beantwortet Fragen kontextbezogen — gestützt auf interne Dokumente und aktuelle Rechtsprechung.',
        tech: ['GPT', 'Qdrant Vector Store', 'RAG'],
      },
      {
        title: 'KI-Verfahrensgenerator (DSGVO)',
        tag: 'Art. 30 DSGVO',
        description: 'Die KI erstellt komplette Verarbeitungsverzeichnisse nach Art. 30 DSGVO: Datenkategorien, Betroffene, Löschfristen, technisch-organisatorische Maßnahmen und Rechtsgrundlagen — per Chat-Dialog.',
        tech: ['GPT', 'n8n-Workflows', 'Multi-Tenant'],
      },
      {
        title: 'DSGVO-Onboarding per KI',
        tag: 'Mandantenbetreuung',
        description: 'Neue Mandanten beschreiben ihr Unternehmen, und die KI schlägt bis zu 15 branchentypische Datenschutzverfahren vor. Per Checkbox-Auswahl werden diese automatisch im System angelegt.',
        tech: ['GPT', 'Batch-Processing', 'n8n'],
      },
      {
        title: 'AV-Vertrag-Prüfung per KI',
        tag: 'Art. 28 DSGVO',
        description: 'Auftragsverarbeitungsverträge hochladen, automatisch anonymisieren (Regex + optionales lokales LLM) und per KI auf 15 Kriterien prüfen — mit Ampelsystem und konkreten Änderungsvorschlägen.',
        tech: ['GPT', 'Ollama', 'Datenanonymisierung'],
      },
      {
        title: 'AV-Vertrag-Erstellung per KI',
        tag: 'Vertragsgenerierung',
        description: 'Basierend auf vorhandenen Verfahrensdaten generiert die KI komplette AV-Verträge mit 17 Kapiteln und 3 Anlagen. Echte Firmendaten werden erst lokal beim Word-Download eingesetzt.',
        tech: ['GPT', 'n8n', 'Word-Export'],
      },
    ],
  },
  {
    title: 'Fertigung & Qualitätssicherung',
    subtitle: 'Computer Vision und KI-Analyse für industrielle Anwendungen',
    projects: [
      {
        title: 'KI-Schadenserkennung per Foto',
        tag: 'Qualitätssicherung',
        description: 'Inspekteure fotografieren Bauteile vor Ort. Die KI analysiert die Bilder nach einem 9-Kategorien-Regelwerk, klassifiziert Schäden (OK / Verschleiß / Gewaltschaden) und erstellt automatisch Prüfberichte.',
        tech: ['Claude Vision', 'Laravel', 'PDF-Export'],
      },
      {
        title: 'Automatische CNC-Kalkulation',
        tag: 'Maschinenbau & Fertigung',
        description: 'Technische Zeichnungen (STEP/PDF) werden per KI-Vision analysiert. Die Software erkennt Toleranzen, Materialien, Gewinde und Oberflächen und berechnet Fertigungszeiten für 7 CNC-Maschinen.',
        tech: ['Claude Vision', 'Python', 'Flask'],
      },
      {
        title: 'KI-Materialrecherche für Fertigung',
        tag: 'Werkstofftechnik',
        description: 'Unbekannte Fertigungswerkstoffe werden per KI identifiziert, Schnittdaten ermittelt und synthetische Materialprofile mit Vorschub-, Drehzahl- und Kühlungsparametern erstellt.',
        tech: ['Claude API', 'Fuzzy-Matching', 'Python'],
      },
      {
        title: 'Predictive Maintenance & Anomalieerkennung',
        tag: 'Industrie & IoT',
        description: 'Durch die Analyse historischer Schwingungs-, Vibrations- und Alarmdaten erkennt das System frühzeitig Anzeichen für mögliche Ausfälle. Ein Machine-Learning-Modell erklärt die Ergebnisse in verständlicher Form.',
        tech: ['Machine Learning', 'LLM-Erklärung', 'IoT-Daten'],
      },
    ],
  },
  {
    title: 'Büro & Kommunikation',
    subtitle: 'KI-gestützte Zusammenarbeit und intelligente Assistenten',
    projects: [
      {
        title: 'Automatische Meeting-Dokumentation',
        tag: 'Büromanagement',
        description: 'Meetings werden lokal aufgezeichnet und per KI transkribiert. Anschließend erstellt die KI eine strukturierte Zusammenfassung mit Action Items — inklusive Anti-Halluzinations-Erkennung.',
        tech: ['Whisper', 'GPT', 'FastAPI'],
      },
      {
        title: 'KI-Assistent für Disposition',
        tag: 'Tourismus & Logistik',
        description: 'Ein Chat-basierter KI-Assistent unterstützt Disponenten mit 17 integrierten Werkzeugen: Tourensuche, Datenbankabfragen und Listenfilterung — alles per natürlicher Sprache steuerbar.',
        tech: ['Claude', 'Function Calling', '.NET'],
      },
      {
        title: 'KI-Workflow-Automatisierung',
        tag: 'Prozessautomation',
        description: 'No-Code KI-Workflows orchestrieren E-Mail-Verarbeitung, Datenbank-Operationen und API-Integrationen vollautomatisch — von der Eingangsanalyse bis zur CRM-Aktualisierung in einem Durchlauf.',
        tech: ['n8n', 'GPT', 'MCP-Server'],
      },
      {
        title: 'KI-gestützte Formularassistenten',
        tag: 'Datenerfassung',
        description: 'Ein intelligenter Assistent führt Anwender Schritt für Schritt durch komplexe Formulare. Er beantwortet Rückfragen, prüft Eingaben, gleicht Daten mit der Datenbank ab und speichert die Ergebnisse automatisch.',
        tech: ['GPT', 'Blazor', 'DevExpress XAF'],
      },
      {
        title: 'Persönlicher KI-Assistent per Messenger',
        tag: 'Business-Automation',
        description: 'Ein lokal laufender KI-Assistent steuert CRM, Kalender, E-Mail und Aufgabenverwaltung per WhatsApp-Nachricht. Er verarbeitet Befehle in natürlicher Sprache und führt Aktionen über mehrere Systeme hinweg aus — datenschutzkonform auf eigener Hardware.',
        tech: ['MCP', 'Node.js', 'Apple-Integration'],
      },
    ],
  },
  {
    title: 'Finanzen & Produktivität',
    subtitle: 'Automatisierte Finanzprozesse und intelligentes Projektmanagement',
    projects: [
      {
        title: 'Intelligente Rechnungsverarbeitung',
        tag: 'Buchhaltung & Finanzen',
        description: 'Eingangsrechnungen aus E-Mails werden automatisch erkannt, klassifiziert und ins Buchhaltungssystem übertragen. Die KI unterscheidet zuverlässig zwischen Rechnungen, Mahnungen und Werbung.',
        tech: ['Python', 'IMAP', 'Buchhaltungs-API'],
      },
      {
        title: 'E-Rechnungs-Automatisierung',
        tag: 'Ausgangsrechnungen',
        description: 'Ausgangsrechnungen werden automatisch mit Leistungsnachweisen zusammengeführt und im ZUGFeRD-Format erstellt. Versand inklusive aller Anhänge erfolgt vollautomatisch per E-Mail.',
        tech: ['Python', 'ZUGFeRD', 'pikepdf'],
      },
      {
        title: 'KI-Marktanalyse & Portfolio-Monitoring',
        tag: 'Finanzen & Kapitalmarkt',
        description: 'Ein KI-Agent überwacht Finanzmärkte, analysiert Trends und gibt Handlungsempfehlungen. Automatische Risikomanagement-Regeln mit Circuit-Breakern schützen vor übermäßigen Verlusten.',
        tech: ['Python', 'Broker-API', 'Echtzeit-Daten'],
      },
      {
        title: 'Produktivitäts-Dashboard mit KI',
        tag: 'Projektmanagement',
        description: 'Ein zentrales Dashboard vereint Daten aus Projektmanagement, E-Mail, Kalender und Notizen. KI-gestützte Zusammenfassungen liefern auf einen Blick den Status aller laufenden Projekte.',
        tech: ['Claude API', 'FastAPI', 'SvelteKit'],
      },
      {
        title: 'KI-Belegextraktion per Vision',
        tag: 'Dokumentenverarbeitung',
        description: 'Eine Zwei-Agenten-Pipeline erkennt zunächst handschriftliche Anmerkungen auf Belegen und extrahiert anschließend alle Rechnungsdaten inklusive Fahrzeugzuordnung. Unterstützt werden Rechnungen, Lieferscheine, Haftpflichtbelege und Kontoauszüge.',
        tech: ['Gemini Vision', 'Python', 'Pydantic'],
      },
      {
        title: 'Automatisierte Belegerfassung mit OCR',
        tag: 'Finanzdienstleistung',
        description: 'Eingehende Belege werden per OCR automatisch erfasst und strukturiert. Parallel prüft das System die Bonität von Geschäfts- und Privatkunden über angebundene Auskunfteien — mit Verifikationsstation für manuelle Nachkontrolle.',
        tech: ['ABBYY OCR', 'Bonitätsprüfung', '.NET'],
      },
    ],
  },
  {
    title: 'Mobilität & Services',
    subtitle: 'KI-gestützte Planung und praxisorientierte Wissensvermittlung',
    projects: [
      {
        title: 'KI-gestützte Fahrplanoptimierung',
        tag: 'Transport & Logistik',
        description: 'Aus Kundenanfragen generiert die KI automatisch optimale Fahrpläne. Das System berechnet Start- und Abholzeiten, Aufenthaltsdauer und Routen — effizient, zuverlässig und flexibel anpassbar.',
        tech: ['KI-Optimierung', 'Routenplanung', 'Echtzeitdaten'],
      },
      {
        title: 'KI-Workshops & Beratung',
        tag: 'Weiterbildung',
        description: 'In praxisorientierten KI-Workshops entwickeln wir gemeinsam konkrete Anwendungsfälle — von der Idee bis zum Proof-of-Concept. Ziel ist es, Ihre Mitarbeitenden zu befähigen, KI-Potenziale selbst zu erkennen und umzusetzen.',
        tech: ['Workshop', 'Proof-of-Concept', 'Beratung'],
      },
      {
        title: 'Automatisierte Spesenabrechnung per Telematik',
        tag: 'Spedition & Logistik',
        description: 'Telematik-Daten aus der Flottensteuerung werden automatisch ausgewertet, um Verpflegungsmehraufwand nach §9 EStG zu berechnen. Das System erkennt Abwesenheitszeiten, Zielländer und erstellt gesetzeskonforme Pauschalen für die Lohnabrechnung.',
        tech: ['Telematik-API', '.NET', 'Lohnbuchhaltungs-Export'],
      },
    ],
  },
];
