import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export const useFacebook = () => {
  const { teamname } = useParams();
  const [facebookPage, setFacebookPage] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    switch (teamname) {
      case "Juventus":
        setFacebookPage("Juventus");
        break;
      case "Inter":
        setFacebookPage("Inter");
        break;
      case "AC Milan":
        setFacebookPage("ACMilan");
        break;
      case "Napoli":
        setFacebookPage("SSCNapoli");
        break;
      case "Roma":
        setFacebookPage("officialasroma");
        break;
      case "Lazio":
        setFacebookPage("SSLazioOfficialPage");
        break;
      case "Sassuolo":
        setFacebookPage("officialsassuolocalcio");
        break;
      case "Fiorentina":
        setFacebookPage("ACFFiorentina");
        break;
      case "Atalanta":
        setFacebookPage("atalantabc");
        break;
      case "Torino":
        setFacebookPage("TorinoFootballClub");
        break;
      case "Udinese":
        setFacebookPage("UdineseCalcio1896 ");
        break;
      case "Cagliari":
        setFacebookPage("cagliaricalcio");
        break;
      case "Empoli":
        setFacebookPage("empolifcofficialpage");
        break;
      case "Sampdoria":
        setFacebookPage("sampdoria");
        break;
      case "Bologna":
        setFacebookPage("bfc1909official");
        break;
      case "Hellas Verona":
        setFacebookPage("hellasveronafc");
        break;
      case "Genoa":
        setFacebookPage("genoaCFCofficial");
        break;
      case "Spezia":
        setFacebookPage("SpeziaCalcio");
        break;
      case "Salernitana":
        setFacebookPage("USSalernitanaOfficialPage");
        break;
      case "Cremonese":
        setFacebookPage("uscremonese");
        break;
      case "Lecce":
        setFacebookPage("USLecceOfficial");
        break;
      case "Monza":
        setFacebookPage("ACMonza");
        break;
      default:
        setFacebookPage("SerieA");
        break;
    }
  }, [teamname]);

  useEffect(() => {
    setIsLoading(false);
  }, [facebookPage]);

  return { facebookPage, isLoading };
};
