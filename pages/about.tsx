/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
*/

import Head from 'next/head';
import Layout, { siteTitle, siteDescription } from '../components/layout';

export default function About(): JSX.Element {
  return (
    <Layout>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content={siteDescription} />

        <link rel="icon" href="/favicon.ico" />

        <title>{siteTitle}</title>
      </Head>
    </Layout>
  );
}
