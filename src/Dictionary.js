import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import Photos from "./Photos";
import "./Dictionary.css";

export default function Dictionary() {
let[keyword, setKeyword] = useState("");
let[results, setResults] = useState(null);
let[photos, setPhotos] = useState(null);

function handleResponse(response) {
setResults(response.data[0]);
}

function handlePexelsResopnse(response) {
setPhotos(response.data.photos)

}

function search(event) {
event.preventDefault();
let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
axios.get(apiUrl).then(handleResponse);


let pexelsApiKey = "563492ad6f91700001000001f13f532f94044e0f9683aa79a55ceb5c";
let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${keyword}`;
let headers = { Authorization: `Bearer ${pexelsApiKey}` };
axios.get(pexelsApiUrl, { headers: headers }).then(handlePexelsResopnse);

}


function handleKeywordChange(event) {
  setKeyword(event.target.value)  
}
    return(
<div className="Dictionary">
    <section>
<h4>What word are you looking up today?</h4>
<form onSubmit={search}>
    <input type="search" onChange={handleKeywordChange}/>
</form>
</section>
<Results results={results} />
<Photos photos={photos} />
</div>

    );
}
