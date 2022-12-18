import React from 'react';
import { useDispatch, useSelector } from '../../store';
import Layout from '../../layout';
import { getOrders } from '../../store/slices/customer';
import TableList from '../../components/ui-component/TableList';

function ResultsPage() {
  const { orders } = useSelector((state) => state.customer);
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(getOrders());
  }, [dispatch]);

  return <TableList data={orders} />;
}

ResultsPage.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
export default ResultsPage;
