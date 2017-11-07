import React from 'react'
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import { observer, inject } from 'mobx-react'
import './NormalLoginForm.css';

const FormItem = Form.Item;

@inject(stores => {
  return {
    changeUserName: stores.userInfo.changeUserName,
    userName: stores.userInfo.userName,
    changeStep: stores.common.changeStep
  }
})

@observer
class NormalLoginForm extends React.Component {
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
        this.props.changeUserName(values)
        this.props.changeStep(1, this.props.router.push)
      }
    });
  }
  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <div className="login-page" style={{ flex: 1 }}>
        <Form onSubmit={this.handleSubmit} className="login-form">
          <FormItem >
            {getFieldDecorator('userName', {
              rules: [{ required: true, message: '请输入用户名！' }],
            })(
              <Input prefix={<Icon type="user" style={{ fontSize: 13 }} />} placeholder="用户名" />
              )}
          </FormItem>
          <FormItem>
            {getFieldDecorator('password', {
              rules: [{ required: true, message: '请输入密码！' }],
            })(
              <Input prefix={<Icon type="lock" style={{ fontSize: 13 }} />} type="password" placeholder="密码" />
              )}
          </FormItem>
          <FormItem>
            {getFieldDecorator('remember', {
              valuePropName: 'checked',
              initialValue: true,
            })(
              <Checkbox>记住密码</Checkbox>
              )}
            <a className="login-form-forgot" href="">忘记密码</a>
            <Button type="primary" htmlType="submit" className="login-form-button">
              登录
          </Button>
          </FormItem>
        </Form>
      </div >
    );
  }
}
export default Form.create()(NormalLoginForm)