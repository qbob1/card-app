import React, { StrictMode, useMemo, useState } from 'react'
import Card from './components/Card/Card'

// Styles
import './styles/general.scss'
import {
    StreamlitComponentBase,
    withStreamlitConnection,
    Streamlit
} from "streamlit-component-lib"

interface Props {

}

interface State {
    value: number[]
}

class App extends React.Component {
    constructor(props: any) {
        super(props)
    }

    private readonly cardData : any = {
        hits: [
            {
                id: 10,
                name: "AK-47",
                description: "Dense, trichome-laden buds release a spicy, woodsy smell and a sweet, floral taste. The high comes quickly and is alert and cerebral. Very enjoyable. Goes well with music or social occasions.\\n\\n\\n\\nColumbian, Mexican, Thai & Afghani \\n\\n\\n\\nFlowering Time Indoor: 50 - 69 days (~60 days) Yield / Quantity Indoor: The crop of this strain is great. General Impression Indoor: is all together extremely good and very recommendable. Harvest Time Outdoor: Middle of October +/- 1 Week in climates. Strength / Lasting Effect: The weed is very strong and long lasting. Yield / Quantity Outdoor: The crop of this strain is slightly above average. General Impression Outdoor: is all together extraordinary and quite recommendable. \\n\\n\\n\\nGenetics: Columbian, Mexican, Thai & Afghani Harvest Date Outdoor: middle - end of OctoberIndoor clone grow time: 5 - 10 daysIndoor flowering time: 53 - 63 daysIndoor yield: 350 - 500 g/m\\u00b2This easy to grow plant is one of the most popular. It is of medium height and produces good yields quite quickly. Extremely STRONG odor and smoke. The name was given not out of any idea of violence, but more in association with the one hit wonder that the smoke is. Quality without compromise makes AK suitable for commercial grows or home use. These plants have a short flowering period for a sativa, producing compact, not too leafy buds that gleam with a coat of resin crystals.",
                price_per_gram: 0,
                enabled: "TRUE",
                image_id: 33,
                created_at: "2010-07-26 17:44:38.629511",
                updated_at: "2014-09-07 21:52:33.15279",
                percent_sativa: 65,
                percent_indica: 35,
                breeder_id: "",
                lineage: [
                    "Colombian",
                    "Mexican",
                    "Thai",
                    "Afghani"
                ],
                seed_company: "Serious Seeds",
                percent_ruderalis: 0,
                percent_afghanica: 0,
                thc_content: 20,
                height_growth: "",
                climate_preferred: "",
                flowering_period: 9,
                euphoric_duration: 2,
                seed_company_id: 63,
                od_flowering_period: "",
                od_height_growth: "",
                od_flowering_month: 10,
                estimated_yield: "",
                landrace: "FALSE",
                creation_year: 1992,
                country_of_origin: "Netherlands",
                od_estimated_yield: "",
                cbd_content: "",
                scale: 1500,
                center: [0, 50]
            },
            {
                id: 103,
                name: "Blue God",
                description: "Blue God is a very strong, indica with a deep berry taste.  Originally a blend of Blueberry and God Bud, it is especially suitable for relief of insomnia, chronic pain and nausea. Extremely stationary and relaxing. Can be grown indoors or out. Best grown multi branch outdoors. Flowers in approximately 8 weeks. Very attractive plant.",
                price_per_gram: 0,
                enabled: "TRUE",
                image_id: 593,
                created_at: "2010-07-26 17:44:40.011169",
                updated_at: "2014-08-14 22:46:10.768505",
                percent_sativa: 10,
                percent_indica: 90,
                breeder_id: "",
                lineage: [
                    "God Bud",
                    "Blueberry"
                ],
                seed_company: "Jordan of the Islands",
                percent_ruderalis: 0,
                percent_afghanica: 0,
                thc_content: "",
                height_growth: 4,
                climate_preferred: "",
                flowering_period: 8,
                euphoric_duration: 2,
                seed_company_id: 118,
                od_flowering_period: "",
                od_height_growth: 12,
                od_flowering_month: "",
                estimated_yield: 8,
                landrace: "FALSE",
                creation_year: "",
                country_of_origin: "Canada",
                od_estimated_yield: 16,
                cbd_content: "",
                scale: 400,
                center: [-100, 80]
            },
            {
                id: 1036,
                name: "Querkle",
                description: "The taste of purple grapes and berries introduces an indica head high that is relaxing and mellow, good for evening use or moderate outdoor activities.  Tinctures helpful for insomnia or pain.",
                price_per_gram: 0,
                enabled: "TRUE",
                image_id: 455,
                created_at: "2010-10-29 21:03:34.875142",
                updated_at: "2011-01-06 20:27:26.111504",
                percent_sativa: 20,
                percent_indica: 80,
                breeder_id: "",
                lineage: [
                    "Purple Urkle",
                    "Space Queen"
                ],
                seed_company: "TGA Seeds",
                percent_ruderalis: 0,
                percent_afghanica: 0,
                thc_content: 20,
                height_growth: "",
                climate_preferred: "",
                flowering_period: 10,
                euphoric_duration: 2,
                seed_company_id: 68,
                od_flowering_period: "",
                od_height_growth: "",
                od_flowering_month: 10,
                estimated_yield: 4,
                landrace: "FALSE",
                creation_year: "",
                country_of_origin: "United States",
                od_estimated_yield: "",
                cbd_content: "",
                scale: 400,
                center: [-120, 60]
            }
        ]
    }

    public componentDidMount(){
        Streamlit.setFrameHeight(10000)
    }

    public render = (): React.ReactNode => {
        return (
            <div>
                <div className='container'>
                    {
                        this.cardData.hits.map((card: any) => (
                            <Card key={card.id} data={card} />
                        ))
                    }
                </div>
            </div>
        )
    }
}

export default App
