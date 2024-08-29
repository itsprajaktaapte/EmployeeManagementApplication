"use client";

import { useState } from 'react';
import axios from 'axios';
import { Container, TextField, Button, Typography } from '@mui/material';
import { useRouter } from 'next/navigation';

const AddEmployee = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [error, setError] = useState('');
    const router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');

        try {
            
            await axios.post('/data/employees.json', {
                name,
                email,
            });

           
            router.push('/employees');
        } catch (error) {
            console.error('Error adding employee:', error);
            setError('Failed to add employee. Please try again.');
        }

        setName('');
        setEmail('');
    };

    return (
        <Container>
            <Typography variant="h5" gutterBottom>Add New Employee</Typography>
            <form onSubmit={handleSubmit}>
                <TextField
                    label="Name"
                    fullWidth
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    margin="normal"
                    required
                />
                <TextField
                    label="Email"
                    fullWidth
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    margin="normal"
                    required
                />
                <Button type="submit" variant="contained" color="primary">Add Employee</Button>
            </form>
            {error && (
                <Typography color="error" variant="body2" mt={2}>
                    {error}
                </Typography>
            )}
        </Container>
    );
};

export default AddEmployee;
