// material-ui
import { styled } from '@mui/material/styles';
import { Card } from '@mui/material';

// project imports
import Layout from 'layout';
import Page from 'components/ui-component/Page';
import MainCard from 'components/ui-component/cards/MainCard';
import SecondaryAction from 'components/ui-component/cards/CardSecondaryAction';

// assets
import LinkIcon from '@mui/icons-material/Link';

// styles
const IFrameWrapper = styled('iframe')(({ theme }) => ({
  height: 'calc(100vh - 210px)',
  border: '1px solid',
  borderColor: theme.palette.mode === 'dark' ? theme.palette.dark.main : theme.palette.primary.light
}));

// =============================|| TABLER ICONS ||============================= //

const TablerIcons = () => (
  <Page title="Tabler Icons">
    <MainCard title="Tabler Icons" secondary={<SecondaryAction icon={<LinkIcon fontSize="small" />} link="https://tablericons.com/" />}>
      <Card sx={{ overflow: 'hidden' }}>
        <IFrameWrapper title="Tabler Icons" width="100%" src="https://tablericons.com/" />
      </Card>
    </MainCard>
  </Page>
);

TablerIcons.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default TablerIcons;
