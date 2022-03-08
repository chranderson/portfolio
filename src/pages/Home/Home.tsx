import { Figure, Header, Name, Role, Section, Wrap } from './Styles';
import { FIRST_NAME, LAST_NAME } from 'config';
import Button from 'components/Button';
import { useLoaderDemo } from 'components/Loader';

const Home = () => {
  const { triggerLoader, DemoLoader } = useLoaderDemo();

  return (
    <>
      <Wrap>
        <Header>
          <div>
            <Name>
              {FIRST_NAME} <br /> {LAST_NAME}
            </Name>
            <Role>
              Senior <abbr title="user interface">UI</abbr> Engineer
            </Role>
          </div>
          <Figure>
            <div>something here</div>
          </Figure>
        </Header>
        <Section title="demos">
          <h2>Demos</h2>
          <Button onClick={triggerLoader}>Loader</Button>
        </Section>
      </Wrap>

      {DemoLoader}
    </>
  );
};

export default Home;
