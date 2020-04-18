import React, {useEffect, useState} from 'react'
import {NativeSelect, FormControl} from '@material-ui/core'
import styles from './CountryPicker.module.css'
import {fetchCountries} from '../../api';
export default function CountryPicker({handleCountryChange}) {
    const [fetchedCountires, setFetchedCountries] = useState([])
    useEffect(()=> {
        const fetchAPI = async ()=> {

            setFetchedCountries(await fetchCountries())
        }
        fetchAPI();
    }, [setFetchedCountries]);
   
    return (
        <FormControl className={styles.formControl}>
        <NativeSelect dafaultValue="" onChange={(e)=>handleCountryChange(e.target.value)}>
        <option value="">Mondo</option>
        {fetchedCountires.map((country, i)=>
            <option key={i} value={country}>{country}</option>
            )}
        
        </NativeSelect>
        </FormControl>
    )
}
