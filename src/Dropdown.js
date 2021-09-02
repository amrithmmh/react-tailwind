import React from 'react'
import globe from './img/globe.svg'
import downAroow from './img/down-chevron.svg'
import './Dropdown.css'

function Dropdown() {
    return (
        <div className="border-solid border-3 border-black text-gray-700 font-semibold py-4 px-2 rounded inline-flex items-center">

            <img src={globe} className="w-8 h-8 m-2 mr-5" />
            <select className="select text-black font-bold text-3xl bg-white border-white outline-white mr-4" >
                <option classname="option" value="" selected disabled hidden>Select a tour guide Language :</option>
                <option classname="option" value="grapefruit">Grapefruit</option>
                <option classname="option" value="lime">Lime</option>
                <option classname="option" value="coconut">Coconut</option>
                <option classname="option " value="mango">Mango</option>
            </select>

        </div>
    )
}

export default Dropdown
