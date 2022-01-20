import HeadTtitle from "../../components/HeadTitle/HeadTitle";
import HeadPharagraph from "../../components/HeadParagraph/HeadPharagraph";
import ApiCall from "../../components/APICall/ApiCall";
import "./index.css";

export default function Home() {
  return (
    <div className="wrapper">
      <HeadTtitle />
      <HeadPharagraph />
      <ApiCall />
    </div>
  );
}
