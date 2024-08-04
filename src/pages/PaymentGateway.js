import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import CryptoJS from 'crypto-js';
import {
    Button,
    Container,
    Typography,
    Box,
    CircularProgress,
    Alert,
} from '@mui/material';

const PaymentGateway = () => {
    const location = useLocation();
    const [loading, setLoading] = useState(true);
    const [paymentStatus, setPaymentStatus] = useState(null);
    const [errorMessage, setErrorMessage] = useState('');

    const merchantId = '1895498';
    const accessCode = 'AVLI92JL08CL28ILLC';
    const workingKey = '6D28CCC38DCC0ADD1F01D007BAA1456F';
    const currency = 'INR';
    const redirectUrl = 'https://fundsmama.com/ccavResponseHandler.php';
    const cancelUrl = 'https://fundsmama.com/ccavResponseHandler.php';

    const {
        orderId,
        amount,
        first_name,
        sanction_executive,
        leadid,
        collection,
        loan_no,
    } = location.state;

    const getEncryptedData = () => {
        const secretKey = CryptoJS.enc.Hex.parse(CryptoJS.MD5(workingKey).toString());
        const initVector = CryptoJS.enc.Hex.parse('000102030405060708090a0b0c0d0e0f');
        const billingName = first_name;

        const data = `merchant_id=${merchantId}&order_id=${orderId}&redirect_url=${redirectUrl}&cancel_url=${cancelUrl}&amount=${amount}&currency=${currency}&language=EN&billing_name=${billingName}&billing_address=${sanction_executive + '-' + collection}&billing_city=d&billing_state=d&billing_zip=d&billing_country=India&billing_tel=1234567890&billing_email=d@gmail.com&merchant_param1=${leadid}&merchant_param2=${loan_no}&merchant_param3=${sanction_executive}&integration_type=iframe_normal`;

        const encrypted = CryptoJS.AES.encrypt(data, secretKey, {
            iv: initVector,
            mode: CryptoJS.mode.CBC,
            padding: CryptoJS.pad.Pkcs7,
        });

        return encrypted.ciphertext.toString(CryptoJS.enc.Hex);
    };

    const getPaymentURL = () => {
        const encryptedData = getEncryptedData();
        return `https://secure.ccavenue.com/transaction.do?command=initiateTransaction&encRequest=${encryptedData}&access_code=${accessCode}`;
    };

    const handlePaymentResponse = (status, urlParams) => {
        let message = '';
        switch (status) {
            case 'success':
                message = 'Your transaction is successful.';
                break;
            case 'aborted':
                message = 'Your transaction was aborted. Please try again.';
                break;
            case 'failure':
                message = 'Your transaction has been declined. Please try again or contact support.';
                break;
            case 'security':
                message = 'Security Error. Illegal access detected.';
                break;
            default:
                message = 'An unknown error occurred. Please contact support.';
        }
        setPaymentStatus({ status, message });
        sendPaymentStatusToServer(status, urlParams);
    };

    const sendPaymentStatusToServer = async (status, urlParams) => {
        try {
            const response = await fetch('https://tech.girdharfin.cloud/api/v1/insert-logs/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Auth': 'ZnVuZHNtYW1hMjAyMzA0MTk=',
                },
                body: JSON.stringify({
                    status,
                    response_data: urlParams,
                    lead_id: leadid,
                    loan_no: orderId,
                    method_id: 2,
                }),
            });
            const data = await response.json();
            console.log('Server response:', data);
        } catch (error) {
            console.error('Error sending payment status to server:', error);
        }
    };

    const parseQueryParams = (url) => {
        const params = {};
        const queryString = url.split('?')[1];
        if (queryString) {
            queryString.split('&').forEach((param) => {
                const [key, value] = param.split('=');
                params[key] = decodeURIComponent(value);
            });
        }
        return params;
    };

    useEffect(() => {
        const handleIframeLoad = (event) => {
            const url = event.target.src;
            if (url.includes('PayEmi.php')) {
                const urlParams = parseQueryParams(url);
                const status = urlParams.status;
                handlePaymentResponse(status, urlParams);
            }
        };

        const iframe = document.getElementById('payment-iframe');
        iframe.onload = handleIframeLoad;

        return () => {
            iframe.onload = null;
        };
    }, []);

    return (
        <Container>
            {loading && (
                <Box display="flex" justifyContent="center" mt={5}>
                    <CircularProgress />
                </Box>
            )}
            <Box display={loading ? 'none' : 'block'}>
                {paymentStatus ? (
                    <Alert severity={paymentStatus.status === 'success' ? 'success' : 'error'}>
                        {paymentStatus.message}
                    </Alert>
                ) : (
                    <iframe
                        id="payment-iframe"
                        src={getPaymentURL()}
                        style={{ width: '100%', height: '600px', border: 'none' }}
                        title="Payment Gateway"
                    />
                )}
            </Box>
        </Container>
    );
};

export default PaymentGateway;
