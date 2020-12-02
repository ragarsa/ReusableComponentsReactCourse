import React from 'react';
import logo from '../../logo.svg';
import AppContainer from '../common/AppContainer/AppContainer';
import ButtonComponent from '../common/ButtonComponent';
import ImageComponent from '../common/ImageComponent/ImageComponent';
import LinkComponent from '../common/LinkComponent/LinkComponent';
import ParagraphComponent from '../common/ParagraphComponent/ParagraphComponent';
import TitleComponent from '../common/TitleComponent/TitleComponent';

class AppClass extends React.Component {

  constructor() {
    super()

    this.state = {
      counter: 0
    }
  }

  increment = () => {
    this.setState({
      counter: this.state.counter + 1
    }, () => console.log(this.state.counter))
  }

  render () {
    const { counter } = this.state;

    return (
      <AppContainer>
        <ImageComponent img={logo} />
        <ParagraphComponent text={'Hola desde mi componente reutilizable aca en mi componente de clase'} />
        <LinkComponent url={"https://github.com/Cova14"} title={"Cheka mi github"} />
        <ButtonComponent handleClick={this.increment} text={'Pikale aki ira nomames'} />
        <TitleComponent text={counter} />
      </AppContainer>
    );
  }
}

export default AppClass;