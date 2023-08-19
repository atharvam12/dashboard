import React, { Component } from 'react';

const cardStyles = {
  width: '100%',
  maxWidth: '250px',
  margin: '0 auto',
  border: '1px solid #e0e0e0',
  borderRadius: '5px',
  boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
  transition: 'transform 0.2s, box-shadow 0.2s',
};

const cardHeaderStyles = {
  backgroundColor: '#f2f2f2',
  padding: '0.5rem',
  fontSize: '14px',
  borderBottom: '1px solid #e0e0e0',
};

const cardBodyStyles = {
  padding: '1rem',
};

const cardTitleStyles = {
  marginBottom: '0.5rem',
};

const btnPrimaryStyles = {
  backgroundColor: '#007bff',
  borderColor: '#007bff',
};

const btnPrimaryHoverStyles = {
  backgroundColor: '#0056b3',
  borderColor: '#0056b3',
};

export default class Card extends Component {
  render() {
    const { id, tag, title } = this.props;

    return (
      <div style={cardStyles} className='card'>
        <div style={cardHeaderStyles} className='card-header'>
          {id}
        </div>
        <div style={cardBodyStyles} className='card-body'>
          <h6 style={cardTitleStyles} className='card-title'>
            {title}
          </h6>
          <button
            style={{ ...btnPrimaryStyles, ...btnPrimaryHoverStyles }}
            type='button'
            className='btn btn-primary btn-sm'
          >
            {tag}
          </button>
        </div>
      </div>
    );
  }
}
