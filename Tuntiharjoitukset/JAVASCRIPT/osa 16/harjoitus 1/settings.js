
function loadSettings() {


  const oletusasetukset = {teema: "light", kieli: "fi"};

  const raw = localStorage.getItem("settings");
  
  if (raw === null) {
    return oletusasetukset;
  } 

  try {
    const asetukset = JSON.parse(raw);

      if (typeof asetukset === "object" &&
        asetukset !== null &&
        !Array.isArray(asetukset) &&
        "teema" in asetukset &&
        "kieli" in asetukset

      ) {
        return asetukset;
      }

      return oletusasetukset;
  }
  catch (error) {
    console.log("Asetusten lukeminen epäonnistui", error);
    return oletusasetukset;
  }

}
