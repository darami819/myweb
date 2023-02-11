import React from 'react'
import styled from 'styled-components';

const Footer = () => {
    return (
        <div className="main-footer">
        <div className='footer-middle'>
        <div className="container">
        <div className="row">
        {/*Column 1 */}
        <div className='col-md-3 col-sm-6'>
        <h4>heihihi</h4>
        <ul className='list-unstyled'>
          <li>-dsdf</li>
          <li>-dsdf</li>
          <li>-dsdf</li>
        </ul>
        </div>

        <div className='col-md-3 col-sm-6'>
        <h4>heihihi</h4>
        <ul className='list-unstyled'>
          <li>-dsdf</li>
          <li>-dsdf</li>
          <li>-dsdf</li>
        </ul>
        </div>

        <div className='col-md-3 col-sm-6'>
        <h4>heihihi</h4>
        <ul className='list-unstyled'>
          <li>-dsdf</li>
          <li>-dsdf</li>
          <li>-dsdf</li>
        </ul>
        </div>

        <div className='col-md-3 col-sm-6'>
        <h4>heihihi</h4>
        <ul className='list-unstyled'>
          <li>-dsdf</li>
          <li>-dsdf</li>
          <li>-dsdf</li>
        </ul>
        </div>
        </div>
        {/*Footer Bottom*/}
        <div className='footer-bottom'>
          <p className='text-xs-center'>
            &copy;{new Date().getFullYear()} City Guide App - All Rights Reserved
          </p>
        </div>
        </div>
        </div>
        </div>
      );
}

export default Footer;

const FooterContainer = styled.footer`
.footer-middle{
  background: var(--mainDark);
}
`;