import Link from 'next/link';
import React from 'react';
import * as GovUK from 'govuk-react';

export default function Layout({ children }: {
  children: React.ReactNode
  home?: boolean
}) {
  return (
    <>
    <GovUK.GlobalStyle />
      <GovUK.Page
      header={
        <GovUK.TopNav
        serviceTitle={
          <GovUK.TopNav.Anchor as={Link} href="/">
            React
          </GovUK.TopNav.Anchor>
        }
        >
          <GovUK.TopNav.NavLink as={Link} href="/">
          Home
          </GovUK.TopNav.NavLink>
        </GovUK.TopNav>
      }
      children={children}
      footer={<GovUK.Footer />}
    />
    </>
    
  );
}