import Link from 'next/link';
import React from 'react';
import * as GovUK from 'govuk-react';

const name = 'Carlo';
export const siteTitle = 'Next.js Sample Website';

export default function Layout({ children, home }: {
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