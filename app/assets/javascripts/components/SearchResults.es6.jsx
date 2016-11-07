class SearchResults extends React.Component {

  renderCreateBookPanel() {
    if (this.props.currentUser) {
      return (
        <a href="/books/new" title="Create a new book">New book</a>
      );
    }
    return (
      <a href="/sign_in" title="Create a new book">Log in to create new books</a>
    );
  }

  renderCreateBookButton() {
    if (this.props.currentUser) {
      return (
        <a href="/books/new" className="newBook" title="Create a new book">+</a>
      );
    }
  }

  renderSearchResults() {
    if (this.props.sourceLanguage.length !== 0 || this.props.targetLanguage !== 0) {
      return (
        <div className="search">
          {this.renderSourceResultSection()}
          {this.renderTargetResultSection()}
        </div>
      );
    }
    return (
      <span className="emptySearch">No results for "{this.props.query}"</span>
    );
  }

  renderSourceResultSection() {
    if (this.props.sourceLanguage.length !== 0) {
      return (
        <div className="indexContent">
          <div className="controlPanel">
            <p>Source Language contains "{this.props.query}"</p>
            <span className="bookCount search">{this.props.sourceLanguage.length}</span>
          </div>
          <ul className="bookEntryList">
            {this.renderSourceResults()}
          </ul>
        </div>
      );
    }
  }

  renderSourceResults() {
    return this.props.sourceLanguage.map((book) => {
      return (
        <BookEntry
          users={this.props.users}
          book={book}
          key={book.id}
          cardinality={this.props.cardinality}
        />
      );
    });
  }

  renderTargetResultSection() {
    if (this.props.targetLanguage.length !== 0) {
      return (
        <div className="indexContent">
          <div className="controlPanel">
            <p>Target Language contains "{this.props.query}"</p>
            <span className="bookCount search">{this.props.targetLanguage.length}</span>
          </div>
          <ul className="bookEntryList">
            {this.renderTargetResults()}
          </ul>
        </div>
      );
    }
  }

  renderTargetResults() {
    return this.props.targetLanguage.map((book) => {
      return (
        <BookEntry
          users={this.props.users}
          book={book}
          key={book.id}
          cardinality={this.props.cardinality}
        />
      );
    });
  }

  render() {
    return (
      <div className="container">
        <NavBar
          currentUser={this.props.currentUser}
          query={this.props.query}
          logo={this.props.logo}
          detail={this.props.detail}
          search={this.props.search}
        />
        <div className="dashboard">
          <span className="backgroundElement" />
          {this.renderSearchResults()}
          {this.renderCreateBookButton()}
        </div>
      </div>
    );
  }
}

SearchResults.propTypes = {

};
