import React, { Component } from 'react'
import {connect} from 'react-redux'
import { add_Reminder } from '../actions' 

class App extends Component {
    state = {
        text: '',
        date: new Date()
    }

    render_Reminders = () => {
        const {reminders} = this.props;
        return (
        <ul className="list-group"> 
        {
            reminders.map(reminder => {
                return (
                    <li key={reminder.id} className="list-group-item">
                        <div>{reminder.text}</div>
                        <div>{reminder.date}</div>
                        </li>
                    )
                 })
            }
        </ul>
        )
    }

    render() {
        return (
            <div className="App">
                <img src="" />
                <div className="reminder-title">
                    <h2>What Should U Do ?</h2>
                </div>
                <input className="form-control" type="text" placeholder="Entrer what U think ... ?" 
                    onChange={(e) => this.setState({text: e.target.value})} />

                <input className="form-control" type="datetime-local" 
                    onChange={(e) => this.setState({date: e.target.value})} />

                <button className="btn btn-primary btn-block"
                onClick={ () => this.props.add_Reminder(this.state.text , this.state.date)}> 
                Add Reminder</button>
                {this.render_Reminders()}
                <button className="btn btn-danger btn-block">Clear Reminders</button>
            </div>
        )
    }
}
//function mapDispatchToProps(dispatch) {
//    return {
//        add_Reminder : () => dispatch(add_Reminder())
//    }
//}
//export default connect(null , mapDispatchToProps)(App)

//function mapStateToProps(state) {
//    return {
//        reminders: state
//    }
//}

export default connect(state => {
    return {
        reminders: state
    }
} , {add_Reminder})(App)





