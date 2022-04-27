import React, { useEffect, useState } from 'react'
import StatisticsItem from '../StatisticsItem/StatisticsItem'
import Description from '../Description/Description'
import {
    ComposableMap,
    Geographies,
    Geography,
} from "react-simple-maps";
// Styles
import './Card.scss'

import { BsFillInfoSquareFill } from 'react-icons/bs';

// Images
import relatedIcon from '../../assets/images/related.svg'
import keywordsIcon from '../../assets/images/keywords.svg'
import descIcon from '../../assets/images/desc.svg'
import statsIcon from '../../assets/images/stats.svg'

import geo from '../../misc/geo'

const keywords = (data) => {
    return (
        <div>
            <h4 className="card__section-name">
                Keywords
                <img src={keywordsIcon} alt="keywords" />
            </h4>
            <div className="card__keywords">
                {data.keywords.map(item => (
                    <div className="card__keywords-item" key={item}>
                        <span>#</span><span>{item}</span>
                    </div>
                ))}
            </div>
        </div>
    )
}

const related = (data) => {
    return (
        <div>
            <h4 className="card__section-name">
                Related items
                <img src={relatedIcon} alt="related" />
            </h4>
            <div className="card__related">
                {data.lineage.map((item, i) => (
                    //<Link className="card__related-item" to={item.to} key={item.name}>
                    <a className="card__related-item" key={i} href={item.to}>
                        {item}
                    </a>
                    // </Link>
                ))}
            </div>
        </div>
    )
}

const shortDesc = (data) => {
    return (
        <div>
            <h4 className="card__section-name">
                Short description
                <img src={descIcon} alt="desc" />
            </h4>
            <div className="card__short-desc">
                {data.desc.length > 100 ? data.desc.slice(0, 100) + '...' : data.desc}
            </div>
        </div>
    )
}

const fullDescription = (data) => {
    return (
        <div className="card__desc">
            <h4 className="card__section-name">
                Full description
                <img src={descIcon} alt="desc" />
            </h4>
            <Description text={data.description} />
        </div>
    )
}

const stats = (data) => {
    return (
        <div className="card__stats">
            <h4 className="card__section-name">
                Statistics
                <img src={statsIcon} alt="desc" />
            </h4>
            <div className="card__stats-wrap">
                {
                    Object.keys(data).map(key => {
                        if (data[key]) {
                            if (key.includes('percent')) {
                                return (
                                    <StatisticsItem data={data[key]} name={key} key={key} progress />
                                )
                            } else if (key.includes('content')) {
                                return (
                                    <StatisticsItem data={data[key]} name={key} key={key} />
                                )
                            }
                        }
                    })
                }
                {/*{data.statistics.sort(s=>s.value.match(/[0-9]*\.?[0-9]+%/)).map(stat => (*/}
                {/*    <StatisticsItem data={stat} key={stat.name}*/}
                {/*        progress={stat.value.match(/[0-9]*\.?[0-9]+%/)}*/}
                {/*    />*/}
                {/*))}*/}
            </div>
        </div>
    )
}


const Card = ({ data }) => {
    let [compressed, setCompressed] = useState(true);
    return (
        <div className='card'>
            <h1 className="card__title">
                {data.name}
            </h1>
            <div className="card__subtitle">
                {data.country_of_origin}
            </div>
            <div>
                <div className="card__content">
                    <div className="card__location">
                        <ComposableMap
                            projection="geoEquirectangular"
                            projectionConfig={{
                                scale: data.scale,
                                center: data.center
                            }}
                        >
                            <Geographies geography={geo}>
                                {({ geographies }) => {
                                    return geographies
                                        .map(geo => (
                                            <Geography
                                                key={geo.rsmKey}
                                                geography={geo}
                                                fill={geo.properties.NAME_LONG === data.country_of_origin?'#4b8ae8':'black'}
                                                stroke='#D6D6DA'
                                            />
                                        ))
                                }
                                }
                            </Geographies>
                        </ComposableMap>

                    </div>
                    {stats(data)}
                </div>
                <div className="card__info">
                    {data.keywords && keywords(data)}
                    {related(data)}
                    <BsFillInfoSquareFill onClick={() => setCompressed(!compressed)} />
                </div>
            </div>
            <div className="card__bottom">
                {!compressed && fullDescription(data)}
            </div>
        </div>
    )
}

export default Card
