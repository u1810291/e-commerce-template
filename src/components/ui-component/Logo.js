// material-ui
import { useTheme } from '@mui/material/styles';

/**
 * if you want to use image instead of <svg> uncomment following.
 *
 * import logoDark from 'assets/images/logo-dark.svg';
 * import logo from 'assets/images/logo.svg';
 *
 */

// ==============================|| LOGO SVG ||============================== //

const Logo = () => {
  const theme = useTheme();

  return (
    /**
     * if you want to use image instead of svg uncomment following, and comment out <svg> element.
     *
     * <img src={theme.palette.mode === 'dark' ? logoDark : logo} alt="Berry" width="100" />
     *
     */
    <svg width="58" height="72" viewBox="0 0 58 72" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M42.8719 24.9979L55.9571 38.0748C57.3193 39.4361 58 41.228 58 43.0186C58 44.8092 57.3193 46.6012 55.9571 47.9625L33.947 69.9584C32.5849 71.3197 30.7918 72 29 72C27.2082 72 25.4151 71.3197 24.053 69.9584L2.04287 47.9625C0.68073 46.6012 0 44.8092 0 43.0186C0 41.228 0.68073 39.4361 2.04287 38.0748L18.4476 21.6806C18.7537 23.0025 19.0171 24.3346 19.2437 25.6701L4.43664 40.4677C3.73622 41.1677 3.38602 42.0928 3.38602 43.0186C3.38602 43.9445 3.73622 44.8696 4.43664 45.5696L16.5412 57.6663C16.8798 55.6105 17.4282 53.5459 18.1863 51.4725C19.26 51.9784 20.4036 52.3277 21.5819 52.5075L21.5771 52.5055C20.5231 52.2335 19.5559 51.8306 18.6757 51.2968C17.8606 50.9251 17.1581 50.2964 16.5683 49.4099C19.0585 47.3276 20.2509 43.2153 20.1451 37.073C20.6324 37.8299 21.1583 38.5618 21.7217 39.2658C21.0769 38.1406 20.536 36.9604 20.1037 35.7416L20.1023 35.7083C20.1023 35.7083 19.522 33.7299 18.3608 29.7722C18.5617 28.5792 19.3082 27.6255 20.6005 26.912C19.9367 22.5148 18.9634 18.5443 17.6807 15.0004C16.4292 15.3707 15.4064 15.1177 14.6123 14.2414C9.96733 17.0562 5.87819 19.7157 4.32669 21.0545C3.48985 19.8567 2.24309 17.885 1.69131 16.5787C4.78277 15.2737 8.76943 13.2403 12.8762 10.9349C12.45 10.2248 12.2091 9.63943 13.2848 9.06223C12.7045 7.5938 14.6435 6.93114 15.2401 7.67587C14.9442 5.78284 17.6698 5.64719 17.847 6.47738C17.304 4.90246 19.7209 4.10144 20.7878 6.24067C24.3075 4.03497 27.5245 1.8469 29.8857 0C30.7605 1.11642 31.8797 3.16273 32.5211 4.47584C30.8956 5.07135 27.5659 6.79142 23.7279 8.93268C24.6095 8.56032 25.3995 8.23814 26.0979 7.96752L36.7432 9.95957L53.4039 19.7564L52.2487 19.54C52.2922 19.7279 52.4557 20.1538 52.4931 20.4529C52.6098 21.376 52.6858 22.3073 52.7218 23.2413C52.9003 23.3511 53.0476 23.6407 53.0761 23.8625C53.1039 24.0843 53.0788 24.1827 53.0306 24.3143C53.2159 26.6543 53.2627 30.363 51.7051 29.8211C50.5153 29.3619 51.5897 28.4856 51.906 26.6522C52.0261 25.957 52.2419 25.217 52.1456 24.414C52.0702 24.3 52.0248 24.2193 51.9969 23.9982C51.9691 23.7771 52.0417 23.4536 52.1904 23.3037C52.1571 22.3765 52.0818 21.4466 51.965 20.5194C51.9189 20.1694 51.8286 19.6336 51.623 19.4281L42.5515 17.725L42.3133 22.5196C39.699 22.0713 37.1566 21.4317 34.6848 20.6035C37.538 21.8501 40.0186 22.7556 42.1267 23.3199C41.9502 24.1305 41.6726 25.0759 41.2932 26.1571C44.2225 26.309 42.0561 30.9246 39.7078 30.8832C38.2038 33.9998 35.337 36.1499 32.0541 36.7983C32.8889 38.2132 33.2351 39.8078 33.0905 41.5834C33.2439 43.0057 33.4461 44.3195 33.6973 45.5268L33.4719 42.4096C35.2325 42.1864 37.1735 41.8778 39.3359 41.4749C39.2313 39.9203 39.7797 38.5991 41.8633 38.0531C43.6951 37.8822 44.5211 38.1107 44.3412 38.7381C47.1931 38.2844 47.8576 39.0847 46.3339 41.1378C47.7232 41.7889 47.8155 42.4272 46.6115 43.0525C47.7442 43.5606 47.5474 44.0849 46.0217 44.6268C46.0129 46.2119 45.1991 46.5307 43.5791 45.5845C42.1504 45.5397 41.4357 45.518 41.4357 45.518C38.6762 45.9487 36.1602 46.2349 33.8873 46.3787C34.2857 48.0527 34.7866 49.5008 35.3906 50.7216C35.2583 50.7718 35.1259 50.8207 34.9949 50.8688L37.1688 58.0984L37.8658 61.255L53.5634 45.5675C54.2638 44.8676 54.614 43.9424 54.614 43.0166C54.614 42.0908 54.2638 41.1656 53.5634 40.4657L43.0463 29.9574C43.7671 28.8525 44.2082 27.3135 43.4712 26.1442C43.2777 25.837 43.028 25.5989 42.7422 25.4225C42.7863 25.2808 42.8298 25.1397 42.8719 24.9979ZM23.3118 64.4333L23.4557 64.5771C23.8867 64.2448 24.2654 63.9185 24.5919 63.5998C24.8186 64.4503 24.9407 65.2886 24.976 66.0957L26.4467 67.5655C27.1472 68.2655 28.0729 68.6155 28.9993 68.6155C29.9257 68.6155 30.8515 68.2655 31.5519 67.5655L31.5858 67.5316C31.4487 66.8113 31.3042 66.0218 31.1528 65.1631L27.87 59.8429C27.982 59.6143 27.2707 60.2295 27.251 60.2532L25.1484 62.3694C24.5084 63.1623 23.8962 63.85 23.3118 64.4333ZM22.2341 9.77372C23.1978 10.4764 22.7472 11.622 20.8821 13.2098C21.8011 15.7709 22.7078 19.0835 23.603 23.1477C23.7863 23.9473 23.922 24.5808 24.0095 25.0488C23.6743 22.4165 23.3302 20.0344 22.9766 17.9033C23.2793 17.0406 23.7347 16.342 24.3428 15.8068L24.2837 15.7716L27.2564 12.0011L22.8639 9.41832C22.6556 9.53498 22.4452 9.65367 22.2341 9.77372Z"
        fill={theme.palette.primary.main}
      />
      <defs>
        <linearGradient id="paint0_linear_38_1182" x1="26.9909" y1="4.52025" x2="30.428" y2="70.4886" gradientUnits="userSpaceOnUse">
          <stop stopColor="#116EEE" />
          <stop offset="1" stopColor="#3BBCA7" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default Logo;
