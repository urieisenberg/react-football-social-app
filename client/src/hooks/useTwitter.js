import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export const useTwitter = () => {
  const { teamname } = useParams();
  const [twitterPage, setTwitterPage] = useState();
  const [isLoading, setIsLoading] = useState(true);

  const twitterTheme =
    localStorage.getItem("theme") === "dark" ? "dark" : "light";
  useEffect(() => {
    switch (teamname) {
      case "Juventus":
        setTwitterPage("juventusfcen");
        break;
      case "Inter":
        setTwitterPage("Inter_en");
        break;
      case "AC Milan":
        setTwitterPage("acmilan");
        break;
      case "Napoli":
        setTwitterPage("sscnapoli");
        break;
      case "AS Roma":
        setTwitterPage("ASRomaEN");
        break;
      case "Lazio":
        setTwitterPage("OfficialSSLazio");
        break;
      case "Sassuolo":
        setTwitterPage("SassuoloENG");
        break;
      case "Fiorentina":
        setTwitterPage("ACFFiorentinaEN");
        break;
      case "Atalanta":
        setTwitterPage("Atalanta_BC");
        break;
      case "Torino":
        setTwitterPage("TorinoFC1906_En");
        break;
      case "Udinese":
        setTwitterPage("Udinese_1896");
        break;
      case "Verona":
        setTwitterPage("HellasVeronaFC");
        break;
      case "Bologna":
        setTwitterPage("BolognaFC1909en");
        break;
      case "Cagliari":
        setTwitterPage("CagliariCalcio");
        break;
      case "Empoli":
        setTwitterPage("EmpoliCalcio");
        break;
      case "Sampdoria":
        setTwitterPage("sampdoria_en");
        break;
      case "Genoa":
        setTwitterPage("GenoaCFC");
        break;
      case "Spezia":
        setTwitterPage("acspezia_en");
        break;
      case "Salernitana":
        setTwitterPage("OfficialUSS1919");
        break;
      case "Cremonese":
        setTwitterPage("USCremonese");
        break;
      case "Lecce":
        setTwitterPage("OfficialUSLecce");
        break;
      case "Monza":
        setTwitterPage("ACMonza");
        break;

      default:
        setTwitterPage("SerieA_EN");
        break;
    }
  }, [teamname]);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);

  return { twitterPage, isLoading, twitterTheme };
};

