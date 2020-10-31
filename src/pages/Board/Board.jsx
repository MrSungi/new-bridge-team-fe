import React from 'react';
import AuthenticatedPageLayout from '../../components/AuthenticatedPageLayout/AuthenticatedPageLayout';
import Columns from './Columns/Columns';

const Board = ({ board }) => (
  <>
    <AuthenticatedPageLayout>
      <h4>This is board page</h4>
      <Columns board={board} />
    </AuthenticatedPageLayout>
  </>
);

export default Board;
