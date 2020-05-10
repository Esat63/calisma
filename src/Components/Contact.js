import React, { Component } from 'react';
import ContactMD from '../page/contact.md'
import ReactMarkdown from 'react-markdown'

class Contact extends Component {
    state = {
        page: null
    }
    componentDidMount() {
        fetch(ContactMD).then(
            (response) => response.text()
        ).then(text => this.setState({page: text})) // bu yapı yazı yazmak icin cok iyi
    }
    render() {
        return (
            <div className="row">
               <div className="col-sm-8 ofset-sm-2">
                   <ReactMarkdown source={this.state.page}/>
               </div>
           </div>
        );
    }
}

export default Contact;