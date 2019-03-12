import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import * as actionCreators from "./store/actions/index";
import { connect } from "react-redux";

class SearchBar extends Component {
  handleChange = event => {
    this.props.filteredAuthors(event.target.value);
  };

  render() {
    return (
      <div className="form-group col-lg-6 col-12 mx-auto">
        <div className="input-group my-3">
          <input
            className="form-control"
            type="text"
            onChange={this.handleChange}
          />
          <div className="input-group-append">
            <span className="input-group-text">
              <FontAwesomeIcon icon={faSearch} />
            </span>
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    filteredAuthors: query => dispatch(actionCreators.filterAuthors(query))
  };
};
export default connect(
  null,
  mapDispatchToProps
)(SearchBar);
