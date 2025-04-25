import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material';
import Navbar from './components/Navbar';
import TodoList from './pages/TodoList';
import AddTodo from './pages/AddTodo';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#dc004e',
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Navbar />
      <Routes>
        <Route path="/" element={<TodoList />} />
        <Route path="/add" element={<AddTodo />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App; 