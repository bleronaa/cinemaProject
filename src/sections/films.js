import React, {useState} from 'react';
import data from './data.json';
import '../App.css'

const Films = () => {
    const {moviesData} = data
    const [filter,setFilter] = useState('')
    const [selectedButtonId, setSelectedButtonId] = useState(null)

    const searchText = (event) => {
        setFilter(event.target.value);
    }
    let dataSearch = data
        .moviesData
        .filter(item => {
            return Object
                .keys(item)
                .some(key => item[key].toString().toLowerCase().includes(filter.toString().toLowerCase()))
        })

    const handleClick = (e, movies) => {
        setSelectedButtonId(movies.id)
        console.log(movies)
        return alert("Thanks, now you can see our cinemas and then decide where you want to watch the " +
                "movie");

    }

    return (
        <div className='container'>
            <div className="search-btn">

                <input
                    type="text"
                    placeholder='Search...'
                    className='inputText'
                    value={filter}
                    onChange={searchText.bind(this)}/>
                <button >
                    <i className="fas fa-search "></i>
                </button>
            </div>
            <div className='list'>
                {dataSearch.map((movies) => (
                    <div key={movies.id}>
                        <div
                            className={`listItem ${selectedButtonId === movies.id
                            ? 'selected'
                            : ''}`}>
                            <img src={movies.url} alt={movies.name} className='items'/>

                            <div className='text '>
                                <h3>{movies.name}</h3>
                                <span>{movies.duration}</span>
                                <button
                                    className={`buyButton ${selectedButtonId === movies.id
                                    ? 'selectedButton'
                                    : ''}`}
                                    onClick={(event) => handleClick(event, movies)}>
                                    <i className="fa fa-check-double"></i>Buy
                                </button>
                            </div>

                        </div>
                    </div>

                ))}
            </div>

        </div>
    )
}

export default Films
