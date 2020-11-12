import React, { useEffect } from 'react';
import { Container, Typography, Grid } from '@material-ui/core';
import AuthenticatedPageLayout from '../../components/AuthenticatedPageLayout/AuthenticatedPageLayout';
import BoardListItem from '../../components/BoardListItem';

export default function Boards({ boards, isLoading, fetchBoards }) {
  useEffect(() => {
    fetchBoards();
  }, [fetchBoards]);

  return (
    <AuthenticatedPageLayout>
      <div className="board-list">
        <Container maxWidth="md">
          <Typography variant="h3" aling="center" color="textPrimary">
            Boards list
          </Typography>

          {isLoading ? (
            <Typography>Loading...</Typography>
          ) : (
            <Grid container spacing={4}>
              {boards.map(boardListItem => (
                <Grid item key={boardListItem.id} xs={12} sm={6} md={4}>
                  <BoardListItem key={boardListItem.id} boardItem={boardListItem} />
                </Grid>
              ))}
            </Grid>
          )}
        </Container>
      </div>
    </AuthenticatedPageLayout>
  );
}
