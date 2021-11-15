import React, {ReactNode} from 'react';
import {Button, Form, Input, Layout} from "antd";

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

  onFinish = (values: any) => {
    console.log('Success:', values);

    window.open(`/proxy?url=${this.state.url}`, "_blank");

  };

  input = () => {
    return (
      <>
        <Form
          style={{
            display: 'flex'
            , flexDirection: "row"
          }}
          onFinish={this.onFinish}
        >
          <Form.Item
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

          <Form.Item>
            <Button type={"primary"} htmlType={"submit"}>下载</Button>
          </Form.Item>
        </Form>
      </>
    )
  }

  render(): ReactNode {
    return (
      <Layout>
        <Content>
          {this.input()}
        </Content>
      </Layout>
    );
  }
}

export default Main;
