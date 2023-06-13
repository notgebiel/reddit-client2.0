import React from 'react';
import ReactDOM from 'react-dom/client';


class SearchBar extends React.Component {
    render() {
        return (
        <div className="searchBar">
            <p>searchBar</p>
        </div>
        )
    }
}


const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<SearchBar />)
export default SearchBar;
