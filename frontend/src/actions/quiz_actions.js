export const RECEIVE_MOOD = "RECEIVE_MOOD"

const receiveMood = mood => ({
    type: RECEIVE_MOOD,
    mood
})

export const fetchMood = mood => dispatch => (
    mood => dispatch(receiveMood(mood))
)