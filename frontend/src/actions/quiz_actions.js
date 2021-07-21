export const RECEIVE_MOOD_SCORE = "RECEIVE_MOOD_SCORE"

const receiveMoodScore = score => (
    {
    type: RECEIVE_MOOD_SCORE,
    score
})

export const fetchMoodScore = score => dispatch => (
    dispatch(receiveMoodScore(score))
)

// s/o Pauly