import React, { Component } from "react";
import Pagination from "react-js-pagination";

class Paginate extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activePage: 1,
    };
  }

  handlePageChange = (pageNumber) => {
    this.setState({ activePage: pageNumber });
  };

  render() {
    return (
      <div>
        <Pagination
          activePage={this.state.activePage}
          itemsCountPerPage={1}
          totalItemsCount={this.props.data.peaples}
          pageRangeDisplayed={10}
          onChange={this.handlePageChange}
        />
      </div>
    );
  }
}

export default Paginate;
