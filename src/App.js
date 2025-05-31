import React from 'react';
import { Box } from '@mui/material'; // 修正：Boxをインポート
import { Link } from '@mui/material';

function App() {
  return (
    <Box
      sx={{
        textAlign: 'center',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 'calc(10px + 2vmin)',
        color: 'white',
        backgroundColor: '#282c34',
      }}
    >
      <Link
        href="https://react.dev/link/react-devtools"
        sx={{
          color: '#61dafb',
          textDecoration: 'none',
          '&:hover': {
            textDecoration: 'underline',
          },
        }}
      >
        React DevToolsをダウンロード
      </Link>
      {/* 他のコンテンツ */}
    </Box>
  );
}

export default App;
