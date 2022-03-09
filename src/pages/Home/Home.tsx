import {
  AvatarWrap,
  Figure,
  Header,
  HeroText,
  Name,
  Role,
  Section,
  Wrap
} from './Styles';
import { FIRST_NAME, LAST_NAME } from 'config';
import Button from 'components/Button';
import { useLoaderDemo } from 'components/Loader';
import Avatar from 'components/Avatar/Avatar';
import ExternalLink from 'components/Links/ExternalLink';
import LinkedInLink from 'components/Links/LinkedInLink';

const Home = () => {
  const { triggerLoader, DemoLoader } = useLoaderDemo();

  return (
    <>
      <Wrap>
        <Header>
          <Figure>
            <AvatarWrap>
              <Avatar />
              <ExternalLink href="https://openpeeps.com/">
                Thanks Pablo!
              </ExternalLink>
            </AvatarWrap>
          </Figure>
          <HeroText>
            <Name>
              {FIRST_NAME} <br /> {LAST_NAME}
            </Name>
            <Role>
              Senior <abbr title="user interface">UI</abbr> Engineer
            </Role>
            <LinkedInLink />
          </HeroText>
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
