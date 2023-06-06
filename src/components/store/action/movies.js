import { useDispatch, useSelector } from "react-redux"
import changer from './action';
import { useEffect, useState } from "react";
import axiosInstance from "../../../axiosConfig/instance";
import { type } from 'react-redux/es/exports';

export default function Movvies() {

    return (dispatch)=> {
        axiosInstance.get(`/movie/popular`).then((res) => {
        dispatch({type:'SETMOV',payload:res.data.results})
        console.log(res.data.results);
        }).catch((err) => {
            console.log(err);
        })

    }
}
