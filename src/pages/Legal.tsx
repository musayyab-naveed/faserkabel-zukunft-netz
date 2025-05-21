
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Legal: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <div className="pt-32 pb-20 bg-gradient-to-b from-gray-50 to-white">
          <div className="container-custom">
            <h1 className="text-3xl md:text-5xl font-bold mb-6">Impressum & Datenschutz</h1>
            <p className="text-lg text-gray-600">
              Rechtliche Informationen über Faserkabel DG GmbH
            </p>
          </div>
        </div>

        <section className="section-padding" id="impressum">
          <div className="container-custom">
            <div className="bg-white rounded-lg shadow-md p-6 md:p-8 mb-12">
              <h2 className="text-2xl font-bold mb-6">Impressum</h2>
              
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-semibold mb-2">Angaben gemäß § 5 TMG</h3>
                  <p>Faserkabel DG GmbH<br />
                  Wasserfuhr 1<br />
                  32108 Bad Salzuflen</p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-2">Vertreten durch</h3>
                  <p>Dauran Göktas (Geschäftsführer)</p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-2">Kontakt</h3>
                  <p>Mobil: 0160 7777 99 7<br />
                  E-Mail: info@faserkabel.de<br />
                  Web: www.faserkabel.de</p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-2">Registereintrag</h3>
                  <p>Eintragung im Handelsregister.<br />
                  Registergericht: Amtsgericht Lemgo<br />
                  Registernummer: HRB 12345</p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-2">Steuerdaten</h3>
                  <p>Steuernummer: 313/5728/2197<br />
                  Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:<br />
                  DE123456789</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6 md:p-8" id="datenschutz">
              <h2 className="text-2xl font-bold mb-6">Datenschutzerklärung</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-2">1. Datenschutz auf einen Blick</h3>
                  <p className="mb-2 text-gray-700">
                    Der Schutz Ihrer persönlichen Daten ist uns ein wichtiges Anliegen. Diese Datenschutzerklärung informiert Sie über Art, Umfang und Zweck der Erhebung und Verwendung personenbezogener Daten auf dieser Website.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-2">2. Verantwortliche Stelle</h3>
                  <p className="mb-2 text-gray-700">
                    Verantwortlich für die Datenverarbeitung auf dieser Website ist:<br />
                    Faserkabel DG GmbH<br />
                    Wasserfuhr 1<br />
                    D-32108 Bad Salzuflen<br />
                    Telefon: 05222 / 123456<br />
                    E-Mail: info@faserkabel-dg.de
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-2">3. Erhebung und Verarbeitung personenbezogener Daten</h3>
                  <p className="mb-2 text-gray-700">
                    Beim Besuch unserer Website werden automatisch allgemeine Informationen (Server-Logfiles) erfasst. Diese umfassen u.a. die Art des Webbrowsers, das verwendete Betriebssystem, den Domainnamen Ihres Internet-Service-Providers und ähnliches. Es handelt sich ausschließlich um Informationen, die keine Rückschlüsse auf Ihre Person zulassen. Diese Informationen sind technisch notwendig, um von Ihnen angeforderte Inhalte von Webseiten korrekt auszuliefern und fallen bei Nutzung des Internets zwingend an.
                  </p>
                  <p className="mb-2 text-gray-700">
                    Darüber hinaus erheben wir personenbezogene Daten (Name, Anschrift, E-Mail-Adresse, Telefonnummer), wenn Sie uns diese freiwillig mitteilen, z.B. über unser Kontaktformular. Diese Daten werden ausschließlich für den Zweck verwendet, für den Sie sie uns überlassen haben, zum Beispiel zur Bearbeitung Ihrer Anfrage oder für die Kontaktaufnahme.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-2">4. Cookies</h3>
                  <p className="mb-2 text-gray-700">
                    Unsere Website verwendet Cookies. Das sind kleine Textdateien, die auf Ihrem Endgerät gespeichert werden. Diese Cookies helfen uns dabei, unser Angebot nutzerfreundlicher, effektiver und sicherer zu machen.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-2">5. Ihre Rechte</h3>
                  <p className="mb-2 text-gray-700">
                    Sie haben jederzeit das Recht auf unentgeltliche Auskunft über Ihre gespeicherten personenbezogenen Daten, deren Herkunft und Empfänger und den Zweck der Datenverarbeitung sowie ein Recht auf Berichtigung, Sperrung oder Löschung dieser Daten. Hierzu sowie zu weiteren Fragen zum Thema personenbezogene Daten können Sie sich jederzeit unter der im Impressum angegebenen Adresse an uns wenden.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-2">6. Änderung unserer Datenschutzbestimmungen</h3>
                  <p className="mb-2 text-gray-700">
                    Wir behalten uns vor, diese Datenschutzerklärung anzupassen, damit sie stets den aktuellen rechtlichen Anforderungen entspricht oder um Änderungen unserer Leistungen in der Datenschutzerklärung umzusetzen, z.B. bei der Einführung neuer Services. Für Ihren erneuten Besuch gilt dann die neue Datenschutzerklärung.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-2">7. Fragen an den Datenschutzbeauftragten</h3>
                  <p className="mb-2 text-gray-700">
                    Wenn Sie Fragen zum Datenschutz haben, schreiben Sie uns bitte eine E-Mail oder wenden Sie sich direkt an die für den Datenschutz verantwortliche Person in unserer Organisation:<br />
                    E-Mail: datenschutz@faserkabel-dg.de
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Legal;
