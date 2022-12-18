import Layout from '../../layout';

function Main() {
  return <div>Main page</div>;
}

Main.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
export default Main;
