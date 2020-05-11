import React, { Component } from 'react';
import queryToObject from '../../helpers/queryToObject';
import './index.css';

export default class HomePage extends Component {
  state = {
    queryObject: '',
  };

  componentDidMount() {
    this.setState({
      queryObject: queryToObject(this.props.location.search),
    });
  }
  render() {
    const queryObject = this.state.queryObject;
    console.log(queryObject);
    return (
      <div style={{ backgroundColor: 'blue' }}>
        <div className="home-page">
          <h1>Filters</h1>

          <form>
            {/* Search term */}
            <div className="form-field">
              <label className="form-field__label">Search</label>

              <input
                name="search-term"
                type="text"
                value={queryObject.searchTerm && decodeURIComponent(queryObject.searchTerm)}
              />
            </div>

            {/* Used */}
            <div className="form-field">
              <label className="checkbox-field">
                <input name="used" type="checkbox" checked={queryObject.includeUsed && true} />
                <span className="checkbox-field__label">Include used copies</span>
              </label>
            </div>

            {/* Preferred language */}
            <div className="form-field">
              <label className="form-field__label">Language</label>

              <label className="checkbox-field">
                <input
                  name="language"
                  type="checkbox"
                  checked={queryObject.language && queryObject.language.includes('english')}
                />
                <span className="checkbox-field__label">English</span>
              </label>

              <label className="checkbox-field">
                <input
                  name="language"
                  type="checkbox"
                  checked={queryObject.language && queryObject.language.includes('german')}
                />
                <span className="checkbox-field__label">German</span>
              </label>

              <label className="checkbox-field">
                <input
                  name="language"
                  type="checkbox"
                  checked={queryObject.language && queryObject.language.includes('italian')}
                />
                <span className="checkbox-field__label">Italian</span>
              </label>

              <label className="checkbox-field">
                <input
                  name="language"
                  type="checkbox"
                  checked={queryObject.language && queryObject.language.includes('chinese')}
                />
                <span className="checkbox-field__label">Chineese</span>
              </label>

              <label className="checkbox-field">
                <input
                  name="language"
                  type="checkbox"
                  checked={queryObject.language && queryObject.language.includes('russian')}
                />
                <span className="checkbox-field__label">Russian</span>
              </label>
            </div>

            {/* Book type */}
            <div className="form-field">
              <label className="form-field__label">Book type</label>

              <label className="checkbox-field">
                <input
                  name="book-type"
                  type="checkbox"
                  checked={queryObject.bookType && queryObject.bookType.includes('e-book')}
                />
                <span className="checkbox-field__label">E-Book</span>
              </label>
              <label className="checkbox-field">
                <input
                  name="book-type"
                  type="checkbox"
                  checked={queryObject.bookType && queryObject.bookType.includes('paperback')}
                />
                <span className="checkbox-field__label">Paperback</span>
              </label>
              <label className="checkbox-field">
                <input
                  name="book-type"
                  type="checkbox"
                  checked={queryObject.bookType && queryObject.bookType.includes('hardcover')}
                />
                <span className="checkbox-field__label">Hardcover</span>
              </label>
            </div>

            {/* Rating */}
            <div className="form-field">
              <label className="form-field__label">Rating</label>
              <label className="radio-field">
                <input
                  name="customer-rating"
                  type="radio"
                  checked={queryObject.customerRating && queryObject.customerRating === '1'}
                />
                <span className="radio-field__label">1 and up</span>
              </label>

              <label className="radio-field">
                <input
                  name="customer-rating"
                  type="radio"
                  checked={queryObject.customerRating && queryObject.customerRating === '2'}
                />
                <span className="radio-field__label">2 and up</span>
              </label>

              <label className="radio-field">
                <input
                  name="customer-rating"
                  type="radio"
                  checked={queryObject.customerRating && queryObject.customerRating === '3'}
                />
                <span className="radio-field__label">3 and up</span>
              </label>

              <label className="radio-field">
                <input
                  name="customer-rating"
                  type="radio"
                  checked={queryObject.customerRating && queryObject.customerRating === '4'}
                />
                <span className="radio-field__label">4 and up</span>
              </label>

              <label className="radio-field">
                <input
                  name="customer-rating"
                  type="radio"
                  checked={queryObject.customerRating && queryObject.customerRating === '5'}
                />
                <span className="radio-field__label">5 and up</span>
              </label>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
