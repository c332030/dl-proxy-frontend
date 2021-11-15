import React, {ReactNode} from 'react';
import {Button, Card, Form, Input, Layout} from "antd";
import classes from './Main.module.scss';

const {Content} = Layout;

/**
 * State 类型
 */
interface StateTypes {
  url: string
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

  onFinish = () => {
    window.open(`/proxy?url=${this.state.url}`, "_blank");
  };

  input = () => {
    return (
      <>
        <Form
          className={classes.form}
          onFinish={this.onFinish}
        >
          <Form.Item
            className={[
              classes.formItem
              , classes.formItemUrl
            ].join(' ')}
            label={`链接`}
            name={'url'}
            rules={[{
              required: true
              , type: 'url'
              , message: '请输入链接!'
            }]}
          >
            <Input placeholder={'请输入链接'}
              onChange={event =>
                this.setState({
                  url: event.target.value
                })
              }
            />
          </Form.Item>

          <Form.Item
            className={classes.formItem}
          >
            <Button type={"primary"} htmlType={"submit"}>下载</Button>
          </Form.Item>
        </Form>
      </>
    )
  }

  render(): ReactNode {
    return (
      <Layout>
        <Content className={
          classes.context
        }>
          <Card title="下载" bordered={false}
            className={classes.card}
          >
            {this.input()}
          </Card>
        </Content>
      </Layout>
    );
  }
}

export default Main;
