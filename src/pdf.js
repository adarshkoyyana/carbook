import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { TextField, Button, Typography, CircularProgress, Container, Box, Alert } from '@mui/material';

const App = () => {
  const [id, setId] = useState('');
  const [loading, setLoading] = useState(false);
  const [pdfUrl, setPdfUrl] = useState('');
  const [error, setError] = useState('');

  const handleIdChange = (e) => {
    setId(e.target.value);
  };

  const generatePDF = async () => {
    setLoading(true);
    setError('');
    try {
      const response = await axios.get(`http://localhost:5000/generate-pdf/${id}`, {
        responseType: 'blob',
      });
      const pdfBlob = new Blob([response.data], { type: 'application/pdf' });
      const pdfUrl = URL.createObjectURL(pdfBlob);
      setPdfUrl(pdfUrl);
    } catch (error) {
      setError('Error generating PDF. Please try again.');
      console.error('Error generating PDF:', error);
    } finally {
      setLoading(false);
    }
  };

  // Clear PDF URL on component unmount
  useEffect(() => {
    return () => {
      if (pdfUrl) {
        URL.revokeObjectURL(pdfUrl);
      }
    };
  }, [pdfUrl]);

  return (
    <Container maxWidth="sm" style={{ textAlign: 'center', marginTop: '50px' }}>
      <Typography variant="h4" gutterBottom>
        Generate PDF
      </Typography>
      <TextField
        id="id"
        label="Enter ID"
        variant="outlined"
        value={id}
        onChange={handleIdChange}
        fullWidth
        style={{ margin: '20px 0' }}
      />
      <Button
        variant="contained"
        color="primary"
        onClick={generatePDF}
        disabled={loading || !id}
        fullWidth
      >
        {loading ? <CircularProgress size={24} color="inherit" /> : 'Generate PDF'}
      </Button>
      {pdfUrl && (
        <Box mt={4}>
          <Typography variant="h6" gutterBottom>
            Download PDF:
          </Typography>
          <Button variant="outlined" color="primary" href={pdfUrl} download={`Report_${id}.pdf`}>
            Download PDF
          </Button>
        </Box>
      )}
      {error && <Alert severity="error">{error}</Alert>}
    </Container>
  );
};

export default App;