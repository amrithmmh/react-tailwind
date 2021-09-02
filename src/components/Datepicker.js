import React, { useEffect, useState } from 'react'
import moment from 'moment'
import '../components/Datepicker.css'
import DateCard from './DateCard'
import { ChevronLeft } from '@material-ui/icons'
import { ChevronRight } from '@material-ui/icons'



function Datepicker() {

    const YEARS = () => {

        const years = []
        const dateStart = moment()
        const dateEnd = moment().add(2, 'y')
        while (dateEnd.diff(dateStart, 'years') >= 0) {
            years.push(dateStart.format('MMM-YYYY'))
            dateStart.add(1, 'month')
        }

        return years
    }


    let [month, setMonth] = useState(moment().format('MMM-YYYY'));
    let [day, setDay] = useState([moment().format('DD')]);
    let monthArray = YEARS();
    let [selected, setSelected] = useState(false);
    let selectclass = selected ? "cards-sel" : "cards";
    const ref = React.createRef();
    useEffect(() => {

        setDay(Array.from(Array(moment(month, 'MMM-YYYY').daysInMonth()), (_, i) => i + 1));

    }, [month]);

    return (
        <div>
            <div>
                {<select id="dropdown" onChange={(e) => {
                    setMonth(e.target.value); console.log(e.target.value)
                }}>
                    {monthArray.map((month) => {

                        return <option value={month}>{month}</option>
                    }
                    )}
                </select>
                }

                <ul className="card" ref={ref}>
                    {
                        day.map((day) => {
                            return <li >
                                <input type="radio" id={day} name="days" />
                                <label style={{ padding: "20px" }}  >{moment(month, 'MMM-YYYY').format('MMM')}</label>
                                <label for={day} onClick={(e) => console.log(e.target.textContent)}>{day}</label>
                            </li>
                        }
                        )
                    }
                </ul>
                <ChevronLeft style={{ fontSize: "100px" }} onClick={(e) => { ref.current.scrollLeft -= 200 }} />
                <ChevronRight style={{ fontSize: "100px" }} onClick={(e) => { ref.current.scrollLeft += 200 }} />
            </div >
        </div >
    )
}

export default Datepicker
