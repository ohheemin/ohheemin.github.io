import React, { useRef, useState } from 'react';
import '../assets/styles/Contact.scss';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import TextField from '@mui/material/TextField';

const CONTACT_EMAIL = 'heemin0617@gmail.com';

// ── Make the form actually deliver email (no mail app needed) ──────────────
// 1. Go to https://web3forms.com, enter heemin0617@gmail.com, and copy the
//    free Access Key they email you.
// 2. Paste it below. Every submission is then emailed straight to your inbox.
const WEB3FORMS_ACCESS_KEY = '580ab7a4-1c0c-4a47-82a5-5330be838cb4';

function Contact() {

  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [message, setMessage] = useState<string>('');

  const [nameError, setNameError] = useState<boolean>(false);
  const [emailError, setEmailError] = useState<boolean>(false);
  const [messageError, setMessageError] = useState<boolean>(false);

  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');

  const form = useRef();

  const sendEmail = async (e: any) => {
    e.preventDefault();

    const nErr = name === '';
    const eErr = email === '';
    const mErr = message === '';
    setNameError(nErr);
    setEmailError(eErr);
    setMessageError(mErr);
    if (nErr || eErr || mErr) return;

    setStatus('sending');
    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          subject: `Portfolio contact from ${name}`,
          from_name: name,
          name,
          email,
          message,
        }),
      });
      const data = await res.json();
      if (data.success) {
        setStatus('sent');
        setName('');
        setEmail('');
        setMessage('');
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <div id="contact">
      <div className="items-container">
        <div className="contact_wrapper">
          <h1>Get in Touch</h1>
          <p>Interested in robotics, autonomous driving, or Physical AI research? I'm always open to new collaborations and opportunities. Send a message below, or reach me directly at <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.</p>
          <Box
            ref={form}
            component="form"
            noValidate
            autoComplete="off"
            className='contact-form'
          >
            <div className='form-flex'>
              <TextField
                required
                id="contact-name"
                placeholder="Your name"
                inputProps={{ 'aria-label': 'Your name' }}
                value={name}
                onChange={(e) => setName(e.target.value)}
                error={nameError}
                helperText={nameError ? "Please enter your name" : ""}
              />
              <TextField
                required
                id="contact-email"
                placeholder="Email or phone"
                inputProps={{ 'aria-label': 'Email or phone' }}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                error={emailError}
                helperText={emailError ? "Please enter your email or phone number" : ""}
              />
            </div>
            <TextField
              required
              id="contact-message"
              placeholder="Your message"
              inputProps={{ 'aria-label': 'Your message' }}
              multiline
              rows={10}
              className="body-form"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              error={messageError}
              helperText={messageError ? "Please enter the message" : ""}
            />
            <div className="form-footer">
              {status === 'sent' && <span className="form-status ok">✓ Thanks — your message was sent!</span>}
              {status === 'error' && <span className="form-status err">Something went wrong. Please email me directly.</span>}
              <Button variant="contained" endIcon={<SendIcon />} onClick={sendEmail} disabled={status === 'sending'}>
                {status === 'sending' ? 'Sending…' : 'Send'}
              </Button>
            </div>
          </Box>
        </div>
      </div>
    </div>
  );
}

export default Contact;
