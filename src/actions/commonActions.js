import {SET_LOADING, LOGS_ERROR} from './types'

export const loading = () => ({
    type: SET_LOADING
})

export const logError = (err) => ({
    type: LOGS_ERROR,
    payload: err
})

export const techError = (err) => ({
    type: LOGS_ERROR,
    payload: err
})