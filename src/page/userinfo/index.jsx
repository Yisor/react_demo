import React from 'react'
import { Layout, } from 'antd'
import { observer, inject } from 'mobx-react'
const { Header, Footer, Content } = Layout;

@inject(stores => {
    return {
        userName: stores.userInfo.userName,
    }
})
@observer
export default class extends React.Component {
    state = {
        value: ''
    }

    render() {
        return (
            <Layout>
                <Header>Header</Header>
                <Content>Content</Content>
                <Footer>Footer</Footer>
            </Layout>
        )
    }
}
