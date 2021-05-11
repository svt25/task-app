import React from 'react';
import axios from 'axios';

import TaskGrid from "./TaskGrid";

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            tasks: [],
            errorMessage: ''
        }
    }

    componentDidMount() {
        this.getData();
    }

    getData() {
        axios.get('http://my-json-server.typicode.com/svt25/Project2DB/posts')
            .then(response => {
                this.setState({ tasks: response.data });
            }).catch(error => {
            this.setState({ errorMessage: error.message });
        });
    }

    render() {
        if (this.state.tasks.length) {
            return <TaskGrid tasks={this.state.tasks} />
        }
        else if (this.state.errorMessage) {
            return <h1>Error: { this.state.errorMessage }</h1>
        }
        else {
            return <h1>Loading...</h1>
        }
    }
}

export default App;
