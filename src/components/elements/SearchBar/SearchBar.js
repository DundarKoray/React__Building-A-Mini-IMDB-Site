import React from 'react'
import FontAwesome from 'react-fontawesome'
import './SearchBar.css'

class SearchBar extends React.Component {
    state = {
        value: ''
    }

    //creating a half second delay when user type something in searchbar
    timeout = null

    doSearch = (event) => {
        this.setState({value: event.target.value})
        clearTimeout(this.timeout)

        this.timeout = setTimeout ( () => {
            this.props.callback(this.state.value)
        }, 500)
    }

    render(){
        return(
            <div className="rmdb-searchbar">
                <div className="rmdb-searchbar-content">
                    <FontAwesome className="rmdb-fa-search" name="search" size="2x" />
                    <input
                      type="text"
                      className="rmdb-searchbar-input"
                      placeholder="Search"
                      onChange={this.doSearch}
                      value={this.state.value}
                    />
                </div>
            </div>
        )
    }
}

export default SearchBar