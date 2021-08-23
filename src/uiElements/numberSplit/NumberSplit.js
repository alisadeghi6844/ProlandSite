import React, {useEffect, useState} from 'react';

const NumberSplit = ({number}) => {
    const [numSplit,setNumSplit] = useState();

    const splited =()=>{
        var str = number.toString().split('.');
        if (str[0].length >= 5) {
            str[0] = str[0].replace(/(\d)(?=(\d{3})+$)/g, '$1,');
        }
        if (str[1] && str[1].length >= 5) {
            str[1] = str[1].replace(/(\d{3})/g, '$1 ');
        }
        setNumSplit(str.join('.'));
    }
    useEffect(()=>{
        splited();
    },[]);
    return (
        <div>
            {numSplit}
        </div>
    );
};

export default NumberSplit;
