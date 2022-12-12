import { Container, Text } from '@nextui-org/react'
import Head from 'next/head'
import React from 'react'
import { Col, Row } from 'react-bootstrap'

export default function Footer() {
  return (
    <footer className='mt-5 pt-5'>
      <div className='border-top py-4'>
        <Container>
          <div className='inner-footer'>
            <div className='d-flex footer-links'>
              <a className='mx-2'><Text size="$xs">Contact Us</Text></a>
              <a className='mx-2'><Text size="$xs">Privacy Policy</Text></a>
              <a className='mx-2'><Text size="$xs">Terms & Condition</Text></a>
              <a className='mx-2'><Text size="$xs">Help</Text></a>
            </div>
            <div>
              <Text size="$xs">Copyright © 2021 Rapidigital Services Private Limited. All Rights Reserved.</Text>
            </div>
          </div>
        </Container>
      </div>
    </footer>
  )
}
