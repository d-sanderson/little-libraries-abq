export const GET_COMMENTS_AND_USER_EMAIL = `
  SELECT LibraryComments.*, Users.email
  FROM LibraryComments
  JOIN Users ON LibraryComments.user_id = Users.user_id
  WHERE LibraryComments.library_id = ?
`
