import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getDetail } from '../actions'
import style from '../styles/Card.module.scss';
import Nav from './Nav';


function Card(props) {
    const dispatch = useDispatch()
    const details = useSelector(state => state.details)
    

    useEffect(() => {
        dispatch(getDetail(props.match.params.id))
    }, [dispatch])

    const activities = details.activities?.map(e => {
        return {
            name: e.name,
            difficulty: e.difficulty,
            duration: e.duration,
            season: e.season
        }
    })

    return (
        <div>
         <Nav />
            <div className={style.card}>
                
                    <div>
                        <div className={style.flag}>
                            <h2>{details.name}</h2>
                            <img src={details.image} alt={details.name} className={style.imagen} />
                            
                        </div>
                        <div className={style.cont}>
                            <div className={style.detail}>
                                <div className={style.details}>
                                    <h3>Details</h3>
                                    <p>Code: {details.id}</p>
                                    <p>Continent: {details.continent}</p>
                                    <p>Capital: {details.capital}</p>
                                    <p>Population: {details.population}</p>
                                    <p>Subregion: {details.subregion}</p>
                                </div>
                                <div className={style.activities}>
                                    <h3>Activities</h3>
                                    {activities?.length > 0 ? activities?.map(e => {
                                        return (
                                            <div key={e.id}>
                                                <p>Name: {e.name}</p>
                                                <p>Difficulty: {e.difficulty}</p>
                                                <p>Duration: {e.duration}</p>
                                                <p>Season: {e.season}</p>
                                                <hr></hr>
                                            </div>
                                        )
                                    })
                                        : <p>Without activities</p>}
                                </div>
                            </div>
                        </div>
                    </div>  <p></p>
               
            </div>
        </div>
    )
}

export default Card
