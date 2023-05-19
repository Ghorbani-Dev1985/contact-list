const PostPage = (props) => {
    const id = props.match.params.id || 1;
    return ( 
        <div>
            <h2>جزییات پست - شماره پست : {id}</h2>
            <div>{JSON.stringify(props.match.params)}</div>
        </div>
     );
}

export default PostPage ;