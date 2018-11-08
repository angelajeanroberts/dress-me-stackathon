import axios from 'axios'

/**
 * ACTION TYPES
 */
const GET_ALL_REPLIES = 'GET_REPLIES'
const GET_REPLY = 'GET_REPLY'

/**
 * INITIAL STATE
 */
const initialState = {
  allReplies: [],
  selectedReply: {}
}

/**
 * ACTION CREATORS
 */
const setAllReplies = replies => ({type: GET_ALL_REPLIES, replies})
const setSelectedReply = reply => ({type: GET_REPLY, reply})

export const fetchAllReplies = () => async dispatch => {
  try {
    const {data: replies} = await axios.get(`/api/replies`)
    dispatch(setAllReplies(replies))
  } catch (error) {
    console.log(error)
  }
}

export const fetchSelectedReply = replyId => async dispatch => {
  try {
    const {data: reply} = await axios.get(`/api/replies/${replyId}`)
    dispatch(setSelectedReply(reply))
  } catch (error) {
    console.log(error)
  }
}

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_ALL_REPLIES:
      return {
        ...state,
        allReplies: action.replies
      }
    case GET_REPLY:
      return {
        ...state,
        selectedReply: action.reply
      }
    default:
      return state
  }
}
