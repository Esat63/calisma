import React, {Component} from 'react'
import   ReactMarkDown  from 'react-markdown'
import AboutMD from '../page/about.md'


class About extends Component {
    state = {
        page:null
    }
    
    componentDidMount(){
        fetch(AboutMD).then(
            (response) => response.text()
        ).then (
            text => this.setState({page:text})
        )
    }
    
    render(){
        return(
          <div className="row">
              <div className="col-sm-8 offset-sm-2">
                  <ReactMarkDown source = {this.state.page}/>
              </div>
          </div>
            
        )
      }
    }

export default About