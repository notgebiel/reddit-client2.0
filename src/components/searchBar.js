import React from 'react';
import ReactDOM from 'react-dom';


class searchBar extends React.Component {
    render() {
        return (
        <div className="searchBar">
            <p>searchBar</p>
        </div>
        )
    }
}



ReactDOM.render(<searchBar />, document.getElementById('root'))

export default searchBar;