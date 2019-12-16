import React from 'react';
import { getComicIssue } from '../../API/apicalls';
import { connect } from 'react-redux';

export const SavedComics = () => {
  return (
    <section>
      
    </section>
  )
}

const mapStateToProps = (store) => ({
  savedIds: store.savedIds
})

export default connect(mapStateToProps)(SavedComics)