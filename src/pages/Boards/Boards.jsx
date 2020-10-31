import React from 'react';
import { Link } from 'react-router-dom';
import AuthenticatedPageLayout from '../../components/AuthenticatedPageLayout/AuthenticatedPageLayout';

const Boards = () => (
  <>
    <AuthenticatedPageLayout>
      <h4>This is boards list page</h4>
      <Link to="/board">Board page</Link>
    </AuthenticatedPageLayout>
  </>
);

export default Boards;