const React = require('react')
const { Link } = require('react-router')

const Landing = function () {
  return (
    <div className='home-info'>
      <h1 className='title'>svideo</h1>
      <input className='search' type='text' placeholder='Search' />
      <Link className='browse-all' to='/search'> or Browse All</Link>
    </div>
  )
}

module.exports = Landing
