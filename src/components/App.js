import React, { Component } from 'react'

class App extends Component {
    render() {
        return (
            <div className="App">
                <img src="" />
                <div className="reminder-title">
                    <h2>What Should U Do ?</h2>
                </div>
                <input className="form-control" type="text" 
                placeholder="Entrer what U think ... ?" />
                <input className="form-control" type="datetime-local" />
                <button className="btn btn-primary btn-block">Add Reminder</button>
                <button className="btn btn-danger btn-block">Clear Reminders</button>

            </div>
        )
    }
}

export default App



