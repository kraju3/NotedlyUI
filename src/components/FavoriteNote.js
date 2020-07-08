import React, {useState} from 'react';
import {useQuery,useMutation} from '@apollo/client';
import {TOGGLE_FAVORITES} from '../gql/mutation';
import { NOTE_QUERY, GET_MY_NOTES, GET_NOTES, GET_FAVORITES } from '../gql/query';


const FavoriteNote = (props)=>{

    const id = props.note.id;
    const [favorites,setFavorite]= useState(props.note.favoriteCount);
    const [favorited,setfavorited] = useState(
        props.me.favorites.filter(note=> note.id===id).length>0
    )

    const [toggleFavorite] = useMutation(TOGGLE_FAVORITES,{
        variables:{
            id
        },
        refetchQueries:[{query:GET_FAVORITES}], 

    })

    return (
        <React.Fragment>
            {favorited ? (
            <React.Fragment>
                <div className="ui labeled button" tabIndex="0" onClick={()=>{
                    setfavorited(false)
                    setFavorite(favorites-1)
                    toggleFavorite()}}>
                <div className="ui button">
                  <i className="heart icon"></i> Dislike
                </div>
                <a className="ui basic label">
                  {favorites}
                </a>
        </div>
        </React.Fragment>
            ):(
            <React.Fragment>

<div className="ui labeled button" tabIndex="0" onClick={()=>{
                            setfavorited(true)
                            setFavorite(favorites+1)
                            toggleFavorite()}}>
                    <div className="ui button">
                      <i className="heart icon"></i> Like
                    </div>
                    <a className="ui basic label">
                      {favorites}
                    </a>
            </div>
            </React.Fragment>
            )}
        </React.Fragment>

    )

}

export default FavoriteNote;