import React, { useState } from 'react';

function Search() {

    const [term, setTerm] = useState('');

    function handleInputChange(event) {
        setTerm({ term: event.target.value });
    }

    function submitSearch(event) {
        event.preventDefault();
        let { term } = this.state;
        this.props.searchAlbums(term);
    }

    return (
        <div className="search mb-2">
            <form onSubmit={(event) => submitSearch(event)} action="#">
                <div className="row">
                    <div className="col-md-10">
                        <div className="form-group">
                            <input type="text" placeholder="Search" className="form-control" value={term} onChange={(event) => handleInputChange(event)} />
                        </div>
                    </div>

                    <div className="col-md-2">
                        <div className="form-group">
                            <button type="submit" className="btn btn-danger">
                                <i className="fas fa-search"></i>
                            </button>
                        </div>
                    </div>


                </div>
            </form>
        </div>
    )
}

export default Search;