import './MoviesCardList.css';
import { MoviesCard } from '../MoviesCard/MoviesCard';
import { Preloader } from '../Preloader/Preloader';

import picUrl1 from '../../images/pic-1.jpg';
import picUrl2 from '../../images/pic-2.jpg';
import picUrl3 from '../../images/pic-3.jpg';
import picUrl4 from '../../images/pic-4.jpg';
import picUrl5 from '../../images/pic-5.jpg';

export const MoviesCardList = () => {

  return (
    <section className="movies-card-list">
      <div className="movies-card-list__container">
        <Preloader />
        <ul className="movies-card-list__movies-card-wrapper">
          <MoviesCard
            imageUrl={picUrl1}
            title="33 слова о дизайне"
            filmDuration="1ч 42м"
            isSaved={false}
          />
          <MoviesCard
            imageUrl={picUrl2}
            title="Киноальманах «100 лет дизайна»"
            filmDuration="1ч 42м"
            isSaved={true}
          />
          <MoviesCard
            imageUrl={picUrl3}
            title="В погоне за Бенкси"
            filmDuration="1ч 42м"
            isSaved={true}
          />
          <MoviesCard
            imageUrl={picUrl4}
            title="Баския: Взрыв реальности"
            filmDuration="1ч 42м"
            isSaved={false}
          />
          <MoviesCard
            imageUrl={picUrl5}
            title="Бег это свобода"
            filmDuration="1ч 42м"
            isSaved={false}
          />
          <MoviesCard
            imageUrl={picUrl1}
            title="Книготорговцы"
            filmDuration="1ч 42м"
            isSaved={true}
          />
          <MoviesCard
            imageUrl={picUrl1}
            title="Книготорговцы"
            filmDuration="1ч 42м"
            isSaved={false}
          />
        </ul>

        <button className="movies-card-list__more-movies-button">Ещё</button>
      </div>
    </section>
  )
}