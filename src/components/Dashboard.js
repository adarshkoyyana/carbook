import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import logo from '../components/logo.png';
import {
    Container,
    Button,
    Typography,
    Box,
    CircularProgress,
    Alert,
    Grid,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow
} from '@mui/material';
import '../components/Dashboard.css';

const Dashboard = () => {
    const [message, setMessage] = useState('');
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const history = useHistory();
    const [selectedCategory, setSelectedCategory] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            try {
                const token = localStorage.getItem('token');
                if (!token) {
                    history.push('/login');
                    return;
                }

                const res = await axios.get('http://localhost:5000/api/dashboard', {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });
                setMessage(res.data.message);
                setData(res.data.data);
            } catch (err) {
                console.error(err);
                setError('Failed to fetch data. Please try again.');
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, [history]);

    const handleLogout = () => {
        localStorage.removeItem('token');
        history.push('/main');
    };

    const handleGeneratePDF = () => {
        history.push('/pdf');
    };

    const handleCategoryClick = (category) => {
        setSelectedCategory(category);
    };

    const labelMapping = {
        job_card_number: 'Job Card Number',
        created_datetime: 'Created Datetime',
        customer_arrival_datetime: 'Customer Arrival Datetime',
        estimated_delivery_datetime: 'Estimated Delivery Datetime',
        customer_id: 'Customer ID',
        name: 'Name',
        address: 'Address',
        phone_res: 'Phone (Res)',
        phone_off: 'Phone (Off)',
        phone_mob: 'Phone (Mob)',
        phone_fax: 'Phone (Fax)',
        email: 'Email',
        customer_gstin: 'Customer GSTIN',
        vehicle_reg_no: 'Vehicle Reg No',
        current_kms: 'Current KMs',
        model: 'Model',
        variant: 'Variant',
        color: 'Color',
        sold_by: 'Sold By',
        sold_on: 'Sold On',
        chassis_no: 'Chassis No',
        operation_type: 'Operation Type',
        engine_number: 'Engine Number',
        last_attended_at: 'Last Attended At',
        road_test_done: 'Road Test Done',
        revisit_flag: 'Revisit Flag',
        customer_complaint_code: 'Customer Complaint Code',
        complaint_details: 'Complaint Details',
        job_code: 'Job Code',
        sac_code: 'SAC Code',
        repair_details: 'Repair Details',
        standard_hours: 'Standard Hours',
        parts_estimate: 'Parts Estimate',
        labour_estimate: 'Labour Estimate'
    };

    if (loading) {
        return (
            <Container className="loader-container">
                <CircularProgress />
                <Typography variant="h6">Loading...</Typography>
            </Container>
        );
    }

    if (error) {
        return (
            <Container className="error-container">
                <Alert severity="error">{error}</Alert>
            </Container>
        );
    }

    return (
        <Box>
            <Box className="header-container">
                <Box className="logo-title-container">
                    <img src={logo} alt="Logo" className="logodash" />
                    <Typography variant="h4">Dashboard</Typography>
                </Box>
                <Box className="header-buttons" display="flex" alignItems="center">
                    <Button variant="contained" color="primary" onClick={handleGeneratePDF}>Generate PDF</Button>
                    <Box ml={2}>
                        <Button variant="contained" color="secondary" onClick={handleLogout}>Logout</Button>
                    </Box>
                </Box>
            </Box>
            <Box className="dashboard-container">
                <Box className="left-panel">
                    {data && Object.keys(data).map((key) => (
                        <Button
                            key={key}
                            variant="contained"
                            color="primary"
                            className="category-button"
                            onClick={() => handleCategoryClick(key)}
                        >
                            {key.replace('_', ' ').toUpperCase()}
                        </Button>
                    ))}
                </Box>
                <Box className="data-container" id="pdf-content">
                    <Box className="message-container">
                        <Typography variant="h6">{message}</Typography>
                    </Box>
                    {selectedCategory && data[selectedCategory] && (
                        <Grid container spacing={3}>
                            <Grid item xs={12}>
                                <Paper className="table-paper">
                                    <Typography variant="h6" className="table-title">
                                        {selectedCategory.replace('_', ' ').toUpperCase()}
                                    </Typography>
                                    <TableContainer className="table-container">
                                        <Table>
                                            <TableHead>
                                                <TableRow>
                                                    {Object.keys(data[selectedCategory][0]).map((col) => (
                                                        <TableCell key={col} className="table-header">
                                                            {labelMapping[col] || col.replace('_', ' ').toUpperCase()}
                                                        </TableCell>
                                                    ))}
                                                </TableRow>
                                            </TableHead>
                                            <TableBody>
                                                {data[selectedCategory].map((row, rowIndex) => (
                                                    <TableRow key={rowIndex}>
                                                        {Object.entries(row).map(([col, value], colIndex) => (
                                                            <TableCell key={colIndex} className="table-cell">{value}</TableCell>
                                                        ))}
                                                    </TableRow>
                                                ))}
                                            </TableBody>
                                        </Table>
                                    </TableContainer>
                                </Paper>
                            </Grid>
                        </Grid>
                    )}
                </Box>
            </Box>
        </Box>
    );
};

export default Dashboard;
