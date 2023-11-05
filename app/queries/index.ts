

export const GET_COMMENTS = "SELECT * FROM LibraryComments"


export const GET_ALL_USERS = "SELECT * FROM Users";

export const GET_LIBRARIES = "SELECT * FROM LittleLibraries";

export const GET_PENDING_COMMENTS = "SELECT * FROM LittleLibraries WHERE approved_status = 0";

export const GET_COMMENTS_AND_USER_EMAIL = `
  SELECT LibraryComments.*, Users.email
  FROM LibraryComments
  JOIN Users ON LibraryComments.user_id = Users.user_id
  WHERE LibraryComments.library_id = ?
`

export const GET_VERIFIED_LIBRARIES = "SELECT * FROM LittleLibraries WHERE approved_status = 1"

export const GET_LIBRARY_BY_ID = "SELECT * FROM LittleLibraries WHERE id = ?";
