import React from 'react';
import ReactDOM from 'react-dom/client';

class Profile extends React.Component {

    componentWillUnmount() {
        alert('Log Out!')
    }

    render() {
        return <>
            <p>名字：{this.props.info.name}</p>
            <p>年齡：{this.props.info.age}</p>
            <p>大學：{this.props.info.college}</p>
            <p>科系：{this.props.info.department}</p>
            <p>興趣：{this.props.info.interest}</p>

        </>
    }

}


class LoginView extends React.Component {

    constructor() {
        super({ details: '' });
        this.details = ''
        this.state = {
            isLog: false
        }
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        this.details = <p>上次{prevState.isLog ? '登入' : '登出'} 時間為 {new Date().toLocaleString()}</p>;
    }

    login = () => {
        this.setState({ isLog: true })
    }

    logout = () => {
        this.setState({ isLog: false })
    }

    render() {
        return <>
            <p>NCHU CSE</p>
            <p>{this.details}</p>
            {
                this.state.isLog ?
                    <button onClick={this.logout}>Log Out</button> :
                    <button onClick={this.login}>Log In</button>
            }
            {this.state.isLog && <Profile info={{
                name: 'Edmond Yang',
                age: 21,
                college: 'NCHU',
                department: 'CSE',
                interest: 'Natural Language Processing'
            }} />}
        </>
    }

}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<LoginView />)
