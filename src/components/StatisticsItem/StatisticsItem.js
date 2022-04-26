import React from 'react'
import cn from 'classnames'

// Styles
import './StatisticsItem.scss'

const StatisticsItem = ({data, progress, name}) => {
    return (
        <div className={cn({
            'stat__item': true,
            'stat__item_progress': progress,
            'stat__item_metric': !progress,
        })}>
            <span className='stat__item-name'>
                {
                    progress ? name.replace('percent_', '') : name.replace('_content', '')
                }
            </span>
            {
                progress && (
                    <div className='stat__item-wrap'>
                        <span className="stat__item-bar"
                              style={{width: data}}>
                            {data}
                        </span>
                    </div>
                )
            }
            {
                !progress && (
                    <div className='stat__item-metric'>
                        {data}
                    </div>
                )
            }
        </div>
    )
}

export default StatisticsItem
