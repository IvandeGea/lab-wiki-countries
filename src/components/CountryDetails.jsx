import { useParams } from 'react-router-dom';
import { Link } from "react-router-dom";


function CountryDetail({ countries }) {


    const { idCountry } = useParams();


    const currentCountry = countries.find(country => country.alpha3Code === idCountry);


    return (

        <div className="col-7">
            <h1>{currentCountry.name.common}</h1>

            <img src={`https://flagpedia.net/data/flags/icon/72x54/${currentCountry.alpha2Code.toLowerCase()}.png`} alt={currentCountry.name.common} />

            <table className="table">
                <thead></thead>
                <tbody>
                    <tr>
                        <td style={{ width: "30%" }}>Capital</td>
                        <td><b>{currentCountry.capital}</b> </td>
                    </tr>
                    <tr>
                        <td style={{ width: "30%" }}>Area</td>
                        <td>{currentCountry.area} km²</td>

                    </tr>

                    <tr>
                        <td>Paises Fronterizos</td>
                        <td>
                            <ul>
                                {currentCountry.borders.map((border, k) => {


                                    const borderCountry = countries.find((country) => country.alpha3Code === border)


                                    return (
                                        <li key={k}><Link to={`/${border}`}>{borderCountry.name.common}</Link></li>
                                    )
                                })}
                            </ul>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}


export default CountryDetail;