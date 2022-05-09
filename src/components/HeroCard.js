import React from 'react';
import { Link } from 'react-router-dom';

const HeroCard = props => {
    console.log('PROP', props);
    return (
        <>
        {
            props.heros.map( hero => (
                <div key={ 'hero-' + hero.id } className='items items_style'>
                    <Link to={ 'hero-detail/' + hero.id }>
                        <div className={ 'hero-wrapper ' + hero.class}>
                            <img src={hero.image} />
                        </div>
                    </Link>
                </div>
            ))
            
        }
        </>
    );
};

export default HeroCard;