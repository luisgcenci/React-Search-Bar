import React, {useState, useEffect} from 'react';
import SearchListItem from './SearchListItem'
import { useAppSelector } from '../app/hooks'
import '../css/SearchList.css'
import axios from 'axios';

const SearchList = () => {

    const searchInput = useAppSelector( (state) => state.search.value);
    const searchInputIsFocused = useAppSelector( (state) => state.search.focused);

    const [dataToDisplay, setDataToDisplay] = useState([])
    
    useEffect( () =>{

        axios.get('https://mobile-staging.gametime.co/v1/search?', {

            params:{
                q: searchInput
            }
        }).then( (response) => {
            
            let allData = [];

            response.data.events.slice(0, 3).map( (e) =>{
                
                let id = e.event.id;
                let image = e.event.map_url;
                let title = e.event.name;
                let subtitle = e.venue.name;

                return (
                    allData.push({
                        id: id,
                        image: image,
                        title: title,
                        subtitle: subtitle
                    })
                )
            })

            response.data.performers.slice(0, 3).map( (p) =>{
                
                let id = p.id;
                let image = p.hero_image_url;
                let title = p.name;
                let subtitle = p.category;

                return (
                    allData.push({
                        id: id,
                        image: image,
                        title: title,
                        subtitle: subtitle
                    })
                )

            })

            response.data.venues.slice(0, 3).map( (v) =>{

                let id = v.id;
                let image = v.image_url;
                let title = v.name;
                let subtitle = v.city;

                return (
                    allData.push({
                        id: id,
                        image: image,
                        title: title,
                        subtitle: subtitle
                    })

                )
            })

            setDataToDisplay(allData);

        });
    }, [searchInput])

    return (

        searchInputIsFocused?
        <div className='SearchList'>

            {Object.entries(dataToDisplay).map( (data) =>{

                return (
                    <SearchListItem
                        key={data[1].id}
                        image={data[1].image}
                        title={data[1].title}
                        subtitle={data[1].subtitle}
                    />
                )
            })
            
            }
        </div>
        :
        null
    );
}

export default SearchList;
