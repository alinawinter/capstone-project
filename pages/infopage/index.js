import Layout from "../../components/layout";
import ContentCard from "../../components/ContentCard/ContentCard";
import { useState } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleChevronDown } from "@fortawesome/free-solid-svg-icons";
import { faCircleChevronUp } from "@fortawesome/free-solid-svg-icons";

export default function InfoPage() {
  const [showInfo1, setShowInfo1] = useState(false);
  const [showInfo2, setShowInfo2] = useState(false);
  const [showInfo3, setShowInfo3] = useState(false);
  const [showInfo4, setShowInfo4] = useState(false);

  return (
    <Layout>
      <h2>Weitere Informationen</h2>
      <ContentCard>
        <StyledSection>
          <HeadingContainer>
            <StyledButtonShortHeading onClick={() => setShowInfo1(!showInfo1)}>
              {showInfo1 ? (
                <StyledChevronUp icon={faCircleChevronUp} />
              ) : (
                <StyledChevronDown icon={faCircleChevronDown} />
              )}
            </StyledButtonShortHeading>
            <h3>FuturePlate-App</h3>
          </HeadingContainer>
          {showInfo1 && (
            <StyledParagraph>
              Die FuturePlate-App erleichtert die Umstellung auf die Planetary
              Health Diet und bietet eine einfache Möglichkeit, diese
              Ernährungsweise in den Alltag zu integrieren und die eigene
              Ernährung nachhaltig zu optimieren.
            </StyledParagraph>
          )}
        </StyledSection>
      </ContentCard>
      <ContentCard>
        <StyledSection>
          <HeadingContainer>
            <StyledButtonLongHeading onClick={() => setShowInfo2(!showInfo2)}>
              <StyledChevronDown icon={faCircleChevronDown} />
            </StyledButtonLongHeading>
            <h3>Was ist die Planetary Health Diet?</h3>
          </HeadingContainer>
          {showInfo2 && (
            <>
              <StyledParagraph>
                Die Planetary Health Diet ist ein Konzept, das darauf abzielt,
                die Gesundheit des Planeten und der Menschen zu fördern. Dabei
                sollen die Umweltbelastungen der Nahrungsmittelproduktion
                reduziert werden und gleichzeitig eine ausgewogene Ernährung
                gewährleistet werden. Die Ziele der Planetary Health Diet sind
                also sowohl ökologischer als auch gesundheitlicher Natur.
              </StyledParagraph>
              <StyledParagraph>
                Eine wichtige Grundlage der Planetary Health Diet ist die
                Nährwerttabelle, die speziell entwickelt wurde, um Lebensmittel
                anhand ihrer gesundheitlichen Aspekte und ihrer
                Umweltbelastungen zu bewerten. Indem sie den Konsum von
                nährstoffreichen und umweltverträglichen Lebensmitteln fördert,
                unterstützt die Nährwerttabelle die Umsetzung der Ziele der
                Planetary Health Diet.
              </StyledParagraph>
            </>
          )}
        </StyledSection>
      </ContentCard>
      <ContentCard>
        <StyledSection>
          <HeadingContainer>
            <StyledButtonLongHeading onClick={() => setShowInfo3(!showInfo3)}>
              <StyledChevronDown icon={faCircleChevronDown} />
            </StyledButtonLongHeading>
            <h3>Was sind die Vorteile der Planetary Health Diet?</h3>
          </HeadingContainer>
          {showInfo3 && (
            <>
              <StyledParagraph>
                Die Vorteile dieser Ernährungsweise liegen auf der Hand: Eine
                pflanzenbasierte Ernährung hat nicht nur positive Auswirkungen
                auf die Umwelt, sondern kann auch zur Vorbeugung von Krankheiten
                beitragen. So kann beispielsweise ein erhöhter Konsum von Obst
                und Gemüse das Risiko von Herz-Kreislauf-Erkrankungen senken.
              </StyledParagraph>
              <StyledParagraph>
                Auf den Websites des EAT-Lancet-Komitees und des Bundeszentrums
                für Ernährung finden Sie weitere Informationen und Ressourcen
                zur Planetary Health Diet und einer nachhaltigen Ernährung.
              </StyledParagraph>
            </>
          )}
        </StyledSection>
      </ContentCard>

      <ContentCard>
        <StyledSection>
          <HeadingContainer>
            <StyledButtonShortHeading onClick={() => setShowInfo4(!showInfo4)}>
              <StyledChevronDown icon={faCircleChevronDown} />
            </StyledButtonShortHeading>
            <h3>Wie funktioniert die App?</h3>
          </HeadingContainer>
          {showInfo4 && (
            <>
              <StyledParagraph>
                Die App bewertet den Lebensmittelkonsum anhand eines Scores, der
                auf der Übereinstimmung mit den Vorgaben der Nährwerttabelle
                basiert. Obwohl die Berechnungen für diesen Score nicht auf
                einer wissenschaftlichen Grundlage beruhen, kann die App dennoch
                dazu beitragen, die Ernährung im Sinne der Planetary Health Diet
                verständlicher und zugänglicher zu machen.
              </StyledParagraph>
              <StyledParagraph>
                Wir wünschen viel Spaß beim Ausprobieren!
              </StyledParagraph>
            </>
          )}
        </StyledSection>
      </ContentCard>
    </Layout>
  );
}

const StyledSection = styled.section`
  width: 100%;
`;

const HeadingContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
`;

const StyledButtonLongHeading = styled.button`
  background-color: transparent;
  display: flex;
  border: none;
`;

const StyledButtonShortHeading = styled.button`
  background-color: transparent;
  display: flex;
  border: none;
  margin-right: 4em;
`;

const StyledChevronDown = styled(FontAwesomeIcon)`
  color: var(--color-green);
  font-size: 24px;
`;

const StyledChevronUp = styled(FontAwesomeIcon)`
  color: var(--color-green);
  font-size: 24px;
`;

const StyledParagraph = styled.p`
  text-align: center;
  margin: 1em;
  hyphens: auto;
`;
