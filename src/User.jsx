import React, { Component } from 'react'
import { Table, Container } from 'react-bootstrap';
import Alert from 'react-bootstrap/Alert';

export default class User extends Component {


    constructor() {
        super()

        this.state = {
            posts: []
        }
    }



    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then((res) => res.json())
            .then(data => {
                this.setState({
                    posts: data
                })
            })
    }

    render() {
        return (
            <>
                <Container className='mt-5'>
                    {this.state.posts.length > 0 ? (
                        <Table striped bordered hover>
                            <thead>
                                <tr>
                                    <th>id</th>
                                    <th>title</th>
                                    <th>body</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.state.posts.map((post) => (
                                    <tr>
                                        <td>{post.id}</td>
                                        <td>{post.title}</td>
                                        <td>{post.body}</td>
                                    </tr>
                                ))}
                            </tbody>

                        </Table>
                    ) : (
                        <Alert variant='info'>
                            Loading...
                        </Alert>
                    )}

                </Container>


            </>
        )
    }
}
