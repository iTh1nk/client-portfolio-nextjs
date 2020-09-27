import Left from "../components/Left";
import Right from "../components/Right";
import { Container } from "../layout/Container";

export default function IndexPage() {
  return (
    <Container>
      <div className="flex flex-row justify-between">
        <div>
          <Left />
        </div>
        <div>
          <Right />
        </div>
        <div></div> 
      </div>
    </Container>
  );
}
