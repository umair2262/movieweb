import React from 'react'
import './MovieCard.css'
import Star from '../assets/star.png'

const MovieCard = () => {
  return (
    <a href="" className='movie_card'>
        <img src="https://www.washingtonpost.com/graphics/2019/entertainment/oscar-nominees-movie-poster-design/img/1800/BlackPanther59f24429d2605.jpg" alt="movie pooster"className='movie_poster' />
        <div className='movie_details'>
            <h3 className='movie_details_heading'>Movie Name</h3>
            <div className='movie_date_rate'>
                <p>10-1-2025</p>
                <p>8.0 <img src={Star} alt="rating icon" /></p>
            </div>
            <p className='movie_description'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda quam amet provident quos sequi ut.</p>
        </div>
    </a>
  )
}

export default MovieCard
