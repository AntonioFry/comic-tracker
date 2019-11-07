import React from 'react';

export const HomePage = () => {
  return (
    <>
      <h2 className="rail-category">This Weeks Comics</h2>
      <ComicRail comics={this.props.weeklyComics} />
    </>
  )
}