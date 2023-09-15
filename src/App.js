import React, { useState, useEffect } from "react";

function App() {
  const [query, setQuery] = useState("");
  const [data, setData] = useState([]);
  const [year, setYear] = useState("");
  const [state, setState] = useState("California"); // Set the initial state value
  const [city, setCity] = useState("");

  const handleYearChange = (event) => {
    setYear(event.target.value);
  };

  const handleStateChange = (event) => {
    setState(event.target.value);
  };

  const handleCityChange = (event) => {
    setCity(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    // Construct the query string using the current values of year, state, and city
    const queryStr = `terms=${year}&state=${state}&city=${city}&format=json`;
    setQuery(queryStr); // Update the query state
  };

  useEffect(() => {
    // Fetch data when the query changes
    const fetchData = async () => {
      const url = `https://chroniclingamerica.loc.gov/search/titles/results/?${query}`;
      const response = await fetch(url);
      const result = await response.json();
      setData(result.items);
    };

    if (query) {
      fetchData();
    }
  }, [query]);

  return (
    <div className="App">
      <h1>News App</h1>
      <form onSubmit={handleSubmit}>
        <select
          value={year}
          onChange={handleYearChange}
          placeholder="Select a year"
        >
          <option value="2023">2023</option>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
          <option value="2018">2018</option>
          <option value="2016">2016</option>
          <option value="2015">2015</option>
          <option value="2014">2014</option>
          <option value="2013">2013</option>
          <option value="2012">2012</option>
          <option value="2011">2011</option>
          <option value="2010">2010</option>
          <option value="2009">2009</option>
          <option value="2008">2008</option>
          <option value="2007">2007</option>
          <option value="2006">2006</option>
          <option value="2005">2005</option>
          <option value="2004">2004</option>
          <option value="2003">2003</option>
          <option value="2002">2002</option>
          <option value="2001">2001</option>
          <option value="2000">2000</option>
          <option value="1999">1999</option>
          <option value="1998">1998</option>
          <option value="1997">1997</option>
          <option value="1996">1996</option>
          <option value="1995">1995</option>
          <option value="1994">1994</option>
          <option value="1993">1993</option>
          <option value="1992">1992</option>
          <option value="1991">1991</option>
          <option value="1990">1990</option>
          <option value="1989">1989</option>
          <option value="1988">1988</option>
          <option value="1987">1987</option>
          <option value="1986">1986</option>
          <option value="1985">1985</option>
          <option value="1984">1984</option>
          <option value="1983">1983</option>
          <option value="1982">1982</option>
          <option value="1981">1981</option>
          <option value="1980">1980</option>
          <option value="1979">1979</option>
          <option value="1978">1978</option>
          <option value="1977">1977</option>
          <option value="1976">1976</option>
          <option value="1975">1975</option>
          <option value="1974">1974</option>
          <option value="1973">1973</option>
          <option value="1972">1972</option>
          <option value="1971">1971</option>
          <option value="1970">1970</option>
          <option value="1969">1969</option>
          <option value="1968">1968</option>
          <option value="1967">1967</option>
          <option value="1966">1966</option>
          <option value="1965">1965</option>
          <option value="1964">1964</option>
          <option value="1963">1963</option>
          <option value="1962">1962</option>
          <option value="1961">1961</option>
          <option value="1960">1960</option>
          <option value="1959">1959</option>
          <option value="1958">1958</option>
          <option value="1957">1957</option>
          <option value="1956">1956</option>
          <option value="1955">1955</option>
          <option value="1954">1954</option>
          <option value="1953">1953</option>
          <option value="1952">1952</option>
          <option value="1951">1951</option>
          <option value="1950">1950</option>
          <option value="1949">1949</option>
          <option value="1948">1948</option>
          <option value="1947">1947</option>
          <option value="1946">1946</option>
          <option value="1945">1945</option>
          <option value="1944">1944</option>
          <option value="1943">1943</option>
          <option value="1942">1942</option>
          <option value="1941">1941</option>
          <option value="1940">1940</option>
          <option value="1939">1939</option>
          <option value="1938">1938</option>
          <option value="1937">1937</option>
          <option value="1936">1936</option>
          <option value="1935">1935</option>
          <option value="1934">1934</option>
          <option value="1933">1933</option>
          <option value="1932">1932</option>
          <option value="1931">1931</option>
          <option value="1930">1930</option>
          <option value="1929">1929</option>
          <option value="1928">1928</option>
          <option value="1927">1927</option>
          <option value="1926">1926</option>
          <option value="1925">1925</option>
          <option value="1924">1924</option>
          <option value="1923">1923</option>
          <option value="1922">1922</option>
          <option value="1921">1921</option>
          <option value="1920">1920</option>
          <option value="1919">1919</option>
          <option value="1918">1918</option>
          <option value="1917">1917</option>
          <option value="1916">1916</option>
          <option value="1915">1915</option>
          <option value="1914">1914</option>
          <option value="1913">1913</option>
          <option value="1912">1912</option>
          <option value="1911">1911</option>
          <option value="1910">1910</option>
          <option value="1909">1909</option>
          <option value="1908">1908</option>
          <option value="1907">1907</option>
          <option value="1906">1906</option>
          <option value="1905">1905</option>
          <option value="1904">1904</option>
          <option value="1903">1903</option>
          <option value="1902">1902</option>
          <option value="1901">1901</option>
          <option value="1900">1900</option>
        </select>
        <select
          value={state}
          onChange={handleStateChange}
          placeholder="Select a state"
        >
          <option value="Alabama">Alabama</option>
          <option value="Alaska">Alaska</option>
          <option value="Arizona">Arizona</option>
          <option value="Arkansas">Arkansas</option>
          <option value="California" selected>
            {" "}
            California
          </option>
          <option value="Colorado">Colorado</option>
          <option value="Connecticut">Connecticut</option>
          <option value="Delaware"> Delaware</option>
          <option value="District of Columbia">District of Columbia</option>
          <option value="Florida"> Florida</option>
          <option value="Georgia"> Georgia</option>
          <option value="Hawaii"> Hawaii</option>
          <option value="Idaho"> Idaho</option>
          <option value="Illinois"> Illinois</option>
          <option value="Indiana"> Indiana</option>
          <option value="Iowa"> Iowa</option>
          <option value="Kansas"> Kansas</option>
          <option value="Kentucky"> Kentucky</option>
          <option value="Louisiana"> Louisiana</option>
          <option value="Maine"> Maine</option>
          <option value="Maryland"> Maryland</option>
          <option value="Massachusetts"> Massachusetts</option>
          <option value="Michigan"> Michigan</option>
          <option value="Minnesota"> Minnesota</option>
          <option value="Mississippi"> Mississippi</option>
          <option value="Missouri"> Missouri</option>
          <option value="Montana"> Montana</option>
          <option value="Nebraska"> Nebraska</option>
          <option value="Nevada"> Nevada</option>
          <option value="New Hampshire"> New Hampshire</option>
          <option value="New Jersey"> New Jersey</option>
          <option value="New Mexico"> New Mexico</option>
          <option value="New York"> New York</option>
          <option value="North Carolina"> North Carolina</option>
          <option value="North Dakota"> North Dakota</option>
          <option value="Ohio"> Ohio</option>
          <option value="Oklahoma"> Oklahoma</option>
          <option value="Oregon"> Oregon</option>
          <option value="Pennsylvania"> Pennsylvania</option>
          <option value="Rhode Island"> Rhode Island</option>
          <option value="South Carolina"> South Carolina</option>
          <option value="South Dakota"> South Dakota</option>
          <option value="Tennessee"> Tennessee</option>
          <option value="Texas"> Texas</option>
          <option value="Utah"> Utah</option>
          <option value="Vermont"> Vermont</option>
          <option value="Virginia"> Virginia</option>
          <option value="Washington"> Washington</option>
          <option value="West Virginia"> West Virginia</option>
          <option value="Wisconsin"> Wisconsin</option>
          <option value="Wyoming"> Wyoming</option>
        </select>
        <input
          type="text"
          value={city}
          onChange={handleCityChange}
          placeholder="Enter a city"
        />
        <button type="submit">Search</button>
      </form>
      <ul>
        {data.map((item) => (
          <li key={item.id}>
            item id: {item.id}
            <br />
            item title: {item.title}
            <br />
            item url: {item.url}
            <br />
            item start_year: {item.start_year}
            <br />
            item end_year: {item.end_year}
            <br />
            item state: {item.state}
            <br />
            item city: {item.city}
            <br />
            item frequency: {item.frequency}
            <br />
            item subject: {item.subject}
            <br />
            item note: {item.note}
            <br />
            item place_of_publication: {item.place_of_publication}
            <br />
            item lccn: {item.lccn}
            <br />
            item alt_title: {item.alt_title}
            <br />
            item oclc: {item.oclc}
            <br />
            item issn: {item.issn}
            <br />
            item title_normal: {item.title_normal}
            <br />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
