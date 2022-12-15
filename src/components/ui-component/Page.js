import PropTypes from 'prop-types';
import { forwardRef } from 'react';

// next
import Head from 'next/head';

// material-ui
import { Box } from '@mui/material';

// ==============================|| Page - SET TITLE & META TAGS ||============================== //

const Page = forwardRef(({ children, title = '', meta, ...other }, ref) => (
  <>
    <Head>
      <title>{`${title} | Berry - React Material Admin Dashboard Template`}</title>
      {meta}
    </Head>
    <Box ref={ref} {...other}>
      {children}
    </Box>
  </>
));

Page.propTypes = {
  children: PropTypes.node,
  meta: PropTypes.node,
  title: PropTypes.string
};

export default Page;
