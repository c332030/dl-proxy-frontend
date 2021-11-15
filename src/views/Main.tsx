import React, {ReactNode} from 'react';
import {Button, Input, Layout} from "antd";
import styles from './Main.module.scss';

const {Content} = Layout;

/**
 * State 类型
 */
interface StateTypes {
  url: String
}

/**
 * <p>
 *   Description: Main
 * </p>
 * @author c332030
 * @version 1.0
 */
class Main extends React.Component <{}, StateTypes> {

  state: StateTypes = {
    url: ''
  };

  down = () => {
    console.debug(`url: ${this.state.url}`);
  }

  render(): ReactNode {
    return (
      <Layout>
        <Content>
          <a className={ styles.downA } />
          <Input placeholder={'请输入链接'}
            onChange={ event =>
              this.setState({
                url: event.target.value
              })
            }
          />
          <Button onClick={ this.down }>下载</Button>
        </Content>
      </Layout>
    );
  }
}

export default Main;
