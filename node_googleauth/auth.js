/* Googlen autentikaatiopalveluun luodun login-applikaation
   clientID, clientSecret ja callbackURL
   Nämä saadaan https://console.developers.google.com/apis/dashboard
   -osoitteeseen luodusta kirjautumisapplikaatiosta. Rekisteröidy/kirjaudu edellä mainitussa osoitteessa
   Googlen API-konsoliin developeriksi. Ei maksa mitään ja vaatii vain tekstiviestivahvistuksen,
   ei tarvi luottokorttitietoja. Tee uusi API-projekti. Laita projektiin Google+ API ja luo
   Credentials -osastossa kirjautumisapplikaatio. Sinne laitat sovelluksesi osoitteen, esim.
   http://localhost:3000 ja sen osoitteen jonne mennään kirjautumisen jälkeen, esimerkiksi
   http://localhost:3000/auth/google/callback. Kun login-applikaatio on valmis, sinne syntyy
   clientID ja clientSecret jotka laitat tähän tiedostoon.

   Sovelluksen käyttö vaatii että Mongodb on käynnissä.

   Nämä tiedot pitää laittaa .env -filuun jos kyseessä on oikeasti julkaistava sovellus

*/
module.exports = {
    'googleAuth' : {
        'clientID'      : '122745626505-459qssur1780rjeu8cda7mo4pafq1ggd.apps.googleusercontent.com',
        'clientSecret'  : 'ebLDiqdfCP3Ohsg30q_MJBDm',
        'callbackURL'   : 'http://localhost:3000/auth/google/callback'
    }
};
