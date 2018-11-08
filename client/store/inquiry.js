import axios from 'axios'

/**
 * ACTION TYPES
 */
const GET_ALL_INQUIRIES = 'GET_INQUIRIES'
const GET_INQUIRY = 'GET_INQUIRY'
const POST_INQUIRY = 'POST_INQUIRY'

/**
 * INITIAL STATE
 */
const initialState = {
  allInquiries: [],
  selectedInquiry: {}
}

/**
 * ACTION CREATORS
 */
const setAllInquiries = inquiries => ({type: GET_ALL_INQUIRIES, inquiries})
const setSelectedInquiry = inquiry => ({type: GET_INQUIRY, inquiry})
const setNewInquiry = inquiry => ({type: POST_INQUIRY, inquiry })

export const fetchAllInquiries = () => async dispatch => {
  try {
    const {data: inquiries} = await axios.get(`/api/inquiries`)
    dispatch(setAllInquiries(inquiries))
  } catch (error) {
    console.log(error)
  }
}

export const fetchSelectedInquiry = inquiryId => async dispatch => {
  try {
    const {data: inquiry} = await axios.get(`/api/inquiries/${inquiryId}`)
    dispatch(setSelectedInquiry(inquiry))
  } catch (error) {
    console.log(error)
  }
}

export const fetchNewInquiry = inquiry => async dispatch => {
  try {
    const {data: newInquiry} = await axios.post('/api/inquiries', inquiry)
    dispatch(setNewInquiry(newInquiry))
  } catch (error) {
    console.log(error)
  }
}

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_ALL_INQUIRIES:
      return {
        ...state,
        allInquiries: action.inquiries
      }
    case GET_INQUIRY:
      return {
        ...state,
        selectedInquiry: action.inquiry
      }
      case POST_INQUIRY:
      return {
        ...state,
        allInquiries: [...state.allInquiries, action.inquiry]
      }
    default:
      return state
  }
}
