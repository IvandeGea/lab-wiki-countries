import { Link } from "react-router-dom";
function CountriesList({ countries }) {
    return (
        <div className="col-5" style={{ maxHeight: '90vh', overflow: 'scroll' }}>
            <div className="list-group">

                {countries.map((country, k) => (

                    <div className="list-group-item list-group-item" key={k}>

                        <Link to={country.alpha3Code}><img src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`} alt="imagen" /> </Link>
                    </div>

                ))}
            </div>
        </div>
    )
}


export default CountriesList;




