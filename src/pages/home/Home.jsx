import Form from "../../components/form/Form";
import Running_clock from "../running_clock/running_clock";

const Home = () => {
  console.log("home");
  return (
    <div style={{ width: "600px", margin: "auto", padding: "1rem" }}>
      <h2>Track zone app</h2>
      {/* running time with new date */}
      <Running_clock />

      {/* Form field */}
      <Form />
    </div>
  );
};

export default Home;
