export const ErrorPage = ({ statusCode }) => {
  return <div>Error {statusCode}</div>;
};

export default ErrorPage;

ErrorPage.getInitialProps = (ctx) => {
  return { statusCode: ctx.res?.statusCode };
};
