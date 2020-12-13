import React from 'react'
import ReactDOM from 'react-dom'
import './assets/index.css'
// import App from './app.js'

class App extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>hello world</div>
        )
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
)