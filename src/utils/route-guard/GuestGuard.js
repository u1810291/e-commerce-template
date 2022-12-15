import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { useRouter } from 'next/router';

// project imports
import useAuth from 'hooks/useAuth';
import { DASHBOARD_PATH } from 'config';
import Loader from 'components/ui-component/Loader';

// ==============================|| GUEST GUARD ||============================== //

/**
 * Guest guard for routes having no auth required
 * @param {PropTypes.node} children children element/node
 */

const GuestGuard = ({ children }) => {
  const { isLoggedIn } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (isLoggedIn) {
      router.push(DASHBOARD_PATH);
    }
    // eslint-disable-next-line
  }, [isLoggedIn]);

  if (isLoggedIn) return <Loader />;

  return children;
};

GuestGuard.propTypes = {
  children: PropTypes.node
};

export default GuestGuard;
