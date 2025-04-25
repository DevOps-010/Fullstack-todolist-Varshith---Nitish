import React, { useState, useEffect } from 'react';
import { Container, List, ListItem, ListItemText, ListItemSecondaryAction, IconButton, Typography, Box } from '@mui/material';
import { Delete, Edit } from '@mui/icons-material';
import axios from 'axios';

function TodoList() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetchTodos();
  }, []);

  const fetchTodos = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/todos');
      setTodos(response.data);
    } catch (error) {
      console.error('Error fetching todos:', error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/todos/${id}`);
      fetchTodos();
    } catch (error) {
      console.error('Error deleting todo:', error);
    }
  };

  return (
    <Container maxWidth="md">
      <Box sx={{ mt: 4 }}>
        <Typography variant="h4" gutterBottom>
          Todo List
        </Typography>
        <List>
          {todos.map((todo) => (
            <ListItem key={todo._id} divider>
              <ListItemText
                primary={todo.title}
                secondary={todo.description}
              />
              <ListItemSecondaryAction>
                <IconButton edge="end" aria-label="edit">
                  <Edit />
                </IconButton>
                <IconButton edge="end" aria-label="delete" onClick={() => handleDelete(todo._id)}>
                  <Delete />
                </IconButton>
              </ListItemSecondaryAction>
            </ListItem>
          ))}
        </List>
      </Box>
    </Container>
  );
}

export default TodoList; 