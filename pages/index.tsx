import Link from 'next/link';
import * as GovUK from 'govuk-react';
import Layout from '../components/layout';

export default function Home() {
  return (
    <Layout>
      <GovUK.H2>Welcome to the govuk-react example application.</GovUK.H2>
      <GovUK.Paragraph>Click Start to continue.</GovUK.Paragraph>
    </ Layout>
  );
}