import Fullpage, {
  FullPageSections,
  FullpageSection,
  FullpageNavigation,
} from "@ap.cx/react-fullpage";
import bgImg from "./assets/1.webp";

export default function App() {
  const SectionStyle = {
    height: "100vh",
    widows: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  return (
    <Fullpage>
      <FullpageNavigation style={{ cursor: "pointer" }} />
      <FullPageSections>
        <FullpageSection
          style={{
            ...SectionStyle,
            backgroundImage: `url(${bgImg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            height: "100vh",
            color: "#fff ",
          }}
        >
          <h1>1</h1>
        </FullpageSection>
        <FullpageSection style={SectionStyle}>
          <h1>2</h1>
        </FullpageSection>
        <FullpageSection style={SectionStyle}>
          <h1>3</h1>
        </FullpageSection>
      </FullPageSections>
    </Fullpage>
  );
}
