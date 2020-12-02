import { useState } from 'react';
import AppContainer from '../common/AppContainer/AppContainer';
import ButtonComponent from '../common/ButtonComponent';
import ImageComponent from '../common/ImageComponent/ImageComponent';
import LinkComponent from '../common/LinkComponent/LinkComponent';
import ParagraphComponent from '../common/ParagraphComponent/ParagraphComponent';
import TitleComponent from '../common/TitleComponent/TitleComponent';

function AppFunction() {

  const [counter, setCounter] = useState(0);

  const incrementCounter = () => {
    setCounter(counter + 1)
  }

  return (
    <AppContainer>
      <ImageComponent img={'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Kirby-Logo-New.svg/1280px-Kirby-Logo-New.svg.png'} />
      <ParagraphComponent className={'rojito'} text={'Mira este es mi componente de funcion con un logo de kirby jaja que bonito'} />
      <LinkComponent url={'https://es.wikipedia.org/wiki/Kirby_(personaje)'} title={'Mira el kirby bien bonito siono'} />
      <ButtonComponent handleClick={incrementCounter} text={'Pikale nomanches ira owo'} />
      <TitleComponent text={counter} />
    </AppContainer>
  );
}

export default AppFunction;
