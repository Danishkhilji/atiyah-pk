import React from 'react';
import { Box } from '@mui/material';
import Comment from './comment';

const comments = [{
  userName: "Danish",
  comment: "All comments will display here"
},
{
  userName: "Awais",
  comment: "All comments will display here"
},
{
  userName: "Hamza",
  comment: "All comments will display here"
}
]

const CommentBox = () => {
  return (
    <Box
      sx={{
        border: '1px dashed grey',
        padding: '10px',
        borderRadius: '8px',
        backgroundColor: '#F2F2F2',
        marginBottom: '10px',
        width: "300px",
        height:"500px",
      }}
    >
      <Comment comments={comments} />
    </Box>
  );
};

export default CommentBox;
