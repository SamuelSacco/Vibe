

export const requestUser = userId => {
  return(
    $.ajax({
      method: "GET",
      url: `/api/users/${userId}`
    })
  )
};

export const requestUsers = () => {
  return(
    $.ajax({
      method: "GET",
      url: `/api/users`, 
    })
  )
};

