import React, {Component} from 'react';
import {Card, CardTitle} from 'material-ui/Card';
import {Table, TableBody, TableFooter, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';

const styles = {
  propContainer: {
    width: 200,
    overflow: 'hidden',
    margin: '20px auto 0',
  }
};

const PostList = ({posts}) => {

  return (
      <div className="container post-list">
          <Table fixedHeader={true} height={500}>
            <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
              <TableRow>
                <TableHeaderColumn colSpan="3" style={{textAlign: 'center'}}>
                  Posts List
                </TableHeaderColumn>
              </TableRow>
              <TableRow>
                <TableHeaderColumn style={{width: '10px'}}>ID</TableHeaderColumn>
                <TableHeaderColumn>Title</TableHeaderColumn>
                <TableHeaderColumn>Body</TableHeaderColumn>
              </TableRow>
            </TableHeader>
            <TableBody displayRowCheckbox={false}>
              {posts.map(post =>
              <TableRow>
                <TableRowColumn style={{width: '10px'}}>{post.id}</TableRowColumn>
                <TableRowColumn>{post.title}</TableRowColumn>
                <TableRowColumn>{post.body}</TableRowColumn>
              </TableRow>
              )}
            </TableBody>
          </Table>
      </div>
  );
}

export default PostList;
