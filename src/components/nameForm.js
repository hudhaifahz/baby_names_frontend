import React from 'react'
import {getNames, postName} from '../services/crud'

class NameForm extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        value: '',
        list: []
      }

      this.handleChange = this.handleChange.bind(this)
      this.handleSubmit = this.handleSubmit.bind(this)
    }
    

    UNSAFE_componentWillMount() {
      var listid = localStorage.getItem("session")
      getNames(listid).then(res => {
        res.json().then( body => {
          var names = []
            body.forEach(element => {
              names.push(element.babyname)
            });
          this.setState({list: names})
        })
      })
    }

    handleChange(event) {
      this.setState({value: event.target.value})
    }

    handleSubmit(event) {
      var trimmedvalue = this.state.value.trim()
      if(!this.state.list.includes(trimmedvalue)){
        postName(localStorage.getItem("session"),trimmedvalue)
        var nameslist = this.state.list
        nameslist.push(trimmedvalue)
        this.setState({list: nameslist })
      } else {
        alert("this name is already on the list")
      }
      event.preventDefault()
    }

    render() {
      return (
        <form onSubmit={this.handleSubmit}>
            <input type="text" value={this.state.value} onChange={this.handleChange} />
            <div>
            {this.state.list.map(function(name, i){
               return <p className={"row"} key={i}> 
                          {name}
                      </p>; 
             })}
            </div>
        </form>
      )
    }
  }

  export default NameForm