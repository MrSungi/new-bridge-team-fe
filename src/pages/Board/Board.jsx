import React from 'react';
import AuthenticatedPageLayout from '../../components/AuthenticatedPageLayout/AuthenticatedPageLayout';
import Columns from './Columns/Columns';

const Board = ({ columns }) => (
  <>
    <AuthenticatedPageLayout>
      <h4>This is board page</h4>
      <Columns columns={columns} />
    </AuthenticatedPageLayout>
  </>
);

export default Board;
